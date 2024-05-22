import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import AuthButton from "./components/AuthButton";

export default async function Home() {
  const session = await getServerSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <>
      <AuthButton />
    </>
  );
}
