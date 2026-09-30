'use client';
import { Button } from "@/components/ui/button";
import { useDescope } from "@descope/nextjs-sdk/client";
import { useRouter } from "next/navigation";
import { useState } from "react";


function DashBoard() {
    const sdk = useDescope()
    const router = useRouter()
    const [loggingOut, setLoggingout] = useState(false)

    async function handleLogout(){
        if(loggingOut) return
        setLoggingout(true)

        try {
            await sdk.logout()
            router.replace('/sign-in')
            router.refresh()
        } catch {
            setLoggingout(false)
        }
    }
    return (
        <div>DashBoard Page
            <Button onClick={handleLogout}> Log Out </Button>
        </div>
    );
}

export default DashBoard;