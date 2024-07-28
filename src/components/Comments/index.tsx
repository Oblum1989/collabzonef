'use client';
import Image from "next/image";
import Emoticons from "../Emoticons";
import { use, useEffect, useState } from "react";

interface CommentProps {
  id: number;
  avatar: string;
  user: string;
  created_at: string;
  content: string;
}

const commentsData: CommentProps[] = [
  {
    id: 1,
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    user: 'John Doe',
    created_at: '2021-09-01',
    content: 'This is a comment from John Doe in Lima, Perú',
  },
  {
    id: 2,
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    user: 'Jane Doe',
    created_at: '2021-09-01',
    content: 'This is another comment from Jane Doe in Lima, Perú',
  },
  {
    id: 3,
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    user: 'John Doe',
    created_at: '2021-09-01',
    content: 'This is another comment from John Doe in Lima, Perú',
  },
];

export default function Comments() {
  const [comments, setComments] = useState<CommentProps[]>([])
  const [showInput, setshowInput] = useState(false)

  useEffect(() => {
    const lastComment = [commentsData[commentsData.length - 1]]
    setComments(lastComment)
  }, [])

  const handleShowComments = () => {
    setComments(commentsData)
  }

  const handleShowForm = () => {
    setComments(commentsData)
    setshowInput(true)
  }

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const comment = {
      id: commentsData.length + 1,
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      user: "John Doe 5",
      created_at: new Date().toISOString(),
      content: input.value,
    };
    setComments([...comments, comment]);
    setshowInput(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div onClick={handleShowForm} className="cursor-pointer">Comentar</div>
        <div onClick={handleShowComments} className="cursor-pointer">Ver todo</div>
      </div>
      <div>
        {showInput && (
          <div >
            <form className="flex items-start gap-2 my-4" onSubmit={handleCreate}>
              <Image src="https://reqres.in/img/faces/1-image.jpg" alt="John Doe" width={40} height={40} className="rounded-full" />
              <div className="flex flex-col w-full rounded-xl bg-gray-100 py-2 px-4 gap-1">
                <input type="text" placeholder="Escribe un comentario" className="w-full rounded-xl p-2" />
              </div>
            </form>
          </div>
        )}
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start gap-2 my-4">
            <Image src={comment.avatar} alt={comment.user} width={40} height={40} className="rounded-full" />
            <div className="flex flex-col w-full rounded-xl bg-gray-100 py-2 px-4 gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{comment.user}</h3>
                <p className="text-sm text-gray-500">{comment.created_at}</p>
              </div>
              <div>
                <p>{comment.content}</p>
              </div>
              <Emoticons />
            </div>
          </div>
        )).reverse()}
      </div>
    </div>
  )
}
