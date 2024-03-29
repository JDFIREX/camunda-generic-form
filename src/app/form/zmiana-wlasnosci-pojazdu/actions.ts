'use server'

import {camundaApi} from "@/src/app/api/form/zmiana-wlasnosci-pojazdu/route";

export const submitPolicyForm = async (data: FormData) => {
    const res = await fetch('camunda_api', {
        method: 'POST',
        body: data,
    }).then(res => {
        console.log(res.status)
        return res.text()
    })

    // const res = await fetch(camundaApi, {
    //     method: 'POST',
    //     body: data,
    // }).then(res => {
    //     console.log(res.status)
    //     return res.text()
    // })
    console.log("res", res)
}