import SimpleCard from "@/components/SimpleCard/SimpleCard";
import { PostProps } from "@/types/post";
import Image from "next/image";
import PostEmoticons from "./PostEmoticons";

export default function Post({ avatar, user, created_at, content }: PostProps) {
  return (
    <SimpleCard>
      <div className="mb-3 border-b pb-2">
        <div className="flex items-center">
          <Image src={avatar} alt={user} width={50} height={50} className="rounded-full" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{user}</h3>
            <p className="text-sm text-gray-500">{created_at}</p>
          </div>
        </div>
        <p className="mt-3">{content}</p>
        <PostEmoticons />
      </div>
      <div className="flex justify-between">
        <div>Comentar</div>
        <div>Ver todo</div>
      </div>
    </SimpleCard>
  )
}
