import { UserIcon } from "../Icons";

import styles from './NoImage.module.css'

function NoImage() {
    return (
        <div className={styles.noImage}>
            <UserIcon className={styles.icons} strokeWidth={1.5}/>
        </div>
    );
}

export default NoImage;