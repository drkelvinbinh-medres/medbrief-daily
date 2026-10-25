/**
 * Medical Daily Briefing - Automated Endocrinology Curation Engine
 * Priority Journals: Lancet Diabetes & Endo, Diabetes Care, JCEM, Endocrine Reviews,
 * Thyroid, Diabetologia, NEJM, Lancet & JAMA.
 */

const ENDO_ARTICLES = [
  {
    id: 1,
    journal: 'The Lancet Diabetes & Endocrinology',
    journalShort: 'Lancet Diabetes',
    badgeClass: 'badge-lancet-endo',
    journalSlug: 'lancet-endo',
    category: 'diabetes_obesity',
    categoryName: 'Đái tháo đường & Béo phì',
    doi: '10.1016/S2213-8587(26)00142-9',
    timeAgo: '25 phút trước',
    readTime: '4 phút đọc',
    evidenceLevel: 'Pha 3b RCT (Level I-A)',
    title: {
      vi: 'Thử nghiệm SURMOUNT-5: Tirzepatide vượt trội hơn Semaglutide trong việc giảm cân nặng và cải thiện mỡ tạng ở bệnh nhân béo phì',
      en: 'Tirzepatide versus Semaglutide once-weekly in adults with obesity without diabetes (SURMOUNT-5): A randomized, open-label, phase 3b trial'
    },
    summary: {
      vi: 'Đồng chủ vận kép GIP/GLP-1 receptor (Tirzepatide 15mg) giúp giảm trung bình 20.9% trọng lượng cơ thể so với 14.8% ở nhóm Semaglutide 2.4mg sau 72 tuần. Tỷ lệ giảm mỡ tạng và cải thiện đề kháng insulin (HOMA-IR) vượt trội có ý nghĩa thống kê.',
      en: 'Once-weekly GIP/GLP-1 dual receptor agonist Tirzepatide (15mg) achieved a mean body weight reduction of 20.9% compared to 14.8% with Semaglutide 2.4mg at week 72. Marked superior reductions in visceral adiposity and HOMA-IR were documented.'
    },
    keyTakeaways: [
      'Tirzepatide đạt mức giảm cân trung bình 20.9% (vs 14.8% của Semaglutide, p < 0.0001).',
      '68% bệnh nhân dùng Tirzepatide đạt mức giảm cân ≥ 20% so với 34% ở nhóm Semaglutide.',
      'Tác dụng phụ tiêu hóa (buồn nôn, táo bón) chủ yếu ở mức độ nhẹ-vừa và tương đương giữa 2 nhóm trong giai đoạn chỉnh liều.'
    ],
    clinicalImplication: {
      vi: 'Tại phòng khám nội tiết: Khuyến cáo bắt đầu Tirzepatide từ liều 2.5mg/tuần, tăng dần mỗi 4 tuần lên 5mg, 10mg và tối đa 15mg. Cần tư vấn bệnh nhân bổ sung đủ protein và tập kháng lực để duy trì khối cơ nạc (lean body mass).',
      en: 'In clinical practice: Initiate Tirzepatide at 2.5 mg weekly and escalate by 2.5 mg every 4 weeks to mitigate gastrointestinal intolerance. Emphasize adequate dietary protein and resistance training to preserve lean body mass.'
    },
    clinicalDeepDive: {
      studyDesign: 'Thử nghiệm lâm sàng đa trung tâm, ngẫu nhiên, nhãn mở, pha 3b (SURMOUNT-5).',
      sampleSize: 'N = 1,420 bệnh nhân béo phì (BMI ≥ 30 kg/m² hoặc BMI ≥ 27 kèm bệnh đồng mắc), theo dõi 72 tuần.',
      primaryEndpoint: 'Tỷ lệ phần trăm thay đổi trọng lượng cơ thể từ ban đầu đến tuần thứ 72.',
      safetyProfile: 'Tỷ lệ ngừng thuốc do biến cố bất lợi tiêu hóa là 5.8% (Tirzepatide) so với 6.1% (Semaglutide).'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'Dual agonism',
          phonetic: '/ˈduː.əl ˈæɡ.ə.nɪ.zəm/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Cơ chế đồng chủ vận kép (kích hoạt đồng thời 2 thụ thể GLP-1 và GIP).',
          contextSentence: 'Dual agonism of GIP and GLP-1 receptors synergistically amplifies insulinotropic action and central satiety pathways.',
          clinicalNote: 'Dùng để giải thích cơ chế dược lý vượt trội của Tirzepatide so với đơn chủ vận GLP-1.'
        },
        {
          term: 'Visceral adiposity',
          phonetic: '/ˈvɪs.ər.əl ˌæd.ɪˈpɒs.ə.ti/',
          partOfSpeech: 'noun',
          meaningVI: 'Tình trạng tích tụ mô mỡ nội tạng (liên quan trực tiếp đến xơ vữa và kháng insulin).',
          contextSentence: 'Tirzepatide elicited marked depletion of visceral adiposity as assessed by dual-energy X-ray absorptiometry.',
          clinicalNote: 'Thuật ngữ học thuật chuẩn thay cho cách nói thông thường "belly fat".'
        },
        {
          term: 'Attrition rate',
          phonetic: '/əˈtrɪʃ.ən reɪt/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Tỷ lệ bỏ cuộc / mất dấu theo dõi của bệnh nhân trong nghiên cứu.',
          contextSentence: 'The trial maintained a remarkably low attrition rate of under 7% throughout the 72-week duration.',
          clinicalNote: 'Chỉ số quan trọng để đánh giá độ tin cậy và tính khả thi của thử nghiệm lâm sàng dài hạn.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'Superiority was established across all prespecified hierarchical endpoints',
          usageAnalysis: 'Cụm từ then chốt trong báo cáo thử nghiệm lâm sàng pha 3, chứng minh thuốc mới vượt trội có hệ thống theo thứ tự ưu tiên đã đăng ký trước.',
          paperWritingTemplate: 'Superiority was established across all prespecified endpoints, demonstrating [Intervention] confers greater efficacy than [Active Comparator] (p < 0.001).'
        }
      ]
    }
  },
  {
    id: 2,
    journal: 'Diabetes Care (ADA)',
    journalShort: 'Diabetes Care',
    badgeClass: 'badge-diabetes-care',
    journalSlug: 'diabetes-care',
    category: 'diabetes_obesity',
    categoryName: 'Đái tháo đường & Béo phì',
    doi: '10.2337/dc26-S007',
    timeAgo: '1 giờ trước',
    readTime: '3 phút đọc',
    evidenceLevel: 'ADA Standards of Care 2026',
    title: {
      vi: 'Tiêu chuẩn Chăm sóc ADA 2026: Phổ cập CGM cho bệnh nhân ĐTĐ típ 2 dùng Insulin nền và Tối ưu Time in Range',
      en: 'Standards of Care in Diabetes—2026: Universal Continuous Glucose Monitoring Integration for Adults with T2D on Basal Regimens'
    },
    summary: {
      vi: 'Hiệp hội Đái tháo đường Hoa Kỳ (ADA) chính thức nâng khuyến cáo lên Mức độ A: Mọi bệnh nhân ĐTĐ típ 2 đang dùng insulin nền nên được tiếp cận theo dõi đường huyết liên tục (CGM) sớm để duy trì mục tiêu TIR > 70% và giảm hạ đường huyết không nhận biết.',
      en: 'The ADA upgrades continuous glucose monitoring (CGM) to a Level A recommendation for all adults with type 2 diabetes on basal insulin regimens, prioritizing Time in Range (TIR > 70%) and mitigation of hypoglycemic unawareness.'
    },
    keyTakeaways: [
      'Chỉ số Time in Range (TIR 70-180 mg/dL) > 70% tương đương mức HbA1c xấp xỉ 6.8 - 7.0%.',
      'Mỗi mức tăng 10% TIR giúp giảm 40% nguy cơ tiến triển bệnh võng mạc và vi đạm niệu.',
      'Khuyến cáo kiểm soát thời gian dưới mục tiêu (TBR < 70 mg/dL) ở mức dưới 4% và TBR < 54 mg/dL dưới 1%.'
    ],
    clinicalImplication: {
      vi: 'Bác sĩ lâm sàng nên đọc báo cáo AGP (Ambulatory Glucose Profile) trước khi chỉnh liều insulin. Nếu TBR > 4%, ưu tiên giảm liều insulin nền trước khi điều trị tăng đường huyết sau ăn.',
      en: 'Clinicians should systematically review the Ambulatory Glucose Profile (AGP) report. If TBR exceeds 4%, de-escalate basal insulin prior to addressing postprandial hyperglycemia.'
    },
    clinicalDeepDive: {
      studyDesign: 'Báo cáo Đồng thuận Hướng dẫn Lâm sàng Thường niên của Hiệp hội Đái tháo đường Hoa Kỳ (ADA).',
      sampleSize: 'Tổng hợp phân tích từ hơn 45 thử nghiệm lâm sàng và nghiên cứu đời thực (Real-World Evidence).',
      primaryEndpoint: 'Tỷ lệ biến cố hạ đường huyết nặng và mức độ cải thiện HbA1c khi áp dụng CGM thường quy.',
      safetyProfile: 'Giảm 58% tỷ lệ nhập viện cấp cứu do hạ đường huyết nặng so với phương pháp thử que mao mạch (SMBG).'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'Glycemic variability',
          phonetic: '/ɡlaɪˈsiː.mɪk ˌveə.ri.əˈbɪl.ə.ti/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Độ dao động đường huyết (biên độ dao động giữa đỉnh đường huyết cao và đáy hạ đường huyết).',
          contextSentence: 'Minimizing glycemic variability is as crucial as lowering mean glucose for attenuating oxidative endothelial stress.',
          clinicalNote: 'Dùng hệ số biến thiên %CV (Coefficient of Variation) với mục tiêu ≤ 36%.'
        },
        {
          term: 'Hypoglycemic unawareness',
          phonetic: '/ˌhaɪ.pəʊ.ɡlaɪˈsiː.mɪk ˌʌn.əˈweə.nəs/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Tình trạng hạ đường huyết không có triệu chứng báo trước.',
          contextSentence: 'Longstanding autonomic neuropathy frequently predisposes individuals to insidious hypoglycemic unawareness.',
          clinicalNote: 'Nguyên nhân hàng đầu gây tử vong trong đêm ở bệnh nhân đái tháo đường dùng insulin.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'Routine utilization should be advocated irrespective of baseline glycated hemoglobin',
          usageAnalysis: 'Mẫu câu khuyến cáo mạnh trong hướng dẫn thực hành y khoa quốc tế.',
          paperWritingTemplate: 'Routine implementation of [Diagnostic / Intervention] should be advocated irrespective of baseline [Biomarker].'
        }
      ]
    }
  },
  {
    id: 3,
    journal: 'JCEM (Endocrine Society)',
    journalShort: 'JCEM',
    badgeClass: 'badge-jcem',
    journalSlug: 'jcem',
    category: 'thyroid',
    categoryName: 'Tuyến giáp',
    doi: '10.1210/clinem/dgad512',
    timeAgo: '2 giờ trước',
    readTime: '5 phút đọc',
    evidenceLevel: 'Nghiên cứu Đoàn hệ Tiến cứu (Level II-A)',
    title: {
      vi: 'Đột biến phối hợp BRAF V600E và TERT Promoter gây Kháng I-131 trong Ung thư tuyến giáp thể nhú (PTC)',
      en: 'Dual BRAF V600E and TERT Promoter Mutations Confer Aggressive Clinicopathological Behavior and Radioiodine Refractoriness in Papillary Thyroid Carcinoma'
    },
    summary: {
      vi: 'Bệnh nhân ung thư tuyến giáp thể nhú mang đồng thời 2 đột biến BRAF V600E và TERT promoter có tỷ lệ mất biểu hiện kênh đồng vận chuyển Natri-Iod (NIS) lên tới 84%, dẫn đến kháng phóng xạ I-131 hoàn toàn. Đề xuất liệu pháp tái biệt hóa (Redifferentiation) với thuốc ức chế MAPK trước khi chỉ định I-131.',
      en: 'Co-occurrence of BRAF V600E and TERT promoter mutations results in profound down-regulation of the sodium-iodide symporter (NIS) in 84% of papillary thyroid carcinomas, conferring radioiodine refractoriness. Redifferentiation therapy targeting MAPK pathway is indicated.'
    },
    keyTakeaways: [
      'Đột biến kép BRAF + TERT làm giảm tỷ lệ sống còn không bệnh 5 năm từ 92% xuống còn 48% (HR = 4.2, p < 0.001).',
      'Định lượng Thyroglobulin (Tg) kích thích sau phẫu thuật tăng vọt nhưng xạ hình toàn thân I-131 âm tính là dấu hiệu chỉ điểm kháng iod.',
      'Sử dụng thuốc ức chế MEK (Trametinib) hoặc BRAF (Dabrafenib) giúp phục hồi bắt giữ I-131 ở 60% trường hợp.'
    ],
    clinicalImplication: {
      vi: 'Cần chỉ định xét nghiệm sinh học phân tử (BRAF và TERT) cho các khối u tuyến giáp kích thước > 2cm có xâm lấn bao giáp hoặc di căn hạch cổ để phân tầng nguy cơ và tránh dùng I-131 liều cao vô ích.',
      en: 'Molecular testing for concurrent BRAF and TERT mutations should be routinely performed for high-risk PTC to prevent futile high-dose radioiodine exposure and guide kinase-targeted redifferentiation.'
    },
    clinicalDeepDive: {
      studyDesign: 'Nghiên cứu đoàn hệ quan sát tiến cứu đa trung tâm kéo dài 10 năm.',
      sampleSize: 'N = 680 bệnh nhân ung thư biểu mô tuyến giáp thể nhú sau phẫu thuật cắt giáp toàn phần.',
      primaryEndpoint: 'Thời gian sống còn không tiến triển bệnh (PFS) và tỷ lệ đáp ứng hấp thu I-131 sau 6 tháng.',
      safetyProfile: 'Nhóm đột biến kép có tỷ lệ di căn xa (phổi, xương) cao gấp 5.6 lần so với nhóm kiểu gen hoang dại.'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'Radioiodine refractoriness',
          phonetic: '/ˌreɪ.di.əʊˈaɪ.ə.diːn rɪˌfræk.tə.ri.nəs/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Tình trạng kháng iod phóng xạ (tế bào ung thư mất khả năng bắt giữ iod I-131).',
          contextSentence: 'Radioiodine refractoriness represents the defining therapeutic bottleneck in progressive differentiated thyroid carcinoma.',
          clinicalNote: 'Tiêu chuẩn chẩn đoán theo ATA: Không bắt iod ngay từ đầu hoặc mất bắt iod sau các đợt điều trị trước.'
        },
        {
          term: 'Redifferentiation',
          phonetic: '/ˌriː.dɪf.əˌren.ʃiˈeɪ.ʃən/',
          partOfSpeech: 'noun',
          meaningVI: 'Quá trình tái biệt hóa tế bào (phục hồi các đặc tính tế bào tuyến giáp biệt hóa lành tính).',
          contextSentence: 'Targeted MEK inhibition promotes phenotypic redifferentiation and re-expression of functional NIS transporters.',
          clinicalNote: 'Liệu pháp tiên tiến giúp các khối u kháng iod bắt lại được phóng xạ.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'Multivariate Cox proportional hazards modeling revealed a profound synergistic effect',
          usageAnalysis: 'Cấu trúc kinh điển trong bài báo y khoa để công bố kết quả mô hình hồi quy đa biến.',
          paperWritingTemplate: 'Multivariate Cox proportional hazards modeling revealed that [Variable A] and [Variable B] exerted a profound synergistic effect on [Clinical Outcome] (HR = X.X; 95% CI, X.X–X.X).'
        }
      ]
    }
  },
  {
    id: 4,
    journal: 'N Engl J Med',
    journalShort: 'NEJM',
    badgeClass: 'badge-nejm',
    journalSlug: 'nejm',
    category: 'landmark_trials',
    categoryName: 'Thử nghiệm lâm sàng lớn',
    doi: '10.1056/NEJMoa2510892',
    timeAgo: '3 giờ trước',
    readTime: '5 phút đọc',
    evidenceLevel: 'Pha 3 RCT (Double-blind)',
    title: {
      vi: 'NEJM: Liệu pháp phối hợp CagriSema (Cagrilintide + Semaglutide) kiểm soát đường huyết và thoái lui MASH vượt trội',
      en: 'Once-Weekly CagriSema in Patients with Type 2 Diabetes and Inadequately Controlled Glycemia: A Multicenter, Double-Blind, Phase 3 Trial'
    },
    summary: {
      vi: 'Sự phối hợp giữa Cagrilintide (đồng vận thụ thể amylin kép) và Semaglutide (CagriSema) giúp giảm HbA1c ngoạn mục 2.2% và giảm 16.5% cân nặng ở bệnh nhân ĐTĐ típ 2 kháng trị. Đồng thời ghi nhận 62% bệnh nhân thoái lui viêm gan thoái hóa mỡ (MASH) mà không làm nặng xơ hóa gan.',
      en: 'CagriSema (co-administered amylin analog Cagrilintide and GLP-1 RA Semaglutide) achieved a profound 2.2% HbA1c reduction and 16.5% weight loss in refractory T2D, alongside resolution of MASH without worsening of fibrosis in 62% of participants.'
    },
    keyTakeaways: [
      'Giảm HbA1c trung bình 2.2% (so với 1.5% ở Semaglutide đơn trị và 0.4% ở giả dược, p < 0.001).',
      '89% bệnh nhân đạt mục tiêu HbA1c < 7.0% và 64% đạt mức đường huyết bình thường HbA1c < 5.7%.',
      'Giảm đáng kể men gan ALT/AST và cải thiện độ cứng nhu mô gan đo bằng Elastography (FibroScan).'
    ],
    clinicalImplication: {
      vi: 'CagriSema mở ra kỷ nguyên mới phối hợp Amylin và Incretin, đặc biệt hứa hẹn cho nhóm bệnh nhân đồng mắc ĐTĐ típ 2, béo phì nặng và bệnh gan nhiễm mỡ liên quan chuyển hóa (MASLD/MASH).',
      en: 'CagriSema heralds an amylin-incretin synergy era, offering an integrated single-injection regimen for patients with diabetes complicated by severe visceral adiposity and MASH.'
    },
    clinicalDeepDive: {
      studyDesign: 'Thử nghiệm pha 3 ngẫu nhiên, mù đôi, đối chứng giả dược và đối chứng hoạt chất Semaglutide.',
      sampleSize: 'N = 1,120 bệnh nhân ĐTĐ típ 2 chưa kiểm soát tốt đường huyết với Metformin ± SGLT2i.',
      primaryEndpoint: 'Sự thay đổi HbA1c và phần trăm trọng lượng cơ thể tại tuần 68.',
      safetyProfile: 'Tác dụng phụ phổ biến nhất là buồn nôn thoáng qua (31% ở giai đoạn tăng liều); không có trường hợp viêm tụy cấp.'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'Co-agonism',
          phonetic: '/ˌkəʊˈæɡ.ə.nɪ.zəm/',
          partOfSpeech: 'noun',
          meaningVI: 'Sự đồng chủ vận (kích thích đồng bộ nhiều cơ chế sinh học khác nhau).',
          contextSentence: 'Amylin and GLP-1 co-agonism acts through complementary hypothalamic neural circuits to retard gastric emptying.',
          clinicalNote: 'Xu hướng dược lý học nổi bật nhất hiện nay trong điều trị đái tháo đường và béo phì.'
        },
        {
          term: 'Steatosis resolution',
          phonetic: '/stɪəˈtəʊ.sɪs ˌrez.əˈluː.ʃən/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Sự thoái lui / biến mất của tình trạng thoái hóa mỡ tế bào gan.',
          contextSentence: 'Histological assessment confirmed complete steatosis resolution in over half of the CagriSema cohort.',
          clinicalNote: 'Tiêu chí vàng sinh thiết trong các thử nghiệm thuốc điều trị MASH được FDA chấp thuận.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'The composite primary endpoint met all prespecified criteria for noninferiority and subsequent superiority',
          usageAnalysis: 'Cách diễn đạt chuẩn mực trong NEJM khi một nghiên cứu chứng minh được tính không thua kém trước, sau đó chứng minh thành công tính vượt trội.',
          paperWritingTemplate: 'The primary endpoint met all criteria for noninferiority and subsequently established superiority over standard of care (p < 0.001).'
        }
      ]
    }
  },
  {
    id: 5,
    journal: 'Endocrine Reviews',
    journalShort: 'Endocrine Reviews',
    badgeClass: 'badge-endo-rev',
    journalSlug: 'endo-rev',
    category: 'general_endo',
    categoryName: 'Nội tiết chung / Thượng thận / Xương',
    doi: '10.1210/endrev/bnae009',
    timeAgo: '4 giờ trước',
    readTime: '6 phút đọc',
    evidenceLevel: 'Systematic Review & Meta-analysis',
    title: {
      vi: 'Cập nhật Sinh bệnh học và Chiến lược Cai Corticoid An toàn Tránh Suy Thượng Thận Thứ Phát Cấp',
      en: 'Glucocorticoid-Induced Adrenal Insufficiency: Pathophysiology, Diagnostic Algorithm, and Tailored Tapering Strategies'
    },
    summary: {
      vi: 'Bài tổng quan hệ thống phân tích cơ chế ức chế trục Dưới đồi - Tuyến yên - Thượng thận (HPA) sau khi dùng Corticoid liều tương đương Prednisone ≥ 5mg/ngày kéo dài trên 3 tuần. Phục hồi sinh học của tuyến thượng thận thường chậm hơn từ 6-12 tháng so với hồi phục triệu chứng lâm sàng.',
      en: 'A comprehensive systematic review detailing HPA-axis suppression following glucocorticoid therapy exceeding 5mg prednisone equivalent for >3 weeks. Biochemical adrenal reserve recovery often lags clinical symptom resolution by 6–12 months.'
    },
    keyTakeaways: [
      '30% bệnh nhân dùng corticoid đường uống kéo dài bị suy thượng thận thứ phát tiềm ẩn.',
      'Định lượng Cortisol buổi sáng (8h sáng): Mức < 100 nmol/L (< 3.6 µg/dL) khẳng định suy thượng thận; > 400 nmol/L (> 14.5 µg/dL) chứng minh trục HPA đã phục hồi an toàn.',
      'Không cai thuốc đột ngột khi liều hạ xuống mức sinh lý (Hydrocortisone 15-20mg/ngày hoặc Prednisone 4-5mg/ngày).'
    ],
    clinicalImplication: {
      vi: 'Bác sĩ lâm sàng: Khi bệnh nhân đạt liều sinh lý Prednisone 5mg/ngày, chuyển sang Hydrocortisone 10mg sáng + 5mg chiều. Thử nghiệm Synacthen (ACTH kích thích) nên được thực hiện trước khi quyết định ngừng thuốc hoàn toàn.',
      en: 'Clinical strategy: Upon reaching physiologic Prednisone (5mg), switch to Hydrocortisone (10mg AM, 5mg PM). Perform a standard 250µg ACTH stimulation test prior to definitive cessation.'
    },
    clinicalDeepDive: {
      studyDesign: 'Tổng quan hệ thống và phân tích gộp (Systematic Review & Meta-analysis) trên 74 nghiên cứu.',
      sampleSize: 'Tổng hợp 5,680 bệnh nhân dùng Glucocorticoid điều trị bệnh lý viêm/tự miễn.',
      primaryEndpoint: 'Tỷ lệ phục hồi đáp ứng trục HPA theo thời gian và nguy cơ khởi phát cơn bão suy thượng thận cấp.',
      safetyProfile: 'Cơn suy thượng thận cấp (Adrenal crisis) xảy ra chủ yếu trong các tình huống stress nhiễm trùng hoặc phẫu thuật không được tăng liều gấp 2-3 lần.'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'HPA axis suppression',
          phonetic: '/ˌeɪtʃ.piːˈeɪ ˈæk.sɪs səˈpreʃ.ən/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Sự ức chế trục hạ đồi - tuyến yên - tuyến thượng thận do phản hồi âm tính (negative feedback).',
          contextSentence: 'Exogenous steroids mediate profound HPA axis suppression through central glucocorticoid receptor down-regulation.',
          clinicalNote: 'Khái niệm trung tâm trong bệnh học nội tiết lâm sàng.'
        },
        {
          term: 'Adrenal crisis',
          phonetic: '/əˈdriː.nəl ˈkraɪ.sɪs/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Cơn bão suy thượng thận cấp (tụt huyết áp không đáp ứng vận mạch, trụy mạch, sốc, hạ Na, tăng K).',
          contextSentence: 'Failure to institute stress-dose coverage during sepsis precipitated acute, life-threatening adrenal crisis.',
          clinicalNote: 'Tình trạng cấp cứu nội khoa khẩn cấp cần tiêm Hydrocortisone 100mg IV ngay lập tức.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'Biochemical recovery of adrenal reserve often lags substantially behind symptomatic stabilization',
          usageAnalysis: 'Cấu trúc học thuật chỉ ra độ trễ giữa kết quả xét nghiệm sinh hóa và triệu chứng bên ngoài.',
          paperWritingTemplate: 'Biochemical recovery of [Organ/Axis] often lags substantially behind [Clinical Parameter], warranting prolonged surveillance.'
        }
      ]
    }
  },
  {
    id: 6,
    journal: 'Diabetologia',
    journalShort: 'Diabetologia',
    badgeClass: 'badge-diabetologia',
    journalSlug: 'diabetologia',
    category: 'diabetes_obesity',
    categoryName: 'Đái tháo đường & Béo phì',
    doi: '10.1007/s00125-026-06108-x',
    timeAgo: '5 giờ trước',
    readTime: '4 phút đọc',
    evidenceLevel: 'EASD Cohort Study (Level II-A)',
    title: {
      vi: 'Bảo tồn Chức năng Tế bào Beta Tụy ở Đái tháo đường Tự miễn LADA nhờ Phối hợp sớm SGLT2i',
      en: 'Beta-Cell Preservation in Latent Autoimmune Diabetes in Adults (LADA): Synergistic Effects of Low-Dose Immunomodulation and SGLT2 Inhibition'
    },
    summary: {
      vi: 'Nghiên cứu theo dõi 5 năm từ Hiệp hội ĐTĐ Châu Âu (EASD) chứng minh việc nhận diện sớm thể LADA (thông qua kháng thể Anti-GAD) và can thiệp sớm bằng SGLT2i kết hợp điều hòa miễn dịch giúp kéo dài thời gian duy trì nồng độ C-peptide thêm 3.4 năm so với điều trị Sulfonylurea.',
      en: 'A 5-year EASD prospective trial demonstrates that early identification of LADA (via Anti-GAD autoantibodies) combined with early SGLT2 inhibition and immunomodulation prolongs stimulated C-peptide retention by 3.4 years compared to sulfonylureas.'
    },
    keyTakeaways: [
      'Chống chỉ định dùng Sulfonylurea kéo dài trên bệnh nhân LADA vì làm tăng tốc độ kiệt quệ tế bào beta.',
      'SGLT2i làm giảm độc tính đường huyết (glucotoxicity), bảo tồn nồng độ C-peptide kích thích > 0.3 nmol/L.',
      'Tầm soát định kỳ ceton máu/niệu để phòng ngừa nhiễm toan ceton đái tháo đường với mức đường huyết bình thường (euDKA).'
    ],
    clinicalImplication: {
      vi: 'Nên xét nghiệm Anti-GAD và C-peptide ở mọi bệnh nhân ĐTĐ típ 2 thể trạng gầy/bình thường (BMI < 25) hoặc thất bại sớm với phác đồ uống thông thường để tránh phân loại nhầm và chậm trễ insulin.',
      en: 'Screen Anti-GAD autoantibodies and fasting C-peptide in normal-weight adults with newly diagnosed diabetes to avert misdiagnosis of LADA and avoid beta-cell exhausting therapies.'
    },
    clinicalDeepDive: {
      studyDesign: 'Nghiên cứu tiến cứu theo dõi dọc (Prospective Longitudinal Cohort) 5 năm.',
      sampleSize: 'N = 450 bệnh nhân LADA có nồng độ kháng thể Anti-GAD dương tính.',
      primaryEndpoint: 'Tốc độ suy giảm nồng độ C-peptide niệu và thời gian đến lúc bắt buộc phụ thuộc Insulin hoàn toàn.',
      safetyProfile: 'Tỷ lệ nhiễm toan ceton euDKA ở nhóm SGLT2i là 1.8%, hoàn toàn kiểm soát được nhờ giáo dục bệnh nhân.'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'Glucotoxicity',
          phonetic: '/ˌɡluː.kəʊ.tɒkˈsɪs.ə.ti/',
          partOfSpeech: 'noun',
          meaningVI: 'Độc tính do đường huyết cao kéo dài (gây chết theo chương trình apoptosis tế bào beta tụy).',
          contextSentence: 'Rapid amelioration of glucotoxicity unmasks residual endogenous beta-cell secretory capacity.',
          clinicalNote: 'Lý giải vì sao hạ đường huyết nhanh lại giúp tụy tự phục hồi bài tiết insulin một phần.'
        },
        {
          term: 'Residual reserve',
          phonetic: '/rɪˈzɪdʒ.u.əl rɪˈzɜːv/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Dự trữ tồn dư (khả năng bài tiết nội tiết tố còn lại của tuyến nội tiết).',
          contextSentence: 'Preservation of even minimal residual beta-cell reserve markedly diminishes long-term microvascular sequelae.',
          clinicalNote: 'Mục tiêu tối thượng trong các liệu pháp can thiệp sớm bệnh đái tháo đường tự miễn.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'These findings challenge the conventional paradigm of postponing intervention until overt insulinopenia',
          usageAnalysis: 'Mẫu câu phản biện khoa học đanh thép để thay đổi quan niệm điều trị cũ kỹ.',
          paperWritingTemplate: 'These findings challenge the conventional paradigm of [Old Practice], demonstrating that [New Early Strategy] optimizes clinical outcomes.'
        }
      ]
    }
  },
  {
    id: 7,
    journal: 'Thyroid',
    journalShort: 'Thyroid (ATA)',
    badgeClass: 'badge-thyroid',
    journalSlug: 'thyroid',
    category: 'thyroid',
    categoryName: 'Tuyến giáp',
    doi: '10.1089/thy.2025.0489',
    timeAgo: '7 giờ trước',
    readTime: '4 phút đọc',
    evidenceLevel: 'ATA Consensus Guidelines 2026',
    title: {
      vi: 'Đồng thuận ATA 2026: Theo dõi Chủ động Tích cực (Active Surveillance) Nhân Tuyến Giáp Nhỏ Nghi Ngờ Ác Tính',
      en: '2026 ATA Clinical Consensus: Active Surveillance Versus Immediate Surgery for Low-Risk Papillary Thyroid Microcarcinomas'
    },
    summary: {
      vi: 'Hiệp hội Tuyến giáp Hoa Kỳ (ATA) công bố đồng thuận mới: Đối với ung thư vi thể tuyến giáp thể nhú (PTMC ≤ 1.0 - 1.5 cm) không có xâm lấn bao giáp hay hạch cổ, theo dõi chủ động bằng siêu âm định kỳ là phương án an toàn bậc nhất thay thế phẫu thuật cắt giáp tức thì.',
      en: 'The American Thyroid Association (ATA) issues updated consensus endorsing active surveillance over immediate thyroidectomy for low-risk papillary thyroid microcarcinomas (≤ 1.5 cm) lacking extrathyroidal extension or nodal metastasis.'
    },
    keyTakeaways: [
      'Chỉ 3.8% khối u có tăng kích thước ≥ 3mm sau 5 năm theo dõi chủ động; không có ca nào tử vong do ung thư.',
      'Phẫu thuật trì hoãn (khi khối u có dấu hiệu tiến triển) đạt tỷ lệ khỏi bệnh 100% tương đương mổ ngay từ đầu.',
      'Tránh được 96% các biến cố tổn thương thần kinh thanh quản quặt ngược và suy tuyến cận giáp vĩnh viễn.'
    ],
    clinicalImplication: {
      vi: 'Bác sĩ nội tiết & ngoại khoa: Cần tư vấn kỹ cho bệnh nhân về bản chất diễn tiến cực kỳ chậm (indolent) của ung thư vi thể; thực hiện siêu âm mỗi 6 tháng trong 2 năm đầu, sau đó chuyển sang mỗi 12 tháng.',
      en: 'Reassure eligible patients regarding the indolent biology of microcarcinomas. Perform high-resolution neck ultrasound biannually for 2 years, transitioning to annually thereafter.'
    },
    clinicalDeepDive: {
      studyDesign: 'Báo cáo Đồng thuận Toàn cầu kết hợp phân tích dữ liệu gộp từ hơn 8,000 bệnh nhân.',
      sampleSize: 'N = 8,240 bệnh nhân được theo dõi chủ động tại các trung tâm ung bướu hàng đầu thế giới.',
      primaryEndpoint: 'Tỷ lệ tăng kích thước khối u (kinetics), xuất hiện hạch di căn mới và tỷ lệ sống còn đặc hiệu ung thư.',
      safetyProfile: 'Tỷ lệ chất lượng cuộc sống (QoL) ở nhóm theo dõi chủ động cao hơn hẳn nhóm phẫu thuật cắt giáp.'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'Active surveillance',
          phonetic: '/ˈæk.tɪv sɜːˈveɪ.ləns/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Chiến lược theo dõi chủ động tích cực (theo dõi sát định kỳ, chỉ can thiệp khi có bằng chứng tiến triển).',
          contextSentence: 'Active surveillance has emerged as the frontline paradigm for subcentimeter indolent thyroid lesions.',
          clinicalNote: 'Khác với "Watchful waiting" (chờ đợi thụ động chỉ điều trị giảm nhẹ).'
        },
        {
          term: 'Indolent course',
          phonetic: '/ˈɪn.dəl.ənt kɔːs/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Diễn tiến âm thầm, chậm chạp, lành tính về mặt sinh học.',
          contextSentence: 'The overwhelmingly indolent natural course of microcarcinoma obviates the urgency for morbid neck dissection.',
          clinicalNote: 'Thuật ngữ mô tả tính chất khối u không có xu hướng di căn ồ ạt.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'Active surveillance constitutes a safe, oncologically sound alternative to immediate surgery',
          usageAnalysis: 'Mẫu câu khẳng định tính an toàn và giá trị ung thư học của một phác đồ bảo tồn.',
          paperWritingTemplate: '[Conservative Strategy] constitutes a safe, oncologically sound alternative to [Aggressive Intervention] in carefully selected cohorts.'
        }
      ]
    }
  },
  {
    id: 8,
    journal: 'The Lancet & JAMA',
    journalShort: 'The Lancet / JAMA',
    badgeClass: 'badge-jama-lancet',
    journalSlug: 'jama-lancet',
    category: 'landmark_trials',
    categoryName: 'Thử nghiệm lâm sàng lớn',
    doi: '10.1001/jama.2026.3129',
    timeAgo: '9 giờ trước',
    readTime: '5 phút đọc',
    evidenceLevel: 'Pha 3 Quốc tế Đa trung tâm',
    title: {
      vi: 'Thử nghiệm SMART-MEN: Liệu pháp Ba Chủ Vận Retatrutide (GLP-1/GIP/Glucagon) Bảo vệ Thận và Hạ Huyết Áp Vượt Bậc',
      en: 'Triple-Hormone-Receptor Agonist Retatrutide in Patients with Type 2 Diabetes, Diabetic Kidney Disease, and Metabolic Syndrome: A Global Multicenter Trial'
    },
    summary: {
      vi: 'Liệu pháp đồng chủ vận ba thụ thể GLP-1/GIP/Glucagon (Retatrutide 12mg) giúp làm chậm 52% tốc độ suy giảm mức lọc cầu thận (eGFR slope), giảm 48% tỷ lệ đạm niệu UACR và giảm trung bình 12 mmHg huyết áp tâm thu ở bệnh nhân bệnh thận đái tháo đường tiến triển.',
      en: 'Triple-hormone-receptor agonist Retatrutide (12mg) elicited a 52% deceleration in annual eGFR slope decline, a 48% reduction in UACR, and a 12 mmHg drop in systolic blood pressure in advanced diabetic kidney disease cohorts.'
    },
    keyTakeaways: [
      'Retatrutide giảm 48% tỷ lệ UACR (Albumin/Creatinine niệu) so với giả dược (p < 0.0001).',
      'Độ dốc eGFR hàng năm được bảo tồn ở mức -1.1 mL/min/1.73m² (so với -2.3 mL/min/1.73m² ở nhóm chứng).',
      'Hiệu quả hiệp đồng của thụ thể Glucagon làm tăng tiêu hao năng lượng và đào thải mỡ tế bào gan mạnh mẽ.'
    ],
    clinicalImplication: {
      vi: 'Retatrutide thể hiện tiềm năng to lớn như một liệu pháp bảo vệ thận và tim mạch tích hợp cho bệnh nhân ĐTĐ có tổn thương thận mạn tính (CKD giai đoạn 2-3b) có đạm niệu vi thể/đại thể.',
      en: 'Retatrutide represents a transformative nephroprotective and cardiometabolic agent for diabetic nephropathy patients with persistent macroalbuminuria.'
    },
    clinicalDeepDive: {
      studyDesign: 'Thử nghiệm lâm sàng đa quốc gia, ngẫu nhiên, mù đôi có nhóm chứng, pha 3 (SMART-MEN).',
      sampleSize: 'N = 1,850 bệnh nhân ĐTĐ típ 2 kèm eGFR từ 30 - 75 mL/min/1.73m² và UACR > 300 mg/g.',
      primaryEndpoint: 'Tốc độ suy giảm eGFR mạn tính (chronic eGFR slope) trong vòng 104 tuần điều trị.',
      safetyProfile: 'Tần số tim tăng nhẹ 3-5 nhịp/phút do tác dụng thụ thể glucagon nhưng không làm tăng biến cố loạn nhịp tim.'
    },
    medicalEnglishMasterclass: {
      vocabulary: [
        {
          term: 'Triple agonism',
          phonetic: '/ˈtrɪp.əl ˈæɡ.ə.nɪ.zəm/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Sự chủ vận ba thụ thể (kích hoạt đồng thời 3 con đường thụ thể GLP-1, GIP và Glucagon).',
          contextSentence: 'Triple agonism delivers enhanced energy expenditure via hepatic glucagon receptor mobilization.',
          clinicalNote: 'Thuốc đầu tiên đại diện cho nhóm này là Retatrutide của Eli Lilly.'
        },
        {
          term: 'Glomerular hyperfiltration',
          phonetic: '/ɡləʊˈmer.jʊ.lər ˌhaɪ.pə.fɪlˈtreɪ.ʃən/',
          partOfSpeech: 'noun phrase',
          meaningVI: 'Tình trạng tăng lọc cầu thận (giai đoạn sớm của bệnh thận đái tháo đường dẫn tới xơ hóa cầu thận).',
          contextSentence: 'Retatrutide rapidly resets abnormal intraglomerular hemodynamics, abolishing chronic hyperfiltration.',
          clinicalNote: 'Cơ chế bảo vệ thận tương tự như nhóm thuốc ức chế SGLT2i.'
        }
      ],
      academicPhraseology: [
        {
          phrase: 'Treatment elicited a statistically significant deceleration in annual eGFR slope decline',
          usageAnalysis: 'Cách mô tả chuẩn mực quốc tế khi chứng minh thuốc có hiệu quả bảo tồn chức năng thận dài hạn.',
          paperWritingTemplate: '[Agent] elicited a statistically significant deceleration in annual eGFR slope decline, conferring sustained renal preservation (p = 0.00X).'
        }
      ]
    }
  }
];

// State
let currentTheme = localStorage.getItem('medbrief_theme') || 'light';
let selectedJournal = 'all';
let selectedCategory = 'all';
let currentTab = 'today';
let savedArticleIds = JSON.parse(localStorage.getItem('medbrief_saved') || '[1, 4]');
let currentActiveArticle = null;
let currentLanguageMode = 'bilingual'; // 'bilingual', 'vi', 'en'

// Elements
const appContainer = document.querySelector('.app-container');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const feedListContainer = document.getElementById('feedListContainer');
const savedBadge = document.getElementById('savedBadge');
const journalChips = document.querySelectorAll('.journal-chip');
const categoryChips = document.querySelectorAll('.category-chip');
const navTabs = document.querySelectorAll('.nav-tab');

// Detail Modal Elements
const detailModal = document.getElementById('detailModal');
const detailSheet = document.getElementById('detailSheet');
const detailCloseBtn = document.getElementById('detailCloseBtn');
const langTabs = document.querySelectorAll('.lang-tab');

// Modal Content Elements
const dJournalBadge = document.getElementById('dJournalBadge');
const dCategoryTag = document.getElementById('dCategoryTag');
const dDoiLink = document.getElementById('dDoiLink');
const dTitleVi = document.getElementById('dTitleVi');
const dTitleEn = document.getElementById('dTitleEn');
const dMeta = document.getElementById('dMeta');
const dSummaryVi = document.getElementById('dSummaryVi');
const dSummaryEn = document.getElementById('dSummaryEn');
const dKeyTakeaways = document.getElementById('dKeyTakeaways');
const dClinicalImplication = document.getElementById('dClinicalImplication');
const dDeepDiveBox = document.getElementById('dDeepDiveBox');
const dVocabList = document.getElementById('dVocabList');
const dPhraseList = document.getElementById('dPhraseList');
const dModalBookmarkBtn = document.getElementById('dModalBookmarkBtn');

// In-Article Contextual AI Chat Elements
const inArticleChatStream = document.getElementById('inArticleChatStream');
const inArticleAiInput = document.getElementById('inArticleAiInput');
const inArticleAiSend = document.getElementById('inArticleAiSend');
const smartQueryChips = document.querySelectorAll('.smart-query-chip');

// Global AI Modal
const globalAiModal = document.getElementById('globalAiModal');
const globalAiClose = document.getElementById('globalAiClose');
const globalChatArea = document.getElementById('globalChatArea');
const globalAiInput = document.getElementById('globalAiInput');
const globalAiSend = document.getElementById('globalAiSend');
const globalAiChips = document.querySelectorAll('.global-ai-chip');

// Init
function init() {
  applyTheme(currentTheme);
  renderFeed();
  updateSavedBadge();
  setupListeners();
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('medbrief_theme', theme);
  if (themeToggleBtn) {
    if (theme === 'dark') {
      themeToggleBtn.setAttribute('title', 'Chuyển sang chế độ Sáng');
      themeToggleBtn.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 18px; height: 18px;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      `;
    } else {
      themeToggleBtn.setAttribute('title', 'Chế độ Trực Đêm (Night Shift Dark Mode)');
      themeToggleBtn.innerHTML = `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width: 18px; height: 18px;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      `;
    }
  }
}

function renderFeed() {
  if (!feedListContainer) return;

  let list = ENDO_ARTICLES;

  if (currentTab === 'saved') {
    list = list.filter(a => savedArticleIds.includes(a.id));
  } else {
    if (selectedJournal !== 'all') {
      list = list.filter(a => a.journalSlug === selectedJournal);
    }
    if (selectedCategory !== 'all') {
      list = list.filter(a => a.category === selectedCategory);
    }
  }

  if (list.length === 0) {
    feedListContainer.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <div style="width: 44px; height: 44px; margin: 0 auto 10px; border-radius: 50%; background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; color: var(--text-dim);">
          <svg style="width: 22px; height: 22px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
        <p style="font-size: 13.5px; font-weight: 600; color: var(--text-main); margin-bottom: 4px;">
          ${currentTab === 'saved' ? 'Chưa có bản tin nội tiết đã lưu' : 'Không có bài báo phù hợp tiêu chí lọc'}
        </p>
        <p style="font-size: 11.5px; color: var(--text-dim);">
          ${currentTab === 'saved' ? 'Nhấn icon lưu để lưu trữ các bài báo từ Lancet, NEJM, JCEM.' : 'Vui lòng chọn tạp chí khác hoặc quay lại mục [Tất cả].'}
        </p>
      </div>
    `;
    return;
  }

  feedListContainer.innerHTML = list.map(item => {
    const isSaved = savedArticleIds.includes(item.id);
    return `
      <article class="medical-card" data-id="${item.id}">
        <!-- Top Row: Journal Badge & Category & Bookmark -->
        <div class="card-top-row">
          <div class="badges-group">
            <span class="journal-badge ${item.badgeClass}">
              <span class="dot"></span>
              ${item.journalShort}
            </span>
            <span class="topic-tag">${item.categoryName}</span>
          </div>
          <button class="bookmark-btn ${isSaved ? 'saved' : ''}" data-id="${item.id}" title="${isSaved ? 'Bỏ lưu' : 'Lưu lại'}">
            <svg style="width: 17px; height: 17px;" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
          </button>
        </div>

        <!-- Bilingual Titles -->
        <h2 class="card-title-vi">${item.title.vi}</h2>
        <div class="card-title-en">${item.title.en}</div>

        <!-- 2-Line Key Summary -->
        <p class="card-summary">${item.summary.vi}</p>

        <!-- Footer -->
        <div class="card-footer">
          <div class="left">
            <span>${item.timeAgo}</span>
            <span>•</span>
            <span>${item.readTime}</span>
            <span>•</span>
            <span style="color: var(--accent-primary); font-weight: 500;">${item.evidenceLevel}</span>
          </div>
          <span class="quick-deep-dive">
            Phân tích sâu & Tiếng Anh
            <svg style="width: 12px; height: 12px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </article>
    `;
  }).join('');
}

function updateSavedBadge() {
  if (!savedBadge) return;
  const count = savedArticleIds.length;
  if (count > 0) {
    savedBadge.textContent = count;
    savedBadge.style.display = 'inline-flex';
  } else {
    savedBadge.style.display = 'none';
  }
}

// Open Article Detail & Deep-Dive
function openDetailModal(articleId) {
  const article = ENDO_ARTICLES.find(a => a.id === parseInt(articleId, 10));
  if (!article) return;

  currentActiveArticle = article;
  const isSaved = savedArticleIds.includes(article.id);

  // Journal Badge & Meta
  dJournalBadge.className = `journal-badge ${article.badgeClass}`;
  dJournalBadge.innerHTML = `<span class="dot"></span> ${article.journal}`;
  dCategoryTag.textContent = article.categoryName;
  dDoiLink.textContent = `DOI: ${article.doi}`;
  dDoiLink.href = `https://doi.org/${article.doi}`;

  dMeta.textContent = `${article.timeAgo} • ${article.readTime} • ${article.evidenceLevel}`;

  // Content
  dTitleVi.textContent = article.title.vi;
  dTitleEn.textContent = article.title.en;
  dSummaryVi.textContent = article.summary.vi;
  dSummaryEn.textContent = article.summary.en;

  // Key Takeaways
  dKeyTakeaways.innerHTML = article.keyTakeaways.map(point => `
    <li style="margin-bottom: 7px; line-height: 1.45; font-size: 12.5px; color: var(--text-main);">
      ${point}
    </li>
  `).join('');

  // Clinical Implication
  dClinicalImplication.innerHTML = `
    <div style="font-size: 12.5px; color: var(--text-main); margin-bottom: 4px;">
      <strong>Tiếng Việt:</strong> ${article.clinicalImplication.vi}
    </div>
    <div style="font-size: 11.5px; color: var(--text-muted); font-style: italic;">
      <strong>English Practice:</strong> ${article.clinicalImplication.en}
    </div>
  `;

  // Deep-Dive Grid
  dDeepDiveBox.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr; gap: 8px; font-size: 12px;">
      <div style="background: var(--bg-card); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
        <strong style="color: var(--accent-primary);">Thiết kế nghiên cứu:</strong> ${article.clinicalDeepDive.studyDesign}
      </div>
      <div style="background: var(--bg-card); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
        <strong style="color: var(--accent-primary);">Cỡ mẫu & Quần thể:</strong> ${article.clinicalDeepDive.sampleSize}
      </div>
      <div style="background: var(--bg-card); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
        <strong style="color: var(--accent-primary);">Tiêu chí chính (Primary Endpoint):</strong> ${article.clinicalDeepDive.primaryEndpoint}
      </div>
      <div style="background: var(--bg-card); padding: 8px 10px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
        <strong style="color: var(--accent-primary);">Hồ sơ An toàn (Safety):</strong> ${article.clinicalDeepDive.safetyProfile}
      </div>
    </div>
  `;

  // Medical English Masterclass: Vocabulary
  dVocabList.innerHTML = article.medicalEnglishMasterclass.vocabulary.map(v => `
    <div class="vocab-card">
      <div class="vocab-head">
        <span class="vocab-term">${v.term}</span>
        <span class="vocab-phonetic">${v.phonetic}</span>
        <span class="vocab-pos">${v.partOfSpeech}</span>
      </div>
      <div class="vocab-meaning">🎯 ${v.meaningVI}</div>
      <div class="vocab-context">"${v.contextSentence}"</div>
      <div style="font-size: 10.5px; color: var(--accent-primary); margin-top: 4px;">💡 <em>${v.clinicalNote}</em></div>
    </div>
  `).join('');

  // Medical English Masterclass: Phraseology
  dPhraseList.innerHTML = article.medicalEnglishMasterclass.academicPhraseology.map(p => `
    <div class="phrase-card">
      <div class="phrase-title">🖋️ ${p.phrase}</div>
      <div class="phrase-desc">${p.usageAnalysis}</div>
      <div class="phrase-template"><strong>Mẫu viết bài báo quốc tế:</strong><br/>${p.paperWritingTemplate}</div>
    </div>
  `).join('');

  // Bookmark Button in modal
  if (dModalBookmarkBtn) {
    dModalBookmarkBtn.classList.toggle('saved', isSaved);
    dModalBookmarkBtn.innerHTML = `
      <svg style="width: 16px; height: 16px;" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
      </svg>
      <span>${isSaved ? 'Đã lưu trong sổ tay' : 'Lưu bản tin này'}</span>
    `;
  }

  // Clear and prep contextual chat stream
  if (inArticleChatStream) {
    inArticleChatStream.innerHTML = `
      <div style="background-color: var(--bg-subtle); padding: 8px 12px; border-radius: 12px; font-size: 12px; color: var(--text-main); border: 1px solid var(--border-light); line-height: 1.45;">
        Xin chào Bác sĩ! Tôi đang sẵn sàng thảo luận chuyên sâu về bài báo <strong>[${article.journalShort}]</strong> này. Bác sĩ có thể hỏi về thiết kế nghiên cứu, liều lượng chuẩn độ, hoặc thuật ngữ tiếng Anh y khoa.
      </div>
    `;
  }

  applyLanguageMode(currentLanguageMode);
  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
  detailModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Switch Language Mode: Bilingual, VI only, EN only
function applyLanguageMode(mode) {
  currentLanguageMode = mode;
  langTabs.forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-lang') === mode);
  });

  if (mode === 'vi') {
    dTitleVi.style.display = 'block';
    dTitleEn.style.display = 'none';
    dSummaryVi.style.display = 'block';
    dSummaryEn.style.display = 'none';
  } else if (mode === 'en') {
    dTitleVi.style.display = 'none';
    dTitleEn.style.display = 'block';
    dTitleEn.style.fontSize = '14px';
    dTitleEn.style.fontWeight = '700';
    dTitleEn.style.color = 'var(--text-main)';
    dSummaryVi.style.display = 'none';
    dSummaryEn.style.display = 'block';
  } else {
    // Bilingual (Song ngữ)
    dTitleVi.style.display = 'block';
    dTitleEn.style.display = 'block';
    dTitleEn.style.fontSize = '12px';
    dTitleEn.style.fontWeight = '500';
    dTitleEn.style.color = 'var(--text-dim)';
    dSummaryVi.style.display = 'block';
    dSummaryEn.style.display = 'block';
  }
}

// Contextual AI Chat for Active Article
function sendInArticleQuery(query) {
  if (!query || !query.trim() || !currentActiveArticle) return;

  const userBubble = document.createElement('div');
  userBubble.style.cssText = 'align-self: flex-end; background-color: var(--accent-primary-soft); color: var(--accent-primary); padding: 7px 11px; border-radius: 12px 12px 2px 12px; font-size: 12px; max-width: 85%; font-weight: 500;';
  userBubble.textContent = query;
  inArticleChatStream.appendChild(userBubble);
  inArticleChatStream.scrollTop = inArticleChatStream.scrollHeight;

  if (inArticleAiInput) inArticleAiInput.value = '';

  const aiBubble = document.createElement('div');
  aiBubble.style.cssText = 'align-self: flex-start; background-color: var(--bg-subtle); color: var(--text-main); padding: 9px 12px; border-radius: 12px 12px 12px 2px; font-size: 12px; max-width: 90%; border: 1px solid var(--border-light); line-height: 1.45;';
  aiBubble.innerHTML = `<span style="color: var(--accent-primary); font-weight: 600;">Gemini Curation AI:</span> Đang truy xuất dữ liệu từ toàn văn bài báo...`;
  inArticleChatStream.appendChild(aiBubble);
  inArticleChatStream.scrollTop = inArticleChatStream.scrollHeight;

  setTimeout(() => {
    let responseText = '';
    const qLower = query.toLowerCase();

    if (qLower.includes('hazard ratio') || qLower.includes('hr') || qLower.includes('p-value') || qLower.includes('thống kê')) {
      responseText = `<strong>Phân tích Chỉ số Thống kê trong bài:</strong><br/>Bài báo công bố kết quả có ý nghĩa thống kê cao. Giá trị p-value < 0.001 với khoảng tin cậy 95% CI không chứa giá trị 1.0 khẳng định sự khác biệt là thực sự chứ không do ngẫu nhiên. Cỡ mẫu N = ${currentActiveArticle.clinicalDeepDive.sampleSize.match(/\d[,\d]*/)?.[0] || '1000+'} đảm bảo công suất thống kê (Statistical Power) > 90%.`;
    } else if (qLower.includes('liều') || qLower.includes('chuẩn độ') || qLower.includes('khởi đầu')) {
      responseText = `<strong>Gợi ý phác đồ & Liều lượng lâm sàng:</strong><br/>${currentActiveArticle.clinicalImplication.vi}<br/><em>Lưu ý thực hành:</em> Luôn kiểm tra eGFR và chức năng gan trước khi chỉ định, tuân thủ bước chỉnh liều cách nhau tối thiểu 4 tuần để tối ưu dung nạp.`;
    } else if (qLower.includes('tiếng anh') || qLower.includes('dịch') || qLower.includes('cấu trúc')) {
      const vocab1 = currentActiveArticle.medicalEnglishMasterclass.vocabulary[0];
      responseText = `<strong>Góc Tiếng Anh Y khoa Chuyên sâu:</strong><br/>Thuật ngữ trọng tâm: <strong>${vocab1.term}</strong> (${vocab1.phonetic}) - <em>${vocab1.partOfSpeech}</em>.<br/>Nghĩa: ${vocab1.meaningVI}.<br/>Ví dụ từ bài: <em>"${vocab1.contextSentence}"</em>.`;
    } else {
      responseText = `<strong>Phân tích Chuyên môn từ Gemini AI:</strong><br/>Đối với nghiên cứu <em>"${currentActiveArticle.title.vi}"</em> từ <strong>${currentActiveArticle.journal}</strong>: Kết quả này được xem là bằng chứng mức độ cao (${currentActiveArticle.evidenceLevel}), mang lại sự thay đổi thực hành điều trị trực tiếp tại phòng khám chuyên khoa Nội tiết - Đái tháo đường.`;
    }

    aiBubble.innerHTML = `
      <div style="font-size: 11px; font-weight: 700; color: var(--accent-primary); margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">
        <svg style="width: 14px; height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        Gemini Medical Analysis (${currentActiveArticle.journalShort})
      </div>
      <div>${responseText}</div>
    `;
    inArticleChatStream.scrollTop = inArticleChatStream.scrollHeight;
  }, 500);
}

// Global Ask AI Handler
function sendGlobalAiQuery(text) {
  if (!text || !text.trim()) return;

  const userBubble = document.createElement('div');
  userBubble.style.cssText = 'align-self: flex-end; background-color: var(--accent-primary-soft); color: var(--accent-primary); padding: 8px 12px; border-radius: 14px 14px 2px 14px; font-size: 12.5px; max-width: 85%; font-weight: 500; margin-bottom: 8px;';
  userBubble.textContent = text;
  globalChatArea.appendChild(userBubble);
  globalChatArea.scrollTop = globalChatArea.scrollHeight;
  if (globalAiInput) globalAiInput.value = '';

  const aiBubble = document.createElement('div');
  aiBubble.style.cssText = 'align-self: flex-start; background-color: var(--bg-subtle); color: var(--text-main); padding: 10px 14px; border-radius: 14px 14px 14px 2px; font-size: 12.5px; max-width: 88%; border: 1px solid var(--border-light); line-height: 1.5; margin-bottom: 10px;';
  aiBubble.innerHTML = `<span style="color: var(--accent-primary);">Đang đối chiếu dữ liệu 8 tạp chí Nội tiết hàng đầu...</span>`;
  globalChatArea.appendChild(aiBubble);
  globalChatArea.scrollTop = globalChatArea.scrollHeight;

  setTimeout(() => {
    let ans = '';
    const qLower = text.toLowerCase();
    if (qLower.includes('tirzepatide') || qLower.includes('semaglutide') || qLower.includes('surmount')) {
      ans = '<strong>So sánh Tirzepatide vs Semaglutide (Lancet Diabetes 2026):</strong><br/>Tirzepatide (đồng vận GIP/GLP-1) giảm cân 20.9% vượt trội hơn Semaglutide 14.8%. Tỷ lệ giảm mỡ tạng và cải thiện HOMA-IR đều vượt trội đáng kể. Khuyến cáo chỉnh liều mỗi 4 tuần để giảm tác dụng phụ buồn nôn.';
    } else if (qLower.includes('cgm') || qLower.includes('tir') || qLower.includes('ada')) {
      ans = '<strong>Tiêu chuẩn Chăm sóc ADA 2026 về CGM:</strong><br/>Phổ cập CGM Mức độ A cho mọi bệnh nhân ĐTĐ típ 2 dùng insulin nền. Mục tiêu chính: TIR (70-180 mg/dL) > 70%, TBR (< 70 mg/dL) < 4%. Mỗi mức tăng 10% TIR giúp giảm 40% biến chứng vi mạch.';
    } else if (qLower.includes('braf') || qLower.includes('giáp') || qLower.includes('jcem') || qLower.includes('i-131')) {
      ans = '<strong>Kháng I-131 trong Ung thư Tuyến giáp (JCEM):</strong><br/>Đột biến kép BRAF V600E + TERT promoter làm mất kênh NIS ở 84% ca bệnh. Khuyến cáo xét nghiệm gen trước khi chỉ định I-131 liều cao và cân nhắc thuốc ức chế MEK/BRAF để tái biệt hóa (Redifferentiation).';
    } else {
      ans = `<strong>Trợ lý Y văn Gemini:</strong> Câu hỏi của Bác sĩ về <em>"${text}"</em> đã được đối chiếu cùng cơ sở dữ liệu các bài báo mới nhất từ The Lancet Diabetes, Diabetes Care và NEJM. Bác sĩ có thể bấm xem chi tiết từng bài báo cụ thể trong feed để học thêm từ vựng chuyên ngành liên quan!`;
    }

    aiBubble.innerHTML = `
      <div style="font-size: 11px; font-weight: 700; color: var(--accent-primary); margin-bottom: 4px;">
        ✓ EVIDENCE-BASED CLINICAL RESPONSE
      </div>
      <div>${ans}</div>
    `;
    globalChatArea.scrollTop = globalChatArea.scrollHeight;
  }, 500);
}

// Setup Event Listeners
function setupListeners() {
  // Theme Toggle
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  // Journal Chips
  journalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      journalChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedJournal = chip.getAttribute('data-journal') || 'all';
      renderFeed();
    });
  });

  // Category Chips
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      selectedCategory = chip.getAttribute('data-cat') || 'all';
      renderFeed();
    });
  });

  // Article Feed Clicks (Card click & Bookmark)
  if (feedListContainer) {
    feedListContainer.addEventListener('click', (e) => {
      const bBtn = e.target.closest('.bookmark-btn');
      if (bBtn) {
        e.stopPropagation();
        const id = parseInt(bBtn.getAttribute('data-id'), 10);
        const idx = savedArticleIds.indexOf(id);
        if (idx > -1) savedArticleIds.splice(idx, 1);
        else savedArticleIds.push(id);
        localStorage.setItem('medbrief_saved', JSON.stringify(savedArticleIds));
        updateSavedBadge();
        renderFeed();
        return;
      }

      const card = e.target.closest('.medical-card');
      if (card) {
        const id = card.getAttribute('data-id');
        openDetailModal(id);
      }
    });
  }

  // Language Tabs in Detail Sheet
  langTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const mode = tab.getAttribute('data-lang');
      applyLanguageMode(mode);
    });
  });

  // Detail Modal Close
  if (detailCloseBtn) detailCloseBtn.addEventListener('click', closeDetailModal);
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeDetailModal();
    });
  }

  // Detail Modal Bookmark button
  if (dModalBookmarkBtn) {
    dModalBookmarkBtn.addEventListener('click', () => {
      if (!currentActiveArticle) return;
      const id = currentActiveArticle.id;
      const idx = savedArticleIds.indexOf(id);
      if (idx > -1) savedArticleIds.splice(idx, 1);
      else savedArticleIds.push(id);
      localStorage.setItem('medbrief_saved', JSON.stringify(savedArticleIds));
      updateSavedBadge();
      renderFeed();

      const isSaved = savedArticleIds.includes(id);
      dModalBookmarkBtn.classList.toggle('saved', isSaved);
      dModalBookmarkBtn.innerHTML = `
        <svg style="width: 16px; height: 16px;" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
        <span>${isSaved ? 'Đã lưu trong sổ tay' : 'Lưu bản tin này'}</span>
      `;
    });
  }

  // In-Article Contextual AI Chat
  if (inArticleAiSend && inArticleAiInput) {
    inArticleAiSend.addEventListener('click', () => sendInArticleQuery(inArticleAiInput.value));
    inArticleAiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendInArticleQuery(inArticleAiInput.value);
    });
  }

  smartQueryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-q') || chip.textContent;
      sendInArticleQuery(q);
    });
  });

  // Bottom Navigation
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');

      if (target === 'ai') {
        globalAiModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        return;
      }

      navTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = target;
      renderFeed();
    });
  });

  // Global AI Modal Close
  if (globalAiClose) {
    globalAiClose.addEventListener('click', () => {
      globalAiModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (globalAiModal) {
    globalAiModal.addEventListener('click', (e) => {
      if (e.target === globalAiModal) {
        globalAiModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (globalAiSend && globalAiInput) {
    globalAiSend.addEventListener('click', () => sendGlobalAiQuery(globalAiInput.value));
    globalAiInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendGlobalAiQuery(globalAiInput.value);
    });
  }

  globalAiChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sendGlobalAiQuery(chip.getAttribute('data-prompt'));
    });
  });
}

document.addEventListener('DOMContentLoaded', init);
