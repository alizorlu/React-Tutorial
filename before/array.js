
//Diziler-Collection

const brands=["Apple","Microsoft","Bosch","Samsung"];
//-->aray içindeki değerleri dönderir.
brands.forEach((name,index)=>{

    console.log("Marka :"+name+" Marka değeri :"+index);

});
console.log("==================================");
//-->map fonksiyonu sayesinde yeni bir array dizisi dönderebiliriz.
let newBrands=brands.map((value)=>{

    return "Marka adı :"+value;

});
console.log("==================================");
//-->filter : içinde u harfi olan markaları filtreleyelim.

newBrands=newBrands.filter((value,index)=>{

    if(value.indexOf("u")>0){
        console.log(value)
        return value;
    }

});
console.log("==================================");
newBrands.forEach((value)=>{console.log(value)})