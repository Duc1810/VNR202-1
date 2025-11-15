"use client";

import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState, useEffect } from "react";

const HERO_SLIDES = [
  {
    id: 1,
    badge: "Hòa bình thực sự?",
    title: "Việt Nam Sau 1986: Hòa Bình Hay Xung Đột?",
    items: [
      "Cuộc chiến biên giới phía Bắc kéo dài 10 năm (1979-1989)",
      "Trận hải chiến Gạc Ma tháng 3/1988 với 64 liệt sĩ",
      "Vấn đề Campuchia và bao vây quốc tế",
      "Rút quân khỏi Campuchia tháng 9/1989",
      " Bình thường hóa quan hệ với Trung Quốc (1991) và Mỹ (1995)",
    ],
    link: "/tinh-hinh-truoc-1986",
    image: "https://media.baovanhoa.vn/zoom/1000/Portals/0/EasyDNNNews/46969/Hoi-ng%E1%BB%8B.jpeg",
    src: "Hội nghị lần thứ XI"
  },
  {
    id: 2,
    badge: "Bối cảnh 1986",
    title: "Khủng Hoảng Kinh Tế - Xã Hội Và Đòi Hỏi Đổi Mới",
    items: [
      "Bao vây, cấm vận của các thế lực đế quốc",
      "Lạm phát tăng vọt: 774% năm 1986",
      "Thiếu lương thực, thực phẩm, hàng tiêu dùng",
      " Đại hội VI (12/1986) khởi xướng đổi mới",
      "Vừa đổi mới vừa đối phó xung đột biên giới",
    ],
    link: "xung-dot-1986-1989",
    image: "https://cdn.baogialai.com.vn/images/5d93661b5836672daa8629aec90c6a0b638684c14ba63cd3af4591d1d5647c3c9fcde911ce9a835902714152051a7e19e6f2cf52881f966ba2ceaf83b7539c4c/images2764628_21.jpg",
    src: "Thời bao cấp"
  },
  {
    id: 3,
    badge: "Con đường hòa bình",
    title: "Từ Xung Đột Đến Hòa Bình: Hành Trình 1986-1995",
    items: [
      "Kết thúc chiến tranh biên giới năm 1989",
      "Rút quân khỏi Campuchia phá thế bao vây",
    ],
    link: "/con-duong-hoa-binh",
    image: "https://media-vasi.mae.gov.vn/Image/cb256589-484e-4216-987c-1a4ad30dae3a/2025/4/28/image_d8b6f61355.png",
    src: "Việt Nam hòa bình"
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header currentPath="/" />

      {/* Hero Section with Carousel */}
      <section className="relative h-[700px] overflow-hidden bg-linear-to-br from-[#694030] via-[#4a2d22] to-[#2d1a14]">
        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-20 animate-pulse"
          style={{
            backgroundImage: "",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#f35e53]/30 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-[#f35e53]/20 rounded-full animate-float-delay"></div>
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#f35e53]/40 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#f35e53]/25 rounded-full animate-float-delay"></div>
        </div>

        {/* Slides */}
        <div className="relative h-full z-10">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
              <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="grid w-full items-center gap-12 lg:grid-cols-2">
                  {/* Content */}
                  <div className="space-y-7 animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#f35e53]/30 bg-[#f35e53]/10 px-4 py-2 backdrop-blur-sm">
                      <div className="h-2 w-2 rounded-full bg-[#f35e53] animate-pulse"></div>
                      <span className="font-inter text-xs font-semibold text-[#f35e53] uppercase tracking-wider">
                        {slide.badge}
                      </span>
                    </div>

                    <h1 className="font-quicksand text-4xl font-extrabold uppercase leading-[1.15] text-white drop-shadow-lg lg:text-6xl">
                      <span className="bg-linear-to-r from-[#f35e53] via-[#ff6666 ] to-[#f35e53] bg-clip-text text-transparent animate-gradient">
                        {slide.title}
                      </span>
                    </h1>

                    <div className="space-y-3 pl-4 border-l-4 border-[#f35e53]/50">
                      {slide.items.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 group"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          <svg
                            className="w-5 h-5 text-[#f35e53] mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="font-quicksand text-base font-medium text-[#f3e5c0] lg:text-lg leading-relaxed group-hover:text-[#f35e53] transition-colors">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={slide.link}
                      className="group relative inline-flex items-center gap-3 rounded-xl bg-linear-to-r from-[#f35e53] to-[#ffcccc] px-8 py-4 font-inter text-base font-bold uppercase text-black transition-all hover:shadow-2xl hover:shadow-[#f35e53]/50 hover:-translate-y-1 active:translate-y-0 lg:px-10 lg:py-5 lg:text-lg overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-linear-to-r from-[#ff6666] to-[#f35e53] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="relative z-10">KHÁM PHÁ</span>
                      <svg
                        className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
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
                  </div>

                  {/* Image */}
                  <div className="relative hidden lg:block">
                    <div className="absolute -inset-4 bg-linear-to-r from-[#f35e53]/20 to-transparent rounded-3xl blur-2xl"></div>
                    <div className="relative h-full overflow-hidden rounded-2xl border-4 border-[#f35e53]/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="object-cover"
                      />

                      {/* Source text below image */}
                      <p className="absolute bottom-2 left-2 text-xs !text-white bg-black/40 px-2 py-1 rounded">
                        {slide.src}
                      </p>

                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-3 z-20">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`group relative h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? "w-12 bg-[#f35e53]"
                : "w-3 bg-white/40 hover:bg-white/70 hover:w-6"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 rounded-full bg-[#f35e53] animate-ping opacity-75"></div>
              )}
            </button>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            goToSlide(
              (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-[#f35e53] hover:border-[#f35e53] transition-all group"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 group-hover:text-black transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-[#f35e53] hover:border-[#f35e53] transition-all group"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 group-hover:text-black transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </section>

      {/* Main Content */}
      <main className="relative bg-[#121212]/70">
        <div className="absolute inset-0 bg-cover bg-repeat opacity-5" />

        <div className="relative mx-auto max-w-7xl space-y-24 px-4 py-20 sm:px-6 lg:px-8">
          {/* Section 1: Nhà nước XHCN */}
          <section className="group">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#f35e53]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <img
                  src="https://dienbientv.vn/dataimages/202101/original/images2994290_L1410619_JPG_1611487436_1611487702.jpg"
                  alt="Lịch sử Việt Nam"
                  width={900}
                  height={900}
                  className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                  Đại hội VIII
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-block rounded-full bg-linear-to-r from-[#f35e53]/20 to-[#f35e53]/5 px-4 py-1.5">
                  <span className="font-inter text-sm font-bold text-[#f35e53]">
                    Khủng Hoảng Kinh Tế - Xã Hội Và Bối Cảnh Quốc Tế
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  Tình Hình Trước Đại Hội VI (1986)
                </h2>

                <p className="font-quicksand text-base leading-relaxed text-[#d9d9d9]/80">
                  Để trả lời câu hỏi {"Việt Nam đã thực sự hòa bình chưa sau năm 1986?"}, trước tiên cần hiểu bối cảnh trước Đại hội VI. Giai đoạn trước 1986, Việt Nam đương đầu với khủng hoảng kinh tế nghiêm trọng nhất từ sau chiến tranh. Lạm phát tăng vọt lên 774% năm 1986, từ mức 300% năm 1985. Lương thực, thực phẩm và hàng tiêu dùng khan hiếm trầm trọng. Đất nước bị bao vây, cấm vận quốc tế do vấn đề Campuchia. Các hiện tượng tiêu cực xã hội, vượt biên trái phép diễn ra phổ biến. Trong bối cảnh quốc tế, cuộc cách mạng khoa học-kỹ thuật phát triển mạnh, xu thế đối thoại thay thế đối đầu, các nước xã hội chủ nghĩa đều tiến hành cải cách. Tình hình này đặt nền tảng cho việc hiểu những thách thức mà Việt Nam phải đối mặt và tạo động lực bức thiết cho công cuộc Đổi mới được khởi xướng tại Đại hội VI (12/1986).
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#d9d9d9]/70">
                    <svg
                      className="h-5 w-5 text-[#f35e53]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bản Chất Khủng Hoảng Kinh Tế - Xã Hội
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d9d9d9]/70">
                    <svg
                      className="h-5 w-5 text-[#f35e53]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Khủng Hoảng Kinh Tế - Xã Hội
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d9d9d9]/70">
                    <svg
                      className="h-5 w-5 text-[#f35e53]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Đòi Hỏi Bức Thiết Phải Đổi Mới
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#d9d9d9]/70">
                    <svg
                      className="h-5 w-5 text-[#f35e53]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Đại Hội VI: Khởi Xướng Đường Lối Đổi Mới
                  </div>
                </div>

                <Link
                  href="/tinh-hinh-truoc-1986"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>
            </div>
          </section>

          {/* Section 2: Dân chủ XHCN */}
          <section className="group">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-linear-to-r from-[#f35e53]/20 to-[#f35e53]/5 px-4 py-1.5">
                  <span className="font-inter text-sm font-bold text-[#f35e53]">
                    Đổi Mới Giữa Lúc Còn Chiến Tranh
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  Xung Đột Và Thách Thức (1986-1989)
                </h2>

                <p className="font-quicksand text-base leading-relaxed text-[#d9d9d9]/80">
                  Giai đoạn 1986-1989 là thời kỳ đặc biệt trong lịch sử Việt Nam: vừa tiến hành Đổi mới toàn diện vừa phải đối mặt với các thách thức nghiêm trọng về an ninh quốc gia. Mặc dù Đại hội VI (12/1986) đã khởi xướng công cuộc Đổi mới, đất nước vẫn chưa thực sự có hòa bình. Cuộc chiến tranh biên giới phía Bắc với Trung Quốc tiếp tục kéo dài, cao trào là trận hải chiến Gạc Ma tháng 3/1988 với 64 liệt sĩ hy sinh. Đồng thời, vấn đề Campuchia là mấu chốt khiến Việt Nam bị bao vây, cấm vận quốc tế. Chỉ sau khi rút quân khỏi Campuchia (9/1989) và kết thúc xung đột biên giới, Việt Nam mới thực sự bước vào thời kỳ hòa bình ổn định.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="font-inter text-2xl font-bold text-[#f35e53]">
                      10 năm xung đột
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Chiến Tranh Biên Giới Phía Bắc Tiếp Diễn
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="font-inter text-2xl font-bold text-[#f35e53]">
                      14/3/1988
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Trận Hải Chiến Gạc Ma
                    </div>
                  </div>
                </div>

                <Link
                  href="xung-dot-1986-1989"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#f35e53]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <img
                  src="https://vanhoathoidai.vn/uploads/images/2025/07/11/vn-3-1752253190.jpg"
                  alt="Chủ tịch Hồ Chí Minh và nhân dân"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                  Chiến thắng chế độ diệt chủng PolPot
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Phát huy dân chủ */}
          <section className="group">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-[#f35e53]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <img
                  src="https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785a81fc152ba152762b8c78afa16919d093aa9d073e45c907ee1461ec37959ff612fd447da9b971d89956a362754500984/ngo-treo-co-ha-noi-2-889.jpg"
                  alt="Chủ tịch Hồ Chí Minh với nông dân"
                  width={900}
                  height={900}
                  className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                  Việt Nam hòa bình sau chiến tranh
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-block rounded-full bg-linear-to-r from-[#f35e53]/20 to-[#f35e53]/5 px-4 py-1.5">
                  <span className="font-inter text-sm font-bold text-[#f35e53]">
                    Từ Kết Thúc Xung Đột Đến Hội Nhập Quốc Tế
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  Con Đường Hòa Bình (1989-1995)
                </h2>

                <p className="font-quicksand text-base leading-relaxed text-[#d9d9d9]/80">
                  Giai đoạn 1989-1995 đánh dấu bước ngoặt quan trọng khi Việt Nam thực sự bước vào thời kỳ hòa bình. Sau khi kết thúc chiến tranh biên giới và rút quân khỏi Campuchia năm 1989, Việt Nam đã từng bước phá vỡ thế bao vây, bình thường hóa quan hệ với các nước lớn, và hội nhập vào cộng đồng quốc tế. Đây là giai đoạn trả lời thuyết phục cho câu hỏi về hòa bình thực sự.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f35e53]/20">
                      <span className="text-sm font-bold text-[#f35e53]">
                        1
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Kết Thúc Chiến Tranh

                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Kết Thúc Chiến Tranh Biên Giới (1989)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f35e53]/20">
                      <span className="text-sm font-bold text-[#f35e53]">
                        2
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Rút Quân Khỏi Campuchia

                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Hoàn Tất Rút Quân Khỏi Campuchia (9/1989)                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f35e53]/20">
                      <span className="text-sm font-bold text-[#f35e53]">
                        3
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Bình Thường Hóa Với Trung Quốc

                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Bình Thường Hóa Quan Hệ Việt-Trung (11/1991)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f35e53]/20">
                      <span className="text-sm font-bold text-[#f35e53]">
                        4
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Bình Thường Hóa Với Hoa Kỳ
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Bình Thường Hóa Quan Hệ Việt-Mỹ (7/1995)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f35e53]/20">
                      <span className="text-sm font-bold text-[#f35e53]">
                        5
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">
                        Gia Nhập ASEAN
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Gia Nhập ASEAN (28/7/1995)
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/con-duong-hoa-binh"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>
            </div>
          </section>

          {/* Bạn có biết Card */}
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#1a1510] to-[#0a0a0a] p-8 lg:p-12">
            <div className="absolute inset-0 bg-[url('/assets/common/dark-bg.png')] bg-cover bg-repeat opacity-20" />
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#f35e53]/10 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://media.thuonghieucongluan.vn/uploads/2024/04/30/unnamed-1-1714470305.jpg"
                  alt="Minh hoạ dịch vụ công nghệ"
                  width={900}
                  height={600}
                  className="h-auto w-full rounded-2xl"
                />
                <p className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
                  Poster tuyển truyền chủ quyền biển đảo Việt Nam
                </p>
              </div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f35e53]/30 bg-[#f35e53]/10 px-4 py-2">
                  <svg
                    className="h-4 w-4 text-[#f35e53]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-inter text-sm font-bold text-[#f35e53]">
                    BẠN CÓ BIẾT?
                  </span>
                </div>

                <h2 className="font-quicksand text-3xl font-bold text-white lg:text-4xl">
                  Giai đoạn từ 1986 đến 1995 không chỉ là thời kỳ đổi mới mà còn là thời kỳ đầy thử thách về an ninh và chủ quyền.
                </h2>

                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-inter text-base font-bold text-[#f35e53]">
                      Cuộc Chiến Biên Giới Kéo Dài 10 Năm
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#d9d9d9]/80">
                      Nhiều người nghĩ rằng chiến tranh Việt-Trung chỉ diễn ra trong vài tuần năm 1979. Thực tế, theo Giáo trình Lịch sử Đảng (trang 265), cuộc chiến tranh chống xâm lược bảo vệ Tổ quốc ở biên giới phía Bắc kéo dài 10 năm, từ năm 1979 đến năm 1989. Điều này có nghĩa là trong suốt ba năm đầu tiên của thời kỳ Đổi Mới (1986-1989), Việt Nam vẫn đang trong tình trạng chiến tranh ở biên giới phía Bắc. Các tỉnh Cao Bằng, Lạng Sơn, Lào Cai thường xuyên căng thẳng. Việt Nam vừa phải đổi mới kinh tế vừa phải bảo vệ biên giới, phân bổ nguồn lực cho cả kinh tế và quốc phòng trong điều kiện rất khó khăn.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <h3 className="font-inter text-base font-bold text-[#f35e53]">
                      64 Liệt Sĩ Gạc Ma: Cao Điểm Của Căng Thẳng
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#d9d9d9]/80">
                      Ngày 14 tháng 3 năm 1988, chỉ hơn 1 năm sau Đại hội VI, xảy ra trận hải chiến Gạc Ma (Johnson South Reef Skirmish). Đây là cao điểm nhất của các diễn biến căng thẳng trong giai đoạn này. Trung Quốc đã cho quân đội chiếm đảo Gạc Ma và các bãi cạn Châu Viên, Chữ Thập, Tư Nghĩa,... ở quần đảo Trường Sa của Việt Nam. 64 chiến sĩ Việt Nam đã hy sinh, hầu hết không có vũ khí nặng. Trung Quốc sử dụng 3 tàu khu trục với hỏa lực mạnh. Liên Xô không can thiệp mặc dù có hiệp ước phòng thủ với Việt Nam.
                    </p>
                  </div>
                </div>

                <Link
                  href="/ban-co-biet"
                  className="inline-block rounded-lg bg-[#d9d9d9] px-6 py-3 font-inter text-sm font-bold text-black transition-colors hover:bg-white"
                >
                  XEM THÊM
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer backgroundImage="/assets/home/111_183.svg" />
    </div>
  );
}
