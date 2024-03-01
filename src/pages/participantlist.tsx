"use client"
import { ChallengerTeam } from '../components/mock/ParticipantListMock';
import styles from '../styles/ParticipantList.module.css'
import { useState } from 'react';
import Link from 'next/link';

const ParticipantList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>

            <div className={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                />
            </div>
            <div className={styles.teamList}>
                {ChallengerTeam.filter(team =>
                    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    team.University.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    team.subject.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).map(team => (
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
                        <Link href={`/details/${team.id}`} className={styles.button} >
                            Details
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ParticipantList;