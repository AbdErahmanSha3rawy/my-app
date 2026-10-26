import Link from 'next/link'
import React from 'react'

const layout = ({ children }) => {
  return (
   <div>
      <nav className="flex gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 justify-center color-zinc-900 dark:text-zinc-100" >
                <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
              </nav>
    
         
      <div className="container mx-auto py-4 bg-color dark:bg-gray-800 color dark:text-white" >{children}</div>
    </div>
  )
}

export default layout
