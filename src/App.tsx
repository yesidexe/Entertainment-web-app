import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import styles from './App.module.css'

function App() {

  return (
    <main className={styles.mainClass}> 
      <Header/>
      <Body/>
    </main>
  )
}

export default App
