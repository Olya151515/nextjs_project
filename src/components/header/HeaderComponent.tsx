'use client'
import React from 'react';
import Link from "next/link";
import styles from "/src/components/header/styleHeader/HeaderStyle.module.css";
import SearchComponent from "@/components/searchComponent/SearchComponent";
import {usePathname} from "next/navigation";
import {toggleTheme} from "@/redux/slices/themeSlice";
import {RootState, useAppDispatch, useAppSelector} from "@/hooks/reduxHooks";

const HeaderComponent = () => {

    const dispatch = useAppDispatch();
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    let pathname = usePathname();
    const handleToggle = () => {
        dispatch(toggleTheme());
    }

    const iconUSer = isDarkTheme? "https://img.icons8.com/ios-glyphs/30/FFFFFF/name.png" : "https://img.icons8.com/ios-glyphs/30/1A1A1A/name.png"

    return (
        <div className={ isDarkTheme? styles.headerStyle : styles.whiteTheme}>
            <div className={ isDarkTheme?styles.liWithIconUser:styles.liWithUserWhite}>
                <ul className={styles.ulStyle}>
                    <li className={ isDarkTheme? styles.liStyle : styles.liWhiteTheme}><Link
                        className={pathname === '/' ? styles.active : isDarkTheme? styles.liStyle : styles.liWhiteTheme} href={'/'}>home</Link>
                    </li>
                    <li className={ isDarkTheme? styles.liStyle : styles.liWhiteTheme}><Link
                        className={pathname === '/movies' ? styles.active : isDarkTheme? styles.liStyle : styles.liWhiteTheme}
                        href={'/movies?page=1'}>movies</Link></li>
                    <li className={ isDarkTheme? styles.liStyle : styles.liWhiteTheme}><Link
                        className={pathname === '/genres' ? styles.active : isDarkTheme? styles.liStyle : styles.liWhiteTheme}
                        href={'/genres?id=28'}>genres</Link></li>
                    <li className={styles.liStyle}>
                        <div className={styles.searchDiv}><SearchComponent/></div>
                    </li>
                </ul>
                <div className={styles.styleBtnMode}>
                    <div>
                        <button
                            onClick={handleToggle}
                        >mode
                        </button>
                    </div>

                </div>
                <img className={styles.styleImgUser} width="30" height="30"
                     src={iconUSer} alt="user"/>
            </div>
            <div className={isDarkTheme?styles.blackLine:styles.whiteLine}>
                <hr/>
            </div>


        </div>
    );
};

export default HeaderComponent;