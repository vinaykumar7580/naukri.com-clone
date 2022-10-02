

let data = JSON.parse(localStorage.getItem("apply_data"))||[];

let name1 = document.getElementById("com_name_vw");
name1.innerText = data.company;

let  add = document.getElementById("comp_location");
 add.innerText=data.location;

 let  post = document.getElementById("Post_vw");
 post.innerText = data.post;

document.getElementById("q_aply_btn").addEventListener("click", ()=>{

alert("Applied Successfully , We havesent your all data , their team will contact you .....");

})
