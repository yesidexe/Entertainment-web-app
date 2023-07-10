import { ReactNode } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Layout.module.css'

function Layout({children}:{children:ReactNode}) {
    return (
        <main className={styles.mainClass}>
            <Header />            
            <div className={styles.bodyWrapper}>
                <SearchBar />
                {children}
            </div>            
        </main>
    );

}

export default Layout;