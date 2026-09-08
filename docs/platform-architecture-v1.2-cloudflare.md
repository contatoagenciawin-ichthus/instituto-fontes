# Instituto Fontes — Arquitetura da Plataforma v1.2

Esta versão substitui a direção técnica de infraestrutura da v1.1 e incorpora quatro decisões adicionais:

1. a infraestrutura operacional deve privilegiar recursos Cloudflare, evitando dependência de um Supabase gratuito sujeito a políticas de inatividade;
2. o Instituto terá uma biblioteca de mídia própria, simples para administradores e controlada por limites de peso e quantidade;
3. cursos, turmas, grade e inscrições serão dados operacionais administráveis;
4. presença será prevista no modelo desde a fundação, mas sua interface poderá ser adiada se não justificar o esforço no lançamento.

A Home aprovada permanece preservada. Esta mudança é de arquitetura e produto, não de direção visual.

## 1. Princípio de propriedade

A infraestrutura de produção deverá, preferencialmente, existir em conta Cloudflare pertencente ao Instituto Fontes ou sob titularidade institucional dos fundadores, com a equipe de desenvolvimento recebendo acesso administrativo/técnico.

O objetivo é garantir continuidade operacional mesmo que, futuramente, o Instituto deixe de depender da equipe atual.

O repositório e os serviços devem permanecer documentados de forma que uma nova equipe consiga assumir o produto.

## 2. Arquitetura proposta

### 2.1 Frontend

- Next.js / App Router;
- Vercel permanece como hospedagem do site e das experiências web enquanto continuar adequada;
- nenhuma mudança de DNS ou e-mail é necessária apenas para adotar o backend Cloudflare.

### 2.2 Backend operacional

- Cloudflare Workers como camada de API e operações privilegiadas;
- Cloudflare D1 como banco relacional principal da plataforma;
- Cloudflare R2 para arquivos e imagens;
- Cloudflare Images / Transformations para otimização e entrega de imagens públicas;
- filas, workflows ou mecanismos assíncronos adicionais somente quando houver necessidade concreta.

O navegador não terá acesso direto ao banco. Todas as operações privadas passam por endpoints server-side autenticados.

## 3. Autenticação, autorização e segurança

A plataforma continuará adotando identidade única por usuário, com múltiplos vínculos acumuláveis:

- aluno;
- responsável;
- representante de empresa;
- apoiador/mantenedor;
- voluntário/professor;
- administrador interno.

Como D1 não possui o mesmo mecanismo de Row Level Security do PostgreSQL/Supabase, a segurança não será baseada em acesso direto do navegador ao banco.

A regra será:

1. usuário autentica;
2. a sessão é validada no servidor;
3. o Worker resolve perfil, memberships, vínculos e permissões;
4. uma Policy Layer autoriza ou rejeita a operação;
5. somente então a consulta ou mutação é executada no D1;
6. ações sensíveis produzem registro de auditoria.

Credenciais de D1, R2, gateway ou integrações nunca serão expostas ao navegador.

## 4. Entidades transversais de identidade

Conceitos mínimos:

- `users`;
- `profiles`;
- `guardians` / responsáveis;
- `organizations`;
- `organization_memberships`;
- `user_roles` ou mecanismo equivalente;
- `supporters`;
- `communication_preferences`;
- `audit_log`.

Um usuário poderá acumular vínculos sem criar contas duplicadas.

## 5. Cursos, turmas e grade

Curso e turma são entidades diferentes.

### Curso

Armazena conteúdo relativamente estável:

- nome;
- slug;
- descrição curta;
- descrição completa;
- território/categoria;
- imagem de capa;
- objetivos;
- requisitos gerais;
- materiais fornecidos;
- status editorial.

### Turma

Armazena a operação concreta:

- curso;
- ciclo/período;
- dia da semana;
- horário inicial e final;
- local;
- idade mínima/máxima ou regra especial;
- capacidade;
- professor/voluntário responsável quando definido;
- situação da turma;
- situação das inscrições;
- data de início/fim quando aplicável.

A mesma base de turmas alimentará:

- página pública de Cursos;
- grade semanal pública;
- página individual de curso;
- formulário de inscrição;
- agenda do aluno;
- agenda administrativa;
- futura agenda do professor.

A equipe poderá criar, editar, duplicar, pausar e encerrar turmas sem alterar código.

## 6. Inscrições e matrículas

A inscrição será vinculada a uma turma específica.

Estados mínimos sugeridos:

- recebida;
- em análise;
- aprovada;
- lista de espera;
- matriculada;
- não aprovada;
- cancelada/desistente.

O painel administrativo deverá permitir:

- filtros por curso, turma, período e status;
- busca por aluno/responsável;
- visualização dos dados necessários à análise;
- alteração individual ou em lote quando seguro;
- observações internas;
- histórico de alterações;
- exportação;
- lista de espera;
- abertura/fechamento de inscrições;
- comunicação transacional em mudanças relevantes de status.

Para menores, os vínculos com responsáveis e consentimentos serão obrigatórios conforme as regras aprovadas pelo Instituto.

## 7. Grade de aulas

A grade não será uma imagem fixa.

Ela será uma projeção das turmas cadastradas.

A plataforma poderá oferecer três visualizações a partir dos mesmos dados:

1. grade pública semanal;
2. agenda individual do aluno matriculado;
3. grade administrativa por dia, curso, local e professor.

Conflitos de horário/local poderão futuramente gerar alertas administrativos.

## 8. Presença — prevista agora, interface depois

Presença não precisa bloquear o lançamento, mas o modelo deve nascer preparado para ela.

Entidades previstas:

- `class_sessions`: cada encontro/aula efetivamente realizado;
- `attendance_records`: vínculo entre matrícula e encontro.

Status sugeridos:

- presente;
- ausente;
- falta justificada;
- aula cancelada quando aplicável.

A primeira interface, se habilitada, deve ser simples e mobile-first: professor ou administrador abre a turma do dia e marca presença na lista de alunos.

Não implementar QR Code, biometria ou automações complexas no primeiro momento.

## 9. Biblioteca de fotos e mídia

O escopo passa a incluir uma área administrativa de mídia, além das galerias públicas já previstas.

Objetivo: permitir que os administradores, que possuem boa produção fotográfica, alimentem o site sem depender do desenvolvedor e sem transformar a plataforma em um repositório fotográfico ilimitado.

### 9.1 Armazenamento

- originais/master otimizados em bucket R2 privado;
- metadados no D1;
- variantes públicas entregues por Cloudflare Images/Transformations;
- URLs de upload temporárias e assinadas;
- nenhum token de R2 no navegador.

### 9.2 Experiência administrativa

- arrastar e soltar;
- upload múltiplo;
- progresso por arquivo;
- criação de álbum/galeria;
- título e legenda opcional;
- texto alternativo;
- seleção de capa;
- reordenação;
- rascunho/publicado/arquivado;
- associação a curso, evento, página ou campanha;
- exclusão controlada;
- busca e filtros.

### 9.3 Limites iniciais recomendados

Os limites devem ser configuráveis, não hard-coded.

Valores iniciais sugeridos:

- até 20 arquivos por lote;
- até 20 MB recebidos por arquivo antes da otimização;
- o master usado pelo site deve ser redimensionado/comprimido antes ou durante a ingestão, evitando guardar arquivos fotográficos gigantes apenas para uso web;
- até 60 imagens publicáveis por álbum/galeria;
- quota mensal de upload configurável e visível aos administradores;
- formatos iniciais: JPEG, PNG e WebP.

A biblioteca do site não será tratada como backup do acervo fotográfico original dos administradores.

### 9.4 Privacidade e menores

Cada mídia deverá permitir registrar, no mínimo:

- se contém menores identificáveis;
- situação da autorização de publicação;
- responsável administrativo pela publicação;
- data da publicação;
- contexto de uso.

Conteúdo com autorização pendente/restrita não deve ser publicável.

Metadados desnecessários, especialmente geolocalização/EXIF de arquivos públicos, devem ser removidos ou não expostos na versão entregue ao site.

## 10. Área do Apoiador

Mantém-se a decisão da v1.1:

- doação não exige login antes do pagamento;
- o apoiador pode ativar sua conta posteriormente;
- Mantenedor é categoria/status de relacionamento, não uma conta separada;
- pessoas e empresas compartilham o mesmo domínio financeiro;
- recorrências, transações, campanhas e comprovantes são entidades separadas;
- dados de cartão permanecem exclusivamente no gateway.

## 11. Área da Empresa

Empresas são organizações com usuários membros autorizados.

A mesma organização poderá:

- publicar oportunidades;
- receber jovens encaminhados conforme as regras do Instituto;
- apoiar financeiramente;
- ser mantenedora;
- doar materiais;
- patrocinar projetos;
- oferecer mentoria.

## 12. Painel administrativo consolidado

Módulos previstos:

- Dashboard;
- Cursos;
- Turmas e Grade;
- Inscrições;
- Alunos e Responsáveis;
- Matrículas;
- Presença (quando habilitada);
- Empresas;
- Oportunidades;
- Apoiadores e Doações;
- Campanhas;
- Voluntários;
- Eventos;
- Biblioteca de Mídia;
- Impacto;
- Conteúdo;
- Transparência;
- Comunicações;
- Usuários e Permissões;
- Auditoria.

## 13. Sequência de implementação revisada

1. **Fundação Cloudflare** — D1, Workers, autenticação, Policy Layer, perfis, organizações, memberships, papéis e auditoria.
2. **Cursos, Turmas e Grade** — catálogo dinâmico, grade semanal e administração.
3. **Inscrições e Matrículas** — maior/menor, responsáveis, consentimentos, status, lista de espera e comunicações.
4. **Biblioteca de Mídia** — R2, upload controlado, otimização, galerias e autorização de publicação.
5. **Área do Aluno** — perfil, inscrições, matrículas, agenda, comunicados e documentos.
6. **Programa de Oportunidades / Área da Empresa**.
7. **Doações + Área do Apoiador**.
8. **Voluntariado e Área do Professor/Voluntário**.
9. **Presença** — ativar a interface se a operação do Instituto justificar; estrutura de dados já existente.
10. **QA e lançamento** — segurança, LGPD, acessibilidade, SEO, backups, monitoramento e treinamento.

As etapas técnicas poderão sobrepor-se quando não houver risco de retrabalho.

## 14. Backup e continuidade

- D1 deve ter estratégia de recuperação point-in-time e exportações periódicas de longo prazo;
- exportações do banco podem ser armazenadas no R2 em rotina controlada;
- R2 não substitui um processo de retenção e recuperação documentado;
- recursos, credenciais, domínios e permissões devem ser inventariados para transferência futura ao Instituto;
- a aplicação deve conseguir ser mantida por outra equipe sem dependência de conhecimento informal.

## 15. Critérios de aceite adicionais

Além dos critérios anteriores:

- a Home aprovada não pode sofrer regressão visual durante a implantação da plataforma;
- o browser não acessa D1 diretamente;
- autorização é validada no servidor antes de qualquer operação privada;
- cursos e turmas são alteráveis pelo painel;
- grade pública é derivada do banco;
- inscrições possuem histórico de status;
- biblioteca de mídia limita peso/quantidade e otimiza imagens;
- mídia com menores exige controle explícito de autorização de publicação;
- presença pode ser ativada sem remodelar inscrições e matrículas;
- banco e mídia possuem rotina de recuperação/backup documentada;
- recursos de infraestrutura devem poder ser transferidos/operados pelo Instituto.
