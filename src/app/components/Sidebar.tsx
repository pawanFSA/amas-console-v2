import Link from "next/link";

export default async function Sidebar() {
  return (
    <div className="bg-slate-300">
      <Nav />
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
