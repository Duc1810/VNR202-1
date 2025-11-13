"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const steps = [
  {
    title: "Kết Thúc Chiến Tranh Biên Giới (1989)",
    copy: 'Năm 1989 đánh dấu chấm dứt cuộc chiến tranh biên giới kéo dài 10 năm (1979-1989). Tình hình biên giới phía Bắc trở nên ổn định, các cuộc đụng độ giảm đáng kể. Việc kết thúc xung đột này giải phóng nguồn lực quốc phòng để tập trung cho phát triển kinh tế và đối ngoại. Từ đây, Việt Nam mới có môi trường an ninh thực sự để thực hiện đổi mới và mở cửa. Key achievements: Ổn định tình hình an ninh biên giới phía Bắc; Giảm chi phí quốc phòng, tăng ngân sách phát triển kinh tế; Tạo tiền đề cho bình thường hóa quan hệ với Trung Quốc',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRqItZKTbcwFpUdRuBMI3Rw-bFsvgof0A3w&s",
    reverse: true,
  },
  {
    title: "Hoàn Tất Rút Quân Khỏi Campuchia (9/1989)",
    copy: 'Ngày 26 tháng 9 năm 1989, Việt Nam hoàn tất việc rút toàn bộ quân tình nguyện khỏi Campuchia. Đây là quyết định chiến lược quan trọng nhất, phá vỡ "mấu chốt" gây ra sự bao vây quốc tế. Mặc dù có rủi ro về an ninh khu vực, Việt Nam đã ưu tiên hòa bình và hợp tác quốc tế. Quyết định này mở đường cho việc giải quyết xung đột Campuchia bằng chính trị. Key achievements: Rút hoàn toàn 50,000 quân tình nguyện (từ 5/1988 đến 9/1989); Phá vỡ cớ để các nước bao vây, cấm vận Việt Nam; Mở đường cho Hiệp định Paris về Campuchia (23/10/1991)',
    image: "https://cdn-i.vtcnews.vn/files/thuylinh/2019/09/26/vietnam-6-1252224-7-1347191.jpg",
    reverse: true,
  },
  {
    title: "Bình Thường Hóa Quan Hệ Việt-Trung (11/1991)",
    copy: 'Ngày 3-5 tháng 11 năm 1991, Tổng Bí thư Đỗ Mười thăm Trung Quốc, chính thức bình thường hóa quan hệ sau 12 năm đối đầu. Đây là thành tựu ngoại giao quan trọng, chấm dứt thù địch và mở ra hợp tác kinh tế. Quan hệ Việt-Trung từ xung đột chuyển sang đối tác chiến lược, tạo nền tảng ổn định cho khu vực và phát triển kinh tế. Key achievements: Chấm dứt 12 năm đối đầu (1979-1991); Khôi phục quan hệ kinh tế, thương mại; Tạo nền tảng cho ổn định khu vực Đông Nam Á',
    image: "https://kinhtevadubao.vn/stores/news_dataimages/kinhtevadubaovn/112015/04/11/dua-quan-he-viet-trung-len-tam-cao-moi-19-.7536.jpg",
    reverse: true,
  },
  {
    title: "Bình Thường Hóa Quan Hệ Việt-Mỹ (7/1995)",
    copy: 'Ngày 11 tháng 7 năm 1995, Tổng thống Bill Clinton tuyên bố bình thường hóa quan hệ ngoại giao Việt-Mỹ. Đây là bước ngoặt lịch sử, chấm dứt 20 năm thù địch sau chiến tranh. Việt Nam đã hợp tác tích cực trong vấn đề MIA (quân nhân Mỹ mất tích), thể hiện thiện chí và trách nhiệm. Bình thường hóa mở ra thời kỳ hợp tác toàn diện với siêu cường số 1 thế giới. Key achievements: Chấm dứt cấm vận kinh tế từ 1975; Mở ra đầu tư, thương mại với thị trường lớn nhất thế giới; Thúc đẩy hội nhập kinh tế toàn cầu',
    image: "https://vnanet.vn/Data/Articles/2019/07/02/3951898/vna_potal_ky_niem_24_nam_ngay_binh_thuong_hoa_quan_he_ngoai_giao_viet_nam_%E2%80%93_hoa_ky_1171995_%E2%80%93_1172019_%E2%80%9Cgac_lai_qua_khu_vuot_qua_khac_bi_195529143_stand.jpg",
    reverse: true,
  },
  {
    title: "Gia Nhập ASEAN (28/7/1995)",
    copy: 'Ngày 28 tháng 7 năm 1995, Việt Nam chính thức trở thành thành viên thứ 7 của ASEAN tại Hội nghị Bộ trưởng Ngoại giao ASEAN lần thứ 28 ở Brunei. Đây là thành tựu đối ngoại quan trọng nhất, đánh dấu sự công nhận toàn diện của cộng đồng quốc tế. Từ một nước bị bao vây, Việt Nam đã trở thành thành viên của tổ chức khu vực quan trọng nhất. Key achievements: Kết thúc hoàn toàn tình trạng bị cô lập quốc tế; Hội nhập vào cộng đồng kinh tế khu vực; Tham gia đầy đủ các cơ chế hợp tác quốc tế',
    image: "https://vnanet.vn/Data/Articles/2024/07/26/7504285/vna_potal_29_nam_viet_nam_gia_nhap_asean_2871995_%E2%80%93_2872024_viet_nam_dong_gop_tich_cuc_vao_su_phat_trien_va_thanh_cong_cua_asean_stand.jpg",
    reverse: true,
  },
];

const others = [
  {
    title: "Ưu Tiên Hòa Bình, Ổn Định",
    copy: 'Việt Nam đã nhất quán thực hiện đường lối ưu tiên hòa bình, ổn định. Quyết định rút quân khỏi Campuchia mặc dù còn nhiều rủi ro, chấp nhận nhượng bộ để bình thường hóa quan hệ, thể hiện nguyên tắc này. Hòa bình không chỉ là vắng mặt chiến tranh mà còn là môi trường hợp tác, phát triển bền vững cho tất cả các bên.',
    image: "https://bcp.cdnchinhphu.vn/334894974524682240/2024/10/11/hoi-dam-voi-ttg-lao-1728649438121722988059.jpg",
    reverse: true,
  },
  {
    title: "Bảo Vệ Độc Lập, Chủ Quyền",
    copy: 'Trong quá trình bình thường hóa và hội nhập, Việt Nam luôn giữ vững nguyên tắc độc lập, chủ quyền. Không chấp nhận bất cứ điều kiện nào ảnh hưởng đến độc lập chính trị, không đánh đổi chủ quyền quốc gia để lấy lợi ích kinh tế. Đây là cơ sở để xây dựng quan hệ bình đẳng với tất cả các nước.',
    image: "https://file3.qdnd.vn/data/images/0/2024/02/25/upload_2072/chuquyen.jpg",
    reverse: true,
  },
  {
    title: "Hợp Tác Cùng Có Lợi",
    copy: 'Việt Nam theo đuổi quan hệ hợp tác cùng có lợi với tất cả các nước, không phân biệt chế độ chính trị. Sẵn sàng hợp tác về kinh tế, thương mại, đầu tư với các nước từng thù địch. Nguyên tắc này giúp Việt Nam nhanh chóng hội nhập và trở thành đối tác tin cậy của cộng đồng quốc tế.',
    image: "https://images2.thanhnien.vn/528068263637045248/2023/12/8/vuong-dinh-hue-1702048680587348087908.jpg",
    reverse: true,
  },
  {
    title: "Phát Triển Kinh Tế Là Trọng Tâm",
    copy: 'Tất cả các hoạt động đối ngoại đều phục vụ mục tiêu phát triển kinh tế. Việt Nam ưu tiên thu hút đầu tư, chuyển giao công nghệ, mở rộng thị trường xuất khẩu. Nguyên tắc này đảm bảo hòa bình không chỉ là mục đích mà còn là phương tiện để phát triển đất nước.',
    image: "https://bcp.cdnchinhphu.vn/334894974524682240/2025/5/12/3-1747043543794437241652.png",
    reverse: true,
  },
];


// const democracyPillars = [
//   {
//     title: "Kết Luận: Hòa Bình Thực Sự Từ 1989",
//     paragraphs: [
//       "Giai đoạn 1989-1995 đã chứng minh rằng Việt Nam chỉ có hòa bình thực sự từ năm 1989 trở đi. Trước đó (1986-1989) là giai đoạn Đổi mới trong chiến tranh với nhiều thử thách an ninh. Từ 1989, với việc kết thúc xung đột và rút quân Campuchia, Việt Nam đã xây dựng được môi trường hòa bình ổn định, mở ra thời kỳ hội nhập và phát triển mới."
//     ],
//     image: "/assets/dan-chu/f2780d9086654d1f6434d66de101ec9fd7af9811.png",
//     reverse: false,
//   },
// ];

export default function DemocracyPage() {
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

      <Header currentPath="/con-duong-hoa-binh" />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-32 px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="hero"
          data-animate
          className={`transition-all duration-1000 ${isVisible["hero"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#f35e53]/50 bg-[#f35e53]/10 px-5 py-2.5 backdrop-blur-sm mb-6">
                <div className="h-2.5 w-2.5 rounded-full bg-[#f35e53] animate-pulse"></div>
                <span className="font-inter text-sm font-bold text-[#f35e53] uppercase tracking-wider">
                  Từ Kết Thúc Xung Đột Đến Hội Nhập Quốc Tế
                </span>
              </div>
            </div>

            <h1 className="font-quicksand text-5xl font-extrabold text-white drop-shadow-2xl lg:text-7xl mb-8">
              <span className="bg-linear-to-r from-[#f35e53] via-[#ffd966 ] to-[#f35e53] bg-clip-text text-transparent animate-gradient">
                Con Đường Hòa Bình (1989-1995)
              </span>
            </h1>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2 backdrop-blur-sm bg-black/30 p-8 rounded-3xl border border-white/10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-[#f35e53]/20 to-transparent rounded-3xl blur-xl"></div>
              <img
                src="https://giadinh.mediacdn.vn/296230595582509056/2024/10/6/ha-noi-ngay-hoi-vi-hoa-binh-2-17281972011291364897959.jpg"
                alt="Phát biểu trước nhân dân"
                width={900}
                height={600}
                className="relative h-auto w-full rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="space-y-6">
              <p className="font-quicksand text-xl font-medium text-[#d9d9d9]/90 leading-relaxed">
                Giai đoạn 1989-1995 đánh dấu bước ngoặt quan trọng khi Việt Nam thực sự bước vào thời kỳ hòa bình. Sau khi kết thúc chiến tranh biên giới và rút quân khỏi Campuchia năm 1989, Việt Nam đã từng bước phá vỡ thế bao vây, bình thường hóa quan hệ với các nước lớn, và hội nhập vào cộng đồng quốc tế. Đây là giai đoạn trả lời thuyết phục cho câu hỏi về hòa bình thực sự.

              </p>
            </div>
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
                        <span className="bg-linear-to-r from-[#f35e53] to-[#ffcccc] bg-clip-text text-transparent">
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

        <div className="text-center">
          <h2 className="font-quicksand text-4xl font-extrabold text-white lg:text-6xl mb-6">
            <span className="bg-linear-to-r from-[#f35e53] via-[#ffd966 ] to-[#f35e53] bg-clip-text text-transparent animate-gradient">
              Bốn Nguyên Tắc Quan Trọng
            </span>
          </h2>
          <div className="h-1.5 w-48 bg-linear-to-r from-transparent via-[#f35e53] to-transparent rounded-full mx-auto"></div>
        </div>

        {/* Other Section */}
        <section className="space-y-24">
          {others.map((other, index) => (
            <div
              key={other.title}
              id={`step-${index}`}
              data-animate
              className={`grid items-center gap-12 lg:grid-cols-2 transition-all duration-1000 ${isVisible[`step-${index}`]
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
                }`}
            >
              {other.reverse ? (
                <>
                  <div className="backdrop-blur-sm bg-linear-to-br from-black/60 to-black/40 p-10 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-[#f35e53] to-[#ffcccc] shadow-lg">
                        <span className="font-inter text-2xl font-extrabold text-black">
                          {index + 1}
                        </span>
                      </div>
                      <h2 className="font-quicksand text-4xl lg:text-5xl font-extrabold text-white">
                        <span className="bg-linear-to-r from-[#f35e53] to-[#ffcccc] bg-clip-text text-transparent">
                          {other.title}
                        </span>
                      </h2>
                    </div>
                    <div className="h-1 w-20 bg-linear-to-r from-[#f35e53] to-transparent rounded-full mb-6"></div>
                    <p className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 leading-relaxed">
                      {other.copy}
                    </p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-linear-to-l from-[#f35e53]/20 to-transparent rounded-3xl blur-xl"></div>
                    <img
                      src={other.image}
                      alt={other.title}
                      width={900}
                      height={600}
                      className="relative h-auto w-full rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-linear-to-r from-[#f35e53]/20 to-transparent rounded-3xl blur-xl"></div>
                    <img
                      src={other.image}
                      alt={other.title}
                      width={900}
                      height={600}
                      className="relative h-auto w-full rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-105 transition-all duration-500"
                    />
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
                          {other.title}
                        </span>
                      </h2>
                    </div>
                    <div className="h-1 w-20 bg-linear-to-r from-[#f35e53] to-transparent rounded-full mb-6"></div>
                    <p className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 leading-relaxed">
                      {other.copy}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </section>

        {/* Bản chất Section */}
        <section
          id="essence"
          data-animate
          className={`space-y-16 transition-all duration-1000 ${isVisible["essence"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center">
            <h2 className="font-quicksand text-4xl font-extrabold text-white lg:text-6xl mb-6">
              <span className="bg-linear-to-r from-[#f35e53] via-[#ffd966 ] to-[#f35e53] bg-clip-text text-transparent animate-gradient">
                Kết Luận: Hòa Bình Thực Sự Từ 1989
              </span>
            </h2>
            <div className="h-1.5 w-48 bg-linear-to-r from-transparent via-[#f35e53] to-transparent rounded-full mx-auto"></div>
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2 backdrop-blur-sm bg-linear-to-br from-black/40 to-black/20 p-8 rounded-3xl border border-white/10">
            <p className="font-quicksand text-2xl font-medium text-[#d9d9d9]/90 leading-relaxed lg:text-2xl">
              Giai đoạn 1989-1995 đã chứng minh rằng Việt Nam chỉ có hòa bình thực sự từ năm 1989 trở đi. Trước đó (1986-1989) là giai đoạn {"Đổi mới trong chiến tranh"} với nhiều thử thách an ninh. Từ 1989, với việc kết thúc xung đột và rút quân Campuchia, Việt Nam đã xây dựng được môi trường hòa bình ổn định, mở ra thời kỳ hội nhập và phát triển mới.
            </p>
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-l from-[#f35e53]/20 to-transparent rounded-3xl blur-xl"></div>
              <img
                src="https://ngaymoionline.com.vn/stores/news_dataimages/2024/012024/05/22/in_article/c03d7aee-d117-407b-8c36-1fdbcc45631520240105220621.jpg?rt=20240105220622"
                alt="Lãnh đạo và nhân dân"
                width={900}
                height={600}
                className="relative h-auto w-full rounded-2xl shadow-2xl border-2 border-white/10 transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="text-center backdrop-blur-sm bg-linear-to-r from-[#f35e53]/10 to-[#ffd966 ]/10 p-8 rounded-3xl border-2 border-[#f35e53]/30">
          <Link
            className="inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-[#f35e53] to-[#ffd966 ] px-8 py-4 font-inter text-lg font-bold text-black hover:shadow-2xl hover:shadow-[#f35e53]/50 hover:-translate-y-1 transition-all"
            href="/nha-nuoc-xa-hoi-chu-nghia"
          >
            <span>Tìm hiểu về Nhà nước pháp quyền XHCN</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </section> */}
      </main>

      <Footer
        decorationSrc="/assets/dan-chu/71_83.svg"
        className="bg-black/60 backdrop-blur-sm border-t border-white/10 relative z-10"
      />
    </div>
  );
}
