'use client'
import React, {useState} from 'react';
import styles from "/src/components/header/styleHeader/HeaderStyle.module.css";
import {useRouter} from "next/navigation";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";

const SearchComponent = () => {
    const [query, setQuery] = useState<string>('');
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme)
    const route = useRouter();
    const iconSearch:string = isDarkTheme? "https://img.icons8.com/ios-filled/50/FFFFFF/search.png" : "https://img.icons8.com/ios-filled/50/1A1A1A/search--v1.png"
    const handlerInputChange = (e) => {
        setQuery(e.target.value);
    }
    const handeKeyDown = (e) =>{
        if(e.key === 'Enter'){
            e.preventDefault();
            route.push(`/movies/search?query=${encodeURIComponent(query)}&page=1`);
        }
    }
    return (
        <div className={styles.inputBox}>
            <div>
                <img width="24" height="24" src={iconSearch}
                     alt="search--v1"/>
            </div>
            <input
                className={isDarkTheme? styles.inputStyle : styles.inputWhite}
                type="text" placeholder={'search...'}
                value={query}
                onChange={handlerInputChange}
                onKeyDown={handeKeyDown}
            />
        </div>
    );
};

export default SearchComponent;