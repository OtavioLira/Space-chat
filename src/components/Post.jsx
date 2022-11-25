import { Avatar } from "./Avatar"
import styles from "./Post.module.css"

export function Post({ author, content}){
    return (
        <div className={styles.post}>
            <h1>{ author }</h1>
            <h2>{ content }</h2>
        </div>
    )
}