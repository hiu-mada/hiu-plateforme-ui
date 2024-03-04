import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { mockData } from '@/components/mock/ResponseMock'

const page =  ({ params }: { params: { id: string } }) => {
  const responseId = parseInt(params.id, 10);
  const response = mockData.find(response => response.id === responseId);

  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Response</h1>
        </div>
        <Card>
          <CardContent className="space-y-2">
            <div>
              <h2 className="text-2xl font-bold">Team Info</h2>
              <p className="text-sm/relaxed"></p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium leading-5">Team Name</dt>
                    <dd className="text-sm font-normal leading-5">
                      {response?.id_challenger_team.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium leading-5">Slogan</dt>
                    <dd className="text-sm font-normal leading-5">
                      {response?.id_challenger_team.slogan}
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium leading-5">University Name</dt>
                    <dd className="text-sm font-normal leading-5">
                      {response?.id_challenger_team.id_university.name}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium leading-5">Discipline</dt>
                    <dd className="text-sm font-normal leading-5">
                      {response?.id_challenger_team.id_discipline.name}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subject</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="text-sm font-medium leading-5">Title</dt>
                <dd className="text-sm font-normal leading-5">
                  {response?.id_subject.title}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium leading-5">Description</dt>
                <dd className="text-sm font-normal leading-5">
                  {response?.id_subject.description}
                </dd>
              </div>

              <div>
                <dt className="text-sm font-medium leading-5">Max Score</dt>
                <dd className="text-sm font-normal leading-5">{response?.id_subject.max_score}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Response</CardTitle>
            <CardDescription>Response comment and commentary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold">Response</h3>
                <p>{response?.response}</p>
              </div>
              <div>
                <h3 className="font-bold">commentary</h3>
                <p>{response?.commentary}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page
