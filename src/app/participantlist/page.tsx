"use client"
import { useState } from 'react';
import Link from 'next/link';
import { ChallengerTeam } from '@/components/mock/ParticipantListMock';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Page = () => {
  const data = ChallengerTeam;
    return (
        <>
    <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
     {
      data.map((team) => (
        <Card className="w-full" key={team.id}>
        <CardHeader>
          <CardTitle>{team.name}</CardTitle>
          <CardDescription>{team.University.name}</CardDescription>
           <CardDescription>{team.slogan}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mb-4">
              {team.User.map((users) => (
            <Avatar key={users.id}>
              <AvatarImage alt="@shadcn" src={users.profile_picture} />
            </Avatar>
              ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href={`/participantlist/${team.id}`}>
                    Details
                  </Link>
          </Button>
          <Button>Vote</Button> {/* TODO add imple when connect to backend*/ }
        </CardFooter>
      </Card>

      ))
      }
    </div>
        </>
    );
}

export default Page;
