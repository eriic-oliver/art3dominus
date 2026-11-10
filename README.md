# Art3Dominus — Portfólio

Site institucional estático da Art3Dominus, preparado para publicação no GitHub Pages.

## Estrutura

- `index.html`: conteúdo e estrutura da página.
- `styles.css`: identidade visual, responsividade e animações.
- `script.js`: menu mobile, animações de entrada, filtros e navegação da galeria.
- `assets/logo-art3dominus.png`: logotipo enviado para o projeto.

## Visualizar localmente

Abra `index.html` no navegador. Para uma experiência mais próxima da hospedagem, execute um servidor estático na pasta do projeto, por exemplo:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`.

## Publicar em GitHub Pages

1. Crie um repositório público chamado `art3dominus` na conta `eriic-oliver`.
2. Envie o conteúdo desta pasta para a raiz do repositório (o `index.html` deve ficar na raiz).
3. No GitHub, acesse **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
6. Aguarde a publicação. O endereço esperado será `https://eriic-oliver.github.io/art3dominus/`.

Se preferir usar outro nome de repositório, o endereço público acompanhará esse nome.

## Galeria de produtos

Esta versão inclui 18 fotografias reais otimizadas em `assets/produtos/`, com filtros por categoria, carrossel e ampliação de imagem.

Categorias disponíveis: Arte Sacra (`sacra`), Miniaturas & Toy Art (`miniaturas`), Natal (`natal`) e Decoração (`decoracao`).

Para acrescentar uma foto, coloque-a em `assets/produtos/` e crie um cartão `.work-card` no `index.html` seguindo os existentes. Use o atributo `data-category` para habilitar o filtro.

## Contatos configurados

- Instagram: https://www.instagram.com/art3dominus/
- WhatsApp: https://wa.me/5571992384745

O projeto não utiliza backend, banco de dados ou processo de build.
