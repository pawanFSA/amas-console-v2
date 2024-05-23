"use server";
import { prisma } from "@/lib/prisma";

export async function addCohort({
  formData,
  csvData,
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
}) {
  console.log(formData, csvData);
}
