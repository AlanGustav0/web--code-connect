import logger from "@/log";
import { remark } from "remark";
import html from "remark-html";
import style from "./page.module.css";
import { CardPost } from "@/components/CardPost";

async function getPostsBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;

  const response = await fetch(url).catch((error) => {
    logger.error("Ops, não foi possível recuperar os post");
    return null;
  });

  if (!response || !response.ok) {
    logger.error("Problema ao recuperar os posts");
    return {};
  }

  logger.info("Posts recuperados com sucesso");
  const data = await response.json();

  if (data.length == 0) {
    return {};
  }

  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}
const PagePosts = async ({ params }) => {
  const slug = params.slug;
  const post = await getPostsBySlug(slug);
  if (!post) {
    return <h1>Post não encontrado</h1>;
  }
  return (
    <>
      <div className={style.main}>
        <CardPost key={post.id} post={post} hasDescription={true} hasSearch={true}/>
      </div>
    </>
  );
};

export default PagePosts;
