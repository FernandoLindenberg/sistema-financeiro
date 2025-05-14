@echo off
:: Script para inicializar um repositório Git local e enviar ao GitHub

:: === CONFIGURAÇÕES ===
set REPO_URL=https://github.com/FernandoLindenberg/sistema-financeiro.git

:: === COMANDOS ===
echo Iniciando repositório Git...
git init

echo Adicionando todos os arquivos...
git add .

echo Criando primeiro commit...
git commit -m "Upload inicial"

echo Definindo branch principal como 'main'...
git branch -M main

echo Conectando ao repositório remoto...
git remote add origin %REPO_URL%

echo Enviando arquivos para o GitHub...
git push -u origin main

echo =====================================
echo ✅ Projeto enviado com sucesso!
pause