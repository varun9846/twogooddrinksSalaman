export function toNumber(value: string | number | null | undefined): number {
  return Number(value ?? 0);
}

export function roundCurrency(value: number): number {
  return Number(value.toFixed(2));
}

export function formatPrice(value: string | number): string {
  return `$${toNumber(value)}`;
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
