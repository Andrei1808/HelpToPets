import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './common/components/Header/Header';
import Footer from './common/components/Footer/Footer';
import Main from './common/pages/Main/Main';
import { PetCardInterface } from './common/utils/Interfaces';
import ScrollToTop from './common/utils/scrollToTop';
import AAA from './common/pages/AAA/AAA';

const petCards: PetCardInterface[] = [
  {
    id: 1,
    name: 'Adocao',
    title: 'Uma nova  companhia para  um pet',
    description:
      'Todo dia milhares de animais  são encontrados na rua sem dono, ajude a mudar isto.',
    img: 'src/common/assets/Pets/adocao.png',
  },
  {
    id: 2,
    name: 'Voluntariado',
    title: 'Junte-se a nossa  equipe apoiando esta causa',
    description:
      'Cadastre sua organização para oferecer apoio a quem estiver precisando.',
    img: 'src/common/assets/Pets/voluntariado.png',
  },
  {
    id: 3,
    name: 'Colaboração',
    title: 'Apoio durante a procura de animais perdidos',
    description:
      'Abrindo novos chamados, você notificará a todos sobre o desaparecimento.',
    img: 'src/common/assets/Pets/colaboracao.png',
  },
];

function App(): React.ReactElement {
  const [pets, setPets] = useState<PetCardInterface[]>(petCards);
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Main pets={pets} />} />
          <Route path="/AAA" element={<AAA />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
