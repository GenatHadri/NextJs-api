import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();

  console.log({ session, status });
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className="main-nav">
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard" legacyBehavior>
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/comments" legacyBehavior>
            <a>Comments</a>
          </Link>
        </li>
        <li>
          <Link href="/blogs" legacyBehavior>
            <a>Blogs</a>
          </Link>
        </li>

        {status !== "loading" && !session && (
          <li>
            <Link href="/api/auth/signin" legacyBehavior>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout" legacyBehavior>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
