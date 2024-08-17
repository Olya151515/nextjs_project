'use client'
import React, {FC, useState} from 'react';
import '@smastrom/react-rating/style.css';
import {Rating} from "@smastrom/react-rating";

interface MovieRatingProps {
    rating: number;
    maxRating?: number;
}

const RatingComponent: FC<MovieRatingProps> = ({rating, maxRating = 10}) => {
    return (
        <div>
            <Rating
                style={{maxWidth: 160}}
                value={rating}
                readOnly={true}
                items={10}
            />
        </div>
    );
};

export default RatingComponent;