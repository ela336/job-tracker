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
        

           const parent=  b.parentElement;
         const grandpa=parent.parentElement;
          const childelement= grandpa.getElementsByTagName("button")[0];
          
         
              // button pop up
           
           if(grandpa.classList.contains("interviewed")==false)
           {
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

         
       
         
           //status maintain

          grandpa.classList.add("interviewed");
          grandpa.classList.remove("reject");
          

           }
          
         
        });
    }
    
    if(b.innerText =="Rejected")
    {
       
         
        b.addEventListener("click",function (){
             const par=  b.parentElement;
           const grandpaa=par.parentElement;
           
          const childele= grandpaa.getElementsByTagName("button")[0];
          
            // button pop up
          
          
           if(grandpaa.classList.contains("reject")==false)
           
           {
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

          //status 

          grandpaa.classList.add("reject");
          grandpaa.classList.remove("interviewed");
          
           }

        });
    }
    
}





for(let t of totalJobs){
    t.textContent=parent.children.length;
}

//here
let allsectionjobcart=parent.children;
for(let i of allsectionjobcart)
{
    let allsecgreenbtn=i.getElementsByTagName("div")[0].getElementsByTagName("button")[0];
     let allsecredbtn=i.getElementsByTagName("div")[0].getElementsByTagName("button")[1];
     let alldltbtn=i.getElementsByTagName("div")[1];
     //dltbtn
     alldltbtn.addEventListener("click",function()
    {
        let dltgparent=alldltbtn.parentElement.parentElement;
        dltgparent.removeChild(alldltbtn.parentElement);
        //here too
        for(let t of totalJobs){
    t.textContent=parent.children.length;
}


    })
     


    //green btn
      allsecgreenbtn.addEventListener("click",function()
{
           
     let v=rejectedparent.children[0].tagName;
     if(rejectedparent.children.length ==1 && v == "SECTION"){   
        
           
               rejectCount.textContent="0";
        
    }
    else{
            rejectCount.textContent=rejectedparent.children.length;
            interCount.textContent=interparent.children.length;
    }




           

   let allpar=  allsecgreenbtn.parentElement.parentElement;
   
   
   let t=allpar.getElementsByTagName("h3")[0].innerText;
   
    let cmparr=rejectedparent.children; //here

   
    for(let j of cmparr)
    {
        
        if(t==j.getElementsByTagName("h3")[0].innerText)
        {
            console.log("yes");

           rejectedparent.removeChild(j);
            rejectCount.textContent=rejectedparent.children.length;
            interCount.textContent=interparent.children.length;
        }
       
    }
   
})





     //red btn
    allsecredbtn.addEventListener("click",function()
{
    
     let u=interparent.children[0].tagName;
     if(interparent.children.length ==1 && u == "SECTION"){
       
        
        
        
           
               interCount.textContent="0";
        
    }
    else{
            rejectCount.textContent=rejectedparent.children.length;
            interCount.textContent=interparent.children.length;
    }





   let allparent=  allsecredbtn.parentElement.parentElement;
   
   
   let text=allparent.getElementsByTagName("h3")[0].innerText;
   
    let cmparray=interparent.children;

   
    for(let j of cmparray)
    {
        
        if(text==j.getElementsByTagName("h3")[0].innerText)
        {
            console.log("yes");

           interparent.removeChild(j);
            rejectCount.textContent=rejectedparent.children.length;
            interCount.textContent=interparent.children.length;
        }
       
    }
   
})
    
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

    if(interparent.children.length==1 && interparent.children[0].tagName !="SECTION")
    {
        let dlticon=interparent.getElementsByClassName("dlticon")[0];
        dlticon.addEventListener("click",function()
    {
        dlticon.parentElement.parentElement.removeChild(dlticon.parentElement);
        avinterjob.textContent=interparent.children.length;
   
    
      interCount.textContent=interparent.children.length;
    })
    }
    

     interviewbtn.style.backgroundColor="#007bff";
    interviewbtn.style.color="white";
    allbtn.style.backgroundColor="white";
    allbtn.style.color="#64748B";
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
   
       if(rejectedparent.children !=0 && rejectedparent.children[0].tagName !="SECTION")
        {  rejectCount.textContent=rejectedparent.children.length;
        }
      interCount.textContent=interparent.children.length;

    }
    
    const interviewSecChildren=interparent.children;
    for(let i of interviewSecChildren)
    {
        const redbtn=i.getElementsByTagName("div")[0].getElementsByTagName("button")[1];
        

        redbtn.addEventListener("click",function()
    {
        if(rejectedparent.children.length !=0){
        if(   rejectedparent.children[0].tagName=="SECTION")
        {
            rejectedparent.removeChild(rejectedparent.children[0])
        }
    }
        rejectedparent.appendChild(redbtn.parentElement.parentElement);

        //numbers updated
        interCount.textContent=interparent.children.length;
         avinterjob.textContent=interparent.children.length;
    })
    }

})





rejectedbtn.addEventListener("click",function (){
      if(rejectedparent.children.length==1 && rejectedparent.children[0].tagName !="SECTION")
    {
        let dlt=rejectedparent.getElementsByClassName("dlticon")[0];
        dlt.addEventListener("click",function()
    {
        dlt.parentElement.parentElement.removeChild(dlt.parentElement);
        avrejectjob.textContent=rejectedparent.children.length;
   
    
      rejectCount.textContent=rejectedparent.children.length;
    })
    }

     rejectedbtn.style.backgroundColor="#007bff";
    rejectedbtn.style.color="white";
    allbtn.style.backgroundColor="white";
    allbtn.style.color="#64748B";
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
   
    rejectCount.textContent=rejectedparent.children.length;
     interCount.textContent=interparent.children.length;

    }
    
     const rejectSecChildren=rejectedparent.children;
    for(let i of rejectSecChildren)
    {
        const greenbtn=i.getElementsByTagName("div")[0].getElementsByTagName("button")[0];
        

        greenbtn.addEventListener("click",function()
    {
        if(interparent.children.length !=0){
        if(interparent.children[0].tagName=="SECTION")
        {
            interparent.removeChild(interparent.children[0])
        }
    }
        interparent.appendChild(greenbtn.parentElement.parentElement);

        //numbers updated
        avrejectjob.textContent=rejectedparent.children.length;
         rejectCount.textContent=rejectedparent.children.length;
    })
    }
})






