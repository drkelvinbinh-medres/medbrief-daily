"""
AUTOMATED MEDICAL CURATION ENGINE (Hệ thống Thu thập & Xử lý Y văn Tự động)
Chuyên ngành: Nội tiết - Chuyển hóa & Đái tháo đường (Endocrinology & Metabolism)
Nguồn: The Lancet Diabetes & Endo, Diabetes Care, JCEM, Endocrine Reviews, Thyroid, Diabetologia, NEJM, JAMA.
Tích hợp: PubMed API (E-utilities) / RSS & Gemini API (Structured Extraction)
"""

import json
import os
import re
from typing import Dict, List, Any, Optional

# ==============================================================================
# 1. DANH MỤC TẠP CHÍ ƯU TIÊN & BẢNG MÀU PASTEL NHẬN DIỆN
# ==============================================================================
PRIORITY_JOURNALS = {
    "Lancet Diabetes Endocrinol": {
        "fullName": "The Lancet Diabetes & Endocrinology",
        "issn": "2213-8587",
        "badgeSlug": "lancet-endo",
        "categoryDefault": "diabetes_obesity",
        "pastelColorLight": {"bg": "#FFE4E6", "text": "#9F1239", "dot": "#F43F5E"},
        "pastelColorDark": {"bg": "rgba(225, 29, 72, 0.16)", "text": "#FDA4AF", "dot": "#FB7185"},
        "rssFeedUrl": "https://www.thelancet.com/rssfeed/landia_current.xml"
    },
    "Diabetes Care": {
        "fullName": "Diabetes Care (ADA)",
        "issn": "0149-5992",
        "badgeSlug": "diabetes-care",
        "categoryDefault": "diabetes_obesity",
        "pastelColorLight": {"bg": "#E0F2FE", "text": "#0369A1", "dot": "#0284C7"},
        "pastelColorDark": {"bg": "rgba(14, 165, 233, 0.16)", "text": "#7DD3FC", "dot": "#38BDF8"},
        "rssFeedUrl": "https://diabetesjournals.org/care/rss/current.xml"
    },
    "J Clin Endocrinol Metab": {
        "fullName": "JCEM (Endocrine Society)",
        "issn": "0021-972X",
        "badgeSlug": "jcem",
        "categoryDefault": "general_endo",
        "pastelColorLight": {"bg": "#EDE9FE", "text": "#6D28D9", "dot": "#8B5CF6"},
        "pastelColorDark": {"bg": "rgba(139, 92, 246, 0.16)", "text": "#C4B5FD", "dot": "#A78BFA"},
        "rssFeedUrl": "https://academic.oup.com/rss/site_5319/advanceAccess_5319.xml"
    },
    "Endocr Rev": {
        "fullName": "Endocrine Reviews",
        "issn": "0163-769X",
        "badgeSlug": "endo-rev",
        "categoryDefault": "general_endo",
        "pastelColorLight": {"bg": "#F3E8FF", "text": "#7E22CE", "dot": "#A855F7"},
        "pastelColorDark": {"bg": "rgba(168, 85, 247, 0.16)", "text": "#D8B4FE", "dot": "#C084FC"},
        "rssFeedUrl": "https://academic.oup.com/rss/site_5318/advanceAccess_5318.xml"
    },
    "Thyroid": {
        "fullName": "Thyroid (ATA)",
        "issn": "1050-7256",
        "badgeSlug": "thyroid",
        "categoryDefault": "thyroid",
        "pastelColorLight": {"bg": "#CCFBF1", "text": "#0F766E", "dot": "#14B8A6"},
        "pastelColorDark": {"bg": "rgba(20, 184, 166, 0.16)", "text": "#5EEAD4", "dot": "#2DD4BF"},
        "rssFeedUrl": "https://www.liebertpub.com/action/showFeed?jc=thy&type=etoc&feed=rss"
    },
    "Diabetologia": {
        "fullName": "Diabetologia (EASD)",
        "issn": "0012-186X",
        "badgeSlug": "diabetologia",
        "categoryDefault": "diabetes_obesity",
        "pastelColorLight": {"bg": "#FEF3C7", "text": "#B45309", "dot": "#F59E0B"},
        "pastelColorDark": {"bg": "rgba(245, 158, 11, 0.16)", "text": "#FCD34D", "dot": "#FBBF24"},
        "rssFeedUrl": "https://link.springer.com/search.rss?facet-journal-id=125"
    },
    "N Engl J Med": {
        "fullName": "NEJM (General Medical Landmark Trials)",
        "issn": "0028-4793",
        "badgeSlug": "nejm",
        "categoryDefault": "landmark_trials",
        "pastelColorLight": {"bg": "#FCE7F3", "text": "#831843", "dot": "#DB2777"},
        "pastelColorDark": {"bg": "rgba(219, 39, 119, 0.16)", "text": "#F472B6", "dot": "#EC4899"},
        "rssFeedUrl": "https://www.nejm.org/action/showFeed?jc=nejm&type=etoc&feed=rss"
    },
    "Lancet / JAMA": {
        "fullName": "The Lancet & JAMA (Endocrinology)",
        "issn": "0140-6736 / 0098-7484",
        "badgeSlug": "jama-lancet",
        "categoryDefault": "landmark_trials",
        "pastelColorLight": {"bg": "#DCFCE7", "text": "#15803D", "dot": "#22C55E"},
        "pastelColorDark": {"bg": "rgba(34, 197, 94, 0.16)", "text": "#86EFAC", "dot": "#4ADE80"},
        "rssFeedUrl": "https://jamanetwork.com/rss/site_67/mostRead.xml"
    }
}

# ==============================================================================
# 2. CHUYÊN MỤC PHÂN LOẠI NỘI TIẾT TỰ ĐỘNG
# ==============================================================================
CATEGORIES = {
    "diabetes_obesity": {
        "nameVI": "Đái tháo đường & Béo phì",
        "nameEN": "Diabetes & Obesity",
        "keywords": ["diabetes", "t2d", "t1d", "obesity", "tirzepatide", "semaglutide", "glp-1", "sglt2", "insulin", "cgm", "incretin"]
    },
    "thyroid": {
        "nameVI": "Tuyến giáp",
        "nameEN": "Thyroid Disorders",
        "keywords": ["thyroid", "nodule", "papillary", "carcinoma", "tsh", "levothyroxine", "radioiodine", "hashimoto", "graves"]
    },
    "general_endo": {
        "nameVI": "Nội tiết chung / Thượng thận / Xương",
        "nameEN": "General Endo / Adrenal / Bone",
        "keywords": ["adrenal", "cortisol", "osteoporosis", "cushing", "addison", "pituitary", "calcium", "parathyroid", "pcos"]
    },
    "landmark_trials": {
        "nameVI": "Thử nghiệm lâm sàng lớn (NEJM/Lancet)",
        "nameEN": "Landmark Clinical Trials",
        "keywords": ["phase 3", "randomized", "double-blind", "placebo-controlled", "nejm", "lancet", "jama", "mortality", "cvot"]
    }
}

# ==============================================================================
# 3. PUBMED QUERY BUILDER CHO CHUYÊN NGÀNH NỘI TIẾT
# ==============================================================================
def build_pubmed_search_query() -> str:
    """
    Xây dựng chuỗi truy vấn PubMed E-utilities tối ưu chỉ lấy bài báo chất lượng cao
    từ các tạp chí mục tiêu trong vòng 30 ngày gần nhất.
    """
    journals_filter = " OR ".join([
        f'"{j}"[Journal]' for j in [
            "Lancet Diabetes Endocrinol", "Diabetes Care", "J Clin Endocrinol Metab",
            "Endocr Rev", "Thyroid", "Diabetologia", "N Engl J Med", "Lancet", "JAMA"
        ]
    ])
    
    topics_filter = (
        '("diabetes"[Title/Abstract] OR "obesity"[Title/Abstract] OR "thyroid"[Title/Abstract] '
        'OR "adrenal"[Title/Abstract] OR "pituitary"[Title/Abstract] OR "osteoporosis"[Title/Abstract] '
        'OR "incretin"[Title/Abstract] OR "GLP-1"[Title/Abstract] OR "SGLT2"[Title/Abstract])'
    )
    
    study_type_filter = '(Clinical Trial[ptyp] OR Practice Guideline[ptyp] OR Review[ptyp] OR Meta-Analysis[ptyp])'
    
    query = f"({journals_filter}) AND ({topics_filter}) AND ({study_type_filter}) AND (\"last 30 days\"[dp])"
    return query

# ==============================================================================
# 4. GEMINI API SYSTEM INSTRUCTION & PROMPT TEMPLATE
# ==============================================================================
GEMINI_MEDICAL_CURATION_PROMPT = """
You are a Board-Certified Endocrinology & Metabolism Specialist and Senior Medical Editor for an Evidence-Based Clinical App ("MedBrief Daily").
Your task is to analyze the following raw scientific abstract from a high-impact journal and generate a structured JSON object according to strict clinical and medical English education standards.

INPUT DATA:
- Journal: {journal_name}
- Raw Title: {article_title}
- Authors: {authors}
- DOI: {doi}
- Abstract: {abstract_text}

OUTPUT SPECIFICATION (JSON Schema):
{{
  "journal": "{journal_name}",
  "journalBadgeSlug": "one of: lancet-endo, diabetes-care, jcem, endo-rev, thyroid, diabetologia, nejm, jama-lancet",
  "category": "one of: diabetes_obesity, thyroid, general_endo, landmark_trials",
  "doi": "{doi}",
  "title": {{
    "vi": "Tiêu đề tiếng Việt chuẩn y khoa, chính xác, súc tích (tối đa 25 từ)",
    "en": "Exact English Title as published"
  }},
  "summary": {{
    "vi": "Tóm tắt 2 dòng (2 sentences) cô đọng phát hiện mấu chốt nhất cho bác sĩ trực/khám",
    "en": "2-sentence concise clinical summary"
  }},
  "keyTakeaways": [
    "Điểm cốt lõi 1 (có số liệu: HR, p-value, % cải thiện)",
    "Điểm cốt lõi 2 (thay đổi hướng dẫn/tiêu chuẩn điều trị)",
    "Điểm cốt lõi 3 (độ an toàn, tác dụng phụ hoặc đối tượng hưởng lợi)"
  ],
  "clinicalImplication": {{
    "vi": "Hướng dẫn ứng dụng cụ thể vào thực hành tại phòng khám/bệnh viện (Ví dụ: phác đồ liều khởi đầu, xét nghiệm theo dõi eGFR/TIR, cảnh báo tương tác)",
    "en": "Actionable clinical recommendation for outpatient or inpatient endocrine management"
  }},
  "clinicalDeepDive": {{
    "studyDesign": "Thiết kế nghiên cứu (e.g. Thử nghiệm pha 3b ngẫu nhiên, mù đôi, đối chứng giả dược)",
    "sampleSize": "Cỡ mẫu và thời gian theo dõi (e.g. N = 1,240 bệnh nhân, theo dõi 72 tuần)",
    "primaryEndpoint": "Tiêu chí chính (Primary Endpoint) và kết quả định lượng",
    "safetyProfile": "Hồ sơ an toàn (tần suất tác dụng phụ tiêu hóa, hạ đường huyết, ngừng thuốc)"
  }},
  "medicalEnglishMasterclass": {{
    "vocabulary": [
      {{
        "term": "Term in English",
        "phonetic": "/pronunciation/",
        "partOfSpeech": "noun / adj / verb",
        "meaningVI": "Nghĩa tiếng Việt chuẩn thuật ngữ y khoa",
        "contextSentence": "Original sentence or context from the paper demonstrating usage",
        "clinicalNote": "Ghi chú cách dùng từ trong giao tiếp và hội nghị y khoa quốc tế"
      }}
    ],
    "academicPhraseology": [
      {{
        "phrase": "Academic pattern used in Lancet/JCEM (e.g. 'Confer a statistically significant reduction in...')",
        "usageAnalysis": "Phân tích cấu trúc ngữ pháp học thuật",
        "paperWritingTemplate": "Mẫu câu ứng dụng khi bác sĩ tự viết bài báo hoặc báo cáo ca lâm sàng"
      }}
    ]
  }}
}}

CRITICAL RULES:
1. Maintain utmost scientific accuracy; do not extrapolate beyond provided data.
2. Translate medical terms accurately according to Vietnamese Endocrinology Society consensus (e.g., SGLT2i, GLP-1 RA, CGM, TIR, MASH/MASLD).
3. The Medical English section MUST feature real high-yield phrases from the abstract to empower clinicians in publishing and international literature reading.
"""

def generate_curation_prompt(article_data: Dict[str, Any]) -> str:
    """Format prompt for Gemini API"""
    return GEMINI_MEDICAL_CURATION_PROMPT.format(
        journal_name=article_data.get("journal", "High-Impact Journal"),
        article_title=article_data.get("title", ""),
        authors=article_data.get("authors", ""),
        doi=article_data.get("doi", ""),
        abstract_text=article_data.get("abstract", "")
    )

if __name__ == "__main__":
    print("=== Automated Medical Curation Engine Configuration ===")
    print(f"Loaded {len(PRIORITY_JOURNALS)} Priority Journals:")
    for key, val in PRIORITY_JOURNALS.items():
        print(f" - [{val['fullName']}] -> Badge: {val['badgeSlug']}, RSS: {val['rssFeedUrl']}")
    print("\nPubMed Target Query:")
    print(build_pubmed_search_query())
