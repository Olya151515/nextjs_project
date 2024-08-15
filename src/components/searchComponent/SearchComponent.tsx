'use client'
import React, {useState} from 'react';
import styles from "/src/components/header/styleHeader/HeaderStyle.module.css";
import {useRouter} from "next/navigation";
import {search, whiteSearch} from "@/constants/icons/icons";

const SearchComponent = () => {
    const [query, setQuery] = useState<string>('');

    const route = useRouter()
    const handlerInputChange = (e) => {
        setQuery(e.target.value);
    }
    const handeKeyDown = (e) =>{
        if(e.key === 'Enter'){
            e.preventDefault();
            route.push(`/movies/search?query=${encodeURIComponent(query)}`);
        }
    }
    return (
        <div className={styles.inputBox}>
            <div>
                <img width="24" height="24" src="https://img.icons8.com/material/24/FFFFFF/search--v1.png"
                     alt="search--v1"/>
            </div>
            <input
                className={styles.inputStyle}
                type="text" placeholder={'search...'}
                value={query}
                onChange={handlerInputChange}
                onKeyDown={handeKeyDown}
            />
        </div>
    );
};

export default SearchComponent;