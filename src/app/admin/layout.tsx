import SideBar from '@/components/Sidebar/sidebar'
import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (

<div suppressHydrationWarning={true}>
        <div>
            <div className="flex h-screen overflow-hidden">
              <SideBar />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <main>
                  <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    {children}
                  </div>
                </main>
              </div>
            </div>
        </div>
      </div>
  )
}

export default layout
