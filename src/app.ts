const addressForm = document.querySelector('form')! as HTMLFormElement;
const formInput = document.getElementById('address')! as HTMLInputElement;

function handleSearch (e:Event) {
  e.preventDefault();
  const enteredAddress = formInput.value;

  // api
}

addressForm.addEventListener('submit', handleSearch);