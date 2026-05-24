import Container from "@/components/container";
import { components } from "@/components/mdx-components";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { FaCalendarDays } from "react-icons/fa6";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

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
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
              },
            ],
          ],
        },
      },
      components,
    });
    return (
      <main>
        <Container>
          <article
            className="prose prose-neutral dark:prose-invert max-w-none
            prose-code:before:content-none
            prose-code:after:content-none"
          >
            <header className="not-prose mb-10">
              <div className="mb-4">
                <h1 className="text-4xl mb-4 font-bold text-white">
                  {blog.meta.title}
                </h1>
                <p className="text-base text-muted-foreground">
                  {blog.meta.description}
                </p>
              </div>
              <div className="m-0 flex items-center gap-2">
                <FaCalendarDays className="size-3" />
                <span className="text-sm">
                  {new Date(blog.meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <hr className="my-6 border border-muted-foreground/20" />
            </header>

            {content}
          </article>
        </Container>
      </main>
    );
  } catch {
    notFound();
  }
}
