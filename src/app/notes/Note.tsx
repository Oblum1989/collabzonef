import SimpleCard from "@/components/Card/SimpleCard";
import { NoteProps } from "@/types/note";
import Image from "next/image";

export default function Note(note: NoteProps) {
  return (
    <SimpleCard>
      <div className="p-4">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">{note.title}</h3>
          <span className="text-sm text-slate-400">{note.created_at}</span>
        </div>
        <div className="my-4">
          <p>{note.content}</p>
          <p>{note.url}</p>
        </div>
        <div className="flex justify-between">
          <div className="p-2 rounded-full hover:bg-slate-200">
            <Image src="/icons/star.png" alt="menu" width={30} height={30} />
          </div>
          <div className="p-2 rounded-full hover:bg-slate-200">
            <Image src="/icons/check.png" alt="menu" width={30} height={30} />
          </div>
          <div className="p-2 rounded-full hover:bg-slate-200">
            <Image src="/icons/trash.png" alt="menu" width={30} height={30} />
          </div>
        </div>
      </div>
    </SimpleCard>
  )
}
