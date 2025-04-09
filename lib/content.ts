import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getContentList(type: "blog" | "garden") {
  const dir = path.join(process.cwd(), "content", type);
  return fs.readdirSync(dir).map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const fullPath = path.join(dir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return { slug, ...data };
  });
}

export function getContentBySlug(type: "blog" | "garden", slug: string) {
  const fullPath = path.join(process.cwd(), "content", type, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath);
  return source.toString();
}
