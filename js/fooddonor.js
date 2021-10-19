

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"
var firebaseConfig = {
    apiKey: "AIzaSyD4YqaLrYlfXz_gptVe7rGlTGRXEzpFBA4",
    authDomain: "food4need-4f9c0.firebaseapp.com",
    databaseURL: "https://food4need-4f9c0-default-rtdb.firebaseio.com",
    projectId: "food4need-4f9c0",
    storageBucket: "food4need-4f9c0.appspot.com",
    messagingSenderId: "657260809429",
    appId: "1:657260809429:web:5c24f9d057a6efea93a65c"
  };


const app=initializeApp(firebaseConfig);
import { getDatabase, ref, set,update,remove} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
const db=getDatabase()
var name,email,address,city,state,zip,country,telephone,product,quantity;

function readForm(){
  name=document.getElementById("name").value;
  email=document.getElementById("email").value;
  address=document.getElementById("address").value;
  city=document.getElementById("city").value;
  state=document.getElementById("state").value;
  zip=document.getElementById("zip").value;
  country=document.getElementById("country").value;
  telephone=document.getElementById("telephone").value;
  product=document.getElementById("product").value;
  quantity=document.getElementById("quantity").value;
 console.log(name,email,address,city,state,zip,country,telephone,product,quantity);
}
document.getElementById('submit').onclick=function(e){
  e.preventDefault();
  readForm();
set(ref(db,"food/"+ name),{
  name:name,
  email:email,
  address:address,
  city:city,
  state:state,
  zip:zip,
  country:country,
  telphone:telephone,
  product:product,
  quantity:quantity
})
.then(()=>{
  alert("successfully stored data")
})
.catch((e)=>{
  alert(e, "unsuccesfully")
})

}