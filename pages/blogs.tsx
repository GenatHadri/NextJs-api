import { getSession } from "next-auth/react";

export default function Blogs({ data }) {
  return (
    <div>
      <h1>Blog page</h1>
      <p>{data}</p>
    </div>
  );
}

// Example of Server Side Authentication
export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Securing the page on server side
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blogs",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of personalized blogs" : "List of free blogs",
    },
  };
}
