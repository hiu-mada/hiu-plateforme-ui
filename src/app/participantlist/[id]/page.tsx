"use client"
import { use, useEffect, useState } from 'react';
import { ChallengerTeam } from '../../../components/mock/ParticipantListMock';
import { TeamChallenge } from '../../../components/utils/type';
import { useParams } from 'next/navigation';
import styles from '../../../styles/DetailsTeam.module.css'
import Image from 'next/image';
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

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
                <div>
                    <div className="grid items-start justify-start gap-6 px-4 mr-10 text-center md:gap-12 md:px-6 xl:grid-cols-2">
                        <div className="space-y-4 mt-4 mb-4">
                            <Image className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
                                src={team.University.url}
                                width={200}
                                height={200}
                                alt="user_profile" />
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{team.University.name} </h1>
                                <p className="text-gray-500 dark:text-gray-400">Description</p>
                            </div>
                        </div>
                        <div className="space-y-4 mb-8">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Team: {team.name} </h2>
                                <p className="text-gray-500 dark:text-gray-400">{team.slogan} </p>
                            </div>
                            <div className="border rounded-lg divide-y">
                                <div className="grid grid-cols-2 items-center justify-between p-4">
                                    <h3 className="text-lg font-medium">Subject</h3>
                                    <p className="text-right">{team.subject.name} </p>
                                </div>
                                <div className="grid grid-cols-2 items-center justify-between p-4">
                                    <h3 className="text-lg font-medium">Description</h3>
                                    <p className="text-right">
                                        {team.subject.description}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 items-center justify-between p-4">
                                    <h3 className="text-lg font-medium">Votes</h3>
                                    <p className="text-right">{team.votes} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-4 space-y-4 mt-3">
                        <div className="mx-auto grid max-w-7xl gap-8 lg:gap-10 ">
                            <div className="space-y-3">
                                <h1 className="text-3xl font-bold mb-8 mt-4  mx-3">Team members</h1>
                                <ul className="grid gap-4 md:grid-cols-3 xl:gap-6 ">
                                    {team.User.map(user => (
                                        <li key={user.id} className="grid gap-4 md:grid-cols-1 xl:gap-6">
                                            <Card className="flex flex-col md:flex-row items-center md:items-start p-3">
                                                <Image
                                                    className="rounded-full"
                                                    src={user.profile_picture}
                                                    alt="user_profile"
                                                    height="96"
                                                    style={{
                                                        aspectRatio: "96/96",
                                                        objectFit: "cover",
                                                    }}
                                                    width="96"
                                                />
                                                <CardHeader className="p-4">
                                                    <div className="space-y-1.5">
                                                        <div className="font-semibold">{user.username}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                                                    </div>
                                                </CardHeader>
                                            </Card>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <h1>Team ID not found</h1>
            )
            }
        </div >
    );
};

export default Details;
