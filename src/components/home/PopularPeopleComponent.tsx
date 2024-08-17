'use client'
import React, {FC} from 'react';
import {IPeople} from "@/models/people/IPeople";
import PersonComponent from "@/components/home/PersonComponent";
import styles from "/src/components/home/styleHome/HomeStyle.module.css";
import styles2 from "/src/app/page.module.css";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";
type IProps ={
    people:IPeople[]
}

const PopularPeopleComponent:FC<IProps> = ({people}) => {
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    return (
        <div className={[styles.blockWithPeopleAndTitle, isDarkTheme? styles.body :styles2.whiteBody].join(' ')}>
            <div className={isDarkTheme?styles.title:styles.whiteTitle}>
                <h3 className={styles.h3}>Famous people</h3>
            </div>
            <div className={styles.blockWithPeople}>
                {
                    people.map(person => <PersonComponent key={person.id} person={person}/>)
                }
            </div>

        </div>
    );
};

export default PopularPeopleComponent;