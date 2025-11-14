import Image from "next/image";
import Link from "next/link";
import { GROUP_NAME, NAV_ITEMS } from "./siteConfig";
import { classNames } from "./utils";

type FooterProps = {
  backgroundImage?: string;
  decorationSrc?: string;
  className?: string;
};

export function Footer({
  backgroundImage,
  decorationSrc,
  className,
}: FooterProps) {
  return (
    <footer
      className={classNames(
        "relative isolate overflow-hidden border-t border-white/10 bg-[#1a1510]/95 text-white",
        className
      )}
      style={
        backgroundImage
          ? {
            backgroundImage: `linear-gradient(180deg, rgba(18,18,18,0.88), rgba(18,18,18,0.94)), url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }
          : undefined
      }
    >
      {decorationSrc ? (
        <Image
          src={decorationSrc}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover opacity-20"
          priority={false}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/40 via-transparent to-black/80" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-[#f35e53]/60 via-transparent to-[#f35e53]/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="group flex items-center gap-3">
              <span className="flex flex-col">
                <span className="font-inter text-xs uppercase tracking-[0.2em] text-white/55">
                  VNR202
                </span>
                <span className="font-quicksand text-lg font-semibold text-white transition-colors group-hover:text-[#f35e53]">
                  {GROUP_NAME}
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/90">
              Dự án nghiên cứu lịch sử Việt Nam giai đoạn 1986-1995, tập trung vào câu hỏi: {"Nước ta đã thực sự hòa bình chưa sau năm 1986?"} Qua phân tích tài liệu lịch sử và các sự kiện quan trọng, dự án đưa ra câu trả lời dựa trên bằng chứng khoa học và góc nhìn khách quan.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Các trang
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[#f35e53]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm text-white/75">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Khám phá
            </h3>
            <p>
              <Link
                href="/ban-co-biet"
                className="transition hover:text-[#f35e53]"
              >
                Bạn có biết? Góc kiến thức thú vị
              </Link>
            </p>
            <p>
              <Link href="/on-tap" className="transition hover:text-[#f35e53]">
                Làm các câu hỏi ôn tập ngay
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © VNR202 - MC1704 - NHÓM 7
          </p>
        </div>
      </div>
    </footer>
  );
}
