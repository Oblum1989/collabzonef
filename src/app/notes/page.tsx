import SimpleCard from "@/components/Card/SimpleCard";

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
            <span className="border py-1 px-2 rounded-full bg-slate-300">Study</span>
            <span className="border py-1 px-2 rounded-full bg-slate-300">Cook</span>
            <span className="border py-1 px-2 rounded-full bg-slate-300">Study</span>
            <span className="border py-1 px-2 rounded-full bg-slate-300">Cook</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <h3>Study</h3>
            <span>+</span>
          </div>
          <div className="flex flex-col gap-4">
            <SimpleCard>
              <div className="p-4">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">Math</h3>
                  <span className="text-sm text-slate-400">2024/02/12</span>
                </div>
                <div className="my-4">
                  <p>description</p>
                </div>
                <div className="flex justify-between">
                  <span>icon</span>
                  <span>icon</span>
                  <span>icon</span>
                </div>
              </div>
            </SimpleCard>
            <SimpleCard>
              new post
            </SimpleCard>
            <SimpleCard>
              new post
            </SimpleCard>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between gap-4">
            <h3>Cook</h3>
            <span>+</span>
          </div>
          <div className="flex flex-col gap-4">
            <SimpleCard>
              new post
            </SimpleCard>
            <SimpleCard>
              new post
            </SimpleCard>
            <SimpleCard>
              new post
            </SimpleCard>
          </div>
        </div>
      </div>
    </div>
  )
}
