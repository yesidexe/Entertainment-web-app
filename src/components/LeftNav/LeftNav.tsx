import { CategoryIcon, DeviceTvIcon, HeartIcon, MovieIcon, TicketIcon } from "../Icons/Icons";
import styles from './LeftNav.module.css'

function LeftNav() {
    return (
        <nav className={styles.NavLeft}>
            <span><TicketIcon/></span>
            <ul className={styles.ulNavLeft}>
                <li><CategoryIcon strokeWidth={1.5} className={styles.icons}/></li>
                <li><MovieIcon strokeWidth={1.5} className={styles.icons}/></li>
                <li><DeviceTvIcon strokeWidth={1.5} className={styles.icons}/></li>
                <li><HeartIcon strokeWidth={1.5} className={styles.icons}/></li>
            </ul>
        </nav>
    );
}

export default LeftNav;