export function toNumber(value: unknown): number {
  if (value == null) return 0;
  // Handle Prisma Decimal and similar objects that expose toNumber()
  if (typeof value === "object") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const v = value as any;
    if (typeof v.toNumber === "function") return Number(v.toNumber());
    if (typeof v.toString === "function") return Number(v.toString());
  }
  return Number(value as string | number);
}

export function roundCurrency(value: number): number {
  return Number(value.toFixed(2));
}

export function formatPrice(value: unknown): string {
  return `Rs ${toNumber(value)}`;
}

export function clampQuantity(quantity: number, minimum = 1): number {
  return Math.max(minimum, Number(quantity || minimum));
}

export function parseRequestString(value: unknown, fallback = ""): string {
  return String(value ?? fallback);
}

export function parseRequestNumber(value: unknown, fallback = 0): number {
  return Number(value ?? fallback);
}
