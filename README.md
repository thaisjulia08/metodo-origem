# Método Origem — O Início

Site completo e estável, sem dependências externas.

## Abrir no VS Code

1. Extraia o ZIP.
2. Abra a pasta `metodo-origem-site` no VS Code.
3. Abra o terminal em modo CMD.
4. Execute:

```bash
npm run dev
```

5. Abra `http://localhost:3000`.

Não é necessário executar `npm install`, pois este projeto não usa bibliotecas externas. Isso reduz muito o risco de erros.

## Inserir o link da Kiwify

Abra o arquivo `script.js` e encontre:

```js
const CHECKOUT_URL = '';
```

Cole o link oficial entre as aspas. Todos os botões serão atualizados automaticamente.

## Conferir os arquivos

```bash
npm run build
```

O comando valida a existência de todos os arquivos e seções principais.

## Publicação

Pode ser publicado como site estático na Vercel, Netlify ou GitHub Pages.
