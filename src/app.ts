// npm
import axios from 'axios';

const addressForm = document.querySelector('form')! as HTMLFormElement;
const formInput = document.getElementById('address')! as HTMLInputElement;

const apiKey = '';

declare const google: any;

function handleSearch (e:Event) {
  e.preventDefault();
  const enteredAddress = formInput.value;

  // api call for cd
  type googleAPI = {
    results: {geometry: { location: {lat: number, long: number}}}[];
    status: 'OK' | 'ZERO_RESULTS';
  };

  axios.get<googleAPI>(`${encodeURI(enteredAddress)}${apiKey}`)
        .then( response => {
          if (response.data.status !== 'OK') throw new Error('');
          const coordinates = response.data?.results[0].geometry.location;

          // map display
          const map = new google.maps.Map(document.getElementById("map")!, {
            center: coordinates,
            zoom: 16
          }); 
          new google.maps.Marker({ position: coordinates, map: map });

        })
        .catch(err => console.error(err));
}

addressForm.addEventListener('submit', handleSearch);