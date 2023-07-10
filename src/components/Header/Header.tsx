import Nav from "../Nav/Nav";
import styles from './Header.module.css'

function Header() {
    return ( 
        <header className={styles.headerWrapper}>
            <Nav/>
        </header>        
    );
}

export default Header;