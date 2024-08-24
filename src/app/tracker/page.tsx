import SimpleCard from "@/components/Card/SimpleCard";
import Image from "next/image";

const expenses = [
  { id: 1, title: "Desayuno", amount: 100 },
  { id: 2, title: "Almuerzo", amount: 200 },
  { id: 3, title: "Cena", amount: 300 },
]

const comments = [
  { id: 1, content: "contenido 1" },
  { id: 2, content: "contenido 2" },
  { id: 3, content: "contenido 3" },
]

const calendar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

export default function page() {
  return (
    <div className="w-full">
      <div className="font-bold flex gap-4 py-4">
        <span>Registra gastos</span>
        <span>Resumen quincena</span>
      </div>
      <div className="flex flex-col gap-4">
        <SimpleCard>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <div>Agosto</div>
              <div className="flex gap-8">
                <Image src="/icons/gastos.png" alt="menu" width={30} height={30} />
                <Image src="/icons/comments.png" alt="menu" width={30} height={30} />
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-7 gap-4">
                {
                  calendar.map(day => (
                    <div key={day} className="flex justify-center items-center">
                      <span>{day}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </SimpleCard>
        <SimpleCard>
          <div className="flex justify-between font-bold text-2xl my-4">
            <span>Resumen de gastos día 2 de Agosto</span>
            <span className="text-green-700">Total: 600</span>
          </div>
          <div className="flex gap-4 py-4 px-4">
            {
              expenses.map(expense => (
                <div key={expense.id} className="flex justify-start gap-2 flex-col border-2 rounded p-3 relative w-[10rem]">
                  <span className="font-bold text-sm">{expense.title}</span>
                  <span className="font-bold text-xl text-green-600 self-center">{expense.amount}</span>
                  <div className="flex gap-2 items-center justify-center absolute top-2 right-2">
                    <span>
                      <Image src="/icons/edit.png" alt="menu" width={15} height={15} />
                    </span>
                    <span>
                      <Image src="/icons/trash.png" alt="menu" width={15} height={15} />
                    </span>
                  </div>
                </div>
              ))
            }
          </div>
        </SimpleCard>
        <div className="font-bold text-2xl">Comentarios</div>
        <div className="flex gap-2">
          {
            comments.map(comment => (
              <div key={comment.id} className="w-[10rem]">
                <SimpleCard>
                  <p className="font-bold text-xl text-green-600 self-center my-3">{comment.content}</p>
                  <div className="flex items-center justify-center absolute top-2 right-2">
                    <span>
                      <Image src="/icons/trash.png" alt="menu" width={15} height={15} />
                    </span>
                  </div>
                </SimpleCard>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
