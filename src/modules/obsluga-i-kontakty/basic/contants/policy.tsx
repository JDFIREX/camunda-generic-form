import {FileTextIcon} from "@radix-ui/react-icons";

export const policy = {
    title: "Twoja polisa",
    cards: [
        {
            "title": "Odnowienie ubezpieczenia",
            "icon" : <FileTextIcon  width={48} height={48} />,
            "link": "/"
        },
        {
            "title": "Zmiany na polisie",
            "icon" : <FileTextIcon  width={48} height={48} />,
            "link": "/"
        },
        {
            "title": "Zmiana własności pojazdu Stara",
            "icon" : <FileTextIcon  width={48} height={48} />,
            "link": "/form/zmiana-wlasnosci-pojazdu-stara"
        },
        {
            "title": "Zmiana własności pojazdu Nowa",
            "icon" : <FileTextIcon  width={48} height={48} />,
            "link": "/form/zmiana-wlasnosci-pojazdu-nowa"
        },
        {
            "title": "Płatności",
            "icon" : <FileTextIcon  width={48} height={48} />,
            "link": "/"
        },
        {
            "title": "Rezygnacja z ubezpieczenia",
            "icon" : <FileTextIcon  width={48} height={48} />,
            "link": "/"
        }
    ]
}