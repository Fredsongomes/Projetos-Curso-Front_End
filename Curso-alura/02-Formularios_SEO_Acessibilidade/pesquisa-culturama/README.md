# Pesquisa Culturama

Formulário de pesquisa online para a **Culturama**, marca fictícia, que coleta dados pessoais, perfil, hábitos e opinião do usuário. O foco do projeto é a construção de formulários HTML completos, com validação nativa do navegador e boas práticas de acessibilidade.

## Tecnologias utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white)

## Sobre o projeto

O formulário é dividido em blocos com `fieldset` e `legend` — **Dados Pessoais**, **Perfil**, **Hábitos**, **Opinião** e **Confirmações**. Ao ser enviado, o usuário é redirecionado para a página `sucesso.html`, que exibe a confirmação do envio.

**Principais pontos praticados:**

- Uso de diversos tipos de `input`: `text`, `number`, `date`, `email`, `tel`, `file`, `radio`, `checkbox`, `color`
- Campos `select`, `textarea` e `datalist` (sugestões de estilo musical)
- Validação nativa com `required`, `min`, `max`, `pattern` e `accept`
- Feedback visual de validação com as pseudo-classes `:valid`, `:invalid` e `:focus`
- Acessibilidade com `label` associado via `for`, textos de ajuda ligados por `aria-describedby`, `aria-label` no botão de limpar e `role="alert"` na mensagem de sucesso
- Atributo `autocomplete` para auxiliar o preenchimento
- Botões de `submit` e `reset` com estilos de `:hover` distintos
- Fontes **Fjalla One** e **Work Sans** via Google Fonts

## Estrutura de pastas

```
pesquisa-culturama/
├── css/
│   └── style.css            # Estilos do formulário e estados de validação
├── img/
│   └── logo-culturama.png   # Logo exibido no cabeçalho
├── culturama-favico.png     # Ícone exibido na aba do navegador
├── index.html               # Página com o formulário de pesquisa
└── sucesso.html             # Página de confirmação após o envio
```

## Como executar

Não há dependências nem etapa de build. Basta abrir o arquivo `index.html` no navegador.

---

Projeto desenvolvido durante a formação Front-end da **Alura**.
