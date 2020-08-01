import React from 'react';

import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';

import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />

    </div>
  );
}

export default App;
