import { getUser } from "../lib/get-user";

export default function Home() {
  return <p>About</p>;
}

export async function getServerSideProps() {
  const user = await getUser();

  return { props: { user } };
}
