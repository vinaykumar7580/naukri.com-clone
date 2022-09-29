
const url = "https://fathomless-mesa-30320.herokuapp.com/data_project?q=";

async function getdata(query){
let res = await fetch(`${url}${query}`);
let data = await res.json();
console.log(data);
}

document.getElementById("search_btn_vw").addEventListener("click",sendQuery);
function sendQuery(){
    let query = document.getElementById("search_job_vw").value;
    getdata(query)
}