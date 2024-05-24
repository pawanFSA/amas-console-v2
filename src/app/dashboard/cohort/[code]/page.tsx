import { prisma } from "@/lib/prisma";
export default async function SingleCohort({ params }: { params: any }) {
  const cohort = await prisma.cohort.findUnique({
    where: {
      code: params.code,
    },
    include: {
      students: true,
    },
  });

  console.log("Cohort Start Date: ", cohort?.startDate);

  return (
    <div>
      <h2>{cohort?.code}</h2>
      <ul>
        <li key={cohort?.id}>Start Date: {cohort?.startDate.toUTCString()}</li>
      </ul>
      {cohort?.students.map((student) => {
        return <p>{student.fullname}</p>;
      })}
    </div>
  );
}
