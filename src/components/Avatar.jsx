import styles from './Avatar.module.css'

export function Avatar({name,desc}){
    return (
        <div className={styles.profile}>
            <img src='https://github.com/OtavioLira.png' alt=''></img>
            <strong>{name}</strong>
            <span>{desc}</span>
        </div>
    )
}