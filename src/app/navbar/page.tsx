import Link from "next/link"

export default function NavBar() {
    return (
    
        <>
            <div className="d-flex flex-row">

                <Link href="users/create-a-fighter" className="p-2">Create A Fighter</Link>
                <Link href="users/view-all-fighters" className="p-2">Fighters</Link>
                <Link href="events" className="p-2">Events</Link>
                <Link href="users/fighter/{id}" className="p-2">Profile</Link>

            </div>
    
        </>
    )
}