# L.O.R — Site institucional

Site estático (HTML + CSS + JS, sem build). Repo: gabrielsocialm21-png/lor

```
index.html          página única
assets/site.css     tokens do design system + estilos
assets/site.js      menu mobile, scroll suave, animações, formulário
assets/img/         fotos
assets/fonts/       Exec Demiserif (fonte da marca)
CNAME               domínio lorautomacao.com
robots.txt / sitemap.xml
```

## Publicar (GitHub Pages)
1. Envie o conteúdo desta pasta para a raiz da branch `main`.
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
3. Custom domain: `lorautomacao.com` (o `CNAME` já vai no repo) + Enforce HTTPS.

## Antes de divulgar — substituir
- Telefone `(11) 0000-0000` e e-mail `contato@lor.com.br` (em `index.html`, seções Contato/JSON-LD).
- Os 3 depoimentos ("Substituir texto pelo depoimento real do cliente").
- Formulário: hoje só mostra a confirmação no navegador, **não envia e-mail**. Para receber de verdade, crie um formulário no Formspree e troque no `index.html`:
  `<form id="form" action="https://formspree.io/f/SEU_ID" method="POST">` e remova o `e.preventDefault()` em `assets/site.js`.
- Imagem de compartilhamento (Open Graph) aponta para `assets/img/tecnico-painel.jpg`.
