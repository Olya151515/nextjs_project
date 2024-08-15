import React, {FC} from 'react';
import Link from "next/link";
type IProps = {
    totalPages:number,
    currentPage:number,
    genreId:number
}

const PaginationForGenresComponent:FC<IProps> = ({totalPages,currentPage,genreId}) => {
    return (
        <div>
            <Link href={`?id=${genreId}&page=${currentPage-1}`}>
                <button>prev</button>
            </Link>

            <Link href={`?id=${genreId}&page=${currentPage+1}`}>
                <button>next</button>
            </Link>
        </div>
    );
};

export default PaginationForGenresComponent;