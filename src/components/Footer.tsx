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
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-[#f3c554]/60 via-transparent to-[#f3c554]/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#f3c554]">
              {GROUP_NAME}
            </span>
            <p className="mt-4 text-sm text-white/70">
              Không gian học tập dành cho sinh viên MLN131/131 khám phá Nhà nước
              xã hội chủ nghĩa, nền dân chủ và những câu chuyện ứng dụng trong
              đời sống hôm nay.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Đường dẫn
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/75">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[#f3c554]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 text-sm text-white/75">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
              Tài nguyên nhanh
            </h3>
            <p>
              <Link
                href="/nha-nuoc-xa-hoi-chu-nghia"
                className="transition hover:text-[#f3c554]"
              >
                Tổng quan Nhà nước pháp quyền XHCN
              </Link>
            </p>
            <p>
              <Link
                href="/ban-co-biet"
                className="transition hover:text-[#f3c554]"
              >
                Bạn có biết? Góc kiến thức thú vị
              </Link>
            </p>
            <p>
              <Link href="/quiz" className="transition hover:text-[#f3c554]">
                Làm quiz ôn tập ngay
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2025 Nhóm 4 - MLN131. Tài liệu tham khảo nội bộ cho lớp GD1703.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/70 transition hover:border-[#f3c554]/60 hover:text-[#f3c554]"
            >
              Trang chủ
            </Link>
            <Link
              href="/quiz"
              className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-white/70 transition hover:border-[#f3c554]/60 hover:text-[#f3c554]"
            >
              Quiz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
