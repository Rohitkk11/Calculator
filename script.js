

document.querySelector(".submit").addEventListener("click", function () {});

document.querySelector(".exit").addEventListener("click", () => {
  alert("you can close the current tag ");
});

// choose the class 
 //console.log(document.querySelector('#art').value);
 const selectClass = document.querySelector('.choose');
  const addNewClass1 = document.querySelector(".addArt"); ;
 // console.log(addNewClass1)
// console.log(selectClass);
 //alert(selectClass.value);
 const inter = document.querySelector("#inter").textContent = "InterMediate School";
 //console.log('inter '+ inter);
 document.querySelector("#totalMarks").addEventListener("click", (e) => {
   e.preventDefault();
    //alert(selectClass.value);
   
    // alert(selectClass.value);
    // console.log(selectClass.value)
    // let v1=`${addNewClass1}`
    //const classChoose =;
      selectClass.value === "interMediate"
        ? addNewClass1.classList.add("hidden")
        : addNewClass1.classList.add("show");
    // if (selectClass.value === "interMediate") {
    //   console.log("high " + addNewClass1.classList.add("addNewClass") + inter);
    // }
 });

//console.log(document.querySelector("#Name").value);
// document.querySelector(".contenter").addEventListener("click", () => {
//   alert("hhh");
// });
// document.querySelector('validation').addEventListener('onmouseover',()=>{
// document.querySelector('Name').textContent=
// })
// let a = document.querySelectorAll(".a");
//   document.addEventListener("keydown", (event) => {
//     if (
//       event.key === "0" ||
//       event.key === "1" ||
//       event.key === "2" ||
//       event.key === "3" ||
//       event.key === "4" ||
//       event.key === "5" ||
//       event.key === "6" ||
//       event.key === "7" ||
//       event.key === "8" ||
//       event.key === "9"
//     ) {
//       alert(" ");
//     } else {
//       alert("please enter the number ");
//     }
//   });
let chemistry = document.querySelector("#chemistry").value;
let hindi = document.querySelector("#hindi").value;
let english = document.querySelector("#english").value;
let math = document.querySelector("#math").value;
let physics = document.querySelector("#physics").value;
let art =document.querySelector('#art').value;
let totalMarks = document.querySelector("#totalMarks").value;
$(document).ready(function () {
  // jQuery methods go here...
 document.querySelector(".a").addEventListener("keydown", (event) => {
//    if (
//      !(
//        event.key === "0" ||
//        event.key === "1" ||
//        event.key === "2" ||
//        event.key === "3" ||
//        event.key === "4" ||
//        event.key === "5" ||
//        event.key === "6" ||
//        event.key === "7" ||
//        event.key === "8" ||
//        event.key === "9"
//      )
//    ) {
//      alert("please enter the number ");
//    }
   //var letters = /^[A-Za-z]+$/;
   const reg = new RegExp("^[0-9]+$");

   if(!event.key.match(reg))
   {
       alert("please enter the number ");
       console.log(event.key.match(reg));
   }
 });
  
});

function Alert() {
  let check=(this.chemistry.value && this.hindi.value && this.english.value && this.math.value && this.physics.value && this.totalMarks.value) ||this.art.value;
  if(!check)
  {
      const newLocal = 'fill all data ';
    document.querySelector('#totalMarks1').innerHTML=newLocal;
    }
    else{
      let checkAgain = (this.art.value
        ? "check your chemistry number  " +
          this.chemistry.value +
          "\n check your hindi number    " +
          this.hindi.value +
          "\n check your english number  " +
          this.english.value +
          "\n check your math number     " +
          this.math.value +
          "\n check your physics number   " +
          this.physics.value+
          "\n check your art number " +
          this.art.value
        : "check your chemistry number  " +
          this.chemistry.value +
          "\n check your hindi number    " +
          this.hindi.value +
          "\n check your english number  " +
          this.english.value +
          "\n check your math number     " +
          this.math.value +
          "\n check your physics number   " +
          this.physics.value );
  confirm(checkAgain);
    }             
}

function Submit() {
  let totalNumber =(this.art.value ?
    parseFloat(this.chemistry.value) +
    parseFloat(this.hindi.value) +
    parseFloat(this.english.value) +
    parseFloat(this.math.value) +
    parseFloat(this.physics.value)+
    parseFloat(this.art.value):parseFloat(this.chemistry.value) +
    parseFloat(this.hindi.value) +
    parseFloat(this.english.value) +
    parseFloat(this.math.value) +
    parseFloat(this.physics.value));

  //alert(total);
  let percentage = ((totalNumber / parseFloat(this.totalMarks.value)) * 100).toFixed(2);
  let grade;
  if (percentage <= 100 && percentage >= 80) {
    grade = "A";
  } else if (percentage <= 79 && percentage >= 65) {
    grade = "B";
  } else if (percentage <= 66 && percentage >= 55) {
    grade = "C";
  } else if (percentage <= 54 && percentage >= 45) {
    grade = "D";
  } else {
    grade = 'None';
  }
  console.log(this.chemistry.value);
  let check=(this.chemistry.value && this.hindi.value && this.english.value && this.math.value && this.physics.value && this.totalMarks.value)|| this.art.value;
  if(!check)
  {
      const newLocal = 'fill all data ';
    document.querySelector('#totalMarks1').innerHTML=newLocal;
    }
  else{
      document.querySelector(
        "#totalMarks1"
      ).innerHTML = `Out of ${this.totalMarks.value} and Your Total Marks is ${totalNumber} and Your percentage is ${percentage}% Your exam status is  ${percentage>=44.00 ?' Pass 😎 ':" Fail 😥 "} and grade is ${grade}`;
  }
  
}
const science=document.querySelector('#science').textContent;
 const social = document.querySelector('#social').textContent;
// console.log(science+social);
// this.art.value
//   ? (document.querySelector("#science").innerHTML = "Chemistry :")
//   : (document.querySelector("#science").innerHTML = "Science :");

//  document.querySelector("#totalMarks").addEventListener("click", (e) => {
//    e.preventDefault();
//     selectClass.value === "interMediate"
//       ? (document.querySelector("#science").innerHTML = "Chemistry :")
//       : (document.querySelector("#science").innerHTML = "Science    :");
//  });
 document.querySelector("#totalMarks").addEventListener("click", (e) => {
  e.preventDefault();
if(selectClass.value === "interMediate"){
  document.querySelector("#science1").classList.add('hidden');
  document.querySelector("#social1").classList.add('hidden');
}
else{
  document.querySelector("#science1").classList.add("show");
  document.querySelector("#social1").classList.add("show");
}
 });
 document.querySelector("#totalMarks").addEventListener("click", (e) => {
   e.preventDefault();
   if (selectClass.value === "highSchool") {
     document.querySelector("#chemistry1").classList.add("hidden");
     document.querySelector("#physics1").classList.add("hidden");
   } else {
     document.querySelector("#chemistry1").classList.add("show");
     document.querySelector("#physics1").classList.add("show");
   }
 });

