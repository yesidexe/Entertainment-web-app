import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import styles from './App.module.css'
import { AppProvider } from "./context"

function App() {

  return (
    <AppProvider>
      <main className={styles.mainClass}>
        <Header />
        <Body />
      </main>
    </AppProvider>

  )
}

export default App
