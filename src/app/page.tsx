import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar/page"
export default function Home() {
  return (
    <>
      <NavBar />
      <h1 className="text-4xl mb-4">Dashboard</h1>
      <div className="flex justify-between items-center mb-4">
        <Link href="users/create-a-fighter" className="text-2xl">
          Create a Fighter
        </Link>
        <Link href="users/fighter/{id}" className="text-2xl">
          Profile
        </Link>
        <Link href="users/view-all-fighters" className="text-2xl">
          View all Fighters
        </Link>
      </div>
    </>
  );
}
