import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategories } from '../services/api';

function Header() {
  const [categories, setCategories] = useState([]);
  const [recherche, setRecherche] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleRecherche = (e) => {
    e.preventDefault();
    if (recherche.trim() !== '') {
      navigate(`/recherche/${recherche}`);
      setRecherche('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/Logo.png" alt="Trouve ton artisan" height="40" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Ouvrir le menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuPrincipal">
          <ul className="navbar-nav me-auto">
            {categories.map((cat) => (
              <li className="nav-item" key={cat.id}>
                <Link className="nav-link" to={`/categorie/${cat.nom}`}>
                  {cat.nom}
                </Link>
              </li>
            ))}
          </ul>

          <form className="d-flex" onSubmit={handleRecherche} role="search">
            <input
              type="search"
              className="form-control me-2"
              placeholder="Rechercher un artisan"
              aria-label="Rechercher un artisan"
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
            />
            <button type="submit" className="btn btn-artisan" aria-label="Lancer la recherche">
              🔍
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;