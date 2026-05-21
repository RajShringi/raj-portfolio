import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
};

export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(blogDirectory);
  const blogs = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContent);
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });

  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogBySlug(slug: string) {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
    },
    content,
  };
}
