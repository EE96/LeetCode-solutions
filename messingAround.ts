type pasty = {
    crust: "shortcrust" | "flaky" | "rough"
    filling: "steak and gravy" | "sausage, beans and cheese" | "cheese and onion" 
    temperature: "wee bit of heat" | "bloody roasting"
} & VAT

type VAT = {
    rate: 20
}

let bigBrexitPie: pasty = {
    crust: "rough",
    filling: "steak and gravy",
    temperature: "bloody roasting",
    rate: 20
}

let component: string = bigBrexitPie["crust"]

if(
    component==="flaky" 
    ? 
    bigBrexitPie.temperature= "bloody roasting"
    :
    bigBrexitPie.temperature= "wee bit of heat"
){
    console.log(bigBrexitPie.temperature)
}