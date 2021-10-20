import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  child,
  get,
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js';
const db = getDatabase();
var name,
  email,
  address,
  city,
  state,
  zip,
  country,
  telephone,
  product,
  quantity;

function readForm() {
  name = document.getElementById('name').value;
  email = document.getElementById('email').value;
  address = document.getElementById('address').value;
  city = document.getElementById('city').value;
  state = document.getElementById('state').value;
  zip = document.getElementById('zip').value;
  country = document.getElementById('country').value;
  telephone = document.getElementById('telephone').value;
  product = document.getElementById('product').value;
  quantity = document.getElementById('quantity').value;
  console.log(
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
  );
}
document.getElementById('submit').onclick = function (e) {
  e.preventDefault();
  readForm();
  set(ref(db, 'food/' + telephone), {
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
  })
    .then(() => {
      alert('successfully stored data');
    })
    .catch((e) => {
      alert(e, 'unsuccesfully');
    });
};

const getData = () => {
  let remaining, fooditem;
  const dbref = ref(getDatabase());
  get(child(dbref, `food/${telephone}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        remaining = snapshot.val().quantity;
        fooditem = snapshot.val().product;
        console.log(remaining, fooditem, telephone);
        console.log(snapshot.val());
        //
        if (fooditem === product) {
          if (remaining > 1) {
            update(ref(db, 'food/' + telephone), {
              quantity: remaining - 1,
            })
              .then(() => {
                alert('successfully reduced');
              })
              .catch((e) => {
                alert(e, 'error');
              });
          } else {
            remove(ref(db, 'food/' + telephone), {})
              .then(() => {
                alert('successfully deleted');
              })
              .catch((error) => {
                alert(error);
              });
          }
        } else {
          alert('product does not exist');
        }
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

document.getElementById('reduce').onclick = function (e) {
  e.preventDefault();
  readForm();
  getData();
};
