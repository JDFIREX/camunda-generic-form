"use client"

import {Card, CardContent} from "@/src/components/ui/card";
import PolicyForm from "@/src/modules/zmiana-wlasnosci-pojazdu/components/policyForm";

const Page = async () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="mb-10">Zmiana własności</h1>

            <Card>
                <CardContent>
                    <PolicyForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default Page