import Image from "next/image";

export default function Sidebar() {
  return (
    <aside>
      <ul className="bg-gray-200 p-2 h-full border-r shadow-border">
        <li className="mb-2 hover:bg-gray-300 p-3">
          <div>
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
          </div>
        </li>
        <li className="mb-2 hover:bg-gray-300 p-3">
          <div>
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
          </div>
        </li>
        <li className="mb-2 hover:bg-gray-300 p-3">
          <div>
            <Image src="/icons/home.png" alt="menu" width={30} height={30} />
          </div>
        </li>
      </ul>
    </aside>
  )
}
