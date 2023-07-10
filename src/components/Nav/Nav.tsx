import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DeviceTvIcon, HeartIcon, MovieIcon, TicketIcon } from "../Icons";
import styles from './Nav.module.css'
import { AppContext } from "../../context";

function Nav() {
    const { setSearchBy } = useContext(AppContext)

    return (
        <nav className={styles.Nav}>
            <ul className={styles.ulNav}>
                <li>
                    <NavLink
                        onClick={() => setSearchBy('multi')}
                        className={({ isActive}) => isActive ? `${styles.navLinkActive}` : `${styles.navLink}`}
                        to={"/"}>
                        <TicketIcon strokeWidth={1.5} className={styles.ticketIcon} />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => setSearchBy('movie')}
                        className={({ isActive}) => isActive ? `${styles.navLinkActive}` : `${styles.navLink}`}
                        to={'/movie'}>
                        <MovieIcon strokeWidth={1.5} className={styles.icons} />
                    </NavLink>

                </li>
                <li>
                    <NavLink 
                        onClick={() => setSearchBy('tv')} 
                        className={({ isActive}) => isActive ? `${styles.navLinkActive}` : `${styles.navLink}`} 
                        to={'/tv'}>
                        <DeviceTvIcon strokeWidth={1.5} className={styles.icons} />
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        onClick={() => setSearchBy('multi')}
                        className={({ isActive}) => isActive ? `${styles.navLinkActive}` : `${styles.navLink}`}
                        to={'/favorites'}>
                        <HeartIcon strokeWidth={1.5} className={styles.icons} />
                    </NavLink>

                </li>
            </ul>
        </nav>
    );
}

export default Nav;