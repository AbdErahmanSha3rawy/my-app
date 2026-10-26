import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
       <nav className="flex gap-4 p-4 bg-zinc-100 dark:bg-zinc-900 justify-center color-zinc-900 dark:text-zinc-100" >
          <Link href="/">Home</Link>
          <Link href="/users">Users</Link>
          <Link href="/posts">Posts</Link>
        </nav>
     hello
    </div>
  );
}
