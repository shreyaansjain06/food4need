import {
  getDatabase,
  ref,
  child,
  get,
} from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js';

const dbref = ref(getDatabase());
get(child(dbref, `food/`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      const elements = snapshot.val();
      for (let element in elements) {
        addCode();
        (document.getElementById('name').innerHTML = elements[element].name),
          (document.getElementById('address').innerHTML =
            elements[element].address),
          (document.getElementById('contact').innerHTML =
            elements[element].telephone),
          (document.getElementById('item').innerHTML =
            elements[element].product),
          (document.getElementById('quantity').innerHTML =
            elements[element].quantity);
      }
    } else {
      console.log('No data available');
    }
  })
  .catch((error) => {
    console.error(error);
  });

function addCode() {
  document.getElementById('header-row').insertAdjacentHTML(
    'afterend',
    `<tr>
            <td id="name"></td>
            <td id="address"></td>
            <td id="item"></td>
            <td id="quantity"></td>
            <td id="contact"></td>
            </tr>`
  );
}
