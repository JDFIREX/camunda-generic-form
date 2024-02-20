export const camundaApi = "https://dsm-1.connectors.camunda.io/5a1d16df-e309-4c18-8a81-9563d1c42b13/inbound/startProcess"

export const removeUndefined = (obj: Record<string, unknown>): Record<string, string> => {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value)
    ) as Record<string, string>;
};

export async function POST(req: Request) {
    const form = await req.formData();
    console.log(form)
    return await fetch(camundaApi, {
        method: 'POST',
        body: form,
    }).then(res => {
        console.log(res)
        console.log(res.status)
        console.log(res.url)
        return res
    });
}