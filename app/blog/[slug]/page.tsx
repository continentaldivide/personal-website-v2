import { getContentBySlug } from "@/lib/content";
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const source = getContentBySlug("blog", params.slug);
  return <div className="prose mx-auto p-6">{source}</div>;
}
