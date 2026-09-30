# Landing page

Next.js convertido do design feito no Claude Design (originais em `design/`).

- `content/site.ts`: textos das listas, contatos (WhatsApp/Instagram) e chaves de exibição
  (variante de headline, etiquetas de pendência etc.).
- `content/imagens.ts`: fotos. Coloque o arquivo em `public/images/` e associe ao id do espaço
  (ex.: `"hero-retrato": "/images/hero-retrato.webp"`). Sem foto, o espaço reservado aparece.
- `components/Landing.tsx`: markup da página. `components/useLanding.ts`: animações e interações.

```bash
npm install
npm run dev
```

Cada push na branch `main` publica na Vercel.
