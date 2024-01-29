var infos = [/*1*/{
    name: "Jihad",
    roll:"12-EA-6A-88-E4-66",
},
/*2*/
{
    name:"Sohel",
    roll:"72-AF-83-D3-A2-76",
},
/*3*/
{
    name:"Rasel Molla",
    roll:"6E-0A-DC-63-24-AD",
},
/*4*/
{
    name:"Akbor-madbor",
    roll:"76-78-88-8B-44-72",
},
/*5*/
{
    name:"Rasel Madbor",
    roll:"2E-A0-68-FE-05-A4",
},
/*6*/
{
    name:"Mukit-Iphone",
    roll:"F2-23-64-09-C3-FE",
},
/*7*/
{
    name:"Nibir",
    roll:"A0-CB-FD-A9-28-6E",
},
/*8*/
{
    name:"Abir",
    roll:"90-78-B2-B8-0D-6D",
},
/*9*/
{
    name:"Abir_pc",
    roll:"D8-5E-D3-26-48-26",
},
/*10*/
{
    name:"2nd-Rauter",
    roll:"F4-F2-6D-B0-2E-D8",
},
/*11*/
{
    name:"Robin",
    roll:"2E-C9-DD-34-79-A2",
},
];
const ppR = document.getElementById("ppR");
const ppN = document.getElementById("ppN");
const ppG = document.getElementById("ppG");
const ok = document.getElementById("ok");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");
const popup = document.querySelector(".popup");
const mess = document.querySelector(".mess");
var popupCount = 0;


searchBtn.addEventListener("click", ()=>{
    for(var i=0; i<infos.length; i++){
        var info = infos[i];
        if(info.roll == searchBar.value){
            ppR.innerText = info.roll;
            ppN.innerText = info.name;
            popup.classList.add("popup_p"); 
            setTimeout(()=>{
                popupCount = 1;
                searchBar.value = "";
             },1);
        }
        else if(searchBar.value == ""){
            mess.innerHTML = "First type a MAC Address!";
            mess.classList.add("ms");
            setTimeout(()=>{
                mess.classList.remove("ms");
                mess.innerHTML = "First type a MAC Address!";
            },1500)
        }
        else if(infos[0].roll != searchBar.value && infos[1].roll != searchBar.value && infos[2].roll != searchBar.value && infos[3].roll != searchBar.value && infos[4].roll != searchBar.value && infos[5].roll != searchBar.value && infos[6].roll != searchBar.value && infos[7].roll != searchBar.value && infos[8].roll != searchBar.value && infos[9].roll != searchBar.value && infos[10].roll != searchBar.value){
            mess.innerHTML = "This MAC Address not found!";
            mess.classList.add("ms");
            setTimeout(()=>{
                mess.classList.remove("ms");
            },1500)
         
        }
         
        
        
    }
    
})

ok.addEventListener("click",()=>{
    ppR.innerText = null;
        ppN.innerText = null;
        popup.classList.remove("popup_p");
        popupCount = 0;
});

document.addEventListener("keypress", function(event){
    var text = event.key;
    if(text == "Enter" && popupCount == 0){
        searchBtn.click();
    }
 });
document.addEventListener("keypress", function(event){
    var text = event.key;
    if(text == "Enter" && popupCount == 1){
            ok.click();
    }
 });