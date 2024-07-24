async function fetchUsers() {
  const response = await fetch('https://reqres.in/api/users?page=1');
  const data = await response.json();
  return data.data;
}

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default async function HomePage() {
  const users = await fetchUsers();
  return (
    <>
      <ul>
        {users.map((user: User) => (
          <li key={user.id} className="bg-slate-400 mb-2 p-4 rounded-md text-black" >
            <h5 className="font-bold">{user.first_name} {user.last_name}</h5>
            <p className=" text-slate-100">email: {user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
