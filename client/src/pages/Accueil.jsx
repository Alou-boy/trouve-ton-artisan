import { useState, useEffect } from 'react';
import { getTopArtisans } from '../services/api';
import CardArtisan from '../components/CardArtisan';

const etapes = [
  { numero: 1, titre: 'Choisir une catégorie', texte: "Sélectionnez la catégorie d'artisan dont vous avez besoin." },
  { numero: 2, titre: 'Choisir un artisan', texte: 'Parcourez la liste et consultez les fiches détaillées.' },
  { numero: 3, titre: 'Le contacter', texte: 'Envoyez votre demande grâce au formulaire de contact.' },
  { numero: 4, titre: 'Obtenir une réponse', texte: "L'artisan vous répond sous 5 jours ouvrés." },
];

function Accueil() {
  const [artisans, setArtisans] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    getTopArtisans()
      .then((res) => {
        setArtisans(res.data);
        setChargement(false);
      })
      .catch((err) => {
        console.error(err);
        setErreur("Impossible de charger les artisans.");
        setChargement(false);
      });
  }, []);

  return (
    <>
      <section className="hero text-center text-white">
        <div className="container">
          <h1 className="hero-titre">Trouve ton artisan</h1>
          <p className="hero-sous-titre mb-0">
            Trouvez et contactez facilement un artisan près de chez vous,
            en région Auvergne-Rhône-Alpes.
          </p>
        </div>
      </section>

      <div className="container py-5">
        <section className="mb-5">
          <h2 className="h4 mb-4">Comment trouver mon artisan ?</h2>
          <div className="row">
            {etapes.map((etape) => (
              <div className="col-md-3 mb-3" key={etape.numero}>
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <div className="etape-numero">{etape.numero}</div>
                    <h3 className="h6 titre-charte">{etape.titre}</h3>
                    <p className="card-text small">{etape.texte}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="h4 mb-4">Les artisans du mois</h2>

          {chargement && <p>Chargement...</p>}
          {erreur && <p className="text-danger">{erreur}</p>}

          <div className="row">
            {artisans.map((artisan) => (
              <CardArtisan key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Accueil;