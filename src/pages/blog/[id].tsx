import { client } from "../../libs/client";
import type { Blog } from "../../types/blog";

export default function BlogId({ blog }: Props)  {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div 
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

// Props（blog）の型
type Props = {
  blog: Blog;
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: { id: string; }) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string; }; }) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id});

  return {
    props: {
      blog: data,
    },
  };
};

