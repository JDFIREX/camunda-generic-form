import {CamundaFormData} from "@/src/camunda/camundaFormTypes";

export const reasonCamundaForm: CamundaFormData = {
    "executionPlatform": "Camunda Cloud",
    "executionPlatformVersion": "8.4.0",
    "exporter": {
        "name": "Camunda Web Modeler",
        "version": "08b1b84"
    },
    "schemaVersion": 14,
    "id": "Form_0puoiah",
    "components": [
        {
            "text": "### Zmiana własności",
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

export const coownerDataForm: CamundaFormData = {
    "executionPlatform": "Camunda Cloud",
    "executionPlatformVersion": "8.4.0",
    "exporter": {
        "name": "Camunda Web Modeler",
        "version": "08b1b84"
    },
    "schemaVersion": 14,
    "id": "Form_03druzo",
    "components": [
        {
            "text": "### Podaj dane współwłaściciela",
            "label": "Text view",
            "type": "text",
            "layout": {
                "row": "Row_0qky48w",
                "columns": null
            },
            "id": "Field_0m7sci3"
        },
        {
            "label": "Imie",
            "type": "textfield",
            "layout": {
                "row": "Row_153hw67",
                "columns": null
            },
            "id": "Field_1s115zl",
            "key": "textfield_m98zl",
            "validate": {
                "minLength": 3,
                "required": true
            }
        },
        {
            "label": "Nazwisko",
            "type": "textfield",
            "layout": {
                "row": "Row_1pgwxr5",
                "columns": null
            },
            "id": "Field_0j1ccdj",
            "key": "textfield_6027n7",
            "validate": {
                "required": true
            }
        },
        {
            "label": "PESEL",
            "type": "textfield",
            "layout": {
                "row": "Row_182hhqj",
                "columns": null
            },
            "id": "Field_0usq5ua",
            "key": "textfield_9u4sh",
            "validate": {
                "required": true
            }
        },
        {
            "label": "Kod pocztowy",
            "type": "textfield",
            "layout": {
                "row": "Row_1i2muga",
                "columns": 5
            },
            "id": "Field_1yb4zsv",
            "key": "textfield_osqrjt",
            "validate": {
                "required": true
            }
        },
        {
            "label": "Miejscowość",
            "type": "textfield",
            "layout": {
                "row": "Row_1i2muga",
                "columns": 11
            },
            "id": "Field_0d6vjni",
            "key": "textfield_lsngn4",
            "validate": {
                "required": true
            }
        },
        {
            "label": "Ulica",
            "type": "textfield",
            "layout": {
                "row": "Row_07h99ef",
                "columns": 6
            },
            "id": "Field_1qd2rkm",
            "key": "textfield_xkit1l",
            "validate": {
                "required": true
            }
        },
        {
            "label": "Nr domu",
            "type": "textfield",
            "layout": {
                "row": "Row_07h99ef",
                "columns": null
            },
            "id": "Field_0jlboas",
            "key": "textfield_6dzchm",
            "validate": {
                "required": true
            }
        },
        {
            "label": "Nr lokalu",
            "type": "textfield",
            "layout": {
                "row": "Row_07h99ef",
                "columns": null
            },
            "id": "Field_1eyjme1",
            "key": "textfield_xd3jl6"
        },
        {
            "label": "Telefon",
            "type": "textfield",
            "layout": {
                "row": "Row_1b2llzd",
                "columns": null
            },
            "id": "Field_06cjl5j",
            "key": "textfield_qixpbl"
        }
    ],
    "type": "default"
}

export const coownerDataFormWithGroups: CamundaFormData = {
    "executionPlatform": "Camunda Cloud",
    "executionPlatformVersion": "8.4.0",
    "exporter": {
        "name": "Camunda Web Modeler",
        "version": "e414032"
    },
    "schemaVersion": 14,
    "id": "Form_03druzo",
    "components": [
        {
            "text": "### Podaj dane współwłaściciela",
            "label": "Text view",
            "type": "text",
            "layout": {
                "row": "Row_0qky48w",
                "columns": null
            },
            "id": "Field_0m7sci3"
        },
        {
            "values": [
                {
                    "label": "Pesel",
                    "value": "PESEL"
                },
                {
                    "label": "Regon",
                    "value": "REGON"
                },
                {
                    "label": "Numer paszportu",
                    "value": "PASZPORT_NUMBER"
                }
            ],
            "label": "Wybierz rodzaj dokumentu",
            "type": "radio",
            "layout": {
                "row": "Row_011tqct",
                "columns": null
            },
            "id": "Field_19rn1n8",
            "key": "radio_53azn6",
            "validate": {
                "required": true
            }
        },
        {
            "components": [
                {
                    "label": "Imie",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0l2akij",
                        "columns": null
                    },
                    "id": "Field_1s115zl",
                    "key": "textfield_m98zl",
                    "validate": {
                        "minLength": 3,
                        "required": true
                    }
                },
                {
                    "label": "Nazwisko",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0mizecz",
                        "columns": null
                    },
                    "id": "Field_0j1ccdj",
                    "key": "textfield_6027n7",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "PESEL",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_1gwkcv7",
                        "columns": null
                    },
                    "id": "Field_0usq5ua",
                    "key": "textfield_9u4sh",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Kod pocztowy",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0e8xdz6",
                        "columns": 5
                    },
                    "id": "Field_1yb4zsv",
                    "key": "textfield_osqrjt",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Miejscowość",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0e8xdz6",
                        "columns": 11
                    },
                    "id": "Field_0d6vjni",
                    "key": "textfield_lsngn4",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Ulica",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0s15hmg",
                        "columns": 6
                    },
                    "id": "Field_1qd2rkm",
                    "key": "textfield_xkit1l",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Nr domu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0s15hmg",
                        "columns": null
                    },
                    "id": "Field_0jlboas",
                    "key": "textfield_6dzchm",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Nr lokalu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0s15hmg",
                        "columns": null
                    },
                    "id": "Field_1eyjme1",
                    "key": "textfield_xd3jl6"
                },
                {
                    "label": "Telefon",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0nltg1w",
                        "columns": null
                    },
                    "id": "Field_06cjl5j",
                    "key": "textfield_qixpbl"
                }
            ],
            "showOutline": true,
            "label": "PESEL",
            "type": "group",
            "layout": {
                "row": "Row_02rp0wy",
                "columns": null
            },
            "id": "Field_118gyoo",
            "conditional": {
                "hide": "=radio_53azn6 != \"PESEL\""
            },
            "verticalAlignment": "end",
            "properties": {
                "key1": "value"
            },
            "path": "pesel"
        },
        {
            "components": [
                {
                    "label": "Nazwa firmy",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0d8vq1p",
                        "columns": null
                    },
                    "id": "Field_0chdti5",
                    "key": "textfield_3hh4il",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Regon",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_1ukn4rv",
                        "columns": null
                    },
                    "id": "Field_0t0oddl",
                    "key": "textfield_li1sqj",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Kod pocztowy",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_10ft4zc",
                        "columns": null
                    },
                    "id": "Field_0g9czy2",
                    "key": "textfield_5qqwf",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Miejscowość",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_10ft4zc",
                        "columns": null
                    },
                    "id": "Field_0mjo5v7",
                    "key": "textfield_ihi13",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Ulica",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0zy21vs",
                        "columns": null
                    },
                    "id": "Field_15h1h65",
                    "key": "textfield_8ea7we",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Nr domu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0zy21vs",
                        "columns": null
                    },
                    "id": "Field_0q147vd",
                    "key": "textfield_pphn1p",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Nr lokalu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0zy21vs",
                        "columns": null
                    },
                    "id": "Field_1uzxby2",
                    "key": "textfield_5jlsze"
                },
                {
                    "label": "Numer Telefonu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_1ctqhvh",
                        "columns": null
                    },
                    "id": "Field_1roxfyr",
                    "key": "textfield_s972u"
                }
            ],
            "showOutline": true,
            "label": "REGON",
            "type": "group",
            "layout": {
                "row": "Row_038q7yp",
                "columns": null
            },
            "id": "Field_09fy4jv",
            "conditional": {
                "hide": "=radio_53azn6 != \"REGON\""
            }
        },
        {
            "components": [
                {
                    "label": "Imię",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_1uvczog",
                        "columns": null
                    },
                    "id": "Field_1hpmdvp",
                    "key": "textfield_5or253",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Nazwisko",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0yisjsf",
                        "columns": null
                    },
                    "id": "Field_0v47ae2",
                    "key": "textfield_gyopmp",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Numer Paszportu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_09dg198",
                        "columns": null
                    },
                    "id": "Field_0zdz4wl",
                    "key": "textfield_72p59"
                },
                {
                    "label": "Kod pocztowy",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_02jwjss",
                        "columns": null
                    },
                    "id": "Field_0w2fut5",
                    "key": "textfield_xwielt",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Miejscowość",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_02jwjss",
                        "columns": null
                    },
                    "id": "Field_1szu5t8",
                    "key": "textfield_muvwat",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Ulica",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_1muowtc",
                        "columns": null
                    },
                    "id": "Field_1nlw6oo",
                    "key": "textfield_29op1e",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Nr domu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_1muowtc",
                        "columns": null
                    },
                    "id": "Field_1og4xu6",
                    "key": "textfield_s15m9",
                    "validate": {
                        "required": true
                    }
                },
                {
                    "label": "Nr lokalu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_1muowtc",
                        "columns": null
                    },
                    "id": "Field_15shnoy",
                    "key": "textfield_xrwyd",
                    "validate": {
                        "required": false
                    }
                },
                {
                    "label": "Numer Telefonu",
                    "type": "textfield",
                    "layout": {
                        "row": "Row_0l01ysq",
                        "columns": null
                    },
                    "id": "Field_0fqz4kd",
                    "key": "textfield_nfajoxh"
                }
            ],
            "showOutline": true,
            "label": "Numer paszportu",
            "type": "group",
            "layout": {
                "row": "Row_1ecxyqp",
                "columns": null
            },
            "id": "Field_0waw2ea",
            "conditional": {
                "hide": "=radio_53azn6 != \"PASZPORT_NUMBER\""
            }
        }
    ],
    "type": "default"
}