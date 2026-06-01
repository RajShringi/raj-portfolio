import Container from "@/components/container";
import { getAllBlogs } from "@/lib/blog";
import { formatDate } from "@/lib/utils/formatDate";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Blogs() {
  const blogs = getAllBlogs();

  return (
    <Container>
      <div className="flex flex-col gap-4">
        <h4 className="uppercase tracking-widest">Blogs</h4>

        <div className="space-y-4">
          {blogs.map((blog) => (
            <article key={blog.slug}>
              <Link
                href={`/blog/${blog.slug}`}
                className="
                  group flex flex-col gap-4
                  rounded-xl px-4 py-4
                  transition-colors duration-300
                  hover:bg-neutral-50/10
                  sm:flex-row sm:items-start sm:justify-between
                "
              >
                {/* left */}
                <div className="space-y-2 min-w-0">
                  <h5 className="font-semibold leading-snug">{blog.title}</h5>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {blog.description}
                  </p>
                </div>

                {/* right */}
                <div
                  className="
                    flex items-center justify-between
                    gap-3 text-sm text-muted-foreground
                    sm:shrink-0
                  "
                >
                  <p className="whitespace-nowrap">{formatDate(blog.date)}</p>
                  <FaArrowRight
                    className="
                      size-4 transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
