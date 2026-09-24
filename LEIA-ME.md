# Carteira Sonho 2026: app para o iPhone (funciona sem internet)

Esta pasta é o painel da Carteira Sonho em formato de app web (PWA). Depois de instalado na Tela de Início, ele abre e lê a sua planilha mesmo em modo avião.

Seus dados não ficam nestes arquivos. A planilha é lida só no seu aparelho, na hora em que você a escolhe, e não é enviada para lugar nenhum.

## O que tem na pasta

| Arquivo ou pasta | Para que serve |
|---|---|
| `index.html` | O painel |
| `sw.js` | Guarda os arquivos no aparelho para o app abrir sem internet |
| `manifest.webmanifest` | Nome, cores e ícone do app |
| `vendor/` | Bibliotecas de gráficos (Chart.js) e de leitura do .xlsx (SheetJS), com as licenças |
| `fonts/` | Fonte Carlito, com a licença |
| `icons/` | Ícones do app |

## 1. Publicar no GitHub Pages (uma vez, pelo computador)

1. Crie uma conta gratuita em github.com, se ainda não tiver.
2. Clique em **New repository** (ou "+" → **New repository**).
   - Nome: `carteira` (ou outro de sua preferência).
   - Visibilidade: **Public**. O GitHub Pages gratuito exige repositório público. Nenhum dado seu vai para lá, só o código do painel.
   - Clique em **Create repository**.
3. Na página do repositório, clique em **uploading an existing file** (ou **Add file** → **Upload files**).
4. Descompacte o .zip no computador, abra a pasta e **arraste todo o conteúdo dela** para a página: `index.html`, `sw.js`, `manifest.webmanifest`, `LEIA-ME.md` e as pastas `vendor`, `fonts` e `icons`. O `index.html` precisa ficar na raiz do repositório, não dentro de outra pasta.
5. Clique em **Commit changes**.
6. Vá em **Settings** → **Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e clique em **Save**.
7. Espere 1 a 2 minutos. O endereço do app aparece no topo dessa página, no formato `https://SEU-USUARIO.github.io/carteira/`.

## 2. Instalar no iPhone (uma vez, com internet)

1. Abra o endereço no **Safari**.
2. Espere a página carregar por completo.
3. Toque em **Compartilhar** (o quadrado com a seta) → **Adicionar à Tela de Início** → **Adicionar**.
4. Abra o app pelo novo ícone "Carteira" **uma vez com internet**. É nesse momento que ele guarda os arquivos no aparelho.
5. Para testar, ligue o **modo avião**, abra o ícone e carregue a planilha.

## 3. Usar sem internet

- Toque em **Escolher arquivo .xlsx** → **Procurar** e escolha a planilha no app Arquivos.
- A planilha precisa estar **baixada no iPhone**. Se ela estiver no iCloud Drive com o ícone de nuvem, toque nela uma vez com internet para baixar, ou salve em **No Meu iPhone**.
- A planilha precisa ter as abas **Lançamentos** e **Investimentos**, como a `Sonho_1_recriada.xlsx`, e não pode ter senha.

## 4. Atualizar o app quando houver uma versão nova

1. No GitHub, envie os arquivos novos por cima dos antigos (**Add file** → **Upload files** → **Commit changes**).
2. No `sw.js`, a linha `const VERSAO = 'v1';` precisa mudar (para `'v2'`, depois `'v3'`...). As versões que eu te entregar já virão com esse número atualizado.
3. No iPhone, abra o app com internet, feche e abra de novo. A versão nova aparece na segunda abertura.

## Dúvidas comuns

- **O app abriu em branco sem internet.** Ele ainda não tinha sido aberto com internet depois da instalação. Conecte, abra uma vez e tente de novo.
- **O iPhone apagou o app ou a cópia guardada.** Com pouco espaço livre, o iOS pode limpar dados de apps web. Basta abrir uma vez com internet para ele guardar os arquivos de novo.
- **Remover o app.** Apague o ícone da Tela de Início, como qualquer app.
