import { NoteProps } from "@/types/note"
import Note from "./Note"

const DATANOTES: NoteProps[] = [
  {
    id: 1,
    title: "Note 1",
    content: "Content Note 1",
    url: "https://reqres.in/img/faces/1-image.jpg",
    created_at: "2021-09-01",
  },
  {
    id: 2,
    title: "Note 2",
    content: "Content Note 2",
    url: "https://reqres.in/img/faces/2-image.jpg",
    created_at: "2021-09-02",
  },
  {
    id: 3,
    title: "Note 3",
    content: "Content Note 3",
    url: "https://reqres.in/img/faces/3-image.jpg",
    created_at: "2021-09-03",
  },
]

export default function Notes() {
  return (
    <>
      {DATANOTES.map((note: NoteProps) => (
          <Note key={note.id} {...note} />
        ))}
    </>
  )
}
