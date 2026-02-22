const allbtn=document.getElementById("all");
const interviewbtn=document.getElementById("interview");
const rejectedbtn=document.getElementById("rejected");
const parent=document.getElementById("all-jobs");
const totalJobs=document.getElementsByClassName("totaljob");
const allbtns=document.getElementsByClassName("btn");
 const interparent =document. getElementById("interview-parent");
 const interchild=document.getElementById("interview-jobs");
 const avinterjob=document.getElementById("av-interview-job");
 const avrejectjob=document.getElementById("av-rejected-job");
 const interCount=document.getElementById("intercount");
 const rejectCount=document.getElementById("rejectcount");
 const rejectedparent=document.getElementById("rejected-parent");
 const rejectedjob=document.getElementById("rejected-jobs");


let flag1=true;
let flag2=true;
for(let b of allbtns)
{

    if(b.innerText=="Interview")
    {
        b.addEventListener("click",function (){
          
            // button pop up
           const parent=  b.parentElement;
           const grandpa=parent.parentElement;
           
          const childelement= grandpa.getElementsByTagName("button")[0];
          
          childelement.textContent="Interview";
          childelement.style.backgroundColor="rgba(72, 187, 120, 0.5)";
          childelement.style.color="green";
          childelement.style.borderColor="green";
          childelement.style.fontWeight="bold";


          // interview field addition
        
        
         if(flag1==true)
         {
            interparent.removeChild(interchild);
            flag1=false;
         }

         const clone=grandpa.cloneNode(true);
         
         interparent.appendChild(clone);
          interCount.textContent=interparent.children.length;



        });
    }
    if(b.innerText =="Rejected")
    {
       
    
        b.addEventListener("click",function (){
          
            // button pop up
           const par=  b.parentElement;
           const grandpaa=par.parentElement;
           
          const childele= grandpaa.getElementsByTagName("button")[0];
          
          childele.textContent="Rejected";
          childele.style.backgroundColor="rgba(220, 38, 38, 0.1)";
          childele.style.color="red";
          childele.style.borderColor="red";
          childele.style.fontWeight="bold";


          // rejected field addition
        
        
         if(flag2==true)
         {
            rejectedparent.removeChild(rejectedjob);
            flag2=false;
         }

         const clon=grandpaa.cloneNode(true);
         
         rejectedparent.appendChild(clon);
          rejectCount.textContent=rejectedparent.children.length;



        });
    }
    
}





for(let t of totalJobs){
    t.textContent=parent.children.length;
}









allbtn.addEventListener("click",function (){
     

    allbtn.style.backgroundColor="#007bff";
    allbtn.style.color="white";
    interviewbtn.style.backgroundColor="";
    interviewbtn.style.color="";
    rejectedbtn.style.backgroundColor="";
    rejectedbtn.style.color="";

    document.getElementById("interview-parent").classList.add("hidden");
    document.getElementById("rejected-parent").classList.add("hidden");
    document.getElementById("all-jobs").classList.remove("hidden");

    document.getElementById("av-all").classList.remove("hidden");
    document.getElementById("av-interview").classList.add("hidden");
    document.getElementById("av-rejected").classList.add("hidden");
})



interviewbtn.addEventListener("click",function (){
    

     interviewbtn.style.backgroundColor="#007bff";
    interviewbtn.style.color="white";
    allbtn.style.backgroundColor="";
    allbtn.style.color="";
    rejectedbtn.style.backgroundColor="";
    rejectedbtn.style.color="";


    
     document.getElementById("interview-parent").classList.remove("hidden");
    document.getElementById("rejected-parent").classList.add("hidden");
    document.getElementById("all-jobs").classList.add("hidden");

     document.getElementById("av-all").classList.add("hidden");
    document.getElementById("av-interview").classList.remove("hidden");
    document.getElementById("av-rejected").classList.add("hidden");



    
    if(interparent.children[0] == interchild)
    {
         avinterjob.textContent="0";
    }else
    {
    
   avinterjob.textContent=interparent.children.length;

    }

})





rejectedbtn.addEventListener("click",function (){
     console.log("rejected");

     rejectedbtn.style.backgroundColor="#007bff";
    rejectedbtn.style.color="white";
    allbtn.style.backgroundColor="";
    allbtn.style.color="";
    interviewbtn.style.backgroundColor="";
    interviewbtn.style.color="";
   
 document.getElementById("interview-parent").classList.add("hidden");
    document.getElementById("rejected-parent").classList.remove("hidden");
    document.getElementById("all-jobs").classList.add("hidden");

     document.getElementById("av-all").classList.add("hidden");
    document.getElementById("av-interview").classList.add("hidden");
    document.getElementById("av-rejected").classList.remove("hidden");


    if(rejectedparent.children[0] == rejectedjob)
    {
         avrejectjob.textContent="0";
    }else
    {
    
   avrejectjob.textContent=rejectedparent.children.length;

    }
})


