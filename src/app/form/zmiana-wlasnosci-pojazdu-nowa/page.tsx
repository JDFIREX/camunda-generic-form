import {reasonCamundaForm} from "@/src/modules/zmiana-wlasnosci-pojazdu-new/basic/mocks/reasonCamundaForm";
import {Card, CardContent} from "@/src/components/ui/card";
import CamundaForm from "@/src/camunda/camundaForm";

async function getData() {
    return reasonCamundaForm
}

const Page = async () => {
    const data = await getData()

    return (
        <div className="flex flex-col items-center">
            <h1 className="mb-10">Zmiana własności</h1>

            <Card>
                <CardContent>
                    <CamundaForm data={data} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Page