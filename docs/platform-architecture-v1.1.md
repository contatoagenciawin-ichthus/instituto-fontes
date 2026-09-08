# Instituto Fontes — Arquitetura da Plataforma v1.1

Atualização funcional e técnica do escopo v1.0, incorporando a **Área do Apoiador** e consolidando uma arquitetura única de identidade e relacionamentos.

## 1. Decisão de produto

O Instituto Fontes não terá sistemas de login independentes para aluno, empresa e apoiador.

A plataforma terá **uma identidade de acesso por usuário**, e essa identidade poderá acumular diferentes vínculos com o Instituto.

Exemplos:

- uma pessoa pode ser aluna e também apoiadora;
- uma pessoa pode representar uma empresa parceira e também fazer uma doação pessoal;
- uma empresa pode publicar oportunidades e, ao mesmo tempo, ser mantenedora;
- um voluntário poderá futuramente também possuir outro vínculo na plataforma.

As permissões e experiências exibidas serão determinadas pelos vínculos e papéis daquele usuário, e não por contas separadas.

## 2. Áreas autenticadas

A plataforma passa a prever quatro experiências autenticadas:

1. **Área do Aluno** — lançamento;
2. **Área da Empresa** — lançamento;
3. **Área do Apoiador** — lançamento junto ao módulo de doações;
4. **Área do Professor / Voluntário** — evolução posterior, prevista desde a fundação.

### 2.1 Área do Apoiador

Nome público recomendado: **Área do Apoiador**.

`Mantenedor` será tratado como categoria/status de relacionamento, especialmente para apoiadores recorrentes, e não como um tipo isolado de conta.

A Área do Apoiador deverá atender:

- pessoa que fez doação única;
- pessoa que possui contribuição recorrente;
- empresa que faz doações pontuais;
- empresa mantenedora;
- apoiador de campanha/projeto específico;
- apoiador que começou com contribuição pontual e posteriormente aderiu à recorrência.

### 2.2 Módulos da Área do Apoiador

| Módulo | Função |
| --- | --- |
| Início | Resumo das contribuições, recorrência ativa, campanhas apoiadas e atualizações relevantes. |
| Minhas contribuições | Histórico de doações, valores, datas, modalidade, status e campanha quando aplicável. |
| Minha contribuição mensal | Situação da recorrência, valor, periodicidade, próxima cobrança quando informada pelo gateway e acesso à gestão do pagamento. |
| Pagamento | Acesso seguro ao portal do gateway para atualização do meio de pagamento, cancelamento ou outras ações suportadas. |
| Comprovantes | Recibos/comprovantes disponibilizados conforme política financeira e contábil do Instituto. |
| Campanhas apoiadas | Projetos ou campanhas aos quais o apoiador destinou contribuições quando houver destinação específica. |
| Impacto | Indicadores, relatórios, histórias e resultados reais do Instituto. |
| Meu perfil | Dados pessoais ou dados de contato relacionados ao apoiador. |
| Comunicações | Preferências de comunicação não obrigatória por e-mail e WhatsApp. |
| Ajuda | Canal de suporte e contato humano com o Instituto. |

## 3. Regra de conversão: doar sem criar conta antes

O login não será requisito para realizar uma doação.

Fluxo recomendado:

1. usuário acessa `Contribua`;
2. escolhe doação única ou recorrente;
3. informa os dados mínimos necessários;
4. conclui o pagamento no gateway ou utiliza Pix direto;
5. recebe confirmação;
6. após a contribuição, o sistema oferece acesso à Área do Apoiador;
7. quando aplicável, a conta poderá ser vinculada/ativada pelo mesmo e-mail utilizado na contribuição, preferencialmente por magic link.

Objetivo: não criar barreira de autenticação antes da conversão e, ao mesmo tempo, permitir relacionamento posterior.

## 4. Identidade, organizações e vínculos

A autenticação representa a **pessoa que acessa a plataforma**.

Empresas e demais organizações são entidades próprias, relacionadas aos usuários por memberships.

Conceitos mínimos:

- `auth.users`: autenticação;
- `profiles`: perfil básico da pessoa autenticada;
- `organizations`: empresas/organizações cadastradas;
- `organization_memberships`: relação entre pessoa e organização, com função e permissões;
- `supporters`: relacionamento de apoio financeiro com o Instituto, podendo representar pessoa ou organização;
- papéis administrativos: permissões internas da equipe do Instituto.

Um papel não deve excluir outro.

## 5. Domínio financeiro

A modelagem deve separar claramente identidade, relacionamento do apoiador e transações financeiras.

Entidades conceituais previstas:

- `supporters`;
- `payment_customers`;
- `donations`;
- `donation_subscriptions`;
- `campaigns`;
- `campaign_allocations` quando necessário;
- `receipts`;
- `communication_preferences`;
- `audit_log`.

Os nomes técnicos podem ser refinados durante a implementação, mas os conceitos não devem ser colapsados em uma única tabela de doadores.

### 5.1 Pessoas e empresas

O mesmo domínio de doações deverá suportar:

- apoiador pessoa física;
- apoiador pessoa jurídica;
- doação sem conta autenticada;
- posterior associação da contribuição a uma conta;
- várias doações do mesmo apoiador;
- contribuição recorrente;
- várias campanhas;
- organização que também possui vínculo no Programa de Oportunidades Fontes.

## 6. Gateway e segurança financeira

A plataforma usará uma camada desacoplada de pagamentos.

O banco do Instituto **não armazenará dados sensíveis de cartão**.

O gateway será responsável por tokenização e processamento. A plataforma armazenará apenas identificadores externos e informações necessárias ao negócio, por exemplo:

- provedor;
- customer id externo;
- payment/subscription id externo;
- valor;
- moeda;
- modalidade;
- status normalizado;
- timestamps;
- referência de campanha;
- vínculo com apoiador.

Ações como atualização de cartão devem ocorrer no ambiente seguro do provedor ou mecanismo equivalente suportado pelo gateway.

## 7. LGPD e controle de acesso

A fundação deverá considerar desde a primeira migration:

- RLS ativado nas tabelas com dados privados;
- princípio do menor privilégio;
- operações privilegiadas somente no servidor;
- usuários vendo apenas seus próprios dados e organizações autorizadas;
- empresas sem acesso público ou irrestrito a dados de alunos/jovens;
- registros de auditoria para ações administrativas e financeiras relevantes;
- consentimentos separados quando exigidos;
- preferências de comunicação promocional separadas de mensagens transacionais necessárias;
- documentos privados em storage não público quando contiverem dados pessoais.

## 8. Experiência do apoiador e impacto

A Área do Apoiador não deverá funcionar apenas como um extrato financeiro.

Ela deve aproximar contribuição, transparência e impacto, sem criar atribuição financeira falsa.

Pode apresentar:

- atividades e turmas em funcionamento;
- indicadores reais validados;
- equipamentos e melhorias institucionais;
- campanhas apoiadas;
- relatórios de impacto;
- prestação de contas;
- registros fotográficos autorizados;
- atualizações institucionais relevantes.

Não afirmar que uma contribuição específica financiou um item específico quando a contabilidade do Instituto não permitir essa rastreabilidade.

## 9. Navegação e acesso

No site público, `Entrar` poderá apresentar caminhos contextuais:

- Aluno;
- Empresa;
- Apoiador.

Esses caminhos levam ao mesmo sistema de autenticação. Após a autenticação, a plataforma identifica os vínculos disponíveis e direciona o usuário para a experiência adequada.

Quando o usuário possuir mais de um vínculo, a interface deverá permitir alternância clara entre os contextos autorizados.

## 10. Painel administrativo — acréscimos

O módulo de doações deverá permitir:

- consultar apoiadores pessoas e empresas;
- identificar recorrentes/mantenedores;
- visualizar doações e assinaturas;
- acompanhar status normalizados do gateway;
- conciliar Pix direto;
- consultar campanhas e destinações;
- exportar dados para prestação de contas;
- consultar histórico de comunicação;
- registrar observações administrativas sem expô-las ao apoiador;
- auditar alterações críticas.

## 11. Sequência de implementação revisada

1. **Fundação da plataforma** — Supabase exclusivo, autenticação, perfis, organizações, memberships, papéis, RLS, auditoria e contratos base.
2. **Site institucional** — preservar e expandir o design aprovado da Home nas demais páginas públicas.
3. **Cursos e inscrições** — catálogo dinâmico, turmas, grade, inscrições, responsáveis, consentimentos, status e notificações.
4. **Área do Aluno** — perfil, inscrições, matrículas, agenda, comunicados, documentos e histórico.
5. **Programa de Oportunidades** — empresas, Área da Empresa, oportunidades, encaminhamentos e indicadores.
6. **Doações + Área do Apoiador** — checkout, Pix direto, recorrência, webhooks, apoiadores, campanhas, histórico, gestão da recorrência, comprovantes e comunicações.
7. **Voluntariado e evolução da Área do Professor/Voluntário**.
8. **QA e lançamento** — segurança, LGPD, acessibilidade, responsividade, SEO, backups, monitoramento e treinamento.

## 12. Critérios de aceite adicionais

A versão de lançamento também deverá garantir que:

- doações não exijam conta antes do pagamento;
- uma contribuição possa ser posteriormente associada à conta correta sem duplicar o apoiador;
- pessoas e empresas sejam suportadas pelo mesmo domínio financeiro;
- recorrências tenham status sincronizado por webhook ou mecanismo equivalente;
- a Área do Apoiador mostre apenas dados pertencentes ao apoiador autenticado;
- usuários com múltiplos vínculos não precisem manter contas duplicadas;
- dados de cartão não sejam persistidos no banco do Instituto;
- operações financeiras críticas tenham trilha mínima de auditoria.

## 13. Decisões pendentes que não bloqueiam a fundação

- gateway final: Stripe, Mercado Pago ou equivalente;
- regras para emissão de recibos/comprovantes;
- nomenclatura pública de categorias de mantenedores, caso exista;
- valores sugeridos de contribuição;
- campanhas iniciais;
- dados oficiais do Pix;
- política de cancelamento/alteração de recorrência apresentada ao usuário;
- regras contábeis de identificação de doações e documentos fiscais/recibos.

Esses pontos devem permanecer configuráveis e não podem exigir reconstrução estrutural da plataforma.