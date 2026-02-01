video_calcio/
├── package.json              # Remotion 4.0.414 + React 19 + TypeScript
├── tsconfig.json
├── remotion.config.ts
├── public/index.html
└── src/
    ├── index.ts              # Entry point (registerRoot)
    ├── Root.tsx               # Composizione: CalcioVideo, 1920×1080, 30fps, 3600 frame
    ├── CalcioVideo.tsx        # Orchestratore con 8 Sequence
    ├── components/
    │   ├── SceneWrapper.tsx   # Wrapper con fade in/out, safe area 60px
    │   ├── AnimatedText.tsx   # Testo animato con slide-up
    │   ├── BulletPoint.tsx    # Punto elenco animato con slide-in
    │   └── visuals/
    │       ├── PeriodicTableCa.tsx   # Ca, 20, Gruppo 2
    │       ├── EtymologyArrow.tsx    # calx, calcis → Calcio
    │       ├── FlameIcon.tsx         # Fiamma giallo-arancio
    │       ├── OxidationIcon.tsx     # Reazione ossidazione + H₂O
    │       ├── MineralBadges.tsx     # Calcite, Aragonite, Gesso, Dolomite, Apatite
    │       ├── BoneToothIcon.tsx     # Osso + dente + Ca²⁺
    │       ├── NutritionIcons.tsx    # Latte, yogurt, formaggio, verdure, pesce
    │       ├── ConstructionIcon.tsx  # Piramide/calcare
    │       └── MetallurgyIcon.tsx    # Crogiolo metallurgico
    └── scenes/
        ├── Scene1Intro.tsx      # 0–479    (16s) Tavola periodica
        ├── Scene2Etymology.tsx  # 480–959  (16s) Etimologia calx → calcio
        ├── Scene3Properties.tsx # 960–1449 (16.3s) Proprietà fisiche
        ├── Scene4Abundance.tsx  # 1450–1939 (16.3s) Abbondanza e minerali
        ├── Scene5Biology.tsx    # 1940–2429 (16.3s) Ruolo biologico
        ├── Scene6DailyLife.tsx  # 2430–2909 (16s) Vita quotidiana e industria
        ├── Scene7Nutrition.tsx  # 2910–3389 (16s) Nutrizione
        └── Scene8CTA.tsx       # 3390–3599 (7s) "ISCRIVITI AL CANALE"

        Verifiche superate
TypeScript tsc --noEmit — nessun errore
Remotion bundle — completato al 100%
Caratteri UTF-8 — tutti accenti diretti (à, è, é, ì, ò, ù), nessun \uXXXX
Layout — safe area 60px, flex con gap, maxWidth su blocchi testo
Comandi utili
npm start — apre Remotion Studio per preview nel browser
npm run build — renderizza il video in out/video.mp4 (richiede Chrome/Chromium installato)
