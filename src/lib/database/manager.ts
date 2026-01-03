// Database module removed for static site. Keep a minimal stub to avoid build errors
export const queryDatabase = async (): Promise<any[]> => {
  return [];
};

export const safeParse = (s: any): string[] => {
  try {
    if (!s) return [];
    if (Array.isArray(s)) return s;
    const result = JSON.parse(s);
    return Array.isArray(result) ? result : [];
  } catch {
    return [];
  }
};
