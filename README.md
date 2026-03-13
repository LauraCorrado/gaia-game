# GAIA - Progetto
## Contesto
gaia-game è un'applicazione web interattiva sviluppata nell'ambito del progetto GAIA, dedicato alla creazione di esperienze videoludiche inclusive e multisensoriali per bambini nello spettro autistico.

Il frontend è progettato seguendo un Design System modulare e accessibile, con l'obiettivo di garantire coerenza visiva, riutilizzabilità dei componenti, accessibilità secondo le linee guida WCAG e facilità di manutenzione e scalabilità.

## Configurazione del Progetto

1. **Clona il repository**
  ```bash
  git clone <repository-url>
  cd gaia-game
  ```

2. **Installa le dipendenze**
  ```bash
  npm install
  ```

3. **Avvia server locale**
  ```bash
  npm run dev
  ```

4. **Esegui build**
  ```bash
  npm run build
  ``

4. **Configurazione build e styling**
Si utilizza Vite come bundler e TailwindCSS 4.

**VITE**: @vitejs/plugin-react per il supporto React e @tailwindcss/vite per l'integrazione diretta di Tailwind

**TAILWIND**: configurazione CSS-first senza tailwind config e design tokens direttamente in index.css

---

## Design System Attuale

- **Libreria UI:** lucide-react + componenti ui customizzate in src\components\ui
- **Palette colori:**  
  ```
  /* Light mode */
  --color-lm-pink: #A11756;
  --color-lm-blue: #005A8C;
  --color-lm-yellow: #946200;
  --color-lm-green: #1E6B1A;
  --color-lm-bg-primary: #FFFFFF;
  --color-lm-bg-secondary: #F5F5F5;
  --color-lm-text-primary: #1A1A1A;
  --color-lm-text-secondary: #4F4F4F;
  --color-lm-bg-pink: #FFE8F1;
  --color-lm-bg-blue: #E5F4FC;
  --color-lm-bg-yellow: #FFF8E0;
  --color-lm-bg-green: #E8F7E6;

  /* Dark mode */
  --color-dm-pink: #FFB3D1;
  --color-dm-blue: #66CDFF;
  --color-dm-yellow: #FFE866;
  --color-dm-green: #7FE076;
  --color-dm-bg-primary: #1A1A1A;
  --color-dm-bg-secondary: #2A2A2A;
  --color-dm-text-primary: #FFFFFF;
  --color-dm-text-secondary: #B0B0B0;
  --color-dm-bg-pink: #3D1A2B;
  --color-dm-bg-blue: #0A2633;
  --color-dm-bg-yellow: #3D3310;
  --color-dm-bg-green: #1A2D18;
  ```

- **Tipografia:**  
  - Font principale: `DA DEFINIRE`
  - Dimensioni e pesi standardizzati (rem)
- **Componenti principali:**  
  - Button, Card, Modal, Navbar, Form
- **Spaziatura e layout:**  
  - Sistema a griglia/flessibile
  - Margini e padding uniformi

---

## Struttura delle Cartelle

```
└───src
    ├───assets
    │   └───img
    ├───components
    │   ├───shared
    │   └───ui
    ├───data
    ├───pages
    ├───types
    └───utils
index.html
// config vari
```