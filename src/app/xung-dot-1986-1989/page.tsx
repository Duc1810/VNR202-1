"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Chiến Tranh Biên Giới Phía Bắc Tiếp Diễn",
    copy: 'Theo Giáo trình Lịch sử Đảng, "cuộc chiến tranh chống xâm lược bảo vệ Tổ quốc ở biên giới phía Bắc kéo dài 10 năm, từ năm 1979 đến năm 1989." Trong ba năm đầu Đổi mới (1986-1989), Việt Nam vẫn trong tình trạng chiến tranh. Tình hình "Trên một số vùng biên giới phía Bắc diễn biến phức tạp, căng thẳng." Các tỉnh Cao Bằng, Lạng Sơn, Lào Cai thường xuyên xảy ra đụng độ. Trung Quốc duy trì áp lực quân sự, buộc Việt Nam phải duy trì lực lượng lớn ở biên giới thay vì tập trung cho phát triển kinh tế.',
    image: "https://llct.1cdn.vn/2019/06/25/lyluanchinhtri.vn-home-media-k2-items-cache-_de1232d0643fbdd326c1e015a0322df6_l.jpg",
    reverse: true,
    src: "Chiến tranh biên giới phía Bắc"
  },
  {
    title: "Trận Hải Chiến Gạc Ma (14/3/1988)",
    copy: 'Vào tháng 3/1988, xảy ra "cao điểm nhất" của căng thẳng: Trung Quốc tấn công và chiếm Gạc Ma. Trung Quốc lấy cớ xây dựng trạm quan sát biển theo chương trình UNESCO. Ngày 14/3/1988, Trung Quốc đã "cho quân đội chiếm đảo Gạc Ma và các bãi cạn Châu Viên, Chữ Thập, Tư Nghĩa ở quần đảo Trường Sa." Trung Quốc sử dụng 3 tàu khu trục có hỏa lực mạnh tấn công tàu vận tải Việt Nam. 64 chiến sĩ Việt Nam hy sinh, phần lớn không có vũ khí nặng. 64 chiến sĩ hy sinh, 2 tàu vận tải bị đánh chìm (HQ-604, HQ-605), 1 tàu đổ bộ HQ-505 tự mắc cạn. Trung Quốc chiếm Gạc Ma và xây công sự. Liên Xô không can thiệp mặc dù có hiệp ước phòng thủ với Việt Nam và căn cứ hải quân tại Cam Ranh, chỉ cung cấp vũ khí và cố vấn, thậm chí từ chối gửi tàu tiếp tế.',
    image: "https://imgnvsk.vnanet.vn/MediaUpload/Medium/2024/03/12/312-10-7-32.jpg",
    reverse: true,
    src: "Hải chiến Gạc Ma"
  },
  {
    title: "Vấn Đề Campuchia: Mấu Chốt Bao Vây",
    copy: 'Vấn đề Campuchia là "mấu chốt khiến Việt Nam bị cô lập" quốc tế. Việt Nam đưa quân vào Campuchia (25/12/1978) để lật đổ Khmer Đỏ diệt chủng. Mặc dù chấm dứt thảm sát, nhưng Mỹ, Trung Quốc, ASEAN coi đây là "xâm lược" và áp đặt bao vây. Để phá thế bị bao vây: Tháng 5/1988 rút 50,000 quân về nước; 9/1989 rút hết quân tình nguyện. Đây là bước ngoặt then chốt, phá vỡ thế bao vây, mở đường bình thường hóa với Trung Quốc (1991) và Mỹ (1995).',
    image: "https://file3.qdnd.vn/data/images/0/2024/11/18/upload_2326/chien-dich-dong-bac-campuchia-1971.jpg?dpi=150&quality=100&w=870",
    reverse: true,
    src: "Chiến tranh Campuchia"
  },
  {
    title: "Hoạt Động Chống Phá",
    copy: 'Các thế lực thù địch không chỉ bao vây, cấm vận mà còn "dung dưỡng các tổ chức phản động người Việt từ nước ngoài trở về Việt Nam gây bạo loạn, lật đổ." Họ lợi dụng khó khăn kinh tế để kích động bất ổn xã hội và chống phá chính quyền.',
    image: "https://file3.qdnd.vn/data/images/0/2025/04/20/upload_2237/15.png?dpi=150&quality=100&w=870",
    reverse: true,
    src: "Đại thắng mùa xuân 1975"
  },
  {
    title: "Đổi Mới Bất Chấp Thách Thức",
    copy: 'Điều đáng kinh ngạc là giữa những thách thức an ninh nghiêm trọng, Việt Nam vẫn kiên trì đổi mới. Nghị quyết số 10-NQ/TW về "Đổi mới quản lý kinh tế nông nghiệp" (Khoán 10) ra đời 5/4/1988, chỉ 3 tuần sau trận Gạc Ma. Kết quả: Lạm phát giảm từ 774% (1986) xuống 67,1% (1991), từ nhập 450,000 tấn gạo (1988) thành xuất khẩu (1989).',
    image: "https://ordi.vn/wp-content/uploads/2021/10/%C4%90%E1%BA%A1i-h%E1%BB%99i-%C4%91%E1%BA%A1i-bi%E1%BB%83u-to%C3%A0n-qu%E1%BB%91c-l%E1%BA%A7n-th%E1%BB%A9-VI-c%E1%BB%A7a-%C4%90%E1%BA%A3ng-12-1986.-%E1%BA%A2nh-T%C6%B0-li%E1%BB%87u..jpg",
    reverse: true,
    src: "Đại hội VI"
  },
];

const ruleSections = [
  {
    title: "Một",
    copy: "Tiếp tục xây dựng Nhà nước pháp quyền XHCN dưới sự lãnh đạo của Đảng là yêu cầu căn bản. Nhà nước pháp quyền ở Việt Nam mang bản chất giai cấp công nhân, phục vụ lợi ích của nhân dân.",
    image: "/assets/phat-huy/0036c937903d35f66cc69b52fca668c06cddf1f8.png",
    reverse: true,
  },
  {
    title: "Hai",
    copy: "Đẩy mạnh cải cách thể chế và đổi mới phương thức hoạt động của Nhà nước. Quốc hội cần được kiện toàn để thực sự phát huy vai trò cơ quan quyền lực cao nhất.",
    image: "/assets/phat-huy/2f1706022f9d71e1f390cf6cb55a0a1feeef86e7.png",
    reverse: false,
  },
  {
    title: "Ba",
    copy: "Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực là điều kiện tiên quyết để xây dựng bộ máy tinh gọn và hiệu quả.",
    image: "/assets/phat-huy/f79159de52920b9d05f46e0ff2f6c2471b6294df.png",
    reverse: true,
  },
  {
    title: "Bốn",
    copy: "Đẩy mạnh phòng, chống tham nhũng, lãng phí và thực hành tiết kiệm. Cần hoàn thiện thể chế, cải cách hành chính để ngăn ngừa và xử lý kịp thời.",
    image: "/assets/phat-huy/a2e9d8e09812571adb62ae8182f0001348ff7040.png",
    reverse: false,
  },
];

export default function PromoteDemocracyPage() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

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

      <Header currentPath="/xung-dot-1986-1989" />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-32 px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="hero"
          data-animate
          className={`grid items-center gap-12 lg:grid-cols-2 transition-all duration-1000 ${isVisible["hero"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="space-y-8 backdrop-blur-sm bg-linear-to-br from-black/60 to-black/40 p-8 rounded-3xl border border-white/10">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#f35e53]/50 bg-[#f35e53]/10 px-5 py-2.5 backdrop-blur-sm">
                <div className="h-2.5 w-2.5 rounded-full bg-[#f35e53] animate-pulse"></div>
                <span className="font-inter text-sm font-bold text-[#f35e53] uppercase tracking-wider">
                  Đổi Mới Giữa Lúc Còn Chiến Tranh
                </span>
              </div>
            </div>

            <h2 className="font-quicksand text-4xl font-extrabold text-white drop-shadow-2xl leading-tight md:text-5xl lg:text-6xl">
              <span className="bg-linear-to-r from-[#f35e53] via-[#ffd966 ] to-[#f35e53] bg-clip-text text-transparent animate-gradient">
                Xung Đột Và Thách Thức (1986-1989)
              </span>
            </h2>

            <div className="space-y-4">
              <div className="h-1 w-24 bg-linear-to-r from-[#f35e53] to-transparent rounded-full"></div>
              <p className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 leading-relaxed lg:text-xl">
                Giai đoạn 1986-1989 là thời kỳ đặc biệt trong lịch sử Việt Nam: vừa tiến hành Đổi mới toàn diện vừa phải đối mặt với các thách thức nghiêm trọng về an ninh quốc gia. Mặc dù Đại hội VI (12/1986) đã khởi xướng công cuộc Đổi mới, đất nước vẫn chưa thực sự có hòa bình. Cuộc chiến tranh biên giới phía Bắc với Trung Quốc tiếp tục kéo dài, cao trào là trận hải chiến Gạc Ma tháng 3/1988 với 64 liệt sĩ hy sinh. Đồng thời, vấn đề Campuchia là mấu chốt khiến Việt Nam bị bao vây, cấm vận quốc tế. Chỉ sau khi rút quân khỏi Campuchia (9/1989) và kết thúc xung đột biên giới, Việt Nam mới thực sự bước vào thời kỳ hòa bình ổn định.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-[#f35e53]/30 to-transparent rounded-3xl blur-2xl"></div>
            <img
              src="https://media.vov.vn/sites/default/files/styles/large/public/2022-02/vi_xuyen_1.jpg  "
              alt="Tổng bí thư trong vòng tay nhân dân"
              width={900}
              height={600}
              className="relative h-auto w-full rounded-2xl shadow-2xl border-4 border-[#f35e53]/20 transform group-hover:scale-105 transition-all duration-500"
            />
            <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
              Chiến tranh biên giới phía Bắc
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.title}
              id={`step-${index}`}
              data-animate
              className={`grid items-center gap-12 lg:grid-cols-2 transition-all duration-1000 ${isVisible[`step-${index}`]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
                }`}
            >
              {step.reverse ? (
                <>
                  <div className="lg:order-last backdrop-blur-sm bg-linear-to-br from-black/60 to-black/40 p-10 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-[#f35e53] to-[#ffcccc] shadow-lg">
                        <span className="font-inter text-2xl font-extrabold text-black">
                          {index + 1}
                        </span>
                      </div>
                      <h2 className="font-quicksand text-4xl lg:text-5xl font-extrabold text-white">
                        <span className="bg-linear-to-r from-[#f35e53] to-[#fdcccc] bg-clip-text text-transparent">
                          {step.title}
                        </span>
                      </h2>
                    </div>
                    <div className="h-1 w-20 bg-linear-to-r from-[#f35e53] to-transparent rounded-full mb-6"></div>
                    <p className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 leading-relaxed">
                      {step.copy}
                    </p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-linear-to-l from-[#f35e53]/20 to-transparent rounded-3xl blur-xl"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      width={900}
                      height={600}
                      className="relative h-auto w-full rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-105 transition-all duration-500"
                    />
                    <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                      {step.src}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-linear-to-r from-[#f35e53]/20 to-transparent rounded-3xl blur-xl"></div>
                    <img
                      src={step.image}
                      alt={step.title}
                      width={900}
                      height={600}
                      className="relative h-auto w-full rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-105 transition-all duration-500"
                    />
                    <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                      {step.src}
                    </p>
                  </div>
                  <div className="backdrop-blur-sm bg-linear-to-br from-black/60 to-black/40 p-10 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-[#f35e53] to-[#ffd966 ] shadow-lg">
                        <span className="font-inter text-2xl font-extrabold text-black">
                          {index + 1}
                        </span>
                      </div>
                      <h2 className="font-quicksand text-4xl lg:text-5xl font-extrabold text-white">
                        <span className="bg-linear-to-r from-[#f35e53] to-[#ffd966 ] bg-clip-text text-transparent">
                          {step.title}
                        </span>
                      </h2>
                    </div>
                    <div className="h-1 w-20 bg-linear-to-r from-[#f35e53] to-transparent rounded-full mb-6"></div>
                    <p className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 leading-relaxed">
                      {step.copy}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </section>

        <section
          id="cong-cu"
          data-animate
          className={`grid items-center gap-12 md:grid-cols-2 transition-all duration-1000 delay-500 ${isVisible["cong-cu"]
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
            }`}
        >
          <div className="space-y-6 backdrop-blur-sm bg-linear-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="space-y-4">
              <h2 className="font-quicksand text-3xl font-extrabold text-white lg:text-4xl">
                <span className="bg-linear-to-r from-[#f35e53] to-[#ffcccc] bg-clip-text text-transparent">
                  Các Mốc Thời Gian 1986-1989
                </span>
              </h2>
            </div>

            <div className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 space-y-6 leading-relaxed">
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  <strong>12/1986:</strong> Đại hội VI của Đảng Cộng sản Việt Nam khởi xướng công cuộc Đổi mới, đánh dấu bước ngoặt chiến lược trong đường lối phát triển đất nước, chuyển từ cơ chế bao cấp sang cơ chế thị trường định hướng xã hội chủ nghĩa.
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  <strong>14/3/1988:</strong> Trận hải chiến Gạc Ma diễn ra, 64 chiến sĩ hải quân Việt Nam anh dũng hy sinh khi bảo vệ chủ quyền tại quần đảo Trường Sa trước cuộc tấn công của Trung Quốc.
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  <strong>5/4/1988:</strong> Ban hành Nghị quyết 10 (Khoán 10) về đổi mới quản lý kinh tế nông nghiệp – chỉ 3 tuần sau trận Gạc Ma. Chính sách này mở đường cho sản xuất nông nghiệp phát triển mạnh mẽ, đưa Việt Nam từ nước thiếu lương thực trở thành nước xuất khẩu gạo.
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  <strong>5/1988:</strong> Việt Nam bắt đầu rút 50.000 quân tình nguyện khỏi Campuchia, thể hiện thiện chí hòa bình và bước đầu phá thế bao vây cô lập quốc tế.
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  <strong>9/1989:</strong> Việt Nam rút hết quân tình nguyện khỏi Campuchia, kết thúc hơn 10 năm làm nghĩa vụ quốc tế, tạo điều kiện để bình thường hóa quan hệ với các nước trong khu vực và thế giới.
                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  <strong>1989:</strong> Chiến tranh biên giới phía Bắc kết thúc, đánh dấu chấm dứt một thập kỷ xung đột vũ trang kéo dài, mở ra giai đoạn hòa bình và phát triển mới cho đất nước.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-l from-[#f35e53]/30 to-transparent rounded-3xl blur-2xl"></div>
              <img
                src="https://thuviennguyenvanhuong.vn/wp-content/uploads/2024/10/mau-dich-2-1479096581.jpg"
                alt="Người dân lao động"
                width={900}
                height={800}
                className="relative mb-20 h-auto w-full min-w-xl rounded-2xl border-2 border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <p className="absolute top-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                Việt Nam thời bao cấp
              </p>
              <img
                src="https://media.baoquangninh.vn/dataimages/202009/original/images1418831_2.jpg"
                alt="Người dân lao động"
                width={900}
                height={800}
                className="relative h-auto w-full min-w-xl rounded-2xl border-2 border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                Việt Nam thời bao cấp
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer backgroundImage="/assets/home/111_183.svg" />
    </div>
  );
}
