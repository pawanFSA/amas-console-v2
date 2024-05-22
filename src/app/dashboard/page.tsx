import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();

  return (
    <div className="bg-slate-100">
      <h1>Welcome, {session?.user?.name}</h1>
    </div>
  );
}
