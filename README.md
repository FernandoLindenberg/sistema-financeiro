# Planilha Financeira com Gráfico e Banco de Dados

Este projeto é uma planilha financeira com frontend em HTML e backend em Node.js usando SQLite.

## Recursos
- Adição e remoção de transações (receitas e despesas)
- Gráfico de barras com Chart.js
- Armazenamento persistente com SQLite

## Como executar localmente

```bash
npm install
npm start
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

## Como publicar no Render

1. Crie um repositório no GitHub e envie este projeto:
```bash
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
git push -u origin main
```

2. Vá para [https://render.com](https://render.com) e conecte ao GitHub.
3. Escolha “New Web Service” e selecione este repositório.
4. Configure:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

Render detectará a porta 3000 automaticamente.

---