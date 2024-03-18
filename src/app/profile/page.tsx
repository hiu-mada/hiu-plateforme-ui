"use client"
import { useState } from 'react';
import { users } from "@/components/mock/UsersMock";
import Image from "next/image";
import styles from '../../styles/Profile.module.css'

const ProfilePage = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (reader.result) {
                    setProfileImage(reader.result as string);
                }
            };
        }
    };

    return (
        <div className={styles.profileContainer}>
            {users.map((user, index) => (
                <div key={index} className={styles.profileCard}>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileImage}>
                            {profileImage ? (
                                <Image src={profileImage} alt="" width={100} height={100} />
                            ) : (
                                <Image src={user.profile_picture} alt="" width={100} height={100} />
                            )}
                        </div>
                        <div className={styles.userInfo}>
                            <h1>{user.user_name}</h1>
                            <h5>{user.email}</h5>
                            <h5>{user.university.name}</h5>
                            <p className={styles.description}>{user.university.descritpion}</p>
                        </div>
                        <div className={styles.buttonEdit}>
                            <label htmlFor="upload" >Edit profile</label>
                            <input id="upload" type="file" accept="image/*" onChange={handleImageUpload} hidden />
                        </div>
                    </div>
                    <div className={styles.additionalInfo}>
                        <div>
                            <h1>Subject</h1>
                            <div className={styles.details}>
                                <h2 className={styles.title}>{user.subject.title}</h2>
                                <p>{user.subject.description}</p>
                                <p>max score: <span>{user.subject.max_score}</span></p>
                            </div>
                        </div>
                        <div>
                            <h1>Team</h1>
                            <div className={styles.details}>
                                <h2 className={styles.title}>{user.team.name}</h2>
                                <p>{user.team.slogan}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfilePage;
