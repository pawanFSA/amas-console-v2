import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  console.log("session: ", session);
  return (
    <>
      getServerSession Result:{" "}
      {session?.user?.name ? (
        <div>
          <ul>
            <li>{session?.user?.name}</li>
            <li>{session?.user?.email}</li>
          </ul>
        </div>
      ) : (
        <div>Not Logged in</div>
      )}
    </>
  );
}
