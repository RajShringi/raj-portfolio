import Container from "@/components/container";
import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Blogs() {
  const blogs = getAllBlogs();
  return (
    <Container>
      <div className="flex flex-col gap-4 px-4">
        <h4 className="uppercase tracking-widest">Blogs</h4>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <article key={blog.slug}>
              <Link
                href={`/blog/${blog.slug}`}
                className="flex items-start justify-between py-3 px-4 transition-colors duration-300 ease-in-out hover:bg-neutral-50/10 rounded-lg group"
              >
                <div className="space-y-2">
                  <h5 className="font-semibold leading-none">{blog.title}</h5>
                  <p className="text-sm text-muted-foreground">
                    {blog.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm ">{blog.date}</p>
                  <FaArrowRight className="size-4 hover:text-muted-foreground group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
