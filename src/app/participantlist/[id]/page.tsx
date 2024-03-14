"use client"
import { useEffect, useState } from 'react';
import { ChallengerTeam } from '../../../components/mock/ParticipantListMock';
import { TeamChallenge } from '../../../components/utils/type';
import { useParams } from 'next/navigation';
import styles from '../../../styles/DetailsTeam.module.css'
import Image from 'next/image';
const Details = () => {
    const params = useParams();
    console.log(params?.id)
    const [team, setTeam] = useState<TeamChallenge | null>(null);

    useEffect(() => {
        if (params?.id) {
            const teamDetails = ChallengerTeam.find(team => team.id === Number(params?.id));
            if (teamDetails) {
                setTeam(teamDetails);
                console.log(teamDetails);
            }
        }

    }, [params?.id])

    return (
        <div>
            {team ? (
                <div className={styles.team_layout} >
                    <div className={styles.team_description} >
                        <div className={styles.description}>
                            <Image className={styles.university_pic} src={team.University.url} width={100} height={100} alt="user_profile" />
                        </div>

                        <div className={styles.votes}>
                            <h1> {team.name}</h1>
                            <p className={styles.univer} > {team.University.name}</p>
                            <p className={styles.slogan}>{team.slogan}</p>
                            <h2>Subject: </h2>
                            <h3>{team.subject.name}</h3>
                            <p className={styles.description_uni}>{team.subject.description} </p>
                            <p className={styles.votess}>Votes: {team.votes} </p>
                        </div>

                    </div>
                    <h1 className={styles.title} >Team members</h1>
                    <div className={styles.team_members} >
                        <ul className={styles.profile_teams_list}>
                            {team.User.map(user => (
                                <li key={user.id}>
                                    <div  >
                                        <Image
                                            src={user.profile_picture}
                                            alt="user_profile"
                                            width={200}
                                            height={200}
                                            style={{
                                                borderRadius: '50%',
                                                overflow: 'hidden',
                                                width: '8em',
                                                height: '8em',
                                                position: 'relative',
                                            }}
                                        />
                                    </div>
                                    <h2 className={styles.profile_username} > {user.username} </h2>
                                    <p className={styles.profile_email} > {user.email} </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <h1>Team ID not found</h1>
            )}
        </div>
    );
};

export default Details;
