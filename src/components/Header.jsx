import feedLogo from "../assets/satellite.png"
import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <strong>
                <h1>Space Chat</h1>
            </strong>
            <img src={ feedLogo } alt="Feed Logo"></img>
        </header>
    )
}