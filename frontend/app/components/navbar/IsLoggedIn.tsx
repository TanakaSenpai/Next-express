import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const IsLoggedIn = ({ styles }: { styles?: string }) => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      {session ? (
        <div className={styles ? styles : "flex gap-8"}>
          <p className="hidden sm:block">
            Welcome, <span className="font-semibold">{session.user.name}</span>!
          </p>{" "}
          <p className="cursor-pointer" onClick={() => signOut()}>
            Logout
          </p>
        </div>
      ) : (
        <div className={styles ? styles : "flex gap-8"}>
          <Link href="sign-in">Sign in</Link>
          <Link href="sign-up">Sign up</Link>
        </div>
      )}
    </div>
  );
};

export default IsLoggedIn;
