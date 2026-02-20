import Image from "next/image";
import { blogsData } from "./blogsData";
import { Container } from "@/components/sectionComponants";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blog = await blogsData;

  return blog.map((blog) => ({
    slug: blog.slug,
    fallback: false,
  }));
}

export async function generateMetadata(props: Params) {
  const blogs = await props.params;
  const blog = await blogsData.find((blog) => blog.slug === blogs.slug);
  return {
    title: blog?.meta.title,
    description: blog?.meta.description,
    keywords: blog?.meta.keywords,
  };
}

const BlogPage = async (props: Params) => {
  const params = await props.params;

  const blog = await blogsData.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return (
      <main className="max_screen_width py-10">
        <h1 className="text-2xl font-semibold md:text-4xl text-center">Blog not found</h1>
      </main>
    );
  }
  return (
    <main className="max_screen_width">
      <div className="p-4">
        <div className="relative w-full md:aspect-[4/1.5] aspect-square rounded-xl overflow-hidden">
          <Image
            src={blog?.src || ""}
            alt={blog?.title || ""}
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Container>
              <h1 className="text-2xl font-semibold md:text-4xl text-white">
                {blog?.title}
              </h1>
              <p className="md:text-xl text-base text-white mt-4">
                {blog?.description}
              </p>
            </Container>
          </div>
        </div>
        <div
          className="blog-content max_width "
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        ></div>
      </div>
    </main>
  );
};

export default BlogPage;
