# Instituto Fontes — Roadmap de Produto e Mockups v1

## 1. Objetivo desta fase

Consolidar visualmente e funcionalmente a futura plataforma antes da implementação das interfaces de produto.

A Home atual permanece como referência visual aprovada e não será redesenhada nesta fase. Os novos mockups devem traduzir a mesma identidade para páginas públicas, áreas autenticadas e painel administrativo, sem transformar o Instituto em um SaaS genérico ou em uma interface corporativa fria.

Esta fase é **mockup-first**:

- primeiro aprovamos arquitetura de informação, fluxos, hierarquia, estados e linguagem visual;
- depois codificamos as interfaces aprovadas;
- a fundação técnica invisível pode evoluir em paralelo, desde que não force decisões visuais ainda não aprovadas.

## 2. Base visual obrigatória

Os mockups devem herdar diretamente o sistema já aprovado na Home:

- Sora em títulos e chamadas;
- DM Sans em textos e interface;
- azul Fontes `#007BFF` como cor principal;
- navy `#0F2D5B` como apoio;
- off-white `#F8F9FA` como base predominante;
- cinza `#E6EAF0` para divisões e superfícies secundárias;
- amarelo `#FFB703` apenas como pontuação;
- preto `#1A1A1A` para texto;
- fotografia real como protagonista;
- duotone azul quando útil;
- ondas/patterns derivados da marca com disciplina;
- composições editoriais, recortes e movimento coerentes com “Fontes em Movimento”;
- linguagem jovem, não infantil;
- tecnologia visualmente discreta.

A experiência autenticada e o painel administrativo devem parecer extensões do Instituto, não produtos independentes.

## 3. Princípio de produto para os mockups

Toda tela deve responder a quatro perguntas:

1. Quem está usando?
2. O que essa pessoa precisa resolver aqui?
3. Qual é a próxima ação principal?
4. Quais dados/estados o sistema precisa representar para a tela ser realista?

Não criar telas apenas para “preencher o sistema”. Cada módulo precisa corresponder a uma jornada aprovada.

## 4. Escopo de mockups

### Pacote 01 — Cursos + inscrição pública — prioridade máxima

Objetivo: validar o primeiro domínio operacional completo.

Telas:

1. Página pública “Cursos e Atividades”.
2. Filtros por frente/categoria, dia, faixa etária e status.
3. Grade semanal complementar.
4. Card de curso/turma em diferentes estados.
5. Página individual de curso.
6. Seleção de turma/horário quando houver mais de uma opção.
7. Inscrição — identificação do aluno.
8. Inscrição — fluxo para maior de idade.
9. Inscrição — dados do responsável para menor de idade.
10. Inscrição — consentimentos e autorizações.
11. Revisão dos dados.
12. Confirmação/protocolo.
13. Estado “lista de espera”.
14. Estado “inscrições encerradas”.

Estados obrigatórios a representar:

- inscrições abertas;
- últimas vagas;
- lista de espera;
- inscrições encerradas;
- turma em andamento;
- turma inativa.

### Pacote 02 — Painel administrativo: cursos, inscrições e mídia

Objetivo: validar a operação diária da equipe do Instituto.

Telas:

1. Dashboard administrativo.
2. Lista de cursos.
3. Criar/editar curso.
4. Lista de turmas/horários.
5. Criar/editar turma.
6. Grade semanal administrativa.
7. Lista de inscrições.
8. Detalhe de inscrição.
9. Alteração de status.
10. Ações em lote quando seguras.
11. Lista de alunos e responsáveis.
12. Perfil administrativo do aluno.
13. Biblioteca de mídia.
14. Upload em lote de fotos.
15. Criação/edição de álbum.
16. Associação de mídia a curso/evento/campanha/página.
17. Estado de autorização de imagem.
18. Estado de limite/erro de upload.

Decisões visuais importantes:

- painel claro e editorial, não escuro;
- navegação lateral ou híbrida com baixo ruído;
- densidade suficiente para secretaria operar, sem parecer ERP legado;
- ações críticas visíveis e estados inequívocos;
- fotos integradas como conteúdo real, não apenas miniaturas técnicas.

### Pacote 03 — Área do Aluno

Objetivo: tornar útil o relacionamento contínuo do aluno com o Instituto.

Telas:

1. Acesso/login.
2. Início/resumo.
3. Minhas inscrições.
4. Detalhe de inscrição e status.
5. Meus cursos.
6. Próximas aulas/agenda.
7. Comunicados.
8. Documentos e autorizações.
9. Oportunidades compatíveis.
10. Histórico.
11. Perfil do aluno.
12. Dados do responsável quando aplicável.
13. Ajuda/WhatsApp.

Para menor de idade, a experiência não deve expor dados ou controles inadequados; o vínculo com o responsável deve ser tratado como parte real do produto.

### Pacote 04 — Programa de Oportunidades + Área da Empresa

Telas públicas:

1. Programa de Oportunidades Fontes.
2. Jornada para empresas.
3. Cadastro de empresa.

Área autenticada:

4. Início da empresa.
5. Perfil/parceria.
6. Lista de oportunidades.
7. Criar oportunidade.
8. Editar/encerrar oportunidade.
9. Encaminhamentos.
10. Histórico.
11. Apoio institucional.

Painel administrativo:

12. Empresas cadastradas.
13. Aprovação de empresa.
14. Oportunidades recebidas.
15. Revisão/publicação.
16. Encaminhamento de jovem.
17. Acompanhamento de status.

Regra central: empresas nunca recebem um catálogo irrestrito de menores/jovens. Os mockups devem representar encaminhamento controlado pelo Instituto.

### Pacote 05 — Doações + Área do Apoiador

Telas públicas:

1. Contribua.
2. Alternância entre contribuição única e mensal.
3. Valores sugeridos + outro valor.
4. Pix direto.
5. Checkout/encaminhamento ao gateway.
6. Confirmação e agradecimento.
7. Convite pós-doação para acessar a Área do Apoiador.

Área do Apoiador:

8. Início.
9. Minhas contribuições.
10. Minha contribuição mensal.
11. Gestão do pagamento via gateway.
12. Comprovantes.
13. Campanhas apoiadas.
14. Impacto e transparência.
15. Perfil.
16. Preferências de comunicação.
17. Ajuda.

O login não será obrigatório antes da doação.

### Pacote 06 — Eventos, impacto, transparência e mídia pública

Telas:

1. Agenda de eventos.
2. Evento individual.
3. RSVP quando habilitado.
4. Arquivo de eventos realizados.
5. Galeria pública/álbum autorizado.
6. Impacto.
7. Transparência.
8. Relatórios/documentos.

### Pacote 07 — Presença / professor-voluntário — escopo condicional

Modelar agora; decidir a implementação visual após validação dos pacotes anteriores.

Mockups mínimos, se aprovado:

1. Seleção de turma.
2. Lista de aulas/encontros.
3. Chamada mobile da aula atual.
4. Presente/ausente/justificado.
5. Resumo de frequência.
6. Visão administrativa.

Evitar nesta fase:

- QR Code;
- biometria;
- reconhecimento facial;
- aplicativo nativo;
- automações complexas de frequência.

## 5. Fluxos que precisam ser aprovados antes da implementação visual final

### 5.1 Inscrição em curso

Curso → turma → validação de idade/status → dados do aluno → responsável quando menor → consentimentos → revisão → protocolo → análise interna → aprovação/lista de espera → matrícula.

### 5.2 Atualização de curso pela equipe

Painel → curso → editar conteúdo geral → editar/adicionar turma → capacidade/status → publicar → alteração refletida no site/grade/inscrição.

### 5.3 Gestão de inscrição

Painel → lista de inscrições → filtros → detalhe → análise → observação interna → mudança de status → histórico → comunicação transacional.

### 5.4 Upload de fotos

Painel → mídia → selecionar/arrastar arquivos → validação de formato/peso/quantidade → processamento → álbum → metadados → autorização → associação → publicação.

### 5.5 Doação e ativação da Área do Apoiador

Contribua → modalidade/valor → pagamento → confirmação → associação por e-mail → convite de acesso → Área do Apoiador.

### 5.6 Empresa e oportunidade

Cadastro da empresa → análise → aprovação → acesso → cadastro da oportunidade → revisão do Instituto → publicação/indicação → encaminhamento → atualização de status.

## 6. Biblioteca de mídia — regras a representar nos mockups

A Biblioteca de Mídia deve ser simples para fotógrafos e segura para o Instituto.

Parâmetros iniciais de produto, configuráveis antes da implementação:

- upload múltiplo;
- até 20 arquivos por lote como referência inicial;
- até 20 MB por arquivo como referência inicial;
- limite de publicação por álbum configurável;
- recusa de RAW e formatos não destinados à web;
- processamento/otimização automática;
- indicador de progresso;
- aviso de limite excedido;
- capa do álbum;
- ordenação;
- título/legenda opcional;
- associação a curso, evento, impacto, campanha ou página;
- estado de autorização de uso da imagem;
- bloqueio de publicação pública quando necessário;
- remoção de metadados sensíveis na versão pública quando aplicável.

Os limites exatos de quantidade, peso e armazenamento serão validados antes da implementação.

## 7. Grade e presença

### Grade

A grade deve ser gerada a partir de cursos/turmas cadastrados. Não haverá uma grade paralela mantida manualmente.

A mesma base alimentará:

- página pública de cursos;
- grade semanal pública;
- agenda do aluno;
- visão administrativa;
- futura área do professor/voluntário.

### Presença

A arquitetura deve prever:

- turma;
- encontro/aula;
- matrícula;
- registro de presença.

A interface de presença poderá ser adiada sem refazer o modelo de dados.

## 8. MVP visual para aprovação dos fundadores

Para não apresentar dezenas de telas sem contexto, o primeiro ciclo de aprovação deverá conter um conjunto reduzido, porém representativo:

1. Cursos — desktop.
2. Cursos — mobile.
3. Curso individual.
4. Inscrição de menor — etapa de responsável/consentimento.
5. Painel — dashboard.
6. Painel — inscrições.
7. Painel — curso/turma.
8. Painel — biblioteca de mídia.
9. Área do Aluno — início.
10. Área da Empresa — início.
11. Área do Apoiador — início.
12. Contribua — escolha de modalidade/valor.

Após aprovação desse sistema-base, as telas derivadas podem ser produzidas com menor risco de retrabalho.

## 9. Critérios de aceite dos mockups

Um pacote só será considerado aprovado quando:

- desktop e mobile essenciais estiverem coerentes;
- a hierarquia de informação estiver clara;
- o CTA principal estiver inequívoco;
- estados vazios, carregando, erro e sucesso relevantes tiverem solução prevista;
- status de negócio estiverem visíveis sem depender apenas de cor;
- nenhum dado sensível estiver sendo exposto de forma inadequada;
- a interface estiver coerente com a Home aprovada;
- a tela puder ser implementada com o modelo de dados previsto sem “mágica” visual;
- textos não usem jargão técnico para usuários finais;
- acessibilidade básica tenha sido considerada desde o layout.

## 10. O que não será codificado nesta fase

Até a aprovação do sistema visual dos módulos prioritários, não serão implementadas interfaces finais de:

- Área do Aluno;
- Área da Empresa;
- Área do Apoiador;
- painel administrativo;
- biblioteca de mídia;
- presença.

A Home aprovada permanece preservada.

A fundação técnica poderá avançar apenas em estruturas desacopladas da interface final: contratos, autenticação, autorização, modelo de dados, migrations, storage e APIs.

## 11. Ordem operacional desta fase

1. Congelar Home como baseline visual.
2. Aprovar este inventário de telas e fluxos.
3. Produzir o MVP visual de 12 telas representativas.
4. Ajustar o sistema de produto/UX a partir da revisão.
5. Expandir para telas derivadas.
6. Fechar escopo de lançamento e fase 2.
7. Implementar as interfaces aprovadas sobre a fundação técnica.

## 12. Decisões que permanecem configuráveis

Não bloquear mockups por falta destas respostas, mas identificá-las visualmente como dados configuráveis:

- capacidade por turma;
- critério de aprovação/matrícula;
- professor/responsável por turma;
- ciclos/datas de cada turma;
- faixa etária do Vôlei;
- política de certificados;
- eventos com ou sem RSVP;
- gateway final;
- dados oficiais do Pix;
- regras detalhadas de recibos/comprovantes;
- limites finais da biblioteca de mídia;
- critérios finais do Programa de Oportunidades;
- decisão de lançar ou adiar a interface de presença.
