# Portfolio React

Bienvenue sur le code source de mon portfolio ! Ce projet a été développé en utilisant **React** et **Vite**, avec un design stylisé à l'aide de **Tailwind CSS**.

## 🚀 Technologies utilisées

*   **React** (v19) - Bibliothèque JavaScript pour la création d'interfaces utilisateurs.
*   **Vite** - Outil de build front-end extrêmement rapide.
*   **React Router DOM** - Pour la gestion du routage et la navigation entre les pages.
*   **Tailwind CSS** - Framework CSS utilitaire pour concevoir une interface moderne et responsive.
*   **Lucide React & Phosphor Icons** - Bibliothèques d'icônes utilisées pour embellir l'interface.
*   **ESLint** - Pour garantir la qualité et la cohérence du code.

## 🛠️ Installation et exécution en local

Pour faire tourner ce projet sur votre machine locale, suivez ces étapes :

1.  **Cloner le dépôt** (ou télécharger le code source) :
    ```bash
    git clone <votre-url-de-repo>
    cd react-portfolio
    ```

2.  **Installer les dépendances** :
    Le projet liste un fichier `pnpm-lock.yaml`, l'utilisation de `pnpm` est donc recommandée.
    ```bash
    pnpm install
    # ou si vous préférez npm:
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    pnpm run dev
    # ou
    npm run dev
    ```
    Le site sera alors accessible localement (généralement sur `http://localhost:5173/`).

## 📦 Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

*   `npm run dev` : Lance le serveur de développement avec rechargement à chaud (HMR).
*   `npm run build` : Compile l'application pour la production, prête à être déployée (dossier `dist`).
*   `npm run lint` : Analyse le code avec ESLint pour détecter d'éventuelles erreurs.
*   `npm run preview` : Lance un serveur web local pour prévisualiser la version de production générée par le build.

## 📁 Structure du projet

La structure classique de l'application est la suivante :
*   `/src` : Contient tout le code source (composants React, pages, styles, etc.).
*   `/public` : Les ressources statiques qui ne nécessitent pas de traitement par Vite.
