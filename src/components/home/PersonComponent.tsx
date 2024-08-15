import React, {FC} from 'react';
import {IPeople} from "@/models/people/IPeople";
import {urlProfilePerson, urlsApi} from "@/constants/urls/urls";
import styles from "/src/components/home/styleHome/HomeStyle.module.css";
type IProps = {
    person:IPeople
}
const PersonComponent:FC<IProps> = ({person}) => {
    return (
        <div >
            <div className={styles.onePersonBlock}>
                <img className={styles.profilePersonImg} src={urlProfilePerson + person.profile_path} alt="profile"/>
                <div className={styles.personName}>{person.name}</div>
            </div>
        </div>
    );
};

export default PersonComponent;