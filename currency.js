const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const Fromcurr=document.querySelector(".from select");
const Tocurr=document.querySelector(".to select");
for(let select of dropdown){

for(currcode in countryList){
   let newOption=document.createElement("option");
   newOption.innerText=currcode;
    newOption.value=currcode;
    select.append(newOption);


if(select.name==="from"&&currcode==="USD")
{
    newOption.selected="selected";

}
else if(select.name==="to" &&currcode==="PKR")
{
    newOption.selected="selected";

}
}
select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);

});
}
const updateFlag=(element)=>{
    let currcode=element.value;
   let countryCode=countryList[currcode];
   let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img= element.parentElement.querySelector("img");
  img.src=newsrc;
};

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
   let amtval=amount.value;
   if(amtval===""||amtval<1){
    amtval=1;
    amount.value="1";
   }

//    const URL=`BASE_URL/${Fromcurr.value.toLowerCase()}/${Tocurr.value.toLowerCase()}.json`;
//const URL = `${BASE_URL}/${Fromcurr.value.toLowerCase()}/${Tocurr.value.toLowerCase()}.json`;
let fromCode = Fromcurr.value.toLowerCase();
    let toCode = Tocurr.value.toLowerCase();
    // const URL = `${BASE_URL}/${fromCode}.json`;
    const URL = `${BASE_URL}/${fromCode}.json`
    let response = await fetch(URL);
    let data = await response.json();
//    let response=await fetch(URL);
//    let data=await response.json();
   let rate = data[fromCode][toCode];
//    let rate=data[Tocurr.value.toLowerCase()];

  console.log(rate);
let finalAmount = amtval * rate;
let msg = document.querySelector(".msg");
    if (msg) {
        msg.innerText = `${amtval} ${Fromcurr.value} = ${finalAmount.toFixed(2)} ${Tocurr.value}`;
    }
});

  // Screen par display karne ke liye
    // let finalAmount = amtval * rate;
    // msg.innerText = `${amtval} ${Fromcurr.value} = ${finalAmount} ${Tocurr.value}`;
// });
// let msg = document.querySelector(".msg");
// if (msg) {
        // msg.innerText = `${amtval} ${Fromcurr.value} = ${amtval * rate} ${Tocurr.value}`;
    // }
// });
// }

// );