import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import ListeArtisans from './pages/ListeArtisans';
import FicheArtisan from './pages/FicheArtisan';
import Resultats from './pages/Resultats';
import EnConstruction from './pages/EnConstruction';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className='contenu-principal'>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/artisans" element={<ListeArtisans />} />
          <Route path="/artisan/:id" element={<FicheArtisan />} />
          <Route path="/categorie/:valeur" element={<Resultats type="categorie" />} />
          <Route path="/recherche/:valeur" element={<Resultats type="recherche" />} />
          <Route path="/mentions-legales" element={<EnConstruction titre="Mentions légales" />} />
          <Route path="/donnees-personnelles" element={<EnConstruction titre="Données personnelles" />} />
          <Route path="/accessibilite" element={<EnConstruction titre="Accessibilité" />} />
          <Route path="/cookies" element={<EnConstruction titre="Cookies" />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;