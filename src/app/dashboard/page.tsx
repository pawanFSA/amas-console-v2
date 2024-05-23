import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession();

  return <div className="bg-slate-100 w-full">Dashboard Home</div>;
}
