var jobarr=[];
var save= JSON.parse(localStorage.getItem("sav")) || [];
function Cf(a,b,c,d,e,f,g,h,i,j,k,l,m,n)
{
    this.name=a;
    this.company=b;
   this. exp=c;
    this.payment=d;
    this.place=e;
    this.qualification=f;
    this.qul1=g;
    this.qul2=h;
    this.qul3=i;
    this.qul4=j;
    this.qul5=k;
    this.qul6=l;
    this.date=m;
    this.id=n;

}

let first = new Cf("Full Stack Web Developer","Victorious Infotech Pvt. Ltd","0-3","Not disclosed","Noida","BE / B.Tech / M.Tech / MCA Experience : 0-3 Years Job Description Write...","IT Skill","Java","Testing","React.js","Node.js","HTML","30+DAYS AGO","10")
let first1= new Cf("Web Developer","Experiences.Digital Pvt Ltd","0-1","200000 - 400000","Gurugaon","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","Object Oriented Programing","vanilaJs","Web application","HTML","CSS","Node.js","13+DAYS AGO","4")
let first2=new Cf("Full Stack Developer - Node.js/Javascript/MongoDB","IntelliTicks","0-2","500000-700000","Delhi","Skill(s) required : JavaScript, Node.js and Angular","Javascript","Node.js","MongoDB","HTML","CSS","JAVA","10")
let first3=new Cf("Full Stack Web and Application developer","Experiences.Digital Pvt Ltd","0-4","50000-250000","Amravati","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","CSS","HTML","Javascript","JAVA","Node.js","Verbal communication","2+DAYS AGO","1");
let first4=new Cf("Web Developer","MDS Facilities","3-4","150000-2000000","Amravati","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","Tender cell","HTML","Javascript","JAVA","Node.js","Verbal communication","6+DAYS AGO");
let first5=new Cf("Full Stack Web and Application developer","Reliance","3-4","150000-2500000","Thilori","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","Trading","HTML","Javascript","JAVA","Node.js","Verbal communication","20+DAYS AGO","2");
let first6=new Cf("Full Stack Web Developer","COAL INDIA","1-4","150000-250000","Nagpur","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","communication","HTML","Javascript","JAVA","Node.js","Verbal communication","2+DAYS AGO");
let first7=new Cf("Full Stack Web Developer","TCS","4-5","100000-350000","Nagpur","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","communication","HTML","Javascript","JAVA","Node.js","Verbal communication","2+DAYS AGO","2");
let first8=new Cf("Full Stack Web and Application developer","TCS","2-4","150000-250000","Amravati","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","communication","HTML","Javascript","JAVA","Node.js","Verbal communication","2+DAYS AGO","3");
let first9=new Cf("Full Stack Web and Application developer","TRIDENT","2-4","150000-250000","Goa","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","communication","HTML","Javascript","JAVA","Node.js","Verbal communication","2+DAYS AGO","2");
let first10=new Cf("Web Developer","TCS","6-7","1000000-2500000","Nagupr","Ability to work and thrive in a fast-paced environment, learn rapidly, and master diver...","communication","HTML","Javascript","JAVA","Node.js","Verbal communication","2+DAYS AGO","11");

jobarr.push(first,first1,first2,first3,first4,first5,first6,first7,first8,first9,first10);
// console.log(jobarr);

// -------------------------------------------------


function jobbhar(jobarr)
{
  jobarr.forEach((ele)=>{
    let div1 = document.createElement("div");
    div1.setAttribute("id","div1");

    let jobname = document.createElement("p");
    jobname.setAttribute("id","jobname");
    jobname.innerText=ele.name;


    let company = document.createElement("p");
    company.setAttribute("id","company");
    company.innerText=ele.company;


    let div2 = document.createElement("div");
    div2.setAttribute("id","div2");
    let div3 = document.createElement("div");
    div3.setAttribute("class","dop");
    let img = document.createElement("img");
    img.src="./images/calendar.png";
    img.setAttribute("class","icons")
    let year = document.createElement("p");
    year.innerText=ele.exp+" Years";

    div3.append(img,year);

    let div4 = document.createElement("div");
    div4.setAttribute("class","dop");
    let img1 = document.createElement("img");
    img1.src="./images/rupee.png";
    img1.setAttribute("class","icons")
    let money = document.createElement("p");
    money.innerText=ele.payment+" ";

    div4.append(img1,money);

    let div5 = document.createElement("div");
    div5.setAttribute("class","dop");
    let img2 = document.createElement("img");
    img2.src="./images/placeholder.png";
    img2.setAttribute("class","icons")
    let place = document.createElement("p");
    place.innerText=ele.place+" ";

    div5.append(img2,place);

    

  

    let div6=document.createElement("div");
    div6.setAttribute("class","dop");
    let img3 = document.createElement("img");
    img3.src="./images/file.png";
    img3.setAttribute("class","icons")
    let edu = document.createElement("p");
    edu.innerText=" "+ele.qualification+" ";
    div6.append(img3,edu)

    let div7 =document.createElement("div");
    div7.setAttribute("id","div7")
    let s1 = document.createElement("p");
    s1.innerText=ele.qul1;
    let s2 = document.createElement("p");
    s2.innerText=ele.qul2;
    let s3 = document.createElement("p");
    s3.innerText=ele.qul3;
    let s4 = document.createElement("p");
    s4.innerText=ele.qul4;
    let s5 = document.createElement("p");
    s5.innerText=ele.qul5;
    let s6 = document.createElement("p");
    s6.innerText=ele.qul6;
    div7.append(s1,s2,s3,s4,s5,s6);

    let div8=document.createElement("div");
    div8.setAttribute("id","div8");
    let day = document.createElement("p");
    day.innerText=ele.date+"  ";
    let save =document.createElement("div9");
    save.setAttribute("class","dop");
    let img4=document.createElement("img");
    img4.src="./images/save.png";
    // --------------------------------------------------------------------------------------------

    img4.onclick= function()
    {
      var save= JSON.parse(localStorage.getItem("sav")) || [];
       save.push(ele);
       alert("Job Saved Sucessfully ")
       localStorage.setItem("sav",JSON.stringify(save));
    }








     // --------------------------------------------------------------------------------------------
  
    img4.setAttribute("class","icons")
    let savekro = document.createElement("p");
    savekro.innerHTML="   Save";
    save.append(img4,savekro);
    div8.append(day,save);
    div2.append(div3,div4,div5);

    div1.append(jobname,company,div2,div6,div7,div8);

    let bk2= document.getElementById("bk2");
    bk2.append(div1);


  })
}

document.getElementById("bk2").innerHTML=null;
jobbhar(jobarr);

// document.getElementById("bk2").innerHTML=null;
function check(event)
{
  document.getElementById("bk2").innerHTML=null;
  event.preventDefault();
  console.log("ghanshyam")
 let nag =  document.getElementById("nagpur").checked;
  let amr=document.getElementById("Amravati").checked;
  let guru=document.getElementById("gurugaon").checked;
  let noi=document.getElementById("noida").checked;
  let nagarr = [];
  if(nag==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.place=="Nagpur")
       {
         nagarr.push(ele);
       }
    })
  }
  if(amr==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.place=="Amravati")
       {
         nagarr.push(ele);
       }
    })
  }
  if(guru==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.place=="Gurugaon")
       {
         nagarr.push(ele);
       }
    })
  }
  if(noi==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.place=="Noida")
       {
         nagarr.push(ele);
       }
    })
  }
console.log(nagarr);
document.getElementById("bk2").innerHTML=null;
jobbhar(nagarr)
  


}



// ----------------------------------------


function gocomp(event)
{
  document.getElementById("bk2").innerHTML=null;
  event.preventDefault();
  console.log("ghanshyam")
 let tata =  document.getElementById("tcs").checked;
  let mds=document.getElementById("MDS").checked;
  let col=document.getElementById("coal").checked;
  let vic=document.getElementById("victor").checked;
  let nagarr = [];
  if(tata==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.company=="TCS")
       {
         nagarr.push(ele);
       }
    })
  }
  if(mds==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.company=="MDS Facilities")
       {
         nagarr.push(ele);
       }
    })
  }
  if(col==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.company=="COAL INDIA")
       {
         nagarr.push(ele);
       }
    })
  }
  if(vic==true)
  {
    jobarr.filter(function(ele)
    {
       if(ele.company=="Victorious Infotech Pvt. Ltd")
       {
         nagarr.push(ele);
       }
    })
  }
console.log(nagarr);
document.getElementById("bk2").innerHTML=null;
jobbhar(nagarr)
}