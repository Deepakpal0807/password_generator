
 let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let lower="abcdefghijklmnopqrstuvwxyz";
let number="1234567890";
let symbol="!@#$%^&*()";



let ans=upper;
ans+=lower;
// console.log(ans);
//range button ..


let range=document.body.querySelectorAll("input")[0];
let range2=document.body.getElementsByClassName("size1")[0];
range2.innerHTML=range.value;
range.addEventListener("input",()=>{
    // console.log(range.value);
    
    
    range2.innerHTML=range.value;

})


//upper case..
let upper1=document.body.querySelector("#upper");
upper1.addEventListener("click",()=>{

    let upperadd=document.body.querySelector("#flexSwitchCheckDisabled");
    //  console.log(numadd);
     
    if(upperadd.checked==true && upper1.classList.contains("true")){
        // console.log("Cheked");
        
        ans+=upper;
        // console.log(ans);
        // console.log(ans.length);
        upper1.classList.toggle("true");
        upper1.classList.toggle("false");
        // console.log(numadd1.classList);1
    }
    if(upperadd.checked==false && upper1.classList.contains("false")){
        // console.log("false");
        let ans1= ans.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ","");
        ans=ans1;
        // console.log(ans);
        upper1.classList.toggle("true");
        upper1.classList.toggle("false");

    }
})

//lower case
let lower1=document.body.querySelector("#lower");
lower1.addEventListener("click",()=>{

    let loweradd=document.body.querySelector("#flexSwitchCheckDisabled1");
    //  console.log(numadd);
     
    if(loweradd.checked==true && lower1.classList.contains("true")){
        // console.log("Cheked");
        
        ans+=lower;
        // console.log(ans);
        // console.log(ans.length);
        lower1.classList.toggle("true");
        lower1.classList.toggle("false");
        // console.log(numadd1.classList);1
    }
    if(loweradd.checked==false && lower1.classList.contains("false")){
        // console.log("false");
        let ans1= ans.replace("abcdefghijklmnopqrstuvwxyz","");
        ans=ans1;
        // console.log(ans);
        lower1.classList.toggle("true");
        lower1.classList.toggle("false");

    }
})





















//number and symbols add..




let numadd1=document.body.querySelector("#numadd");
numadd1.addEventListener("click",()=>{

    let numadd=document.body.querySelector("#flexSwitchCheckDisabled2");
    //  console.log(numadd);
     
    if(numadd.checked==true && numadd1.classList.contains("true")){
        // console.log("Cheked");
        
        ans+=number;
        // console.log(ans);
        // console.log(ans.length);
        numadd1.classList.toggle("true");
        numadd1.classList.toggle("false");
        // console.log(numadd1.classList);1
    }
    if(numadd.checked==false && numadd1.classList.contains("false")){
        // console.log("false");
        let ans1= ans.replace("1234567890","");
        ans=ans1;
        // console.log(ans);
        numadd1.classList.toggle("true");
        numadd1.classList.toggle("false");

    }
})
let symadd1=document.body.querySelector("#symadd");
symadd1.addEventListener("click",()=>{

    let symadd=document.body.querySelector("#flexSwitchCheckDisabled4");
    //  console.log(numadd);
     
    if(symadd.checked==true && symadd1.classList.contains("true")){
        // console.log("Cheked");
        
        ans+=symbol;
        // console.log(ans);
        // console.log(ans.length);
        symadd1.classList.toggle("true");
        symadd1.classList.toggle("false");
        // console.log(numadd1.classList);1
    }
    if(symadd.checked==false && symadd1.classList.contains("false")){
        // console.log("false");
        let ans1= ans.replace("!@#$%^&*()","");
        ans=ans1;
        // console.log(ans);
        symadd1.classList.toggle("true");
        symadd1.classList.toggle("false");

    }
})




let generate=document.body.querySelector('#Generate');
//  console.log(generate);
    



let  out="";

generate.addEventListener("click",()=>{
     let size=ans.length;
        //   console.log(size);
          if(size==0){
            click.innerHTML="Empty!";
          }
          else{

              for(let i=0;i<range.value;i++){
                  let ran=Math.floor(Math.random()*size);
                   out+=ans[ran];
              }
          
              let click=document.body.querySelector("#click");
              // console.log(click);
              click.innerHTML=out;
              out="";
          }

 })


