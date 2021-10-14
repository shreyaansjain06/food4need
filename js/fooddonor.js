// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAA8lzWI9jnbqDHdEaTgouPCsHgBjVz5Rk',
  authDomain: 'generous-delicacies.firebaseapp.com',
  projectId: 'generous-delicacies',
  storageBucket: 'generous-delicacies.appspot.com',
  messagingSenderId: '625369690264',
  appId: '1:625369690264:web:1848e3ca57a233c8cba0ed',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let formMessage = firebase.database().ref('register');

//listen for submit event//(1)
document
  .getElementById('registrationform')
  .addEventListener('submit', formSubmit);

//Submit form(1.2)
function formSubmit(e) {
  e.preventDefault();
  // Get Values from the DOM
  let name = document.querySelector('#name').value;
  let email = document.querySelector('#email').value;
  let address = document.querySelector('#address').value;
  let city = document.querySelector('#city').value;
  let state = document.querySelector('#state').value;
  let zip = document.querySelector('#zip').value;
  let country = document.querySelector('#country').value;
  let telephone = document.querySelector('#elephone').value;
  let product = document.querySelector('#product').value;
  let quantity = document.querySelector('#quantity').value;

  //send message values
  sendMessage(
    name,
    email,
    address,
    city,
    state,
    zip,
    country,
    telephone,
    product,
    quantity,
    anything
  );

  //Show Alert Message(5)
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert Message After Seven Seconds(6)
  setTimeout(function () {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);

  //Form Reset After Submission(7)
  document.getElementById('registrationform').reset();
}

//Send Message to Firebase(4)

function sendMessage(
  name,
  email,
  address,
  city,
  state,
  zip,
  country,
  telephone,
  product,
  quantity
) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    address: address,
    city: city,
    state: state,
    zip: zip,
    country: country,
    telephone: telephone,
    product: product,
    quantity: quantity,
  });
}
