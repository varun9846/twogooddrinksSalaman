import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  current: string;
  items?: { label: string; href: string }[];
}

export default function Breadcrumb({
  title,
  current,
  items = [{ label: "Home", href: "/" }],
}: BreadcrumbProps) {
  return (
    <section className="bg-[#f8f8fb] py-[35px]">
      <div className="bb-container">
        <div className="flex flex-wrap items-center justify-between gap-[12px] rounded-[20px] border border-[#eee] bg-white px-[24px] py-[20px] shadow-sm">
          <h1 className="font-quicksand text-[26px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[575px]:text-[22px]">
            {title}
          </h1>
          <div className="font-Poppins text-[14px] leading-[28px] tracking-[0.03rem] text-[#686e7d]">
            {items.map((item) => (
              <span key={item.href}>
                <Link href={item.href} className="transition hover:text-[#0f766e]">
                  {item.label}
                </Link>
                <span className="mx-[8px] text-[#b8bbc4]">/</span>
              </span>
            ))}
            <span className="text-[#0f766e]">{current}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
