const phoneBook = [
    {
        name: "Ipatko Igor",
        number: "+38 050 876 45 32",
        date:"Сегодня",
        time:"13:33",
        duration: "",
        status:"missed"
    },
    {
        name: "Наш Бєкєндер",
        number: "+38 097 453 66 78",
        date:"Вчера",
        time:"12:34",
        duration: "01:33",
        status:"out"
    },
    {
        name: "Smorodinov Taras",
        number: "044 765 43 32",
        date:"Суббота",
        time:"09:19",
        duration: "01:21",
        status:"out"
    },
    {
        name: "Комарницкий Алексей",
        number: "+38 094 567 88 54",
        date:"Среда",
        time:"16:34",
        duration: "00:12",
        status:"incoming"
    },
    {
        name: "",
        number: "+7 934 567 84 55",
        date:"Воскресенье",
        time:"19:25",
        duration: "",
        status:"missed"
    },
    {
        name: "Taras Inturist",
        number: "+38 099 756 44 32",
        date:"Пятница",
        time:"16:43",
        duration: "08:44",
        status:"incoming"
    },

    {

        name: "Салтыков Юрий",
        number: "+38 097 567 43 55",
        date: "23.04.2019",
        time: "12:34",
        duration: "04:22",
        status: "incoming"
    },
    {
        name: "Светлана",
        number: "044 574 33 21",
        date: "24.04.2019",
        time: "16:34",
        duration: "00:45",
        status: "out"
    },
    {
        name: "Светлогорская Мария Игнатьевна",
        number: "+38 066 546 33 12",
        date: "24.04.2019",
        time: "18:34",
        duration: "11:09",
        status: "incoming"
    },
    {
        name: "Кирил Смирнрв",
        number: "+3 098 574 66 45",
        date: "25.04.2019",
        time: "00:12",
        duration: "",
        status: "missed"

    },
    {
        name: "Иванов",
        number: "+38 093 647 88 65 ",
        date: "27.04.2019",
        time: "12:34",
        duration: "07:34",
        status: "incoming"
    },
    {
        name: "Smirnova Natalia",
        number: "+38 073 576 66 58",
        date: "27.04.2019",
        time: "14:22",
        duration: "",
        status: "missed"


    },
    {
        name: "Petrov",
        number: "+467 987 02 11",
        date:"30.04.2019",
        time:"12:34",
        duration:"06:32",
        status:"out"
    },
    {
        name: "Сидоров Тарас",
        number: "044 765 43 32",
        date:"02.05.2019",
        time:"14:09",
        duration: "03:11",
        status:"incoming"
    },
    {
        name: "Комарницкий Алексей",
        number: "+38 094 567 88 54",
        date:"11.06.2019",
        time:"21:44",
        duration: "",
        status:"missed"
    },
    {
        name: "",
        number: "+7 934 567 84 55",
        date:"21.07.2019",
        time:"05:12",
        duration: "",
        status:"missed"
    },
    {
        name: "Dmitriy Kovalenko",
        number: "+38 099 756 44 32",
        date:"31.10.2019",
        time:"11:42",
        duration: "00:12",
        status:"incoming"
    },
    {
        name: "Наш Бєкєндер",
        number: "+38 097 453 66 78",
        date:"11.11.2019",
        time:"23:34",
        duration: "",
        status:"missed"
    },
    {
        name: "Ipatko Igor",
        number: "+38 050 876 45 32",
        date:"13.11.2019",
        time:"12:34",
        duration:"01:34",
        status:"out"
    },
    {
        name: "Semen Dollarov",
        number: "+3 098 574 66 45",
        date:"15.01.2020",
        time:"12:34",
        duration: "",
        status:"missed"
    },
    {
        name: "Иванов Флександк",
        number: "+38 093 647 88 65 ",
        date:"15.01.2020",
        time:"16:43",
        duration: "00:34",
        status:"incoming"
    },
    {
        name: "Smirnova Natalia",
        number: "+38 073 576 66 58",
        date:"15.02.2020",
        time:"18:44",
        duration: "",
        status:"missed"
    },
    {
        name: "Аджихималов Реза",
        number: "+467 987 02 11",
        date:"16.02.2019",
        time:"12:34",
        duration: "04:23",
        status:"incoming"
    },
    {
        name: "Smorodinov Taras",
        number: "044 765 43 32",
        date:"17.02.2020",
        time:"09:19",
        duration: "01:21",
        status:"out"
    },
    {
        name: "Комарницкий Алексей",
        number: "+38 094 567 88 54",
        date:"19.03.2020",
        time:"16:34",
        duration: "00:12",
        status:"incoming"
    },
    {
        name: "",
        number: "+7 934 567 84 55",
        date:"03.03.2020",
        time:"19:25",
        duration: "00:45",
        status:"incoming"
    },
    {
        name: "Taras Inturist",
        number: "+38 099 756 44 32",
        date:"22.03.2020",
        time:"22:11",
        duration: "08:44",
        status:"incoming"
    },
    {
        name: "Наш Бєкєндер",
        number: "+38 097 453 66 78",
        date:"25.03.2019",
        time:"12:34",
        duration: "01:33",
        status:"out"
    },
    {
        name: "Ipatko Igor",
        number: "+38 050 876 45 32",
        date:"26.03.2020",
        time:"13:33",
        duration: "",
        status:"missed"
    },
    {
        name: "Ivanova Natalia",
        number: "+38 073 576 66 58",
        date:"27.03.2020",
        time:"18:44",
        duration: "",
        status:"missed"
    },
    {
        name: "Petrov",
        number: "+467 987 02 11",
        date:"27.03.2019",
        time:"12:34",
        duration: "04:23",
        status:"incoming"
    }
];
export  default  phoneBook