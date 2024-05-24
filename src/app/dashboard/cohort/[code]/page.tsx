import { prisma } from "@/lib/prisma";
import Link from "next/link";
export default async function SingleCohort({ params }: { params: any }) {
  const cohort = await prisma.cohort.findUnique({
    where: {
      code: params.code,
    },
    include: {
      students: true,
    },
  });

  return (
    <div>
      <h2>{cohort?.code}</h2>
      <ul>
        <li key={cohort?.id}>Start Date: {cohort?.startDate.toUTCString()}</li>
      </ul>
      {cohort?.students.map((student) => {
        return (
          <p>
            <Link href={`/dashboard/student/${student.id}`}>
              {student.fullname}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
