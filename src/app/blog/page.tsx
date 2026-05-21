import Container from "@/components/container";
import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";

export default function Blogs() {
  const blogs = getAllBlogs();
  return (
    <Container>
      <div className="flex flex-col gap-4 py-6">
        <h4 className="uppercase tracking-widest">Blogs</h4>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <article key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                <h5 className="text-lg font-bold">{blog.title}</h5>
              </Link>
              <p className="text-muted-foreground">{blog.description}</p>
              <p className="text-sm text-muted-foreground">{blog.date}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
