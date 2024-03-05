"use client"
import styles from '../../styles/ParticipantList.module.css'
import { useState } from 'react';
import Link from 'next/link';
import { ChallengerTeam } from '@/components/mock/ParticipantListMock';
import Image from 'next/image';
const Page = () => {
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
                        <p className={styles.subjectText} >SUBJECT</p>
                        <div className={styles.user_pic_subject}>
                            <div>
                                <p className={styles.styleslogan}>{team.subject.name} </p>
                            </div>
                            <div className={styles.user_pic}>
                                <ul className={styles.profile_pic_list} >
                                    {team.User?.slice(0, 2).map(user => (
                                        <li key={user.id} >
                                            <Image
                                                src={user.profile_picture}
                                                width={35}
                                                height={35}
                                                style={{
                                                    borderRadius: '50%',
                                                    overflow: 'hidden',
                                                    border: '2px solid #fff',
                                                }}
                                                alt=""
                                            />
                                        </li>
                                    ))}
                                </ul>
                                {team.User?.length > 2 && (
                                    <p>+ {team.User.length - 2} participating</p>
                                )}
                            </div>
                        </div>
                        <div className={styles.link}>
                            <Link href={`/participantlist/${team.id}`} className={styles.button_details} >
                                DETAILS
                            </Link>
                            <Link href={`/voting`} className={styles.button} >
                                Vote
                            </Link>

                        </div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default Page;