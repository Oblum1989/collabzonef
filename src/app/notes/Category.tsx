import { CategoryProps } from "@/types/note";
import Notes from "./Notes";

export default function Category(category: CategoryProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <h3>{category.name}</h3>
        <span>+</span>
      </div>
      <div className="flex flex-col gap-4">
        <Notes />
      </div>
    </div>
  )
}
