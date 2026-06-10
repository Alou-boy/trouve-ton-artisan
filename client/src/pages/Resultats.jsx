import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtisansByCategorie, searchArtisans } from '../services/api';
import CardArtisan from '../components/CardArtisan';

function Resultats({ type }) {
  const { valeur } = useParams();
  const [artisans, setArtisans] = useState([]);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    setChargement(true);
    const requete =
      type === 'categorie'
        ? getArtisansByCategorie(valeur)
        : searchArtisans(valeur);

    requete
      .then((res) => {
        setArtisans(res.data);
        setChargement(false);
      })
      .catch((err) => {
        console.error(err);
        setChargement(false);
      });
  }, [type, valeur]);

  const titre =
    type === 'categorie'
      ? `Catégorie : ${valeur}`
      : `Résultats pour : "${valeur}"`;

  return (
    <div className="container py-5">
      <h1 className="titre-charte mb-4">{titre}</h1>

      {chargement && <p>Chargement...</p>}
      {!chargement && artisans.length === 0 && <p>Aucun artisan trouvé.</p>}

      <div className="row">
        {artisans.map((artisan) => (
          <CardArtisan key={artisan.id} artisan={artisan} />
        ))}
      </div>
    </div>
  );
}

export default Resultats;