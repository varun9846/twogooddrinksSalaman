interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto text-center" : "text-left"} mb-[35px] max-w-[720px]`}
      data-aos="fade-up"
    >
      {eyebrow ? (
        <p className="mb-[8px] font-Poppins text-[14px] font-medium uppercase leading-[22px] tracking-[0.18rem] text-[#0f766e]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-quicksand text-[34px] font-bold leading-[1.2] tracking-[0.03rem] text-[#3d4750] max-[767px]:text-[28px]">
        {title}
      </h2>
      {text ? (
        <p className="mt-[12px] font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
          {text}
        </p>
      ) : null}
    </div>
  );
}
