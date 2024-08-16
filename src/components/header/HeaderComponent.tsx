'use client'
import React from 'react';
import Link from "next/link";
import styles from "/src/components/header/styleHeader/HeaderStyle.module.css";
import SearchComponent from "@/components/searchComponent/SearchComponent";
import {usePathname} from "next/navigation";
import {userIcon} from "@/constants/icons/icons";

const HeaderComponent = () => {

    let pathname = usePathname();
    return (
        <div className={styles.headerStyle}>
            <div className={styles.liWithIconUser}>
                <ul className={styles.ulStyle}>
                    <li className={styles.liStyle}><Link className={pathname === '/home' ? styles.active : styles.liStyle} href={'/home'}>home</Link></li>
                    <li className={styles.liStyle}><Link className={pathname === '/movies' ? styles.active : styles.liStyle} href={'/movies?page=1'}>movies</Link></li>
                    <li className={styles.liStyle}><Link className={pathname === '/genres' ? styles.active : styles.liStyle} href={'/genres?id=28'}>genres</Link></li>
                    <li className={styles.liStyle}><div className={styles.searchDiv}><SearchComponent/></div>
                    </li>
                </ul>
                <img className={styles.styleImgUser} width="30" height="30"
                     src="https://img.icons8.com/ios-glyphs/30/FFFFFF/name.png" alt="name"/>
            </div>
            <div>
                <hr/>
            </div>


        </div>
    );
};

export default HeaderComponent;