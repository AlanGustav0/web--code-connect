import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from './cardpost.module.css'

export const CardPost = ({post}) => {
    return (
        <article className={styles.cardpost}>
            <header className={styles.cardPostHeader}>
                <figure>
                    <Image src={post.cover} className={styles.cardPostImage} width={438} height={133} alt={`Capa do post de titulo: ${post.title}`}/>
                </figure>
            </header>
            <section className={styles.cardPostContent}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.cardPostFooter}>
                <Avatar imageSrc={post.author.avatar}
                name={post.author.username}/>
            </footer>
        </article>
    )
}