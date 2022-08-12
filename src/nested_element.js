// nested
import React from 'react';
// mengimport react framework
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// berfungsi untuk menerima parameter berupa HTML element
// yang menjadi referensi dari tempat di mana React element ditampung.

// import dengan ESM Format

const heading = React.createElement('h1', { id: 'contain' }, 'Biodata Perusahaan');
// buat react element tenteng biodata perusahaan dicoding
const listItem1 = React.createElement('li', null, 'Nama: Dicoding Indonesia');
const listItem2 = React.createElement('li', null, 'Bidang: Education');
const listItem3 = React.createElement('li', null, 'Tagline: Decode Ideas, Discover Potential.');
// buat react element tenteng list item
const unorderedList = React.createElement('ul', null, [listItem1, listItem2, listItem3]);

const container = React.createElement('div', null, [heading, unorderedList]);
// Element ini berfungsi sebagai parent container alias penampung
// seluruh React element yang akan ditampilkan pada browser.
// Kita butuh element container karena fungsi root.render
// hanya menerima satu React element
// untuk di-render dan element container inilah yang akan di-render.

const root = createRoot(document.getElementById('root'));
// panngil dr html (dengan id root di html)
// ke js
root.render(heading);
// ini kalau  mau print headingnya saja

root.render(container);
// nah karna tadi kita sudah membuat container yang menampung
// heading dan unordered list maka code yang render yaitu
// container inget react hanay bisa render 1 elemen jadi
// kl mau ngirim apa apa yah jadiin satu dulu

// vs jsx
