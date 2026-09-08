# Instituto Fontes

Novo site institucional e base digital do Instituto Fontes.

## Regra de origem

Este repositório foi criado do zero em 06/09/2026 para substituir o projeto legado.

**Nenhum conteúdo, componente, dado, número, texto, curso, depoimento, projeto ou estrutura pública do repositório anterior deve ser reaproveitado por padrão.**

A fonte de verdade deste projeto é:

1. decisões aprovadas no projeto Instituto Fontes;
2. informações confirmadas diretamente pelo Instituto/usuário;
3. materiais oficiais posteriormente fornecidos.

Assets oficiais só devem ser adicionados quando identificados e confirmados como pertencentes à identidade atual.

## Direção

- Institucional contemporâneo, jovem, humano e editorial
- Foco estratégico em adolescentes e jovens
- Formação, desenvolvimento e oportunidades
- Identidade visual: Fontes em Movimento
- Tipografia: Sora + DM Sans
- Base cromática: azul Fontes, off-white, navy discreto e amarelo pontual
- Fotografia como protagonista

A Home atual é o padrão visual consolidado da plataforma e deve ser preservada contra regressões durante a evolução técnica.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel para a experiência web
- Cloudflare Workers para a camada operacional/API
- Cloudflare D1 para persistência relacional
- Cloudflare R2 para mídia e documentos
- Cloudflare Images/Transformations para otimização e entrega de imagens

## Arquitetura prevista

```text
src/
├── app/
│   ├── (site)/        # experiência institucional pública
│   ├── (portal)/      # áreas autenticadas: aluno, empresa e apoiador
│   ├── (admin)/       # operação interna
│   ├── api/           # endpoints locais quando necessários
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
├── lib/
│   ├── auth/
│   ├── cloudflare/
│   ├── policy/
│   ├── validations/
│   └── utils/
├── actions/
└── types/

cloudflare/
├── worker/            # API e operações privilegiadas
├── migrations/        # schema D1
└── scripts/           # manutenção, exportação e tarefas técnicas
```

As pastas serão criadas conforme forem necessárias. Não adicionar infraestrutura vazia ou dependências sem uso real.

## Princípios técnicos

- usar Server Components por padrão;
- adicionar `use client` somente quando interação no navegador exigir;
- manter site público, portal autenticado e administração no mesmo produto, com fronteiras claras;
- o navegador nunca acessa D1 diretamente;
- operações privadas passam por autenticação e Policy Layer no servidor;
- credenciais privilegiadas não são expostas ao cliente;
- identidade única por usuário, permitindo múltiplos vínculos com o Instituto;
- cursos e turmas são entidades distintas;
- grade, inscrições, mídia, oportunidades e doações devem ser administráveis sem editar código;
- imagens administrativas usam R2 com limites de quantidade/peso e publicação controlada;
- presença será prevista no modelo desde a fundação, mesmo que a interface seja habilitada posteriormente;
- priorizar LGPD, auditoria, acessibilidade, SEO, performance e responsividade desde a base;
- documentar recuperação, backups e transferência de operação ao Instituto.

## Documentação de arquitetura

- `docs/platform-architecture-v1.1.md` — decisão de Área do Apoiador e identidade unificada;
- `docs/platform-architecture-v1.2-cloudflare.md` — direção atual: Cloudflare, mídia, cursos, grade, inscrições e presença.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
