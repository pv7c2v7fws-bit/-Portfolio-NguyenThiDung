import { FolderTree, Search, MessageSquare, Users, PenTool, ShieldCheck, Languages } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Nguyễn Thị Dung",
    id: "K70",
    major: "Ngành Quản trị kinh doanh",
    university: "Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội (UEB - VNU)",
    bio: "Portfolio học tập ghi lại quá trình ứng dụng công nghệ số và AI trong việc tổ chức tài liệu, tìm kiếm thông tin, trình bày sản phẩm học thuật và khám phá văn hóa Việt Nam.",
    skills: [
      "Business Management",
      "Digital Marketing",
      "Financial Analysis",
      "AI-assisted Business",
      "Academic Research",
      "Leadership & Communication"
    ]
  },
  overview: [
    { id: 1, title: "Quản lý dữ liệu", desc: "Máy tính, tệp và thư mục", icon: FolderTree },
    { id: 2, title: "Khai thác thông tin", desc: "Tìm kiếm & đánh giá dữ liệu", icon: Search },
    { id: 3, title: "Tư duy AI", desc: "Prompt engineering hiệu quả", icon: MessageSquare },
    { id: 4, title: "Hợp tác trực tuyến", desc: "Làm việc nhóm trong môi trường số", icon: Users },
    { id: 5, title: "Sáng tạo nội dung", desc: "Tạo sản phẩm số với AI", icon: PenTool },
    { id: 6, title: "Liêm chính học thuật", desc: "An toàn số & AI có trách nhiệm", icon: ShieldCheck },
    { id: 7, title: "AI trong học tập ngôn ngữ", desc: "Ứng dụng AI có chọn lọc và trách nhiệm", icon: Languages },
  ],
  projects: [
    {
      id: 1,
      title: "Bài 1: Máy tính và quản lý tệp/thư mục",
      chapter: "Chương 1 & 2",
      shortDesc: "Tổ chức không gian làm việc số và thiết lập quy tắc quản lý dữ liệu cá nhân.",
      skills: ["Quản lý hệ điều hành", "Tổ chức dữ liệu", "Lưu trữ đám mây"],
      target: "Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp đã thiết lập.",
      process: "Trước khi tạo thư mục, tôi phân tích nhu cầu lưu trữ theo chu kỳ học tập (môn học → kỳ học → loại tài liệu) thay vì gộp chung một chỗ, để dễ tra cứu khi số lượng file tăng lên. Cây thư mục được thiết kế theo 3 cấp: Môn học > Chương/Tuần > Loại tài liệu (Bài giảng, Bài tập, Tài liệu tham khảo). Quy tắc đặt tên file thống nhất dạng không dấu, phân tách bằng gạch dưới (vd. ThucHanh_hotensinhvien) để tránh lỗi khi đồng bộ trên các hệ điều hành khác nhau và thuận tiện khi tìm kiếm bằng từ khóa. Sau khi hoàn thiện, thư mục được đồng bộ lên lưu trữ đám mây để có thể truy cập và sao lưu từ nhiều thiết bị.",

      evidenceImg: "/images/Bài 1.png",
      report: "/docs/Bài 1.pdf",
      status: "Hoàn thành"
    },
    {
      id: 2,
      title: "Bài 2: Khai thác dữ liệu và đánh giá thông tin",
      chapter: "Chương 2",
      shortDesc: "Áp dụng toán tử tìm kiếm nâng cao và đánh giá nguồn tin học thuật.",
      skills: ["Toán tử tìm kiếm", "Đánh giá CRAAP", "Phân tích tin giả"],
      target: "Trình bày kết quả tìm kiếm học thuật bằng các toán tử nâng cao và bảng đánh giá nguồn tin.",
      process: "Tôi xác định rõ mục tiêu tìm kiếm trước khi thao tác, tránh tìm kiếm dàn trải: chủ đề được giới hạn trong khung thời gian 2021-2026 để đảm bảo tính cập nhật, đồng thời kết hợp 4 nhóm nguồn độc lập (cơ sở dữ liệu học thuật, tạp chí chuyên ngành, sách chuyên khảo, nguồn mở uy tín) nhằm đối chiếu chéo thông tin thay vì chỉ dựa vào một nguồn duy nhất. Tôi sử dụng kết hợp các toán tử tìm kiếm nâng cao (AND, OR, filetype:pdf, site:) trên Google Scholar để lọc nhanh tài liệu học thuật đã qua phản biện. Với mỗi nguồn thu thập được, tôi đánh giá theo 5 tiêu chí CRAAP (Currency, Relevance, Authority, Accuracy, Purpose) để loại bỏ các nguồn thiếu độ tin cậy trước khi đưa vào báo cáo.",
      evidenceImg: "/images/Bài 2.png",
      report: "/docs/Bài 2.pdf",
      status: "Hoàn thành"
    },
    {
      id: 3,
      title: "Bài 3: Viết prompt hiệu quả và sử dụng AI",
      chapter: "Chương 3",
      shortDesc: "Kỹ thuật giao tiếp với mô hình ngôn ngữ lớn (LLMs).",
      skills: ["Prompt Engineering", "Tư duy phân tích", "Sử dụng GenAI"],
      target: "So sánh giữa Prompt ban đầu và Prompt cải tiến cùng kết quả đầu ra từ AI.",
      process: "Tôi bắt đầu bằng một prompt cơ bản, không có cấu trúc rõ ràng (chỉ nêu yêu cầu chung chung), quan sát kết quả AI trả về thường chung chung, thiếu trọng tâm. Từ đó tôi rút ra hạn chế và tái cấu trúc prompt theo mô hình gồm 4 thành phần: Vai trò (Role) để AI nhập vai chuyên gia phù hợp, Ngữ cảnh (Context) cung cấp thông tin nền, Nhiệm vụ (Task) nêu rõ yêu cầu cụ thể, và Định dạng đầu ra (Format) quy định cách trình bày kết quả (số lượng gạch đầu dòng, độ dài, giọng văn). So sánh hai kết quả cho thấy prompt có cấu trúc giúp AI bám sát yêu cầu hơn, giảm hiện tượng trả lời lan man hoặc bỏ sót ý - qua đó tôi hiểu được cơ chế AI dự đoán câu trả lời dựa trên mức độ rõ ràng và cụ thể của ngữ cảnh đầu vào.",
      evidenceImg: "/images/Bài 3.png",
      report: "/docs/Bài 3.pdf",
      status: "Hoàn thành"
    },
    {
      id: 4,
      title: "Bài 4: Hợp tác trực tuyến trong môi trường số",
      chapter: "Chương 4",
      shortDesc: "Sử dụng các nền tảng số để quản lý dự án và làm việc nhóm.",
      skills: ["Quản lý dự án", "Giao tiếp số", "Công cụ hợp tác (Google Workspace/Notion)"],
      target: "Trình bày minh chứng về việc sử dụng công cụ quản lý dự án nhóm và cách phối hợp.",
      process: "Nhóm thiết lập không gian làm việc chung ngay từ đầu để tránh chồng chéo công việc: Trello dùng để quản lý tiến độ cá nhân (mỗi thành viên tự tạo thẻ công việc, chuyển trạng thái Chưa làm/Đang làm/Hoàn thành kèm checklist tự giám sát), Google Docs dùng cho việc soạn thảo và góp ý nội dung đồng thời (sử dụng tính năng Suggesting để các thay đổi có thể được rà soát trước khi chốt), còn Zalo nhóm dùng cho trao đổi nhanh và bình chọn khi có ý tưởng chưa thống nhất. Việc tách riêng 3 công cụ theo 3 mục đích khác nhau (quản lý tiến độ / biên tập nội dung / giao tiếp tức thời) giúp giảm tình trạng thông tin bị trôi và đảm bảo mọi thành viên nắm được tiến độ chung mà không cần họp liên tục.",
      evidenceImg: "/images/Bài 4.png",
      report: "/docs/Bài 4.pdf",
      status: "Hoàn thành"
    },
    {
      id: 5,
      title: "Bài 5: Sáng tạo nội dung số với AI",
      chapter: "Chương 5",
      shortDesc: "Tạo ra các sản phẩm truyền thông số có sự hỗ trợ của Trí tuệ nhân tạo.",
      skills: ["Thiết kế số", "Tạo sinh hình ảnh/văn bản", "Công cụ thiết kế AI"],
      target: "Trưng bày sản phẩm nội dung số hoàn thiện được hỗ trợ bởi AI.",
      process: "Tôi lựa chọn định dạng infographic vì phù hợp để truyền tải thông điệp sức khỏe tinh thần một cách trực quan, dễ tiếp cận với đối tượng học sinh/sinh viên. Quy trình gồm 3 bước sử dụng công cụ AI khác nhau cho từng công đoạn: (1) ChatGPT để xây dựng nội dung văn bản — tôi thiết kế prompt yêu cầu rõ cấu trúc đầu ra (tiêu đề, hook mở đầu, luận điểm kèm số liệu, thông điệp kết) để tránh nội dung lan man; (2) DALL-E để tạo hình ảnh minh họa phù hợp phong cách gần gũi, không hù dọa; (3) Canva AI để bố cục và tinh chỉnh lại toàn bộ layout cho hài hòa về màu sắc và thứ tự đọc. Sau khi có bản nháp, tôi tự kiểm tra chéo các số liệu do AI cung cấp bằng cách tìm nguồn xác thực, tránh việc AI tạo ra thông tin sai lệch (hallucination).",
      evidenceImg: "/images/Bài 5.png",
      report: "/docs/Bài 5.pdf",
      status: "Hoàn thành"
    },
    {
      id: 6,
      title: "Bài 6: An toàn số, liêm chính học thuật và AI có trách nhiệm",
      chapter: "Chương 6",
      shortDesc: "Hiểu và áp dụng các quy tắc đạo đức khi sử dụng công nghệ và AI.",
      skills: ["Bảo mật thông tin", "Trích dẫn tài liệu", "Đạo đức AI"],
      target: "Trình bày bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm dựa trên các nghiên cứu.",
      process: "Tôi tìm hiểu các quy định về đạo văn và liêm chính học thuật hiện hành, đối chiếu với thực tế sử dụng AI trong học tập để rút ra những rủi ro phổ biến nhất (phụ thuộc hoàn toàn vào AI, không kiểm chứng thông tin, vô tình để lộ dữ liệu cá nhân khi chat). Từ đó tôi đúc kết bộ 5 nguyên tắc cá nhân: (1) luôn kiểm chứng lại thông tin do AI tạo ra trước khi sử dụng, (2) minh bạch công cụ AI đã dùng khi nộp bài, (3) không dùng AI để làm thay 100% nội dung bài tập, (4) không chia sẻ dữ liệu cá nhân/nhạy cảm khi trò chuyện với AI, (5) tôn trọng bản quyền khi AI tạo ra nội dung có thể trùng lặp với nguồn có sẵn. Mỗi nguyên tắc được xây dựng dựa trên một rủi ro cụ thể đã quan sát được trong quá trình sử dụng AI phục vụ học tập, không chỉ liệt kê lý thuyết chung chung.",
      evidenceImg: "/images/Bài 6.png",
      report: "/docs/Bài 6.pdf",
      status: "Hoàn thành"
    }
  ],
  rubric: [
    { criteria: "Bài 1: Quản lý tệp/thư mục", excellent: "Cấu trúc tối ưu, quy tắc đặt tên rõ ràng, minh họa sắc nét.", status: "Hoàn thành", action: "Đã có ảnh minh họa và báo cáo chi tiết quy tắc đặt tên" },
    { criteria: "Bài 2: Tìm kiếm & Đánh giá", excellent: "Bảng đánh giá CRAAP chi tiết, dùng toán tử nâng cao hiệu quả.", status: "Hoàn thành", action: "Đã có bảng đánh giá nguồn tin và báo cáo CRAAP đầy đủ" },
    { criteria: "Bài 3: Viết Prompt hiệu quả", excellent: "So sánh rõ ràng trước/sau, phân tích lỗi và cải tiến sâu sắc.", status: "Hoàn thành", action: "Đã có so sánh prompt gốc và prompt cải tiến kèm kết quả" },
    { criteria: "Bài 4: Hợp tác trực tuyến", excellent: "Minh chứng rõ việc chia task, họp nhóm và quản lý tiến độ.", status: "Hoàn thành", action: "Đã có minh chứng Trello/Zalo/Google Docs của nhóm" },
    { criteria: "Bài 5: Sáng tạo nội dung với AI", excellent: "Sản phẩm đẹp, sáng tạo, trích dẫn rõ phần nào dùng AI.", status: "Hoàn thành", action: "Đã có sản phẩm infographic hoàn thiện kèm quy trình AI" },
    { criteria: "Bài 6: AI có trách nhiệm", excellent: "Bộ nguyên tắc cá nhân chặt chẽ, tư duy phản biện cao.", status: "Hoàn thành", action: "Đã có bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm" },
],
};
