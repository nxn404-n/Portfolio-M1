const formData = {
  name: '',
  email: '',
  messege: '',
};

function populateStorage() {
  formData.name = document.getElementById('box-input-username').value;
  formData.email = document.getElementById('box-input-email').value;
  formData.messege = document.getElementById('box-input-msg').value;

  localStorage.setItem('form-data', JSON.stringify(formData));
}

function getData() {
  let storageData = localStorage.getItem('form-data');
  storageData = JSON.parse(storageData);

  document.getElementById('box-input-username').value = storageData.name;
  document.getElementById('box-input-email').value = storageData.email;
  document.getElementById('box-input-msg').value = storageData.messege;
}

const inputList = [];
inputList.push(document.getElementById('box-input-username'));
inputList.push(document.getElementById('box-input-email'));
inputList.push(document.getElementById('box-input-msg'));

inputList.forEach((value) => {
  value.onchange = function inputValue() {
    populateStorage();
  };
});

if (!localStorage.getItem('form-data')) {
  populateStorage();
} else {
  getData();
}