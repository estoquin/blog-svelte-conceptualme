import matter from 'gray-matter';

export type Post = {
  [x: string]: any;
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  image?: string;
  tags?: string[];
  category?: string;
  content: string; // HTML
};

function markdownToHtml(markdown: string): string {
  let html = markdown;
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>');
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" class="text-blue-600 hover:underline">$1</a>');
  html = html.replace(/^\s*(\n)?(.+)/gim, function (match) {
    return match.trim().match(/^</) ? match : '<p class="mb-4 leading-relaxed">' + match + '</p>';
  });
  html = html.replace(/\n\n/g, '\n');
  return html;
}

function ensureMetadata(meta: any) {
  if (!meta || typeof meta !== 'object') throw new Error('Missing frontmatter');
  const required = ['title', 'slug', 'date'];
  for (const r of required) {
    if (!meta[r]) throw new Error(`Missing required frontmatter field: ${r}`);
  }
  return {
    title: String(meta.title),
    slug: String(meta.slug),
    date: String(meta.date),
    excerpt: meta.excerpt ? String(meta.excerpt) : undefined,
    image: meta.image ? String(meta.image) : undefined,
    tags: Array.isArray(meta.tags) ? meta.tags.map(String) : undefined,
    category: meta.category ? String(meta.category) : undefined
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const files = import.meta.glob('/src/posts/*.md', { as: 'raw' });
  const posts: Post[] = [];
  for (const path in files) {
    const raw = await files[path]();
    const parsed = matter(raw);
    const m = ensureMetadata(parsed.data);
    const html = markdownToHtml(parsed.content || '');
    posts.push({
      title: m.title,
      slug: m.slug,
      date: m.date,
      excerpt: m.excerpt,
      image: m.image,
      tags: m.tags,
      category: m.category,
      content: html
    });
  }
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  const found = posts.find((p) => p.slug === slug);
  return found || null;
}

export async function getPostsByFilter(options: { category?: string; tags?: string[] } = {}): Promise<Post[]> {
  const { category, tags } = options;
  let posts = await getAllPosts();
  if (category) {
    posts = posts.filter((p) => (p.category || '').toLowerCase() === String(category).toLowerCase());
  }
  if (tags && tags.length > 0) {
    posts = posts.filter((p) => (p.tags || []).some((t) => tags.includes(t)));
  }
  return posts;
}

export async function getLastPosts(limit = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}
