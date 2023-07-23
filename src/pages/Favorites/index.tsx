import { AlertCircleIcon } from "../../components/Icons";

import styles from './Favorites.module.css'

function Favorites() {
    return (
        <div className={styles.alertContainer}>
            <AlertCircleIcon strokeWidth={1.5} className={styles.icons} />
            <p>Esta parte de favoritos estará disponible cuando se implemente la autenticación</p>
        </div>
    );
}

export default Favorites;