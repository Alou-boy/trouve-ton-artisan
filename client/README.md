# 🛠️ Trouve ton artisan

Plateforme web permettant aux habitants de la région **Auvergne-Rhône-Alpes** de rechercher et de contacter facilement un artisan près de chez eux.

Projet réalisé dans le cadre de la formation **Développeur Web & Web Mobile** (CEF).

---

## 🚀 Fonctionnalités

- Page d'accueil : étapes de recherche + artisans du mois
- Liste de tous les artisans
- Recherche d'un artisan par son nom
- Filtrage des artisans par catégorie
- Fiche détaillée de chaque artisan
- Formulaire de contact (envoi d'email)
- Site responsive (mobile, tablette, desktop)
- Accessibilité (WCAG)

---

## 🧰 Technologies

**Front-end**
- React (Vite)
- React Router
- Bootstrap 5
- Sass
- Axios

**Back-end**
- Node.js
- Express
- Sequelize (ORM)
- MySQL
- Nodemailer

**Sécurité**
- Helmet, CORS, express-rate-limit

---

## 📁 Structure du projet

```
trouve-ton-artisan/
├── api/         # API REST (Express + Sequelize)
├── client/      # Front-end (React + Vite)
└── database/    # Scripts SQL
```

---

## ⚙️ Prérequis

- Node.js (v18 ou supérieur)
- MySQL (v8 ou supérieur)

---

## 🛠️ Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Alou-boy/trouve-ton-artisan.git
cd trouve-ton-artisan
```

### 2. Base de données

Dans MySQL, exécuter les scripts dans l'ordre :

```
database/01_creation.sql
database/02_peuplement.sql
```

### 3. API

```bash
cd api
npm install
```

Créer un fichier `.env` dans le dossier `api/` :

```
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_NAME=trouve_ton_artisan
DB_USER=tta_user
DB_PASSWORD=ton_mot_de_passe
CLIENT_URL=http://localhost:5173
MAIL_HOST=sandbox.smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USER=ton_user_mailtrap
MAIL_PASS=ton_pass_mailtrap
```

Lancer l'API :

```bash
npm run dev
```

### 4. Front-end

```bash
cd client
npm install
npm run dev
```

L'application est accessible sur `http://localhost:5173`.

---

## 🔌 Endpoints de l'API

| Méthode | Route | Description |
|---------|-------|-------------|
| GET  | /api/categories | Liste des catégories |
| GET  | /api/artisans | Tous les artisans |
| GET  | /api/artisans/top | Artisans du mois |
| GET  | /api/artisans/:id | Détail d'un artisan |
| GET  | /api/artisans/recherche/:terme | Recherche par nom |
| GET  | /api/artisans/categorie/:nom | Artisans par catégorie |
| POST | /api/contact | Formulaire de contact |

---

## 🔒 Sécurité

- **CORS** : accès limité au front-end
- **Helmet** : en-têtes HTTP sécurisés
- **express-rate-limit** : limitation des requêtes
- **Sequelize** : requêtes paramétrées (protection contre les injections SQL)
- **Variables d'environnement** : secrets stockés dans `.env`

---

## 🔗 Liens

- 🌐 Site en ligne : 
- 🎨 Maquettes Figma : 
https://www.figma.com/design/iovbTLO8cGuDzDGBxzdDZH/Trouve-ton-artisan?node-id=0-1&p=f&t=HWQV4RJG1nTXHglt-0
---

## 👤 Auteur

**Alassane Ndour** — [github.com/Alou-boy](https://github.com/Alou-boy)
