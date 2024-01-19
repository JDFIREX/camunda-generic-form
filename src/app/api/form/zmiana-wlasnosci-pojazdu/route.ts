import {OwnerSchema} from "@/src/modules/zmiana-wlasnosci-pojazdu/basic/schema/ownerSchema";

const camundaApi = "https://dsm-1.connectors.camunda.io/5a1d16df-e309-4c18-8a81-9563d1c42b13/inbound/startProcess"

export const removeUndefined = (obj: Record<string, unknown>): Record<string, string> => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value)
    ) as Record<string, string>;
};

export async function POST(req: Request) {
    const json: OwnerSchema = await req.json();
    const { stages, stage, ...data} = removeUndefined(json);
    return await fetch(camundaApi, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then(res => {
        console.log(res.status)
        console.log(res.url)
        return res
    });
}