import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn(params: any) {
      // Check if user exists
      let existingUser = await prisma.user.findUnique({
        where: {
          email: params?.user?.email,
        },
      });
      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            name: params.user.name,
            email: params.user.email,
          },
        });
      }
      params.user.amasId = existingUser.id;
      return true;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
