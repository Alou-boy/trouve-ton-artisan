import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtisanById, envoyerContact } from '../services/api';

function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);

  // Formulaire de contact
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statut, setStatut] = useState(null);

  useEffect(() => {
    getArtisanById(id)
      .then((res) => {
        setArtisan(res.data);
        setChargement(false);
      })
      .catch((err) => {
        console.error(err);
        setErreur("Cet artisan est introuvable.");
        setChargement(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatut('envoi');

    envoyerContact({ nom, email, message, artisan: artisan.nom, artisanEmail: artisan.email })
      .then(() => {
        setStatut('succes');
        setNom('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error(err);
        setStatut('erreur');
      });
  };
  if (chargement) {
    return <div className="container py-5"><p>Chargement...</p></div>;
  }

  if (erreur) {
    return (
      <div className="container py-5">
        <p className="text-danger">{erreur}</p>
        <Link to="/artisans" className="btn btn-artisan">Retour à la liste</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <Link to="/artisans" className="d-inline-block mb-4">
        ← Retour à la liste
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <h1 className="titre-charte">{artisan.nom}</h1>
          <p className="text-muted mb-1">
            {artisan.specialite.categorie.nom} · {artisan.specialite.nom}
          </p>
          <p className="mb-1">⭐ {artisan.note} / 5</p>
          <p className="mb-3">📍 {artisan.ville}</p>

          <h2 className="h5 titre-charte">À propos</h2>
          <p>{artisan.a_propos}</p>

          {artisan.site_web && (
            <p>
              🌐{' '}
              <a href={artisan.site_web} target="_blank" rel="noreferrer">
                {artisan.site_web}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h2 className="h5 titre-charte mb-3">Contacter {artisan.nom}</h2>

          {statut === 'succes' && (
            <p className="text-success">✅ Votre message a bien été envoyé !</p>
          )}
          {statut === 'erreur' && (
            <p className="text-danger">❌ Une erreur est survenue, réessayez.</p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Votre nom</label>
              <input
                type="text"
                id="nom"
                className="form-control"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Votre email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Votre message</label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-artisan"
              disabled={statut === 'envoi'}
            >
              {statut === 'envoi' ? 'Envoi...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FicheArtisan;