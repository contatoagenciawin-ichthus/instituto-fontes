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

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel
- Supabase quando houver necessidade de persistência, autenticação ou funções de produto

## Arquitetura prevista

```text
src/
├── app/
│   ├── (site)/        # experiência institucional pública
│   ├── (admin)/       # futura operação interna, isolada do site público
│   ├── api/           # integrações e endpoints quando necessários
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
├── assets/
│   └── brand/
├── lib/
│   ├── supabase/
│   ├── validations/
│   └── utils/
├── actions/
└── types/
```

As pastas serão criadas conforme forem necessárias. Não adicionar infraestrutura vazia ou dependências sem uso real.

## Princípios técnicos

- usar Server Components por padrão;
- adicionar `use client` somente quando interação no navegador exigir;
- usar Server Actions para mutações ligadas à interface quando fizer sentido;
- usar Route Handlers para integrações e endpoints externos;
- manter site público e futura área administrativa no mesmo projeto, mas com fronteiras claras;
- não conectar o Supabase legado automaticamente;
- não reconstruir funções antes de o requisito estar confirmado;
- priorizar acessibilidade, SEO, performance e responsividade desde a base.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
