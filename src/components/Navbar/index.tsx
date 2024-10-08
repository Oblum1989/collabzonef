import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-sky-600 flex justify-between py-1 px-4">
      <div className="flex justify-between gap-4 items-center">
        <div>
          <Image src="/icons/menu.svg" alt="menu" width={20} height={20} />
        </div>
        <Link href="/wall" >
          <Image src="/icons/empresa.png" alt="menu" width={60} height={60} />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-6">
        <div className="flex justify-center items-center gap-2 bg-slate-200 py-2 px-4 text-black rounded-xl">
          <Image src="/icons/pregunta.png" alt="menu" width={20} height={20} />
          <span>Centro de ayuda</span>
        </div>
        <div>
          <Image src="/icons/avatar.png" alt="menu" width={60} height={60} />
        </div>
      </div>
    </nav>
  )
}
