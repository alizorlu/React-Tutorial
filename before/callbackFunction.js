

//Callback fonksiyonları...

const sum = (a, b, callback) => {

    callback(a + b);
}

sum(2, 5, (result) => {
    console.log("Sonuc :" + result);
});

const cities = [
    { Name: "Konya", Code: 42 },
    { Name: "İstanbul", Code: 34 },
    { Name: "Elazığ", Code: 23 },
    { Name: "Malatya", Code: 44 }
];


const writeCode=(cities,callback)=>{
    cities.forEach(element => {
        callback("Plakası :"+element.Code +" olan şehir=>>>"+element.Name);
    });
}

writeCode(cities,(result)=>{
    console.log(result);
})