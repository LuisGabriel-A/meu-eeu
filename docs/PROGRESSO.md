# Progresso do Meu.Eeu

Este documento registra o que já existe e ajuda a demonstrar a evolução sem confundir um protótipo com uma loja em operação.

## Migração de stack — 3 de outubro de 2026

- Substituído Vite pelo Next.js App Router, com catálogo, obras, encomendas e apresentação em rotas próprias.
- Convertidos os componentes e os dados da aplicação para TypeScript estrito.
- Adicionados ESLint, Prettier, Husky, lint-staged e CI para lint, formatação, tipos e build.
- Mantido o catálogo local e o carrinho no navegador; não foram adicionados backend ou pagamento.

### Verificações da migração

- `npm run lint`, `npm run typecheck` e `npm run format:check` concluídos sem erros.
- `npm run build` gerou as páginas do catálogo, encomendas, apresentação e as oito páginas de obra.
- Não foram enviados pedidos nem executados testes de pagamento.

## Entrega de organização — 1 de outubro de 2026

- Código React existente reunido em uma pasta própria para versionamento.
- Configurações do Vite, Tailwind e PostCSS incluídas.
- Arquivo de dependências e lockfile incluídos; o nome do lockfile foi alinhado ao projeto.
- README com objetivo, funcionalidades, instruções de execução e limites atuais.
- Guia para a primeira publicação e atualizações futuras no GitHub.
- Arquivos gerados, dependências locais e arquivos de ambiente excluídos pelo `.gitignore`.
- Capturas reais do catálogo filtrado, da seleção de variante e do carrinho incluídas em `docs/images/`.

Esta data corresponde à organização da entrega. Não representa a data de início do projeto.

### Verificações realizadas nesta entrega

- Build de produção concluído com sucesso com as dependências já instaladas no ambiente de trabalho.
- Busca por um termo inexistente exibiu o estado sem resultados.
- Filtro de prints exibiu cinco obras.
- Seleção da variante A4 e duas unidades exibiu R$ 55 por unidade e R$ 110 no total.
- Adição ao carrinho manteve a variante, a quantidade e o total esperados.
- Recarregar a página preservou os dois itens no carrinho; o item de teste foi removido ao finalizar.

**Pendência observada:** uma imagem externa da obra “Refúgio das Garças — Lago Guaíba” não carregou no catálogo. Substituir ou revisar a imagem antes de apresentar a loja com o conteúdo definitivo.

O restante da lista manual abaixo continua pendente; não foram enviados pedidos nem testados pagamentos.

## Entregas presentes no código

| Entrega                                           | Evidência no código                  |
| ------------------------------------------------- | ------------------------------------ |
| Catálogo, busca, filtros e ordenação              | `src/components/GalleryStore.tsx`    |
| Detalhes, variantes e preços das obras            | `src/components/ProductDetail.tsx`   |
| Carrinho e persistência local                     | `src/context/CartContext.tsx`        |
| Interface de carrinho, cupom e mensagem de pedido | `src/components/CartDrawer.tsx`      |
| Configuração de encomendas em papel e tela        | `src/components/CommissionsPage.tsx` |
| Apresentação da artista                           | `src/components/AboutPage.tsx`       |
| Dados locais das obras e opções de encomenda      | `src/data/artworks.ts`               |

## Roteiro para demonstrar o progresso

1. Abra o catálogo e pesquise uma obra pelo título.
2. Mostre a troca de categoria e a ordenação por preço.
3. Abra uma obra com diferentes tamanhos e altere a opção para mostrar o preço.
4. Adicione ao carrinho, altere a quantidade e atualize a página para mostrar a persistência.
5. Abra Encomendas e compare as opções de papel e tela.
6. Explique que o atendimento por WhatsApp ainda usa um número de exemplo. Não envie pedidos de teste para esse número.

Grave um vídeo curto ou use capturas de tela dessas etapas. Um link para o código, acompanhado de uma demonstração, permite conferir o progresso.

## Verificação manual antes de uma demonstração

- [ ] Busca e filtros apresentam resultados coerentes; o estado vazio funciona.
- [ ] A seleção de variantes atualiza preço e material.
- [ ] Carrinho adiciona, altera e remove itens corretamente.
- [ ] Carrinho preserva os itens depois de atualizar a página.
- [ ] Cupom e total continuam coerentes após alterar quantidades.
- [ ] Preços-base das encomendas correspondem às opções escolhidas.
- [ ] Layout e menus foram conferidos no celular e no computador.
- [ ] Contatos e mensagens de confirmação foram revisados.

As caixas são uma lista de verificação para a evolução do projeto; não indicam testes já concluídos.

## Registrar as próximas entregas

A cada mudança relevante, acrescente data, alteração e como você a conferiu. Exemplo:

> Data: preencher após realizar a entrega. Mudança: inclusão das imagens definitivas no catálogo. Evidência: captura de tela e commit correspondente. Verificação: imagens conferidas no computador e no celular.

Não registre métricas de vendas, desempenho ou qualidade de previsão sem uma medição correspondente.
