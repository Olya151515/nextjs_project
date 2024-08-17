'use client'
import React, {FC} from 'react';
import Link from "next/link";
import styles from "/src/components/pagination/stylePagination/stylePagination.module.css";
import {decrementSearchParams, incrementSearchParams, pagination} from "@/services/pagination.service";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";
type IProps = {
    currentPage : number,
    totalPages:number,
    typeOfData:string
}
const PaginationForMoviesComponent:FC<IProps> = ({currentPage,totalPages,typeOfData}) => {
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);

    const rightIconPagination = isDarkTheme? "https://img.icons8.com/ios/50/FFFFFF/circled-chevron-right--v1.png":"https://img.icons8.com/ios/50/1A1A1A/circled-chevron-right--v1.png"
    const leftIconPagination = isDarkTheme? "https://img.icons8.com/ios/50/FFFFFF/circled-chevron-left.png":"https://img.icons8.com/ios/50/1A1A1A/circled-chevron-left.png"
    return (
        <div className={styles.mainDiv}>
            <div className={styles.buttonPagination}>
                    <button
                        disabled={pagination.isDisabledDec(totalPages,currentPage,typeOfData)}
                        className={isDarkTheme? styles.buttonStyle:styles.buttonStyleWhite}
                    >
                        <Link href={`?page=${decrementSearchParams(currentPage ,totalPages, 'movies')}`}>
                        <img width="40" height="40" src={leftIconPagination}
                             alt="circled-chevron-left"/>
                    </Link>
                    </button>
            </div>
            <div className={styles.styleCurrentPage}>
                {currentPage}
            </div>

            <div className={styles.buttonPagination}>

                    <button className={isDarkTheme? styles.buttonStyle:styles.buttonStyleWhite}>
                        <Link href={`?page=${currentPage + 1}`}>
                        <img width="40" height="40"
                             src={rightIconPagination}
                             alt="circled-chevron-right--v1"/>
                        </Link>
                    </button>


            </div>
        </div>
    );
};

export default PaginationForMoviesComponent;