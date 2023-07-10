import { AlertCircleIcon } from "../../components/Icons";
import Layout from "../../components/Layout";

import styles from './Favorites.module.css'

function Favorites() {
    return (
        <Layout>
            <div className={styles.alertContainer}>
                <AlertCircleIcon strokeWidth={1.5} className={styles.icons}/>
                <p>Esta parte de favoritos estará disponible cuando se implemente la autenticación</p>                
            </div>
        </Layout>
    );
}

export default Favorites;