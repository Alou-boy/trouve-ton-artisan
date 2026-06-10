import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-charte py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <h2 className="h6">Région Auvergne-Rhône-Alpes</h2>
            <address className="mb-0">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
            </address>
          </div>

          <div className="col-md-6 mb-3">
            <h2 className="h6">Informations</h2>
            <ul className="list-unstyled">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-center mb-0 mt-3">
          © 2026 Trouve ton artisan — Région Auvergne-Rhône-Alpes
        </p>
      </div>
    </footer>
  );
}

export default Footer;