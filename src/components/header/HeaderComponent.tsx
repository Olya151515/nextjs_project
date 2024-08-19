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

    const iconTheme = isDarkTheme?"https://img.icons8.com/pastel-glyph/64/FFFFFF/light--v1.png":"https://img.icons8.com/external-android-line-2px-amoghdesign/24/1A1A1A/external-dark-multimedia-line-24px-android-line-2px-amoghdesign.png";
    return (
        <div className={ isDarkTheme? styles.headerStyle : styles.whiteTheme}>
            <div className={ isDarkTheme?styles.liWithIconUser:styles.liWithUserWhite}>
                <ul className={styles.ulStyle}>
                    <li className={ isDarkTheme? styles.liStyle : styles.liWhiteTheme}><Link
                        className={pathname === '/' ? styles.active : isDarkTheme? styles.liStyle : styles.liWhiteTheme} href={'/'}>Home</Link>
                    </li>
                    <li className={ isDarkTheme? styles.liStyle : styles.liWhiteTheme}><Link
                        className={pathname === '/movies' ? styles.active : isDarkTheme? styles.liStyle : styles.liWhiteTheme}
                        href={'/movies?page=1'}>Movies</Link></li>
                    <li className={ isDarkTheme? styles.liStyle : styles.liWhiteTheme}><Link
                        className={pathname === '/genres' ? styles.active : isDarkTheme? styles.liStyle : styles.liWhiteTheme}
                        href={'/genres?id=28'}>Genres</Link></li>
                    <li className={styles.liStyle}>
                        <div className={styles.searchDiv}><SearchComponent/></div>
                    </li>
                </ul>

                <div className={styles.blockIcons}>
                    <div className={isDarkTheme?styles.styleBtnMode:styles.styleBtnThemeWhite}>
                            <button
                                onClick={handleToggle}
                                className={isDarkTheme?styles.styleBtnTheme:styles.styleBtnThemeWhite}
                            ><img width="30" height="30"
                                  src={iconTheme}
                                  alt="light--v1"/>
                            </button>
                    </div>
                    <div className={styles.userIcon}>
                        <img width="30" height="30"
                             src={iconUSer} alt="user"/>
                    </div>
                </div>
            </div>
            <div className={isDarkTheme ? styles.blackLine : styles.whiteLine}>
                <hr/>
            </div>


        </div>
    );
};

export default HeaderComponent;