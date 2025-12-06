# 🐾 Petshop Amigo Fiel - Fase 2

Este repositório contém a implementação da **Fase 2** do projeto da disciplina **Fundamentos de Sistemas Web**. O objetivo desta etapa foi evoluir a estrutura estática da Fase 1, transformando-a em uma aplicação web dinâmica, responsiva e interativa.

## 🚀 Funcionalidades Implementadas

Atendendo aos requisitos da Fase 2, foram adicionados:

* **Interface Responsiva (Bootstrap 5):**
    * Uso do framework Bootstrap para garantir que o site funcione bem em computadores e celulares.
    * Menu de navegação responsivo (Navbar).
    * Sistema de Grid para organização dos cards de serviços.

* **Interatividade e Dinamismo:**
    * **Carrossel de Imagens:** Banner rotativo na página inicial destacando os diferenciais do Petshop.
    * **Função Temporal (JavaScript):** Exibição de uma mensagem de saudação personalizada ("Bom dia", "Boa tarde", "Boa noite") na página de cadastro, baseada no horário atual do usuário.

* **Formulário de Cadastro e Agendamento:**
    * Coleta de dados do tutor (Nome, CPF, Endereço, Contato).
    * Coleta de dados do Pet (Nome, Raça, Idade).
    * Seleção de serviços (Banho, Tosa) e método de transporte (Tele-busca ou Local).
    * **Validação via JavaScript:** Impede o envio do formulário se os campos obrigatórios não estiverem preenchidos e exibe um alerta de confirmação.

* **Acessibilidade:**
    * Uso de atributos `alt` em todas as imagens para leitores de tela.
    * Estrutura semântica correta (nav, section, footer) para facilitar a navegação por teclado e tecnologias assistivas.

## 🛠 Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização personalizada (`css/style.css`).
* **Bootstrap 5.3:** Framework para layout responsivo e componentes visuais.
* **JavaScript (ES6):** Lógica de validação e manipulação do DOM (`js/script.js`).

## 📂 Estrutura de Arquivos