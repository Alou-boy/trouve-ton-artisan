import { Link } from 'react-router-dom';

function CardArtisan({ artisan }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card carte-artisan h-100">
        <div className="card-body d-flex flex-column">
          <div className="mb-2">
            <h3 className="card-title h5 titre-charte mb-1">{artisan.nom}</h3>
            {artisan.specialite && (
              <span className="badge-specialite">{artisan.specialite.nom}</span>
            )}
          </div>
          <p className="note-artisan mb-1">⭐ {artisan.note} / 5</p>
          <p className="card-text text-muted">📍 {artisan.ville}</p>
          <Link to={`/artisan/${artisan.id}`} className="btn btn-artisan mt-auto">
            Voir la fiche
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardArtisan;