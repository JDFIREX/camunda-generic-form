import {coownerDataFormWithGroups} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/mocks/camundaForm";
import {Card, CardContent} from "@/src/components/ui/card";
import CamundaForm from "@/src/camunda/camundaForm";

async function getData() {
    return coownerDataFormWithGroups
}

const Page = async () => {
    const data = await getData()

    return (
        <div className="flex flex-col items-center">
            <Card>
                <CardContent>
                    <CamundaForm data={data} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Page