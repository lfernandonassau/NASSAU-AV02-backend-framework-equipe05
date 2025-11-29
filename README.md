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
| **⚙️ Tela de Carregamento (Splash)** | *Exibição do logotipo e inicialização das dependências principais.* |

---

# 🗃️ Modelagem de Dados (Entidades)

| Entidade | Campos Principais |
|-----------|------------------|
| **Usuário** | id_usuário, foto perfil, nome, sobrenome, cpf, e-mail, senha, data de criação, data de atualização|
| **Cargo**  | id_usuário,  id_função|
| **Função** | id_cargo, cargo, id_painel|
| **Painel** | id_painel , id_relatório|
| **Relatório** | id_relatório, data de começo, data de fim, total de tarefas, tarefas pendentes, tarefas em andamento, tarefas concluidas, criação de estatística, id_painel, id_projetos|
| **Projetos** | id_projetos, título, subtítulo, id_relatório, id_coluna|
| **Coluna** | id_coluna, título, subtítulo, id_projetos, id_cartões|
| **Cartões (Tarefa)** | id_cartões,qta_menbros, título, subtítulo, prazo, data de criação, data de atualização, id_coluna|

> Total de **8 entidades principais**, conforme exigência da disciplina.

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

---

*Total de* ** Endpoints**, *conforme exigência da disciplina.*

---

# 🏃 Passos para Rodar o Sistema
*Esta seção atende ao critério de Organização do código e garante a execução funcional.*

## ⚙️ Configuração do Banco de Dados (.env)

*Crie o arquivo: Se ele ainda não existir, crie um arquivo chamado ".env" na raiz do seu projeto ( Na pasta backend em específico ).*

*Edite a URL de Conexão: Abra o arquivo .env e localize a variável DATABASE_URL. Você deve alterar o valor dessa URL para refletir o tipo de banco de dados que você está usando (PostgreSQL, MySQL, SQLite, etc.) e as credenciais que você configurou (usuário, senha, porta e nome do banco).*

#### DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO"

*Substitua USUARIO, SENHA, HOST, PORTA e NOME_DO_BANCO pelos valores criados no seu ambiente. Essa etapa é crucial para garantir a conexão e a persistência de dados no sistema.*

# 👾 Comandos

### 📁 Dentro da pasta backend


### - yarn workspace prisma migrate dev
### - yarn workspace prisma generate

# 📦 Instalação de Dependências

### *Após clonar o repositório e configurar o arquivo .env, o próximo passo é instalar todas as dependências necessárias para rodar o projeto*

### *Execute o comando a seguir no terminal, na pasta raiz do projeto:*

### - yarn install



# 🧩 Estrutura do Projeto
