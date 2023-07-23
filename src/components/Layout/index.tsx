//import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Layout.module.css'
import { Suspense } from 'react';

function Layout() {
    return (
        <main className={styles.mainClass}>
            <Header />
            <div className={styles.bodyWrapper}>
                <SearchBar />
                <Suspense fallback={
                    <h3 style={{color:'white', textAlign:'center'}}>Loading...</h3>
                    }>
                    <Outlet />
                </Suspense>                
            </div>
        </main>
    );
}

export default Layout;