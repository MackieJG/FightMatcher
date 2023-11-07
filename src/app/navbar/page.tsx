import Link from "next/link"
import Image from "next/image"

export default function NavBar() {
    return (
    
        <>
            <div className="d-flex justify-between items-center bg-[#1E1E24]">
                <div className="flex">
                    <Image
                        src="/CombatConnectLogo.png"
                        width={80}
                        height={80}
                        alt="Website Logo"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="users/create-a-fighter" className="p-2 text-xl text-[#FFCF99]">Create A Fighter</Link>
                    <Link href="users/view-all-fighters" className="p-2 text-xl text-[#FFCF99]">Fighters</Link>
                    <Link href="events" className="p-2 text-xl text-[#FFCF99]">Events</Link>
                </div>
                <Link href="users/fighter/{id}" className="p-2 text-xl text-[#FFCF99]">Profile</Link>
            </div>
    
        </>
    )
}