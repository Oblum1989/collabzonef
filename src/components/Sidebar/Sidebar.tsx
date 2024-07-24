import Image from "next/image";

export default function Sidebar() {
  return (
    <aside>
      <ul className="bg-gray-200 p-4 h-full border-r shadow-border">
        <li className="mb-6">
          <div>
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
          </div>
        </li>
        <li className="mb-6">
          <div>
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
          </div>
        </li>
        <li className="mb-6">
          <div>
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
          </div>
        </li>
      </ul>
    </aside>
  )
}
