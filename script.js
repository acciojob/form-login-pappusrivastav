// function getFormvalue() {
//     //Write your code here

// }
function getFormvalue() {
  const form = document.getElementById("form1");
  const firstName = form.fname.value;
  const lastName = form.lname.value;
  alert(`First name: ${firstName}\nLast name: ${lastName}`);
  return false; // to prevent the form from submitting
}
