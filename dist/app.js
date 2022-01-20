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
        .then()
        .catch(err => console.error(err));
}
addressForm.addEventListener('submit', handleSearch);
//# sourceMappingURL=app.js.map