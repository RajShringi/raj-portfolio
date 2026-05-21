import Container from "@/components/container";
import { getBlogBySlug } from "@/lib/blog";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

type BlogProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Blog({ params }: BlogProps) {
  const { slug } = await params;
  try {
    const blog = getBlogBySlug(slug);
    const { content } = await compileMDX({
      source: blog.content,
    });
    return (
      <Container>
        <article className="prose">
          <h1>{blog.meta.title}</h1>
          <p>{blog.meta.date}</p>
          {content}
        </article>
      </Container>
    );
  } catch {
    notFound();
  }
}
