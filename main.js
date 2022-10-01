
const url = "https://fathomless-mesa-30320.herokuapp.com/data_project?q=";

async function getdata(query){
let res = await fetch(`${url}${query}`);
let data = await res.json();
console.log(data);
append(data)
}

document.getElementById("search_btn_vw").addEventListener("click",sendQuery);
function sendQuery(){
    let query = document.getElementById("search_job_vw").value;
    getdata(query)
}
let main_div = document.getElementById("main_div_vw")
function append(data){
    let divv = document.querySelector(".job_cards_vw");
    divv.innerHTML=null;
    main_div.style.display="none";
    divv.style.display="inherit";
data.forEach((ele,i)=> {
    
    let cont1 = document.createElement("div")
    cont1.className="container3_vw";
    cont1.setAttribute("id", "container3_vw")

    let h3 = document.createElement("h3")
    h3.innerText="Jobs related to search ...";
    let cont2 = document.createElement("div");
     cont2.className="cont2_1_vw";
     let cont3 = document.createElement("div");
     cont3.className="cont2_1_1_vw";
     let cont4 = document.createElement("div");
     cont4.className="cont2_1_2";
     let imgg = document.createElement("img");
     imgg.src=ele.img
     let cont5 = document.createElement("div");
     cont5.className="cont2_1-1";
     let p1 = document.createElement("p");
    p1.setAttribute("id","jobPost")
    p1.innerText=ele.post
    let p2 = document.createElement("p");
    p2.setAttribute("id", "jobCompany")
    p2.innerText=ele.company

    let span1 = document.createElement("span");
    span1.setAttribute("id","jobExp");
    span1.innerText="Experiance : "+ele.experiance;

    let span2 = document.createElement("span")
    span2.setAttribute("id", "jobLocation");
    span2.innerText="Location : " +ele.location;

    let p3 = document.createElement("p");
    p3.setAttribute("id","job_desc")
    p3.innerText="Desc :"+ele.description;

    let p4 = document.createElement("p");
    p4.setAttribute("id","desc2");
    p4.innerText="Freshers can also apply but their skill can be compite at industry ..."

    let cont6 = document.createElement("div");
    cont6.className="cont_2_1_1";

    let btn1 = document.createElement("button");
    btn1.innerText="whishlist";
    btn1.addEventListener("click",()=>{

         Add_wishList(ele)
         wishlist_count()

    })
    btn1.setAttribute("id", "whishList");
    let btn2 = document.createElement("button");
    btn2.setAttribute("id","p22");
    btn2.innerText="Apply for this JOB !! ";

    cont4.append(imgg)
    cont5.append(p2,p1)
    cont3.append(cont4,cont5)
    cont6.append(btn1,btn2)
    cont2.append(cont3,span1,span2,p3,p4,cont6)
    cont1.append(h3,cont2)
    divv.append(cont1)


});
}
let count_btn =1;

document.querySelector(".follow_btn").addEventListener("click", ()=>{
let text = document.querySelector(".follow_btn")
    if(count_btn==1){
       text.innerText ="following..";
       count_btn =2;
    }
    else{
        text.innerText="follow";
        count_btn=1;
    }
})
let wishList_count=JSON.parse(localStorage.getItem("wish_list_count"))||0;
let wish_list_item=JSON.parse(localStorage.getItem("wishList"))||[];
let display = document.getElementById("wish_list_count");
display.innerText=wishList_count;

function  Add_wishList(ele){
    alert("Adding to Wish List ...")
wish_list_item.push(ele)
localStorage.setItem("wishList",JSON.stringify(wish_list_item))


console.log(ele);
}

function wishlist_count(){
    wishList_count++
    display.innerText=wishList_count;
    localStorage.setItem("wish_list_count",JSON.stringify(wishList_count ))
}