# Tecboard

Landing page de apresentação para o **Tecboard**, um produto fictício de monitoramento de aplicações em tempo real com alertas inteligentes. O projeto é uma página única, focada em estrutura semântica com HTML e estilização com CSS puro.

## Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Sobre o projeto

A página apresenta o produto com um título de destaque, um texto de apoio, um botão de chamada para ação ("Testar versão demo") e uma imagem ilustrativa do aplicativo em dispositivos móveis.

**Principais pontos praticados:**

- Estrutura semântica com `header`, `main` e `section`
- Fontes locais carregadas com `@font-face` (**Unbounded** e **Poppins**) e `font-display: swap`
- Estilização de tipografia, cores e botão com estado `:hover`
- Transformação de um link (`<a>`) em botão com `display: block`, `border-radius` e `line-height`
- Ajustes responsivos com **media queries** para tablet (`max-width: 768px`) e mobile (`max-width: 375px`)
- Favicon em SVG

## Estrutura de pastas

```
tecboard/
├── css/
│   └── style.css                 # Estilos da página, fontes e media queries
├── fonts/                        # Fontes locais (Unbounded Bold e Poppins Regular)
├── img/                          # Logo e imagem ilustrativa do produto
├── favicon-tecboard-roxo.svg     # Ícone exibido na aba do navegador
└── index.html                    # Página principal
```

## Como executar

Não há dependências nem etapa de build. Basta abrir o arquivo `index.html` no navegador.

---

Projeto desenvolvido durante a formação Front-end da **Alura**.
