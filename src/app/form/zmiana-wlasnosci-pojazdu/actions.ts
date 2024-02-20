'use server'

import {camundaApi} from "@/src/app/api/form/zmiana-wlasnosci-pojazdu/route";

export const submitPolicyForm = async (data: FormData) => {
    // await fetch('http://localhost:3000/api/form/zmiana-wlasnosci-pojazdu', {
    //     method: 'POST',
    //     body: data,
    // })

    const res = await fetch(camundaApi, {
        method: 'POST',
        body: data,
    })
    console.log(res)
    console.log(res.status)
}