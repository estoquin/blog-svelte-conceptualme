// DB-backed posts API removed for static build. Keep stubs to avoid import errors.
export const getAllPosts = async (): Promise<any[]> => [];
export const getLastPosts = async (limit = 3): Promise<any[]> => [];
export const getPostsByFilter = async (): Promise<any[]> => [];
export const getLatestPosts = async (limit = 5): Promise<any[]> => [];
export const getPostBySlug = async (slug: string): Promise<any | null> => null;
