"use server";
import { prisma } from "@/lib/prisma";

export async function addCohort({
  formData,
  csvData,
  amasEmail,
}: {
  formData: {
    code: string;
    startDate: string;
    endDate: string;
    zoomRoom: string;
    zoomRoomLink: string;
    zoomRoomHostKey: string;
    zoomAccountLogin: string;
    zoomAccountPassword: string;
    ghTeamLink: string;
    cohortFolderLink: string;
  };
  csvData: any[];
  amasEmail: string;
}) {
  // get the amasId
  const amas = await prisma.user.findUnique({
    where: {
      email: amasEmail,
    },
  });

  // create the cohort in the database

  const cohort = await prisma.cohort.create({
    data: {
      ...formData,
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      AMASId: amas?.id,
    },
  });

  // loop over students in csv array and add them to database and assign to cohort
  for (const student of csvData) {
    const createdStudent = await prisma.student.create({
      data: {
        learndotid: student.learndotid,
        createdat: new Date(student.createdat),
        fullname: student.fullname,
        preferredname: student.preferredname,
        nickname: student.nickname,
        personalpronouns: student.personalpronouns,
        email: student.email,
        firstname: student.firstname,
        lastname: student.lastname,
        phone: student.phone,
        studentprofile: student.studentprofile,
        github: student.github,
        hubspotid: student.hubspotid,
        section: student.section,
        tuitionpayor: student.tuitionpayor,
        governmentpayor: student.governmentpayor,
        cohortid: cohort.id,
      },
    });
    console.log("created student: ", createdStudent);
  }
}
