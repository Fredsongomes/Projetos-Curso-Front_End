# AluraBooks

Página inicial de uma livraria online fictícia, a **AluraBooks**, desenvolvida com abordagem **mobile-first** e nomenclatura de classes **BEM**. O projeto conta com menus interativos em CSS e carrosséis de livros com a biblioteca Swiper.

## Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)

## Sobre o projeto

A página reúne cabeçalho com menu de categorias, banner com campo de busca, carrosséis de **Novos lançamentos** e **Mais vendidos** com cards de destaque, tópicos visitados recentemente, cadastro de e-mail para novidades e rodapé com as marcas do Grupo Alura.

**Principais pontos praticados:**

- Layout **mobile-first** com media queries em `min-width` para 1024px e 1728px
- Metodologia **BEM** (Block, Element, Modifier) na nomeação das classes
- **Menus sem JavaScript**: hambúrguer no mobile e dropdown de categorias no desktop, usando `checkbox` + `label` e o seletor `:checked ~`
- Carrosséis de livros com **Swiper** (via CDN), configurados com paginação em bullets e três slides por visualização
- **Flexbox** na organização do cabeçalho, cards, tópicos e rodapé
- **Variáveis CSS** para cores, gradiente e fontes
- CSS reset próprio e estilos modularizados por seção com `@import`
- Fontes **Poppins** e **Josefin Sans** via Google Fonts

## Estrutura de pastas

```
alura-books/
├── img/              # Logo, ícones, capas de livros e logos do rodapé (SVG)
├── styles/
│   ├── header.css    # Cabeçalho, menu hambúrguer e dropdown de categorias
│   ├── banner.css    # Banner com campo de busca
│   ├── carrossel.css # Carrosséis e cards de destaque
│   ├── topicos.css   # Tópicos visitados recentemente
│   ├── contato.css   # Cadastro de e-mail
│   └── rodapé.css    # Rodapé com as marcas do grupo
├── index.html        # Página principal
├── reset.css         # Reset de estilos padrão do navegador
└── styles.css        # Variáveis globais e importação dos módulos
```

## Como executar

Não há etapa de build. Basta abrir o arquivo `index.html` no navegador — é necessário estar conectado à internet para carregar o Swiper e as fontes via CDN.

---

Projeto desenvolvido durante a formação Front-end da **Alura**.
