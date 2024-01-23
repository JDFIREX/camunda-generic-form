import {CamundaFormData} from "@/src/camunda/formTypes";

export const reasonCamundaForm: CamundaFormData = {
    "executionPlatform": "Camunda Cloud",
    "executionPlatformVersion": "8.4.0",
    "exporter": {
        "name": "Camunda Web Modeler",
        "version": "f9f6097"
    },
    "schemaVersion": 14,
    "id": "Form_0puoiah",
    "components": [
        {
            "text": "Zmiana własności",
            "label": "Text view",
            "type": "text",
            "layout": {
                "row": "Row_15juajf",
                "columns": null
            },
            "id": "Field_1e4xd1l"
        },
        {
            "values": [
                {
                    "label": "Usunięcie współwłaściela",
                    "value": "removeCoowner"
                },
                {
                    "label": "Dodanie współwłaściciela",
                    "value": "addCoowner"
                },
                {
                    "label": "Akt zgonu",
                    "value": "value3"
                },
                {
                    "label": "Postępowanie spadkowe",
                    "value": "value4"
                },
                {
                    "label": "Akt notarialny",
                    "value": "value5"
                },
                {
                    "label": "Inny dokument (darowizna, cesja leasingu)",
                    "value": "value6"
                },
                {
                    "label": "Kupiłem pojazd",
                    "value": "value7"
                },
                {
                    "label": "Sprzedałem pojazd",
                    "value": "value8"
                }
            ],
            "label": "Radio group",
            "type": "radio",
            "layout": {
                "row": "Row_1j49rel",
                "columns": null
            },
            "id": "Field_14tciiy",
            "key": "radio_ib8rci",
            "readonly": false,
            "disabled": false,
            "validate": {
                "required": true
            },
            "properties": { }
        }
    ],
    "type": "default"
}

