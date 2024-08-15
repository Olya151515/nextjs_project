'use client'
import React, {useState} from 'react';
import styles from "/src/components/header/styleHeader/HeaderStyle.module.css";
import {useRouter} from "next/navigation";

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
        <div>
            <input
                className={styles.inputStyle}
                type="text" placeholder={'search movie'}
                value={query}
                onChange={handlerInputChange}
                onKeyDown={handeKeyDown}
            />
        </div>
    );
};

export default SearchComponent;