import { CardPost } from "@/components/CardPost";
import logger from "@/log";
import styles from "./page.module.css";
import Link from "next/link";

async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  ).catch((error) => {
    logger.error("Ops, não foi possível recuperar os posts");
    return null;
  });
  if (!response || !response.ok) {
    logger.error("Problema ao recuperar os posts");
    return [];
  }

  logger.info("Posts recuperados com sucesso");
  return response.json();
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          {posts.map((post) => (
            <CardPost key={post.id} post={post} />
          ))}
        </main>
        <div className={styles.links}>
          {prev && <Link href={`/?page=${prev}`}>Página Anterior</Link>}
          {next && <Link href={`/?page=${next}`}>Próxima Página</Link>}
        </div>
      </div>
    </>
  );
}
