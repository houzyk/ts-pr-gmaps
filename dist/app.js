"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const addressForm = document.querySelector('form');
const formInput = document.getElementById('address');
const apiKey = '';
function handleSearch(e) {
    e.preventDefault();
    const enteredAddress = formInput.value;
    axios_1.default.get(`${encodeURI(enteredAddress)}${apiKey}`)
        .then(response => {
        var _a;
        if (response.data.status !== 'OK')
            throw new Error('');
        const coordinates = (_a = response.data) === null || _a === void 0 ? void 0 : _a.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map"), {
            center: coordinates,
            zoom: 16
        });
        new google.maps.Marker({ position: coordinates, map: map });
    })
        .catch(err => console.error(err));
}
addressForm.addEventListener('submit', handleSearch);
//# sourceMappingURL=app.js.map