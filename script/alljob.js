const allbtn=document.getElementById("all");
const interviewbtn=document.getElementById("interview");
const rejectedbtn=document.getElementById("rejected");
const parent=document.getElementById("all-jobs");


console.log(parent.children.length);
document.getElementById("totaljob").textContent=parent.children.length;







allbtn.addEventListener("click",function (){
     console.log("all");
    allbtn.style.backgroundColor="#007bff";
    allbtn.style.color="white";
    interviewbtn.style.backgroundColor="";
    interviewbtn.style.color="";
    rejectedbtn.style.backgroundColor="";
    rejectedbtn.style.color="";
    document.getElementById("interview-jobs").classList.add("hidden");
    document.getElementById("rejected-jobs").classList.add("hidden");
    document.getElementById("all-jobs").classList.remove("hidden");
})



interviewbtn.addEventListener("click",function (){
    console.log("interview");
     interviewbtn.style.backgroundColor="#007bff";
    interviewbtn.style.color="white";
    allbtn.style.backgroundColor="";
    allbtn.style.color="";
    rejectedbtn.style.backgroundColor="";
    rejectedbtn.style.color="";
     document.getElementById("interview-jobs").classList.remove("hidden");
    document.getElementById("rejected-jobs").classList.add("hidden");
    document.getElementById("all-jobs").classList.add("hidden");
})



rejectedbtn.addEventListener("click",function (){
     console.log("rejected");
     rejectedbtn.style.backgroundColor="#007bff";
    rejectedbtn.style.color="white";
    allbtn.style.backgroundColor="";
    allbtn.style.color="";
    interviewbtn.style.backgroundColor="";
    interviewbtn.style.color="";
   
 document.getElementById("interview-jobs").classList.add("hidden");
    document.getElementById("rejected-jobs").classList.remove("hidden");
    document.getElementById("all-jobs").classList.add("hidden");
})


