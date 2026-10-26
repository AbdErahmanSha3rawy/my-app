import Link from "next/link"

export const metadata = {
  title: 'Users Page',
  description: 'This is the users page',
}

export default function UserLayout({ children }) {
  return (
    <div>
      <nav className="flex gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 justify-center color-zinc-900 dark:text-zinc-100" >
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
              </nav>
      <h1>Users  Bar</h1>
         
      <div className="container mx-auto py-4 bg-color dark:bg-gray-800 color dark:text-white" >{children}</div>
    </div>
  )
}