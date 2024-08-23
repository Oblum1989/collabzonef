import { CategoryProps } from "@/types/note";
import Category from "./Category";

const CATEGORYDATA: CategoryProps[] = [
  {
    id: 1,
    name: "Study",
  },
  {
    id: 2,
    name: "Cook",
  },
  {
    id: 3,
    name: "Study",
  },
  {
    id: 4,
    name: "Cook",
  },
]


export default function Wall() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="col-span-12 border-b border-black text-2xl flex justify-between">
        <h1>My Notes</h1>
        <span>+</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <h3>Categories</h3>
            <span>+</span>
          </div>
          <div className="flex gap-4">
            {
              CATEGORYDATA.map((category) => (
                <span key={category.id} className="border py-1 px-2 rounded-full bg-slate-300">{category.name}</span>
              ))
            }
          </div>
        </div>
        {
          CATEGORYDATA.map((category) => (
            <Category key={category.id} {...category} />))
        }
      </div>
    </div>
  )
}
