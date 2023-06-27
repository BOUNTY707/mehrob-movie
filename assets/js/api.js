'use strict'
// 3fd67b0a75a2861ff71511c8065512a7
const api_key = '713fb1f9b06636ba2e51eebe8e2a687a';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

// Fetch data from a server using the 'url' and passes

const fetchDataFromServer = function (url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam))
}

export {imageBaseURL, api_key, fetchDataFromServer}