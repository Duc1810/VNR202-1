"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

const infoCards = [
  {
    icon: "🪖",
    title: "Cuộc Chiến Biên Giới Kéo Dài 10 Năm",
    content: "Nhiều người nghĩ rằng chiến tranh Việt-Trung chỉ diễn ra trong vài tuần năm 1979. Thực tế, theo Giáo trình Lịch sử Đảng (trang 265), cuộc chiến tranh chống xâm lược bảo vệ Tổ quốc ở biên giới phía Bắc kéo dài 10 năm, từ năm 1979 đến năm 1989. Điều này có nghĩa là trong suốt ba năm đầu tiên của thời kỳ Đổi Mới (1986-1989), Việt Nam vẫn đang trong tình trạng chiến tranh ở biên giới phía Bắc. Các tỉnh Cao Bằng, Lạng Sơn, Lào Cai thường xuyên căng thẳng. Việt Nam vừa phải đổi mới kinh tế vừa phải bảo vệ biên giới, phân bổ nguồn lực cho cả kinh tế và quốc phòng trong điều kiện rất khó khăn.",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
  {
    icon: "🏝️",
    title: "64 Liệt Sĩ Gạc Ma: Cao Điểm Của Căng Thẳng",
    content: "Ngày 14 tháng 3 năm 1988, chỉ hơn 1 năm sau Đại hội VI, xảy ra trận hải chiến Gạc Ma (Johnson South Reef Skirmish). Đây là cao điểm nhất của các diễn biến căng thẳng trong giai đoạn này. Trung Quốc đã cho quân đội chiếm đảo Gạc Ma và các bãi cạn Châu Viên, Chữ Thập, Tư Nghĩa,... ở quần đảo Trường Sa của Việt Nam. 64 chiến sĩ Việt Nam đã hy sinh, hầu hết không có vũ khí nặng. Trung Quốc sử dụng 3 tàu khu trục với hỏa lực mạnh. Liên Xô không can thiệp mặc dù có hiệp ước phòng thủ với Việt Nam.",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
  {
    icon: "📈",
    title: "Lạm Phát 774%: Khủng Hoảng Trước Đổi Mới",
    content: "Năm 1986, khi Đại hội VI họp, Việt Nam đang đối mặt với tình trạng lạm phát kinh hoàng: 774%. Để so sánh, lạm phát 300% năm 1985 đã được coi là nghiêm trọng. Tình trạng này kết hợp với thiếu lương thực, hàng tiêu dùng và bị bao vây, cấm vận quốc tế, đã đặt Việt Nam vào tình thế rất khó khăn. Nhờ chính sách Đổi mới, đặc biệt là Nghị quyết 10 (Khoán 10), tình hình đã cải thiện nhanh: lạm phát giảm xuống 67,1% (1991) và 12,7% (1995), từ nhập khẩu gạo thành xuất khẩu gạo năm 1989.",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
  {
    icon: "📈",
    title: "Campuchia: Mấu Chốt Của Sự Bao Vây",
    content: "Vấn đề Campuchia là mấu chốt khiến Việt Nam bị cô lập quốc tế. Việt Nam đưa quân vào Campuchia (25/12/1978) để lật đổ chế độ Khmer Đỏ diệt chủng. Mặc dù hành động này chấm dứt thảm sát, nhưng Mỹ, Trung Quốc, ASEAN coi đây là xâm lược và áp đặt bao vây. Quyết định rút quân khỏi Campuchia (5/1988: 50,000 quân; 9/1989: rút hết) đã mở đường cho bình thường hóa: Trung Quốc (11/1991), Mỹ (7/1995), gia nhập ASEAN (28/7/1995).",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
  {
    icon: "📈",
    title: "Liên Xô Không Can Thiệp Vào Trận Gạc Ma",
    content: "Mặc dù Liên Xô đã ký hiệp ước phòng thủ với Việt Nam (3/11/1978) và có căn cứ hải quân tại Cam Ranh, họ đã không can thiệp quân sự khi Trung Quốc tấn công năm 1979 và trong trận Gạc Ma 1988. Liên Xô chỉ cung cấp vũ khí và cố vấn, thậm chí từ chối gửi tàu tiếp tế. Lý do: khoảng cách địa lý xa, quan hệ Xô-Trung đang cải thiện, Trung Quốc tuyên bố chiến tranh có giới hạn, và Liên Xô đang gặp khó ở Afghanistan.",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
  {
    icon: "📈",
    title: "Đổi Mới Giữa Lúc Còn Chiến Tranh",
    content: "Việt Nam đã phải tiến hành Đổi mới trong điều kiện vẫn còn chiến tranh. Đại hội VI (12/1986) khởi xướng Đổi mới, nhưng chiến tranh biên giới tiếp tục đến 1989, trận Gạc Ma xảy ra giữa năm 1988. Đây là thách thức cực lớn: vừa cải cách kinh tế, vừa quốc phòng, vừa đối phó bao vây. Nghị quyết 10 (Khoán 10) ra đời 5/4/1988, chỉ 3 tuần sau Gạc Ma, cho thấy quyết tâm đổi mới bất chấp khó khăn.",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
  {
    icon: "📈",
    title: "Hòa Bình Thực Sự Chỉ Có Từ 1989",
    content: "Câu trả lời cho câu hỏi Việt Nam đã thực sự hòa bình chưa sau năm 1986? là: CHƯA. Chỉ sau khi cuộc chiến biên giới kết thúc (1989) và rút quân khỏi Campuchia (9/1989), đất nước mới thực sự bước vào giai đoạn hòa bình ổn định. Giai đoạn 1986-1989 là đổi mới trong chiến tranh, từ 1989 mới có hòa bình thực sự cho phép bình thường hóa với Trung Quốc (1991), Mỹ (1995) và gia nhập ASEAN.",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
  {
    icon: "📈",
    title: "Từ Bị Cô Lập Đến Gia Nhập ASEAN",
    content: "Trước 1989, Việt Nam bị bao vây bởi ASEAN, Mỹ, Trung Quốc. Sau khi rút quân Campuchia, chỉ trong 6 năm (1989-1995) đã trở thành thành viên ASEAN. Đây là bước ngoặt quan trọng đánh dấu Việt Nam thực sự có môi trường hòa bình để phát triển. Kết quả: kết thúc bao vây cấm vận, mở cửa thương mại và đầu tư, tăng trưởng nhanh sau 1995, môi trường hòa bình ổn định.",
    color: "from-red-500/50 to-rose-500/20",
    borderColor: "border-red-400/30",
  },
];

export default function DidYouKnowPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen bg-[#121212] text-[#d9d9d9] relative overflow-hidden"
      style={{
        backgroundImage:
          " ",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/80 pointer-events-none"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#f35e53]/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-float-delay"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
      </div>

      <Header currentPath="/ban-co-biet" />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20 px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="hero"
          data-animate
          className={`transition-all duration-1000 ${isVisible["hero"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center">
            <div className="inline-block">
              <div className="inline-flex items-center gap-3 rounded-full border-2 border-[#f35e53]/50 bg-[#f35e53]/10 px-6 py-3 backdrop-blur-sm mb-6">
                <svg
                  className="w-6 h-6 text-[#f35e53] animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-inter text-lg font-bold text-[#f35e53] uppercase tracking-wider">
                  Sự thật ít người biết
                </span>
              </div>
            </div>

            <h1 className="font-quicksand text-5xl lg:text-7xl font-extrabold text-white drop-shadow-2xl mb-6">
              <span className="bg-linear-to-r from-[#f35e53] via-[#ffd966 ] to-[#f35e53] bg-clip-text text-transparent animate-gradient">
                BẠN CÓ BIẾT?
              </span>
            </h1>

            <div className="h-1.5 w-48 bg-linear-to-r from-transparent via-[#f35e53] to-transparent rounded-full mx-auto mb-8"></div>

            <p className="font-quicksand text-xl lg:text-2xl font-medium text-[#d9d9d9]/90 max-w-3xl mx-auto leading-relaxed">
              Giai đoạn từ 1986 đến 1995 không chỉ là thời kỳ Đổi mới mà còn là thời kỳ đầy thử thách về an ninh và chủ quyền. Dưới đây là những sự thật lịch sử quan trọng giúp bạn hiểu rõ hơn về câu hỏi:  {'"Việt Nam đã thực sự hòa bình chưa sau năm 1986?"'}
            </p>
          </div>
        </section>

        <section
          id="content"
          data-animate
          className={`grid items-center gap-12 lg:grid-cols-1 transition-all duration-1000 delay-200 ${isVisible["content"] ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoCards.map((card, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative backdrop-blur-sm bg-linear-to-br ${card.color
                  } p-6 rounded-2xl border-2 ${card.borderColor
                  } shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer ${activeCard === index ? "scale-105" : ""
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Content */}
                <div className="pl-8">
                  <h3 className="font-inter text-xl lg:text-2xl font-extrabold text-white mb-3 transition-colors">
                    {card.title}
                  </h3>
                  <div className="h-1 w-16 bg-linear-to-r from-white to-transparent rounded-full mb-4"></div>
                  <p className="font-quicksand text-base lg:text-lg font-medium text-[#d9d9d9]/90 leading-relaxed">
                    {card.content}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-[#f35e53]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer backgroundImage="/assets/home/111_183.svg" />
    </div>
  );
}
