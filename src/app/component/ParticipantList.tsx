import React from 'react';
import { ChallengerTeam } from './mock/ParticipantListMock';
import styles from '../../app/styles/ParticipantList.module.css'

interface ChallengerTeam {
    id: number;
    name: string;
    slogan: string;
    subject: Subject
    votes: number;
    User: User[];
    University: University;
    Votes: number;
}

interface Subject {
    name: string;
    description: string;
}

interface University {
    name: string;
    url: string;
}
interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    profile_picture: string;
}
const ParticipantList: React.FC = () => {

    return (
        <>
            <div className={styles.teamList}>
                {ChallengerTeam.map(team => (
                    <div key={team.id} className={styles.team}>
                        <div className={styles.name_votes} >
                            <h1 className={styles.name}>{team.name}</h1>
                            <p className={styles.votes} >Votes: {team.votes} </p>
                        </div>
                        <p className={styles.University} >{team.University.name} </p>
                        <p className={styles.subjectText} >Subject</p>
                        <div className={styles.user_pic_subject}>
                            <div>

                                <p className={styles.styleslogan}>{team.subject.name} </p>
                            </div>
                            <div className={styles.user_pic}>
                                <ul className={styles.profile_pic_list} >
                                    {team.User?.slice(0, 3).map(user => (
                                        <li key={user.id}>
                                            <img className={styles.profile_pic} src={user.profile_picture} alt="" />
                                        </li>
                                    ))}
                                </ul>
                                {team.User?.length > 3 && (
                                    <p>+ {team.User.length - 3} participating</p>
                                )}
                            </div>
                        </div>

                        <button className={styles.button} >Details</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ParticipantList;