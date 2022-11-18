const users = [];
users[0] = {
    name: "monica",
    gender: "female",
    age: 17,
    email: "monica@dingdong.com",
    favoritColor: "yellow, pink, white, pulple",
    ishavepet: "yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },

        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,
        },

        {
            name: "SMA 03",
            city: "Tangerang",
        },

    ],
    favoritRestaurant: "Bento, Sushi, Pancake, Eggy, Tempura, Bento, Eggy, PAdang, Tteok, Sushi, Sushi",

}
users[1] = {
    name: "WENDY",
    gender: "male",
    age: 23,
    email: "wendy@dingdong.com",
    favoritColor: "Blue, Black, Grey",
    ishavepet: "no",
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: 2010,
        },

        {
            name: "SMP 03",
            city: "Bogor",
            graduate: 2013,
        },

        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: "2016",

        },
        {
            name: "Universitas Maju",
            city: "Tangerang",

        },


    ],
    favoritRestaurant: ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]

}

console.log("NAMA : " + users[1].name)
console.log("SMA : " + users[1].education[2].name)
console.log("KOTA : " + users[1].education[2].city)
console.log("MAKANAN FAVORIT : " + users[1].favoritRestaurant[5])
