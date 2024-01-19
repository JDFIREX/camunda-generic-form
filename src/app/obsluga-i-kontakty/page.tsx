import {Card, CardContent} from "@/src/components/ui/card";
import {policy} from "@/src/modules/obsluga-i-kontakty/basic/contants/policy";
import Link from "next/link";

const Page = () => {

    return (
        <div className="flex flex-col items-center">
            <h1 className="mb-10">Obsługa i kontakty</h1>

            <h2 className="mb-3">{policy.title}</h2>
            <div className="w-full flex flex-row flex-nowrap gap-3 justify-center">
                {policy.cards.map((card, index) => (
                    <Link href={card.link} key={index}>
                        <Card key={index} className="w-[200px] rounded-[5px] shadow-accent-foreground bg-white h-[150px]">
                            <CardContent className="flex items-center justify-between flex-col h-full p-5 gap-3">
                                {card.icon}
                                <h3 className="text-center flex items-center h-[50px]">{card.title}</h3>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Page