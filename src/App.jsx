import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import "./global.css"
import styles from "./App.module.css"

export function App() {
  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
       <Sidebar name="Otávio Lira Neves" desc="Space Web Developer"></Sidebar>
       <div className="Post">
        <Post author="Alef" content="Professor de DS44"/>
        <Post author="Eduardo" content="Estudante de React" />
        <Post author="Rafael" content="To tentando entender" />
       </div>
    </div>
    </>
    
  )
}


//JSX - Javascript + HTML
//default exports vs named exports
// componente eh um arquivo q abstrai parte da interface eme outro arquivo e pode ser reaproveitado em outros momentos

//props infos q passamos para os components
//props recebem um objeto dos atributos passados a um comonent
// usar {}