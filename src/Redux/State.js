let State = {
    topMenu: [{
        name: 'ЖК Архитектор',
        address: 'ул. Академика Волгина, 2А, Москва',
        objectDelivery: '4 квартал 2023',
        id: 0,
        link: "arhitector"
    }, {
        name: 'ЖК Сидней',
        address: 'ул. Шеногина, вл. 2, Москва',
        objectDelivery: '1 квартал 2023',
        id: 1,
        link: "sydnei"
    }, {
        name: 'ЖК Режиссер',
        address: 'ул. Вильгельма Пика, вл. 3, Москва',
        objectDelivery: '4 квартал 2023',
        id: 2,
        link: "rejisser"
    }, {
        name: 'ЖК Роттердам',
        address: 'ул. Варшавское шоссе, 37А/1, Москва',
        objectDelivery: '1 квартал 2025',
        id: 3,
        link: "rotterdam"
    }, {
        name: 'ЖК Sky Garden',
        address: 'ул. Строительный проезд, 9, Москва',
        objectDelivery: '2 квартал 2025',
        id: 4,
        link: "skygarden"
    }, {
        name: 'ЖК Заречный квартал',
        address: 'р.п. Заречье, ул. Торговая, МО',
        objectDelivery: '2 квартал 2024',
        id: 5,
        link: "zarechnii"
    }, {
        name: 'ЖК Настроение',
        address: 'ул. Красная Сосна, д. 3, Москва',
        objectDelivery: '4 квартал 2024',
        id: 6,
        link: "nastroenie"
    }], pages: [{
        link: "contractors", complexes: {
            arhitector: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: "",
                    link: "tech-zakazchik",
                    allSum: 105504706658,
                    givenSum: 32752353329,
                    closedSum: 2970270270,
                    management: [
                        ["Генеральный директор", "Иванов Иван Иванович", "+ 7 (925) 888-88-88"],
                        ["Руководитель проекта", "Сергеев Абдула Борисович", "+ 7 (925) 888-88-88"],
                        ["Начальник участка", "Казанцев Евгений Михайлович", "+ 7 (925) 888-88-88"],
                    ],
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: "",
                    link: "gen-podriadchik",
                    allSum: 105504706658,
                    givenSum: 32752353329,
                    closedSum: 2970270270,
                    management: [
                        ["Генеральный директор", "Иванов Иван Иванович", "+ 7 (925) 888-88-88"],
                        ["Руководитель проекта", "Сергеев Абдула Борисович", "+ 7 (925) 888-88-88"],
                        ["Начальник участка", "Казанцев Евгений Михайлович", "+ 7 (925) 888-88-88"],
                    ],
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"],
                    link: "sub-podriadchik",
                    allSum: 5504706658,
                    givenSum: 2752353329,
                    closedSum: 970270270,
                    management: [
                        ["Генеральный директор", "Иванов Иван Иванович", "+ 7 (925) 888-88-88"],
                        ["Руководитель проекта", "Сергеев Абдула Борисович", "+ 7 (925) 888-88-88"],
                        ["Начальник участка", "Казанцев Евгений Михайлович", "+ 7 (925) 888-88-88"],
                    ],
                }]
            }, sydnei: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            }, rejisser: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            }, rotterdam: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            }, skygarden: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            }, zarechnii: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            }, nastroenie: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            },
        }
    }, {
        link: "workers",
    }, {
        link: "photos",
    }]
};


let State2 = {
    contractors: {
        address: "contractors", complexes: [{
            dropdownmenu: {
                name: 'ЖК Архитектор',
                address: 'ул. Академика Волгина, 2А, Москва',
                objectDelivery: '4 квартал 2023',
                id: 0,
                links: {
                    dropdown: "/arhitector", object: "/arhitector/companies", objectZakazchik: "/arhitector/zakazchik",
                }
            }, companies: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: "",
                    link: "tech-zakazchik",
                    allSum: 105504706658,
                    givenSum: 32752353329,
                    closedSum: 2970270270
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: "",
                    link: "gen-podriadchik",
                    allSum: 105504706658,
                    givenSum: 32752353329,
                    closedSum: 2970270270
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"],
                    link: "sub-podriadchik",
                    allSum: 5504706658,
                    givenSum: 2752353329,
                    closedSum: 970270270
                }]
            },
        }, {
            dropdownmenu: {
                name: 'ЖК Сидней',
                address: 'ул. Шеногина, вл. 2, Москва',
                objectDelivery: '1 квартал 2023',
                id: 1,
                links: {
                    dropdown: "/sydnei", object: "/sydnei/companies", objectZakazchik: "/sydnei/zakazchik",
                },
            }, companies: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            },
        }, {
            dropdownmenu: {
                name: 'ЖК Режиссер',
                address: 'ул. Вильгельма Пика, вл. 3, Москва',
                objectDelivery: '4 квартал 2023',
                id: 2,
                links: {
                    dropdown: "/rejisser", object: "/rejisser/companies", objectZakazchik: "/rejisser/zakazchik",
                },
            }, companies: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            },
        }, {
            dropdownmenu: {
                name: 'ЖК Роттердам',
                address: 'ул. Варшавское шоссе, 37А/1, Москва',
                objectDelivery: '1 квартал 2025',
                id: 3,
                links: {
                    dropdown: "/rotterdam", object: "/rotterdam/companies", objectZakazchik: "/rotterdam/zakazchik",
                },
            }, companies: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            },
        }, {
            dropdownmenu: {
                name: 'ЖК Sky Garden',
                address: 'ул. Строительный проезд, 9, Москва',
                objectDelivery: '2 кв. 2025 г.',
                id: 4,
                links: {
                    dropdown: "/sky-garden", object: "/sky-garden/companies", objectZakazchik: "/sky-garden/zakazchik",
                },
            }, companies: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            },
        }, {
            dropdownmenu: {
                name: 'ЖК Заречный квартал',
                address: 'р.п. Заречье, ул. Торговая, МО',
                objectDelivery: '2 кв. 2024 г.',
                id: 5,
                links: {
                    dropdown: "/zarechnii", object: "/zarechnii/companies", objectZakazchik: "/zarechnii/zakazchik",
                },
            }, companies: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            },
        }, {
            dropdownmenu: {
                name: 'ЖК Настроение',
                address: 'ул. Красная Сосна, д. 3, Москва',
                objectDelivery: '4 кв. 2024 г.',
                id: 6,
                links: {
                    dropdown: "/nastroenie", object: "/nastroenie/companies", objectZakazchik: "/nastroenie/zakazchik",
                },
            }, companies: {
                mainCompanies: [{
                    companyType: "Технический заказчик",
                    companyName: "ФСК Девелопмент",
                    contacts: "8 (495) 660-15-55",
                    imgSrc: "",
                    tasks: ""
                }, {
                    companyType: "Генеральный подрядчик",
                    companyName: "АО МСУ-1",
                    contacts: "8-(495)-286-76-80",
                    imgSrc: "",
                    tasks: ["Отвечает за К1, К2, К3:", "- отделочные работы;", "- ЭОМ/СС;", "- ОВиК/ВК;"]
                }, {
                    companyType: "Суб. подрядчик",
                    companyName: "ООО ФСК Отделочные Технологии",
                    contacts: "8-(929)-510-09-69",
                    imgSrc: "",
                    tasks: "",
                }]
            },
        },]
    }
};

export default State;