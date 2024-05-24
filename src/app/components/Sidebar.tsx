import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export default async function Sidebar() {
  const session = await getServerSession();

  if (session?.user?.email === null || session?.user?.email === undefined) {
    return;
  }

  const amas = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const cohorts = await prisma.cohort.findMany({
    where: {
      AMASId: amas?.id,
    },
  });

  return (
    <div className="bg-slate-300">
      <Nav />
      <ul>
        {cohorts.map((cohort) => {
          return <li>{cohort.code}</li>;
        })}
      </ul>
    </div>
  );
}

function Nav() {
  return (
    <nav>
      <Link href="/dashboard/addCohort">Add Cohort</Link>
    </nav>
  );
}
