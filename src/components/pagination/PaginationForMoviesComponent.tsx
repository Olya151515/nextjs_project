import React, {FC} from 'react';
import Link from "next/link";
import styles from "/src/components/pagination/stylePagination/stylePagination.module.css";
import {decrementSearchParams, incrementSearchParams, pagination} from "@/services/pagination.service";
type IProps = {
    currentPage : number,
    totalPages:number,
    typeOfData:string
}
const PaginationForMoviesComponent:FC<IProps> = ({currentPage,totalPages,typeOfData}) => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.buttonPagination}>
                    <button
                        disabled={pagination.isDisabledDec(totalPages,currentPage,typeOfData)}
                         className={styles.buttonStyle}
                    >
                        <Link href={`?page=${decrementSearchParams(currentPage ,totalPages, 'movies')}`}>
                        <img width="40" height="40" src="https://img.icons8.com/ios/50/FFFFFF/circled-chevron-left.png"
                             alt="circled-chevron-left"/>
                    </Link>
                    </button>
            </div>
            <div className={styles.styleCurrentPage}>
                {currentPage}
            </div>

            <div className={styles.buttonPagination}>

                    <button className={styles.buttonStyle}>
                        <Link href={`?page=${currentPage + 1}`}>
                        <img width="40" height="40"
                             src="https://img.icons8.com/ios/50/FFFFFF/circled-chevron-right--v1.png"
                             alt="circled-chevron-right--v1"/>
                        </Link>
                    </button>


            </div>
        </div>
    );
};

export default PaginationForMoviesComponent;