# 🧭 Kodan — Sistema de Gerenciamento Kanban

![Node.js](https://img.shields.io/badge/Backend-Express.js-68a063?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?logo=mysql&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

---

# 📘 Sobre o Projeto

**Kodan** *é uma plataforma web desenvolvida para a disciplina de* **Backend Framework**, *com o objetivo de aplicar conceitos de* **arquitetura MVC**, **APIs RESTful** *e* **integração entre front-end e back-end**.

*A aplicação oferece um ambiente de* **gestão de projetos em formato Kanban**, *onde* **líderes e colaboradores** *podem criar projetos, organizar tarefas e acompanhar o progresso das equipes.*

> 🎯 **Propósito:** *facilitar a organização do fluxo de trabalho entre times e aplicar práticas reais de desenvolvimento web moderno com Express e React.*

---
# 👤 Integrantes do grupo

| Integrantes | Contato |
|-------------|---------|
| **🏦 ALÂNDERSON SANTOS LIMA DE QUEIROZ** | https://github.com/AlandersonSantos |
| **🖱️ DANIEL MANOEL SANTOS DA SILVA** | https://github.com/daniel2311x |
| **💻 RYAN RODRIGUES DOS SANTOS** | https://github.com/Ryan27r |
| **🖥️ RAFAEL ALEXANDRE SOARES LEITE GALVÃO** | https://github.com/rafxys |
| **🔍 SAMUEL DOUGLAS DOS SANTOS** | https://github.com/Sadousan |

---

# 🧱 Tecnologias Utilizadas

### 🔹 Backend

- **Node.js + Express.js**
- **Prisma com MySQL**
- **bcrypt** *para criptografia de senhas*
- **Arquitetura MVC (Model–View–Controller)**

### 🔹 Frontend

- **React.js** *(Vite)*
- **Axios** *para consumo da API*
- **React Router DOM** *para navegação entre telas*
- **React Icons / Lucide** *para ícones visuais*

---

# ✨ Funcionalidades Principais

| Categoria | Descrição |
|------------|------------|
| **🪐 Landing Page** | *Tela inicial com identidade visual do Kodan e botões para cadastro/login.* |
| **👤 Cadastro e Login** | *Sistema de autenticação com e-mail único, CPF e senha criptografada.* |
| **📂 Criação de Projetos e Times** | *Líderes podem criar projetos e adicionar membros.* |
| **🧩 Painel Kanban** | *Criação e movimentação de cards entre colunas (“A Fazer”, “Em Progresso”, “Concluído”).* |
| **🪪 Papéis de Usuário** | *Diferenciação visual e funcional entre* **Líder 🛡️** e **Colaborador 👤**. |
| **🔄 Promoção de Membros** | *Líder pode promover ou rebaixar colaboradores dentro do projeto.* |
| **🗒️ Cards/Tarefas** | *Cada card possui título, prioridade, descrição, status e responsável.* |
| **📊 Relatórios de Progresso** | *Acompanhamento visual do desempenho dos times.* |

---

# 🗃️ Modelagem de Dados (Entidades)

| Entidade | Campos Principais |
|-----------|------------------|
| **Usuário** | Id_Usuário, foto perfil, nome, sobrenome, cpf, e-mail, senha, data de criação, data de atualização, Senha resete tokens, projeto, convites, projetos propriedade, Id_Posição |
| **Posição do Usuário**  |Id_Posição, Id_Usuário,  Id_Cargo|
| **Cargo** | Id_Cargo, cargo, , Id_Painel|
| **Painel** | Id_Painel, Id_Cargo, Id_Relatório|
| **Relatório** | Id_Relatório, data de começo, data de fim, total de tarefas, tarefas pendentes, tarefas em andamento, tarefas concluidas, criação de estatística, Id_Painel, Id_Projetos|
| **Projetos** | Id_projetos, título, subtítulo, usuário, convites, Id_Relatório, Id_Coluna|
| **Coluna** | Id_Coluna, título, subtítulo, status, Id_Projetos, Id_Cartões|
| **Cartões (Tarefa)** | Id_Cartões,qta_menbros, título, subtítulo, prazo, data de criação, data de atualização, Id_Coluna|
| **Convite para projeto** | Id_ConvitProjeto, id_projetos, email, status, data de criação, data do pedido aceito, id_usuário|

---

# ➡️ Endpoints (ou Ponto de Extremidade)

*No contexto de APIs (Interfaces de Programação de Aplicações) Web, um endpoint é o URL específico (URI) onde um serviço pode ser acessado, e é para onde as solicitações do cliente (como um navegador ou um aplicativo móvel) são enviadas.*

---
### 👤 Rota Usuário (/users)

| Método HTTP | Endpoint | Descrição |
|-------------|----------|-----------|
| POST | /auth/user | *Cria uma nova conta de usuário.* |
| GET | /user | *Busca e lista todos os usuários* |
| PATCH | /user/:id | *Atualiza parcialmente os dados de um usuário.* |
| DELETE | /user/:id | *Remove (deleta) um usuário específico pelo ID.* |



### 👤 Rota  Posição do Usuário (/userposition)

| Método HTTP | Endpoint | Descrição |
|-------------|----------|-----------|
| POST | /userposition | *Cria uma nova posição do usuário.* |
| GET | /userposition/:id | *Busca e lista todas as posições do usuário* |

### 👤 Rota Cargo (/job)

| Método HTTP | Endpoint | Descrição |
|-------------|----------|-----------|
| POST | /job | *Cria uma novo cargo para do usuário.* |
| GET | /job | *Busca e lista todos os cargos do usuário* |
| PATCH | /job/:id | *Atualiza parcialmente os dados do cargo do usuário.* |

### 👤 Rota Relatório (/relatory)

| Método HTTP | Endpoint | Descrição |
|-------------|----------|-----------|
| GET | /relatory | *Busca e lista todos os relatórios do usuário* |
| PATCH | /relatory/:id | *Atualiza parcialmente os dados do relatório.* |

### 👤 Rota Projeto (/projects)

| Método HTTP | Endpoint | Descrição |
|-------------|----------|-----------|
| POST | /projetcs | *Cria uma novo projeto.* |
| GET | /projects | *Busca e lista todos os projetos criado pelo usuário* |
| PATCH | /projects/:id | *Atualiza parcialmente os dados do projeto.* |
| DELETE | /projects/:id | *Remove (deleta) um projeto específico pelo ID.* |

### 👤 Rota Coluna (/column)

| Método HTTP | Endpoint | Descrição |
|-------------|----------|-----------|
| POST | /column | *Cria uma nova coluna no painel.* |
| GET | /column | *Busca e lista todas as colunas criadas pelo usuário* |
| DELETE | /column/:id  | *Remove (deleta) uma coluna específica pelo ID.* |

### 👤 Rota Cartões (/cards)

| Método HTTP | Endpoint | Descrição |
|-------------|----------|-----------|
| POST | /cards | *Cria um novo cartão na coluna.* |
| GET | /cards | *Busca e lista todos os cartões criados pelo usuário* |
| PATCH | /cards/:id | *Atualiza parcialmente os dados do cartão.* |
| DELET | /cards/:id | *Remove (deleta) um cartão específica pelo ID.* |

*Total de 30 Endpoint*

---

# 🏃 Passos para Rodar o Sistema
*Esta seção atende ao critério de Organização do código e garante a execução funcional.*

## ⚙️ Configuração do Banco de Dados (.env)

*Crie o arquivo: Se ele ainda não existir, crie um arquivo chamado ".env" na raiz do seu projeto ( Na pasta backend em específico ).*

*Edite a URL de Conexão: Abra o arquivo .env e localize a variável DATABASE_URL. Você deve alterar o valor dessa URL para refletir o tipo de banco de dados que você está usando (PostgreSQL, MySQL, SQLite, etc.) e as credenciais que você configurou (usuário, senha, porta e nome do banco).*

#### DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO"

*Substitua USUARIO, SENHA, HOST, PORTA e NOME_DO_BANCO pelos valores criados no seu ambiente. Essa etapa é crucial para garantir a conexão e a persistência de dados no sistema.*

# 📦 Instalação de Dependências


### *Execute o comando a seguir no terminal, na pasta raiz do projeto:*

| Comando | Descrição |
|---------|-----------|
| **yarn install** | *Após clonar o repositório e configurar o arquivo .env, o próximo passo é instalar todas as dependências necessárias para rodar o projeto*

# 👾 Comandos

### 📁 Dentro da pasta backend ()

| Comando | Descrição |
|---------|-------------|
| **yarn workspace prisma migrate dev** | *Define a Estrutura: Este comando garante que o banco de dados esteja com o esquema correto (tabelas, colunas, relacionamentos) que você desenhou no schema.prisma.* |
| **yarn workspace prisma generate** | *Cria o Código: Após o banco de dados estar pronto, este comando lê o esquema finalizado e gera o Prisma Client (as classes e métodos) que o seu código JavaScript/TypeScript usará para interagir com a nova estrutura.* |

# 🚀 Como Rodar o Sistema

### Para rodar o sistema em modo de desenvolvimento:

| Comando | Descrição |
|---------|-------------|
| **yarn dev** | *O backend estará rodando em uma porta http://localhost:3000 e o frontend em outra http://localhost:5173 , mas o frontend conseguirá fazer requisições para o backend.* |
---
