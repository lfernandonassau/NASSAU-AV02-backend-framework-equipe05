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
- **MySQL**
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
| **Usuário** | id, nome, email (unique), CPF (unique opcional), senha, papel (líder/colaborador) |
| **Projeto** | id, nome, descrição, líder_id |
| **Time** | id, nome, projeto_id |
| **Membro** | id, usuário_id, time_id, função |
| **Quadro (Kanban)** | id, projeto_id |
| **Coluna** | id, nome, posição, quadro_id |
| **Card (Tarefa)** | id, título, descrição, prioridade, status, responsável_id |
| **Comentário** | id, texto, autor_id, card_id |
| **Notificação** | id, mensagem, tipo, destino_id |

> Total de **8 entidades principais**, conforme exigência da disciplina.

---

## 🧩 Estrutura do Projeto
