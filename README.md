# HelpDesk API - Sistema de Gestão de Chamados

API REST desenvolvida como parte do **Projeto Integrador (3º Ciclo)** do Programa de Residência Tecnológica em Desenvolvimento de Software (**Bolsa Futuro Digital** - Curso de Desenvolvedor Back-End) no **IFRS - Campus Bento Gonçalves**.

## Sobre o Projeto

O **HelpDesk API** é o Back-End de um sistema para registro, organização e acompanhamento de chamados de suporte técnico interno. A aplicação permite gerenciar solicitantes, consultar categorias e técnicos responsáveis, além de controlar o ciclo de vida completo dos chamados (abertura, atribuição, atualização de status e resolução).

## Tecnologias Utilizadas

- **JavaScript (ES Modules)** - Linguagem base da aplicação
- **Node.js** - Ambiente de execução no servidor
- **Express.js** - Framework para construção da API REST
- **MySQL** - Banco de dados relacional
- **mysql2 (`mysql2/promise`)** - Driver de conexão assíncrona e pool de conexões com o MySQL
- **dotenv** - Gerenciamento de variáveis de ambiente

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v18 ou superior)
- **MySQL** (ou MariaDB)
- **Git**

## Configuração e Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/helintonpagel/helpdesk-api
   cd helpdesk-api
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Copie o arquivo `.env.example` para um novo arquivo chamado `.env` e preencha com as credenciais do seu banco de dados MySQL local:

   ```bash
   cp .env.example .env
   ```

   Exemplo de configuração no `.env`:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=helpdesk_db
   ```

4. **Crie o banco de dados e popule os dados iniciais (Seeds):**
   Execute os scripts SQL localizados na pasta `database/`:

   ```bash
   mysql -u root -p < database/helpdesk.sql
   mysql -u root -p helpdesk_db < database/helpdesk-seed.sql
   ```

5. **Inicie o servidor:**
   - Modo de desenvolvimento (com reinicialização automática via `--watch`):
     ```bash
     npm run dev
     ```
   - Modo de produção:
     ```bash
     npm start
     ```

   O servidor estará disponível em `http://localhost:3000`.

## Endpoints Disponíveis (Sprint 1)

| Método | Endpoint      | Descrição                                  |
| ------ | ------------- | ------------------------------------------ |
| `GET`  | `/categorias` | Lista todas as categorias de chamados      |
| `GET`  | `/tecnicos`   | Lista todos os técnicos ativos cadastrados |

> As requisições de teste podem ser executadas diretamente utilizando o arquivo `requests/api.rest` com a extensão **REST Client** no VS Code, ou importadas no Insomnia/Postman.

## Cronograma de Sprints

- [x] **Sprint 1:** Preparação do projeto, conexão com o banco de dados e consultas iniciais (`/categorias` e `/tecnicos`).
- [ ] **Sprint 2:** Gerenciamento completo (CRUD) de solicitantes (`/solicitantes`).
- [ ] **Sprint 3:** Criação e consulta de chamados (`/chamados`).
- [ ] **Sprint 4:** Atribuição de técnico, atualização de chamados e regras de negócio.
- [ ] **Sprint 5:** Exclusão e filtros de consulta de chamados.
- [ ] **Sprint 6:** Consulta resumida (relatório/estatísticas) e revisão final.
