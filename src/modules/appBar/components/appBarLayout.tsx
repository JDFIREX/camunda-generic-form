import Image from "next/image"
import {Sheet, SheetContent, SheetTrigger} from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    NavigationMenuIndicator,
    NavigationMenuLink
} from "@/src/components/ui/navigation-menu";
import { Separator } from "@/src/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/src/components/ui/accordion";
import {ScrollArea} from "@/src/components/ui/scroll-area";

const AppBarLayout = () => {

    return (
        <div className="py-12 w-full flex justify-between items-center">
            <div>
                <div className="w-[160px]">
                    <AspectRatio ratio={160 / 40} className="bg-muted">
                        <Image
                            src="/logo_main_1.png"
                            alt="Link4 logo"
                            fill
                            className="rounded-md object-cover"
                        />
                    </AspectRatio>
                </div>
            </div>
            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Agent</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-[345px]">
                                <li className="flex h-[65px] w-full justify-center">
                                    <NavigationMenuLink className="flex items-center">Strefa agent</NavigationMenuLink>
                                </li>
                                <Separator />
                                <li className="flex h-[65px] w-full justify-center">
                                    <NavigationMenuLink className="flex items-center">Zostań agentem</NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Szkody</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-[345px]">
                                <li className="flex h-[65px] w-full justify-center">
                                    <NavigationMenuLink className="flex items-center">Zgłoś szkodę</NavigationMenuLink>
                                </li>
                                <Separator />
                                <li className="flex h-[65px] w-full justify-center">
                                    <NavigationMenuLink className="flex items-center">Sprawdź status szkody</NavigationMenuLink>
                                </li>
                                <Separator />
                                <li className="flex h-[65px] w-full justify-center">
                                    <NavigationMenuLink className="flex items-center">Więcej</NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline">Open</Button>
                            </SheetTrigger>
                            <SheetContent className="pt-10">
                                <ScrollArea className="h-full w-full rounded-md pr-3">
                                    <Accordion type="multiple" className="w-full" >
                                        <AccordionItem value="item-ubezpieczenia">
                                            <AccordionTrigger>Ubezpieczenia</AccordionTrigger>
                                            <AccordionContent>
                                                <AccordionItem value="item-samochod">
                                                    <AccordionTrigger>Samochód</AccordionTrigger>
                                                    <AccordionContent className="flex flex-col">
                                                        <p>Pakiet OC</p>
                                                        <p>Pakiet OC + AC</p>
                                                        <p>Ubezpieczenie AC</p>
                                                        <p>Ubezpieczenie Assistance</p>
                                                        <p>Smart Casco</p>
                                                        <p>Kluczyki Plus</p>
                                                        <p>Ubezpieczenie szyb</p>
                                                        <p>Ubezpieczenie NNW</p>
                                                        <p>Wracaj do zdrowia</p>
                                                        <p>Zielona Karta</p>
                                                        <p>Motocykl</p>
                                                        <p>OC krótkoterminowe</p>
                                                        <p>Ochrona zniżki</p>
                                                        <p>OC dla ekocyklistów</p>
                                                        <p>Pomoc po kradzieży</p>
                                                        <p>Pomoc po wypadku</p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="item-xx">
                                                    <AccordionTrigger>Samochód</AccordionTrigger>
                                                    <AccordionContent className="flex flex-col">
                                                        <p>Pakiet OC</p>
                                                        <p>Pakiet OC + AC</p>
                                                        <p>Ubezpieczenie AC</p>
                                                        <p>Ubezpieczenie Assistance</p>
                                                        <p>Smart Casco</p>
                                                        <p>Kluczyki Plus</p>
                                                        <p>Ubezpieczenie szyb</p>
                                                        <p>Ubezpieczenie NNW</p>
                                                        <p>Wracaj do zdrowia</p>
                                                        <p>Zielona Karta</p>
                                                        <p>Motocykl</p>
                                                        <p>OC krótkoterminowe</p>
                                                        <p>Ochrona zniżki</p>
                                                        <p>OC dla ekocyklistów</p>
                                                        <p>Pomoc po kradzieży</p>
                                                        <p>Pomoc po wypadku</p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="item-xx2">
                                                    <AccordionTrigger>Samochód</AccordionTrigger>
                                                    <AccordionContent className="flex flex-col">
                                                        <p>Pakiet OC</p>
                                                        <p>Pakiet OC + AC</p>
                                                        <p>Ubezpieczenie AC</p>
                                                        <p>Ubezpieczenie Assistance</p>
                                                        <p>Smart Casco</p>
                                                        <p>Kluczyki Plus</p>
                                                        <p>Ubezpieczenie szyb</p>
                                                        <p>Ubezpieczenie NNW</p>
                                                        <p>Wracaj do zdrowia</p>
                                                        <p>Zielona Karta</p>
                                                        <p>Motocykl</p>
                                                        <p>OC krótkoterminowe</p>
                                                        <p>Ochrona zniżki</p>
                                                        <p>OC dla ekocyklistów</p>
                                                        <p>Pomoc po kradzieży</p>
                                                        <p>Pomoc po wypadku</p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </ScrollArea>
                            </SheetContent>
                        </Sheet>
                    </NavigationMenuItem>

                    <NavigationMenuIndicator />
                </NavigationMenuList>

                <NavigationMenuViewport />

            </NavigationMenu>
        </div>
    )
}

export default AppBarLayout
