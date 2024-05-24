import { prisma } from "@/lib/prisma";

export default async function SingleStudent({ params }: { params: any }) {
  const student = await prisma.student.findUnique({
    where: {
      id: params.id,
    },
  });
  return <h1>{student?.firstname}</h1>;
}
