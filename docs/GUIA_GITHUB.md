# Publicar o Meu.Eeu no GitHub

O código está preparado na pasta `meu-eeu-github`. A criação do repositório na sua conta e o envio dos arquivos são os próximos passos. Publicar o código no GitHub não publica automaticamente um site acessível pela internet.

## 1. Criar o repositório na sua conta

1. Entre na sua conta e abra [Criar repositório](https://github.com/new).
2. Em **Repository name**, escreva `meu-eeu`.
3. Em **Description**, use:

   > Galeria digital e loja de arte em desenvolvimento, com React, Tailwind CSS, catálogo interativo, carrinho persistente e configuração de encomendas.

4. Selecione **Public** para disponibilizar o projeto no portfólio.
5. Deixe desmarcada a criação de README; selecione **None** para `.gitignore` e licença. Os arquivos de documentação e exclusão já estão nesta entrega.
6. Clique em **Create repository**.

Escolha **uma** das duas maneiras abaixo para enviar os arquivos.

## 2A. Enviar pelo navegador

Esta é a opção mais simples para a primeira publicação.

1. Na página do repositório vazio, clique no link **uploading an existing file**. Em um repositório com arquivos, use **Add file → Upload files**.
2. Abra a pasta preparada no seu computador, ou extraia o ZIP entregue.
3. Arraste o **conteúdo** da pasta para a área de envio: `src`, `docs`, `README.md`, `index.html`, os arquivos de configuração, `package.json`, `package-lock.json`, `.gitignore` e `.gitattributes`.
4. Confira se `README.md` e `package.json` aparecem na raiz e se os arquivos de código aparecem dentro de `src/`. Não envie uma pasta externa chamada `meu-eeu-github` envolvendo todo o projeto.
5. Não arraste `.git/`, `node_modules/` ou `dist/` se elas estiverem na pasta. No upload pelo navegador, o `.gitignore` não filtra os arquivos que você seleciona.
6. Na mensagem do commit, escreva `Adiciona base do site Meu.Eeu e documentação`.
7. Confirme o envio em **Commit changes**; se o GitHub solicitar uma branch e revisão, siga o fluxo apresentado.
8. Confira se o README aparece abaixo da lista de arquivos.

**O ZIP é para transportar os arquivos:** extraia antes de enviar. Subir somente o ZIP não disponibiliza o código e o README como um repositório navegável.

## 2B. Enviar pelo terminal com Git

Esta opção facilita as próximas atualizações. Git já está disponível no computador em que esta entrega foi preparada.

Abra o PowerShell e entre na pasta:

```powershell
Set-Location -LiteralPath 'C:\Users\Luís Gabriel\Documents\Faculdade\Code_Cloude\meu-eeu-github'
```

Se você extraiu a entrega em outro lugar, use o caminho dessa pasta.

O repositório local da pasta original já foi inicializado na branch `main`. Se estiver usando uma cópia extraída do ZIP, inicialize-a:

```powershell
git init -b main
```

Confira a identificação de autor que será registrada nos commits:

```powershell
git config user.name
git config user.email
```

Se os valores estiverem vazios ou você quiser outros, configure **neste repositório**, substituindo os exemplos:

```powershell
git config user.name 'Seu nome'
git config user.email 'SEU_EMAIL_DE_COMMIT'
```

Você pode usar o endereço de commit fornecido pelo GitHub em **Settings → Emails**. Não copie um endereço de exemplo sem substituí-lo.

Depois, registre os arquivos:

```powershell
git add .
git status
git commit -m 'Adiciona base do site Meu.Eeu e documentação'
```

Na página do repositório, copie a URL HTTPS. Substitua `SEU_USUARIO` abaixo pelo nome da sua conta; se escolheu outro nome de repositório, ajuste também `meu-eeu`:

```powershell
git remote add origin https://github.com/SEU_USUARIO/meu-eeu.git
git push -u origin main
```

Conclua a autenticação que o Git solicitar. Atualize a página do GitHub e confira os arquivos e o README.

### Próximas atualizações

Na mesma pasta, depois de editar e conferir o site:

```powershell
git add .
git commit -m 'Descreva a alteração realizada'
git push
```

Se você fez o primeiro envio pelo navegador, não envie um histórico local independente por cima dele. Para passar a usar Git, clone o repositório em uma nova pasta e trabalhe nessa cópia:

```powershell
git clone https://github.com/SEU_USUARIO/meu-eeu.git meu-eeu-trabalho
Set-Location -LiteralPath 'meu-eeu-trabalho'
```

## 3. Completar a apresentação do projeto

- Em **About**, use a descrição curta do README.
- Como tópicos, use `react`, `javascript`, `tailwindcss`, `vite`, `art-gallery` e `frontend`.
- Quando houver uma demonstração publicada, adicione o endereço em **Website** e no README.
- Acrescente capturas de tela e atualize `docs/PROGRESSO.md` a cada entrega relevante.
- No LinkedIn, vincule o repositório ao projeto e mantenha o status **em desenvolvimento** enquanto as etapas previstas estiverem em andamento.

## Dificuldades comuns

| Situação | Como resolver |
| --- | --- |
| `npm.ps1` bloqueado pelo PowerShell | Use `npm.cmd ci` e `npm.cmd run dev`, como no README. |
| `Author identity unknown` | Configure `user.name` e `user.email` com os comandos acima. |
| `remote origin already exists` | Confira `git remote -v`; ajuste com `git remote set-url origin URL_CORRETA` se necessário. |
| Envio rejeitado porque já existem commits no GitHub | Se usou upload no navegador ou criou um README remoto, clone o repositório em outra pasta e copie suas alterações para essa cópia. |
| Não há site no endereço do repositório | O repositório guarda o código. A hospedagem da aplicação é uma etapa separada. |

## Referências oficiais

- [Criar um repositório](https://docs.github.com/pt/repositories/creating-and-managing-repositories/creating-a-new-repository)
- [Adicionar arquivos pelo navegador](https://docs.github.com/pt/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [Enviar código local com Git](https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
