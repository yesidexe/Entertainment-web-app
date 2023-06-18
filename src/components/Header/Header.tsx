import LeftNav from "../LeftNav/LeftNav";
import styles from './Header.module.css'

function Header() {
    return ( 
        <header className={styles.headerWrapper}>
            <LeftNav/>
        </header>        
    );
}

export default Header;