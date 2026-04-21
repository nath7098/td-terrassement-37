# TD Terrassement 37

Site web de **TD Terrassement 37**, entreprise de terrassement professionnelle en Indre-et-Loire (37).

URL de production : [https://terrassement.td-locationbenne37.fr](https://terrassement.td-locationbenne37.fr)

## Stack technique

- **Nuxt 4.4.2** — framework Vue.js SSG
- **Nuxt UI 4.6.1** — composants UI (version gratuite)
- **@nuxtjs/sitemap** — sitemap XML automatique
- **@nuxtjs/robots** — robots.txt
- **Tailwind CSS 4** — styles utilitaires
- **pnpm** — gestionnaire de paquets

## Démarrage rapide

```bash
pnpm install
pnpm dev
```

Le serveur de développement démarre sur [http://localhost:3000](http://localhost:3000).

## Build & déploiement

```bash
pnpm build
pnpm preview
```

Le site est configuré pour un déploiement sur **Vercel** ou **Netlify** (SSR Node.js).

## Structure du projet

```
app/
├── assets/css/main.css        # Styles globaux + palette nature/terrain
├── components/
│   ├── AppHeader.vue           # En-tête sticky avec navigation
│   └── AppFooter.vue           # Pied de page avec liens partenaires
├── data/
│   └── villes.ts              # Données des 20 communes desservies
├── layouts/
│   └── default.vue            # Layout principal
└── pages/
    ├── index.vue               # Accueil
    ├── services.vue            # Nos prestations
    ├── contact.vue             # Formulaire de contact
    ├── mentions-legales.vue    # Mentions légales
    └── zones/
        ├── index.vue           # Hub zones d'intervention
        └── [ville].vue         # Page dynamique par ville (SEO)
```

## Zones d'intervention

20 communes couvertes : Tours, Joué-lès-Tours, Fondettes, Chinon, Loches, Saumur, Blois, Vendôme, et bien d'autres en Indre-et-Loire et départements limitrophes.

## SEO

- Sitemap XML automatique (`/sitemap.xml`)
- Robots.txt permissif
- Schema.org JSON-LD sur chaque page (LocalBusiness, Service, BreadcrumbList)
- `useSeoMeta` avec title et meta description uniques par page
- Balises canonical sur toutes les pages
- Open Graph sur toutes les pages
- `lang="fr"` sur le HTML

## Liens importants

- Site partenaire : [https://td-locationbenne37.fr](https://td-locationbenne37.fr)
- Google Business : [https://share.google/QKpfCyuEupbTsyRvt](https://share.google/QKpfCyuEupbTsyRvt)

## TODO

- [ ] Intégrer EmailJS dans le formulaire de contact (`app/pages/contact.vue`, section `handleSubmit`)
- [ ] Remplacer les images placeholder avec les photos fournies par Nathan
- [ ] Configurer le domaine sur Vercel/Netlify
- [ ] Ajouter Google Analytics ou Plausible si besoin
