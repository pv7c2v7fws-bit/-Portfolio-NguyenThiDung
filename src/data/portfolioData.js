import { FolderTree, Search, MessageSquare, Users, PenTool, ShieldCheck, Languages } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Nguyễn Thị Dung",
    id: "K70",
    major: "Ngành Quản trị kinh doanh",
    university: "Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội (UEB - VNU)",
    bio: "Portfolio học tập ghi lại quá trình khám phá ứng dụng công nghệ số và AI trong việc tổ chức tài liệu, tìm kiếm thông tin, trình bày sản phẩm học thuật.",
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
      process: [
  { step: "Phân tích nhu cầu", detail: "Xác định nhu cầu lưu trữ theo chu kỳ học tập thay vì gộp chung, để dễ tra cứu khi số lượng file tăng." },
  { step: "Thiết kế cấu trúc thư mục", detail: "Xây dựng cây thư mục 3 cấp: Môn học > Chương/Tuần > Loại tài liệu (Bài giảng, Bài tập, Tài liệu tham khảo)." },
  { step: "Thiết lập quy tắc đặt tên", detail: "Đặt tên file không dấu, phân tách bằng gạch dưới (vd. ThucHanh_hotensinhvien) để tránh lỗi đồng bộ và dễ tìm kiếm." },
  { step: "Đồng bộ hóa", detail: "Đồng bộ thư mục lên lưu trữ đám mây để truy cập và sao lưu từ nhiều thiết bị." }
],
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
      process: [
  { step: "Xác định phạm vi", detail: "Giới hạn chủ đề trong khung thời gian 2021-2026 để đảm bảo tính cập nhật." },
  { step: "Khai thác đa nguồn", detail: "Kết hợp 4 nhóm nguồn độc lập (cơ sở dữ liệu học thuật, tạp chí chuyên ngành, sách chuyên khảo, nguồn mở uy tín) để đối chiếu chéo." },
  { step: "Áp dụng toán tử tìm kiếm", detail: "Sử dụng AND, OR, filetype:pdf, site: trên Google Scholar để lọc nhanh tài liệu đã qua phản biện." },
  { step: "Đánh giá độ tin cậy", detail: "Áp dụng 5 tiêu chí CRAAP (Currency, Relevance, Authority, Accuracy, Purpose) để loại nguồn thiếu tin cậy." }
],
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
      process: [
  { step: "Thử nghiệm prompt cơ bản", detail: "Quan sát kết quả AI trả về khi dùng yêu cầu chung chung — thường thiếu trọng tâm, lan man." },
  { step: "Tái cấu trúc prompt", detail: "Áp dụng mô hình 4 thành phần: Vai trò (Role), Ngữ cảnh (Context), Nhiệm vụ (Task), Định dạng đầu ra (Format)." },
  { step: "So sánh kết quả", detail: "Đối chiếu 2 phiên bản, nhận thấy prompt có cấu trúc giúp AI bám sát yêu cầu và giảm lan man rõ rệt." }
],
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
      process: [
  { step: "Quản lý tiến độ (Trello)", detail: "Mỗi thành viên tạo thẻ công việc, chuyển trạng thái Chưa làm/Đang làm/Hoàn thành kèm checklist tự giám sát." },
  { step: "Biên tập nội dung (Google Docs)", detail: "Soạn thảo đồng thời, dùng tính năng Suggesting để rà soát thay đổi trước khi chốt." },
  { step: "Giao tiếp nhanh (Zalo)", detail: "Trao đổi và bình chọn khi có ý tưởng chưa thống nhất giữa các thành viên." }
],

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
      process: [
  { step: "Lên ý tưởng & viết nội dung", detail: "Dùng ChatGPT với prompt quy định rõ cấu trúc đầu ra (tiêu đề, hook, luận điểm kèm số liệu, thông điệp kết)." },
  { step: "Tạo hình ảnh minh họa", detail: "Dùng DALL-E để tạo hình ảnh theo phong cách gần gũi, phù hợp đối tượng học sinh/sinh viên." },
  { step: "Thiết kế & hoàn thiện", detail: "Dùng Canva AI để bố cục, tinh chỉnh màu sắc và thứ tự đọc cho hài hòa." },
  { step: "Kiểm chứng thông tin", detail: "Tự đối chiếu các số liệu AI cung cấp với nguồn xác thực để tránh sai lệch (hallucination)." }
],
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
      process: [
  { step: "Nghiên cứu quy định", detail: "Tìm hiểu các quy định về đạo văn và liêm chính học thuật hiện hành." },
  { step: "Nhận diện rủi ro", detail: "Đối chiếu với thực tế sử dụng AI để rút ra rủi ro phổ biến: phụ thuộc AI, không kiểm chứng, lộ dữ liệu cá nhân." },
  { step: "Đúc kết nguyên tắc", detail: "Xây dựng 5 nguyên tắc cá nhân, mỗi nguyên tắc gắn với một rủi ro cụ thể đã quan sát được." }
],
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
