import React, {FC} from 'react';
import {IPeople} from "@/models/people/IPeople";
import PersonComponent from "@/components/home/PersonComponent";
import styles from "/src/components/home/styleHome/HomeStyle.module.css";
type IProps ={
    people:IPeople[]
}

const PopularPeopleComponent:FC<IProps> = ({people}) => {
    return (
        <div className={[styles.blockWithPeopleAndTitle, styles.body].join(' ')}>
            <div className={styles.title}>
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