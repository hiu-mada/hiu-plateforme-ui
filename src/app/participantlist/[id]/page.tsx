"use client"
import { useEffect, useState } from 'react';
import { ChallengerTeam } from '../../../components/mock/ParticipantListMock';
import { TeamChallenge } from '../../../components/utils/type';
import { useParams } from 'next/navigation';
import styles from '../../../styles/DetailsTeam.module.css'
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
                        <div className={styles.team_text} >
                            <h1> {team.name}</h1>
                            <p> {team.University.name}</p>
                            <p>{team.slogan}</p>
                        </div>
                        <div className={styles.team_descrition_pictures} >
                            <img className={styles.university_pic} src={team.University.url} alt="user_profile" />
                        </div>
                        <div className={styles.subject} >
                            <div className={styles.team_description_votes} >
                                <h1>Votes: {team.votes} </h1>
                            </div>
                            <h1>Subject: </h1>
                            <h3>{team.subject.name}</h3>
                            <p>{team.subject.description}</p>
                        </div>
                    </div>
                    <h1 className={styles.title} >Team members</h1>
                    <div className={styles.team_members} >
                        <ul className={styles.profile_teams_list}>
                            {team.User.map(user => (
                                <li key={user.id}>
                                    <div className={styles.profile_image} >
                                        <img src={user.profile_picture} alt="user_profile" />
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
