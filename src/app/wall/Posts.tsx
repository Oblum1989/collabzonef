import { PostProps } from "@/types/post"
import Post from "./Post"

const PostsData: PostProps[] = [
  {
    id: 1,
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    user: "John Doe",
    created_at: "2021-09-01",
    content: "Buenas tardes, saludos a todos desde Lima, Perú",
  },
  {
    id: 2,
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    user: "Jane Doe",
    created_at: "2021-09-02",
    content: "Buenas tardes, saludos a todos desde Lima, Perú",
  },
  {
    id: 3,
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    user: "John Doe",
    created_at: "2021-09-03",
    content: "Buenas tardes, saludos a todos desde Lima, Perú",
  },
]

export default function Posts() {
  return (
    <>
      {PostsData.map((post: PostProps) => (
          <Post key={post.id} {...post} />
        ))}
    </>
  )
}
