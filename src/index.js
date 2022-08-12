import React from 'react';
import { createRoot } from 'react-dom/client';
import DicodingLogo from './meme-1.jpg';

const element = ( // bikin variable element nya
  <div className="element">
    <h1>Biodata Perusahaan</h1>
    <ul>
      <li>Nama: Dicoding Indonesia</li>
      <li>Bidang: Education</li>
      <li>Tagline: Decode Ideas, Discover Potential.</li>
      <img src="./meme-1.jpg" alt="Dicoding logo" /> <img src={DicodingLogo} alt="Dicoding logo" />
      {/* ini 
      contoh kl masukin gambar inget kl di rjs nyari gambar nya 
      alamat nya dimulai nyari dr html.
      */}
    </ul>
  </div> // bikin div yang berisi h1 (judul)
  // dan unordered list
);
const root = createRoot(document.getElementById('root'));
// panggil id html root dari html
root.render(element); // cetak element render
