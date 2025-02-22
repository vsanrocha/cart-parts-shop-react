# 🚗 Loja de Autopeças Online

Uma aplicação web moderna para venda de autopeças, desenvolvida com React e TypeScript.

## 📋 Sobre o Projeto

Este é um e-commerce especializado em autopeças, oferecendo uma interface intuitiva para busca e compra de peças automotivas. O projeto inclui funcionalidades como:

- 🔍 Busca de produtos em tempo real
- 🛒 Carrinho de compras
- 💳 Cálculo de descontos para pagamento via PIX
- 🚚 Identificação de produtos com entrega expressa
- 📱 Interface responsiva

## 🛠️ Tecnologias Principais

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **TanStack Query** - Gerenciamento de estado e cache para dados do servidor
- **Zustand** - Gerenciamento de estado global
- **Tailwind CSS** - Framework CSS utilitário
- **Vitest** - Framework de testes
- **MSW (Mock Service Worker)** - Interceptação e mock de requisições para testes
- **Testing Library** - Biblioteca para testes de componentes React

## ⚙️ Pré-requisitos

- Node.js (versão 16 ou superior)
- yarn

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/car-parts-shop-react.git
cd car-parts-shop-react
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```
Ajuste as variáveis no arquivo `.env` conforme necessário.

3. Instale as dependências:
```bash
yarn
```

4. Execute o projeto em modo de desenvolvimento:
```bash
yarn dev
```

5. Acesse a aplicação em `http://localhost:5173`

## 🧪 Executando os Testes

Para executar os testes unitários:
```bash
yarn test
```

Para executar os testes em modo watch:
```bash
yarn test:watch
```

## 📦 Build para Produção

Para gerar a build de produção:
```bash
yarn build
```

Os arquivos serão gerados no diretório `dist`.
