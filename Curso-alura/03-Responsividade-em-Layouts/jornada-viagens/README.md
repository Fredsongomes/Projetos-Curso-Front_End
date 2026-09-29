# Jornada Viagens

Site institucional da **Jornada Viagens**, uma agência de viagens fictícia. O projeto é composto por duas páginas totalmente responsivas, construídas com abordagem **mobile-first** e CSS organizado por seções.

## Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Sobre o projeto

**Páginas:**

- **Início (`index.html`)** — hero, ofertas da semana, busca por categoria, destinos populares, condições de pagamento, depoimentos e rodapé com redes sociais.
- **Pacotes de viagem (`pacotes-de-viagens.html`)** — página de um pacote para o Japão, com destinos da excursão, valores, galeria e depoimentos.

**Principais pontos praticados:**

- Layout **mobile-first** com media queries em `min-width` para 768px, 1024px, 1440px e 1920px
- **Flexbox** para cards, listas e rodapé, e **CSS Grid** na galeria de imagens da seção de pagamento
- **Menu hambúrguer sem JavaScript**, usando `input[type="checkbox"]` + `label` e o seletor `:checked ~ nav`
- Troca de imagens de fundo por breakpoint (versões mobile, tablet e desktop)
- Logo diferente para mobile e desktop
- **Variáveis CSS** (`:root`) para cores e pesos de fonte
- CSS modularizado por seção e centralizado com `@import`
- Fonte local **Montserrat** (variable font) com `@font-face`
- SEO básico com `meta description` e tags Open Graph
- Acessibilidade com textos alternativos descritivos e atributos `title` nos links

## Estrutura de pastas

```
jornada-viagens/
├── css/
│   ├── style.css          # Arquivo principal que importa todos os módulos
│   ├── global.css         # Fonte, variáveis, reset e estilos compartilhados
│   ├── header.css         # Cabeçalho e menu hambúrguer
│   ├── hero.css           # Banners principal e inferior
│   ├── offers.css         # Cards de ofertas da semana
│   ├── categories.css     # Cards de categorias
│   ├── destinations.css   # Destinos populares
│   ├── payments.css       # Condições de pagamento e galeria (Grid)
│   ├── testimonials.css   # Depoimentos
│   └── footer.css         # Rodapé
├── fonts/                 # Fonte Montserrat (variable font)
├── img/                   # Imagens, ícones e fundos responsivos
│   └── travel-packages/   # Imagens exclusivas da página de pacotes
├── favico.svg             # Ícone exibido na aba do navegador
├── index.html             # Página inicial
└── pacotes-de-viagens.html # Página de pacote de viagem
```

## Como executar

Não há dependências nem etapa de build. Basta abrir o arquivo `index.html` no navegador.

---

Projeto desenvolvido durante a formação Front-end da **Alura**.
