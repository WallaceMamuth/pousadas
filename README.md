# Pousada WATech

Landing page responsiva desenvolvida para apresentar a Pousada WATech, destacando experiências tecnológicas, pacotes de hospedagem e informações essenciais para visitantes.

## ✨ Visão Geral
- Interface estática baseada no template adaptado **Woox Travel** com textos e identidade WATech.
- Navegação mobile refinada com botão hambúrguer acessível e overlay.
- Conteúdo distribuído em seções: banner principal, destinos, ofertas, mapa integrado e chamadas para reserva.

## 🛠 Stack & Ferramentas
- **HTML5** + **CSS3** (estilos próprios e Bootstrap)
- **JavaScript** (jQuery e scripts customizados)
- **Font Awesome** para iconografia
- Servido como site estático — sem backend no repositório

## 📁 Estrutura Principal
```
assets/
  css/        # Estilos (templatemo + ajustes)
  images/     # Imagens otimizadas
  js/         # Scripts de interação e animações
vendor/
  bootstrap/  # Dependências Bootstrap
  jquery/     # Dependências jQuery
index.html    # Página inicial
about.html    # Página sobre
deals.html    # Ofertas
reservation.html # Reservas
```

## ▶️ Como rodar localmente
1. Certifique-se de ter **Python 3** instalado.
2. No terminal/powershell:
   ```powershell
   Set-Location C:\watechprojetos\pousadas
   python -m http.server 8000
   ```
3. Acesse [http://localhost:8000](http://localhost:8000) no navegador.

> Se preferir outra porta ou servidor estático, basta apontar para a raiz do projeto.

## 🚀 Deploy
Como é um site estático, pode ser publicado diretamente em:
- GitHub Pages
- Netlify
- Vercel
- Qualquer serviço de hosting estático

## ✅ Próximos Passos Sugeridos
- Otimizar imagens para WebP adicionais.
- Automatizar o ano do rodapé via JavaScript.
- Integrar formulário de reserva com backend (ex.: Flask) quando disponível.

---
Projeto mantido pela equipe WATech. Para novas solicitações ou melhorias, abra uma issue ou pull request.

