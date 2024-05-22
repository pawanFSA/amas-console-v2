import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();
  console.log(session);

  return (
    <div className="bg-slate-100">
      <h1>Welcome, {session?.user?.name}</h1>
    </div>
  );
}
