import SimpleCard from "@/components/Card/SimpleCard";
import Post from "./Post";
import Posts from "./Posts";

export default function Wall() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="col-span-12 border border-black">
        <h1>wall</h1>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7 flex flex-col gap-4">
          <SimpleCard>
            new post
          </SimpleCard>
          <Posts />
        </div>
        <div className="col-span-5">
          <SimpleCard>
            medals
          </SimpleCard>
        </div>
      </div>
    </div>
  )
}
