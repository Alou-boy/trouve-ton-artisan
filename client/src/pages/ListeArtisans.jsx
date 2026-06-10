import { useState, useEffect } from 'react';
import { getArtisans } from '../services/api';
import CardArtisan from '../components/CardArtisan';

function ListeArtisans() {
  const [artisans, setArtisans] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  useEffect(() => {
    getArtisans()
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
    <div className="container py-5">
      <h1 className="titre-charte mb-4">Tous nos artisans</h1>

      {chargement && <p>Chargement...</p>}
      {erreur && <p className="text-danger">{erreur}</p>}

      <div className="row">
        {artisans.map((artisan) => (
          <CardArtisan key={artisan.id} artisan={artisan} />
        ))}
      </div>
    </div>
  );
}

export default ListeArtisans;