import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="mb-4">Homepage</h1>
      <div className="flex justify-between items-center mb-4">
        <Link href="users/create-a-fighter">Create a Fighter</Link>
        <Link href="users/fighter/{id}">Profile</Link>
        <Link href="users/view-all-fighters">View all Fighters</Link>
      </div>
    </>
  );
}
