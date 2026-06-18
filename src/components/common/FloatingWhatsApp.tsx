import Link from "next/link";

const whatsappNumber = "919967399880";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Hi, I am interested in 2good Plus wellness products.",
  );

  return (
    <Link
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[998] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] max-[575px]:bottom-5 max-[575px]:right-5"
    >
      <i className="ri-whatsapp-line text-[30px]" />
    </Link>
  );
}