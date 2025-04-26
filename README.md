# Portfólio - Eduardo Brito | Desenvolvedor Front-End

[![Tecnologias](https://img.shields.io/badge/Tecnologias-Next.js%20%7C%20React%20%7C%20Tailwind-blue)](https://eduardobrito.dev)
[![Portfolio](https://img.shields.io/badge/Portfolio-eduardobrito.dev-blue)](https://eduardobrito.dev)

![Screenshot do Portfólio](https://i.postimg.cc/PNn8m0Wt/image.png)

## 📋 Sobre o Projeto

Este portfólio foi desenvolvido com Next.js, React e Tailwind CSS para mostrar meus projetos e habilidades como Desenvolvedor Front-End. O site apresenta uma interface moderna, interativa e totalmente responsiva, oferecendo uma ótima experiência ao usuário em qualquer dispositivo.

## ✨ Funcionalidades

- **Design Responsivo**: Adaptação perfeita para todos os tamanhos de tela
- **Animações Elegantes**: Transições de página suaves e efeitos de interação
- **Efeito de Partículas**: Background interativo na página inicial
- **Formulário de Contato**: Integração com API de email
- **Carregamento Otimizado**: Sistema de carregamento dinâmico de componentes
- **Navegação Fluida**: Experiência de navegação sem recarregamento completo da página

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React com SSR, SSG e otimizações de performance
- **React**: Biblioteca para construção de interfaces
- **TypeScript**: Tipagem estática para código mais seguro
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de formulários
- **Resend**: API para envio de emails
- **Lucide React**: Biblioteca de ícones
- **Particles.js**: Criação de efeitos de partículas

## 🚀 Estrutura do Projeto

```
src/
├── app/
│   ├── (pages)/             # Páginas do site
│   │   ├── about/           # Página Sobre
│   │   ├── contact/         # Página de Contato
│   │   └── projects/        # Página de Projetos
│   ├── api/                 # APIs do Next.js
│   │   └── send-email/      # API para envio de emails
│   ├── components/          # Componentes reutilizáveis
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── assets/                  # Imagens e recursos estáticos
└── styles/                  # Estilos adicionais
```

## 💻 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/portfolio.git
   cd portfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto e adicione:
   ```
   RESEND_API_KEY=sua_chave_api_resend
   ```

4. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse `http://localhost:3000` no navegador

## 🔧 Scripts Disponíveis

- `npm run dev`: Executa o projeto em modo de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run start`: Inicia o servidor com a versão compilada
- `npm run lint`: Executa a verificação de código com ESLint

## 📱 Recursos e Páginas

- **Página Inicial**: Apresentação com animação de digitação e efeito de partículas
- **Sobre**: Informações pessoais, habilidades técnicas e qualidades
- **Projetos**: Galeria de projetos desenvolvidos com descrição detalhada
- **Contato**: Formulário para envio de mensagens

## 📬 Contato

- **LinkedIn**: [eduardobritoo](https://linkedin.com/in/eduardobritoo)
- **GitHub**: [Duduubas](https://github.com/Duduubas)
- **Discord**: [Eduardo Brito](https://discord.com/users/522531030834610211)
- **Email**: contato@eduardobrito.dev

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.