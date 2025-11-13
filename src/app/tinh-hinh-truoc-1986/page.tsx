"use client";

import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const cards = [
  "https://file3.qdnd.vn/data/images/0/2025/01/28/upload_2318/dai-hoi-iii.jpg?dpi=150&mode=crop&anchor=topcenter&quality=100&w=500",
  "https://vnanet.vn/Data/Articles/2021/01/19/5242182/vna_potal_dai_hoi_lan_thu_vi_cua_dang_khoi_xuong_va_lanh_dao_su_nghiep_doi_moi_dat_nuoc_140925973_stand.jpeg",
  "https://image.congan.com.vn/thumbnail/CATP-480-2024-1-25/3-anh-2-doi-moi.jpg",
  "https://vnanet.vn/Data/Articles/2021/01/19/5242114/vna_potal_dai_hoi_lan_thu_vi_cua_dang_khoi_xuong_va_lanh_dao_su_nghiep_doi_moi_dat_nuoc_stand.jpg",
];

export default function SocialistStatePage() {
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

      <Header currentPath="/tinh-hinh-truoc-1986" />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col gap-32 px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          id="hero"
          data-animate
          className={`grid items-center gap-12 md:grid-cols-2 transition-all duration-1000 ${isVisible["hero"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#f35e53]/50 bg-[#ffcccc]px-5 py-2.5 backdrop-blur-sm">
                <div className="h-2.5 w-2.5 rounded-full bg-[#f35e53] animate-pulse"></div>
                <span className="font-inter text-sm font-bold text-[#f35e53] uppercase tracking-wider">
                  Khủng Hoảng Kinh Tế - Xã Hội Và Bối Cảnh Quốc Tế
                </span>
              </div>
            </div>

            <h1 className="font-quicksand text-5xl font-extrabold text-white drop-shadow-2xl lg:text-7xl lg:leading-tight">
              <span className="bg-linear-to-r from-[#f35e53] via-[#ffd966 ] to-[#f35e53] bg-clip-text text-transparent animate-gradient">
                Tình Hình Trước Đại Hội VI (1986)
              </span>
            </h1>

            <div className="space-y-4">
              <h2 className="font-quicksand text-2xl font-bold text-[#ffd966 ] lg:text-3xl">
                Bản Chất Khủng Hoảng Kinh Tế - Xã Hội
              </h2>
              <div className="h-1 w-24 bg-linear-to-r from-[#f35e53] to-transparent rounded-full"></div>
            </div>

            <p className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-xl border border-white/10 lg:text-xl">
              Khủng hoảng kinh tế - xã hội trước 1986 bắt nguồn từ cơ chế quản lý tập trung quan liêu bao cấp không còn phù hợp với thực tế. Nền kinh tế hoạt động kém hiệu quả, năng suất lao động thấp, chất lượng sản phẩm kém. Cơ chế bao cấp làm giảm động lực sản xuất của người dân và doanh nghiệp. Đồng thời, hậu quả chiến tranh còn nặng nề: cơ sở hạ tầng tàn phá, nguồn lực con người thiếu hụt, kinh tế bị đứt gãy. Thêm vào đó, chính sách kinh tế chủ quan duy ý chí, không tôn trọng quy luật khách quan đã đẩy đất nước vào khủng hoảng sâu sắc.
            </p>
          </div>

          <div className="flex justify-center animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-[#f35e53]/30 to-[#ffd966 ]/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
              <img
                src="https://file3.qdnd.vn/data/images/0/2025/01/29/upload_2176/dhvi.jpg"
                alt="Nhà nước xã hội chủ nghĩa"
                width={1000}
                height={1000}
                className="mt-50 relative h-auto w-full min-w-xl rounded-2xl shadow-2xl border-4 border-[#f35e53]/20 transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </section>


        {/* Section 5: Công cụ thực thi */}
        <section
          id="cong-cu"
          data-animate
          className={`grid items-center gap-12 md:grid-cols-2 transition-all duration-1000 delay-500 ${isVisible["cong-cu"]
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
            }`}
        >
          <div className="space-y-6 md:order-last backdrop-blur-sm bg-linear-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="space-y-4">
              <h2 className="font-quicksand text-3xl font-extrabold text-white lg:text-4xl">
                <span className="bg-linear-to-r from-[#f35e53] to-[#ffcccc] bg-clip-text text-transparent">
                  Khủng Hoảng Kinh Tế - Xã Hội
                </span>
              </h2>
            </div>

            <div className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 space-y-6 leading-relaxed">
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  Việt Nam đang bị các thế lực đế quốc và thù địch bao vây, cấm vận sau khi đưa quân vào Campuchia (25/12/1978). Mỹ áp đặt cấm vận toàn diện, Trung Quốc cắt đứt viện trợ và gây áp lực quân sự, các nước ASEAN tẩy chay. Chỉ có Liên Xô và một số nước xã hội chủ nghĩa duy trì quan hệ, nhưng viện trợ không đủ để giải quyết khủng hoảng kinh tế nghiêm trọng.                </p>
              </div>

              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  Lương thực, thực phẩm, và hàng tiêu dùng đều khan hiếm trầm trọng. Hệ thống phân phối bao cấp không hiệu quả, dẫn đến tình trạng người dân phải xếp hàng dài để mua gạo, thịt, đường và các mặt hàng thiết yếu. Cuối năm 1988, Việt Nam phải nhập khẩu 450,000 tấn gạo để đáp ứng nhu cầu trong nước.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  Lạm phát tăng cao đến mức kinh hoàng. Từ mức 300% năm 1985, lạm phát tiếp tục leo thang lên 774% năm 1986. Điều này có nghĩa là giá cả tăng gần 8 lần trong năm, khiến tiền mất giá nhanh chóng và đời sống người dân vô cùng khó khăn. Cơ chế quản lý kinh tế tập trung, bao cấp đã hoàn toàn tê liệt.
                </p>
              </div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 w-2 h-2 bg-[#f35e53] rounded-full"></div>
                <p>
                  Các hiện tượng tiêu cực, vi phạm pháp luật diễn ra khá phổ biến. Tham nhũng, buôn lậu, tình trạng "chợ đen" phát triển. Đặc biệt nghiêm trọng là tình trạng vượt biên trái phép: hàng trăm nghìn người Việt Nam liều mạng vượt biên tìm kiếm cuộc sống mới, tạo ra vấn đề "người tị nạn thuyền nhân" (boat people) gây chấn động quốc tế.
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
              <img
                src="https://media.baoquangninh.vn/dataimages/202009/original/images1418831_2.jpg"
                alt="Người dân lao động"
                width={900}
                height={800}
                className="relative h-auto w-full min-w-xl rounded-2xl border-2 border-white/10 shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Chức năng với Cards */}
        <section
          id="chuc-nang"
          data-animate
          className={`transition-all duration-1000 delay-300 ${isVisible["chuc-nang"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-12 space-y-6">
            <div className="inline-block">
              <h2 className="font-quicksand text-4xl font-extrabold text-white lg:text-5xl mb-4">
                <span className="bg-linear-to-r from-[#f35e53] to-[#ffcccc] bg-clip-text text-transparent">
                  Đại Hội VI: Khởi Xướng Đường Lối Đổi Mới
                </span>
              </h2>
              <div className="h-1.5 bg-linear-to-r from-transparent via-[#f35e53] to-transparent rounded-full"></div>
            </div>

            <p className="mt-6 font-quicksand text-xl font-medium text-[#d9d9d9]/90 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-black/30 p-6 rounded-xl border border-white/10">
              Đại hội VI diễn ra từ 15-18/12/1986 tại Hà Nội, bầu đồng chí Nguyễn Văn Linh làm Tổng Bí thư. Đây là đại hội có ý nghĩa bước ngoặt, đánh dấu sự chuyển hướng lớn trong đường lối phát triển của Việt Nam.
              Đại hội chủ trương "Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật." Nghiêm túc chỉ rõ những sai lầm: cơ chế tập trung quan liêu bao cấp, chủ quan duy ý chí, không tôn trọng quy luật kinh tế.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Lấy dân làm gốc: Mọi chính sách phải xuất phát từ lợi ích nhân dân",
              "Tôn trọng quy luật khách quan: Không dùng chủ quan thay thế quy luật kinh tế-xã hội",
              "Kết hợp sức mạnh dân tộc và thời đại: Phát huy nội lực đồng thời mở cửa hợp tác",
              "Xây dựng Đảng ngang tầm nhiệm vụ: Đảng phải trong sạch, vững mạnh, gần gũi nhân dân",
            ].map((text, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute inset-0 bg-[#f35e53]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src={cards[index]}
                  alt={text}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <div className="h-1 w-12 bg-[#f35e53] rounded-full mb-2 group-hover:w-20 transition-all"></div>
                  <p className="text-white font-inter font-semibold text-sm leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Section 2: Bản chất */}
        <section
          id="ban-chat"
          data-animate
          className={`grid items-center gap-12 md:grid-cols-2 transition-all duration-1000 delay-200 ${isVisible["ban-chat"]
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
            }`}
        >
          <div className="flex justify-center md:order-last animate-scale-in">
            <div className="space-y-6 backdrop-blur-sm bg-linear-to-br from-black/40 to-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="h-12 w-1.5 bg-linear-to-b from-[#f35e53] to-[#ffd966 ] rounded-full"></div>
                <h2 className="font-quicksand text-3xl font-bold text-[#f35e53] lg:text-4xl">
                  Đòi Hỏi Bức Thiết Phải Đổi Mới                </h2>
              </div>

              <div className="font-quicksand text-lg font-medium text-[#d9d9d9]/90 space-y-5 leading-relaxed">
                <p className="border-l-4 border-[#f35e53]/50 pl-5">
                  Trước tình hình khủng hoảng toàn diện như vậy, đổi mới đã trở thành đòi hỏi bức thiết của tình hình đất nước. Không đổi mới, Việt Nam sẽ tiếp tục lâm vào khủng hoảng sâu hơn, nguy cơ mất ổn định chính trị - xã hội. Đại hội VI của Đảng (12/1986) được tổ chức trong bối cảnh này, với nhiệm vụ lịch sử là tìm ra con đường mới cho đất nước.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-l from-[#f35e53]/20 to-transparent rounded-3xl blur-xl"></div>
              <img
                src="https://vnanet.vn/Data/Articles/2021/01/19/5242199/vna_potal_dai_hoi_lan_thu_vi_cua_dang_khoi_xuong_va_lanh_dao_su_nghiep_doi_moi_dat_nuoc_140957698_stand.jpg"
                alt="Hồ Chí Minh cùng công nhân"
                width={1000}
                height={1000}
                className="relative h-auto w-full min-w-xl shadow-2xl rounded-2xl border-2 border-white/10 transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer
        decorationSrc="/assets/nha-nuoc/111_179.svg"
        className="bg-black/60 backdrop-blur-sm border-t border-white/10 relative z-10"
      />
    </div>
  );
}
