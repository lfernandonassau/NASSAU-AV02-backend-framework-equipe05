# 🧭 Kodan — Sistema de Gerenciamento Kanban

![Node.js](https://img.shields.io/badge/Backend-Express.js-68a063?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?logo=mysql&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)

---

## 📘 Sobre o Projeto

**Kodan** é uma plataforma web desenvolvida para a disciplina de **Backend Framework**, com o objetivo de aplicar conceitos de **arquitetura MVC**, **APIs RESTful** e **integração entre front-end e back-end**.

A aplicação oferece um ambiente de **gestão de projetos em formato Kanban**, onde **líderes e colaboradores** podem criar projetos, organizar tarefas e acompanhar o progresso das equipes.

> 🎯 **Propósito:** facilitar a organização do fluxo de trabalho entre times e aplicar práticas reais de desenvolvimento web moderno com Express e React.

---

## ✨ Funcionalidades Principais

| Categoria | Descrição |
|------------|------------|
| **🪐 Landing Page** | Tela inicial com identidade visual do Kodan e botões para cadastro/login. |
| **👤 Cadastro e Login** | Sistema de autenticação com e-mail único, CPF e senha criptografada. |
| **📂 Criação de Projetos e Times** | Líderes podem criar projetos e adicionar membros. |
| **🧩 Painel Kanban** | Criação e movimentação de cards entre colunas (“A Fazer”, “Em Progresso”, “Concluído”). |
| **🪪 Papéis de Usuário** | Diferenciação visual e funcional entre **Líder 🛡️** e **Colaborador 👤**. |
| **🔄 Promoção de Membros** | Líder pode promover ou rebaixar colaboradores dentro do projeto. |
| **🗒️ Cards/Tarefas** | Cada card possui título, prioridade, descrição, status e responsável. |
| **📊 Relatórios de Progresso** | Acompanhamento visual do desempenho dos times. |
| **⚙️ Tela de Carregamento (Splash)** | Exibição do logotipo e inicialização das dependências principais. |

---

## 🧱 Tecnologias Utilizadas

### 🔹 Backend

- **Node.js + Express.js**
- **Prisma com MySQL**
- **bcrypt** para criptografia de senhas
- **Arquitetura MVC (Model–View–Controller)**

### 🔹 Frontend

- **React.js** (Vite)
- **Axios** para consumo da API
- **React Router DOM** para navegação entre telas
- **React Icons / Lucide** para ícones visuais

---

## 🗃️ Modelagem de Dados (Entidades)

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

## 🧩 Estrutura do Projeto
