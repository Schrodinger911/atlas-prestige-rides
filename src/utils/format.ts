export const formatPrice = (mad: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(mad) + " MAD";

export const buildWhatsAppLink = (phone: string, message?: string) => {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${phone}${text}`;
};