"use client"
import { ChallengerTeam } from "@/components/mock/ParticipantListMock";
import { useState } from "react";
import styles from '../../styles/Voting.module.css';

const Page = () => {
    const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
    const [showAlert, setShowAlert] = useState(false);


    const handleTeamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTeam(Number(event.target.value));
        console.log(event.target.value);
    };

    const handleSubmit = () => {
        if (selectedTeam !== null) {
            const team = ChallengerTeam.find(team => team.id === selectedTeam);
            if (team) {
                team.vote();
                console.log(`Voted for ${team.name}`);
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false); 
                }, 3000);
            }
        }
    }
    return (
        <>
            <div className={styles.voting} >
                {ChallengerTeam.map(team => (
                    <div className={styles.votingchild} key={team.id} >
                        <input
                            className={styles.input}
                            type="radio"
                            name="team"
                            value={team.id}
                            checked={selectedTeam === team.id}
                            onChange={handleTeamChange}
                        />
                        <label className={styles.label} >
                            <p>{team.name}</p>
                            <p>{team.University.name}</p>
                        </label>
                    </div>
                ))}
            </div>
            <button className={styles.button} onClick={handleSubmit} >Validate</button>
            {showAlert && <div className={styles.alert}>Vote has been submitted!</div>}
        </>
    )
};

export default Page;