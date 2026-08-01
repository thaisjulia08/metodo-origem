const fs = require('fs');
const required = ['index.html','styles.css','script.js','public/images/capa-metodo-origem.png','public/images/shay-amorin.jpg','politica-de-privacidade.html','termos-de-uso.html'];
const missing = required.filter(file => !fs.existsSync(file));
if (missing.length) { console.error('Arquivos ausentes:', missing.join(', ')); process.exit(1); }
const html = fs.readFileSync('index.html','utf8');
for (const id of ['inicio','oferta','faq']) if (!html.includes(`id="${id}"`)) { console.error('Seção ausente:', id); process.exit(1); }
console.log('Validação concluída: todos os arquivos e seções principais estão presentes.');
