import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside>
      <ul className="bg-gray-200 p-2 h-full border-r shadow-border">
        <Link href="/" >
          <li className="mb-2 hover:bg-gray-300 p-3 hover:rounded-xl">
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
            <span>home</span>
          </li>
        </Link>
        <Link href="/wall" >
          <li className="mb-2 hover:bg-gray-300 p-3 hover:rounded-xl">
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
            <span>wall</span>
          </li>
        </Link>
        <Link href="/chats" >
          <li className="mb-2 hover:bg-gray-300 p-3 hover:rounded-xl">
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
            <span>chats</span>
          </li>
        </Link>
        <Link href="/notes" >
          <li className="mb-2 hover:bg-gray-300 p-3 hover:rounded-xl">
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
            <span>notes</span>
          </li>
        </Link>
      </ul>
    </aside>
  )
}
