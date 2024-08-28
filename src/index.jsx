import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './/pages/Inicio/Index';
import Sobrenos from './/pages/Sobre-nos/Index';
import Exercicio1 from './/pages/Exercicio-one/Index';
import Exercicio2 from './/pages/Exercicio-two/Index';
import Exercicio3 from './/pages/Exercicio-three/Index';
import Exercicio4 from './/pages/Exercicio-forty/Index';
import Exercicio5 from './/pages/Exercicio-five/Index';
import Exercicio6 from './/pages/Exercicio-six/Index';
import Exercicio7 from './/pages/Exercicio-seven/Index';
import Exercicio8 from './/pages/Exercicio-eight/Index';
import Exercicio9 from './/pages/Exercicio-nine/Index';
import Exercicio10 from './/pages/Exercicio-ten/Index';
import Exercicio11 from './/pages/Exercicio-eleven/Index';
import Exercicio12 from './/pages/Exercicio-twelve/Index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element= {<App/>}/>
    <Route path='//Sobre-nos' element= {<Sobrenos/>}/>
    <Route path="//Exercicio-one" element={<Exercicio1/>}/>
    <Route path="//Exercicio-two" element={<Exercicio2/>}/>
    <Route path="//Exercicio-three" element={<Exercicio3/>}/>
    <Route path="//Exercicio-forty" element={<Exercicio4/>}/>
    <Route path="//Exercicio-five" element={<Exercicio5/>}/>
    <Route path="//Exercicio-six" element={<Exercicio6/>}/>
    <Route path="//Exercicio-seven" element={<Exercicio7/>}/>
    <Route path="//Exercicio-eight" element={<Exercicio8/>}/>
    <Route path="//Exercicio-nine" element={<Exercicio9/>}/>
    <Route path="//Exercicio-ten" element={<Exercicio10/>}/>
    <Route path="//Exercicio-eleven" element={<Exercicio11/>}/>
    <Route path="//Exercicio-twelve" element={<Exercicio12/>}/>
  </Routes>
  </BrowserRouter>
</React.StrictMode>
);

