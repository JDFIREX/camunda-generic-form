export const camundaApi = "camunda_api"

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