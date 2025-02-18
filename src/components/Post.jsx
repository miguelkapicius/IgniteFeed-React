import styles from "./Post.module.css";
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/maykbrito.png" />
                    <div className={styles.authorInfo}>
                        <strong>Miguel Kapicius</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio" dateTime="2024-05-23 13:15:06">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto
                    que fiz no NLW Return, evento da Rocketseat. O nome do
                    projeto é DoctorCare 🚀
                </p>

                <p>
                    👉 <a href="#">jane.design/doctorcare</a>
                </p>

                <p>
                    <a href="#">#novoprojeto</a>{" "}
                    <a href="#">#nlw</a>{" "}
                    <a href="#">#rocketseat</a>{" "}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe seu comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}
