export default function SimpleCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-400 overflow-hidden shadow-lg bg-white p-3">
      {children}
    </div>
  )
}
