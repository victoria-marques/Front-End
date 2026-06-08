Sabor Digital - Backend
API Backend construída em Node.js com padrão de arquitetura MVC (Model-View-Controller) e banco de dados MySQL para o sistema de gestão da "Sabor Digital" (Cardápios, Pedidos, Produtos).

🚀 Pré-requisitos
Antes de começar, certifique-se de que você possui as seguintes ferramentas instaladas na sua máquina:

Git
Node.js (Versão LTS recomendada)
MySQL Server
⚙️ Instalação e Configuração
Siga os passos abaixo para instalar e rodar o projeto localmente:

1. Clonar o Repositório
Primeiro, clone o repositório em sua máquina local e acesse a pasta do projeto:

git clone <URL_DO_SEU_REPOSITORIO>
cd sabor_digital
2. Instalar Dependências
Instale as bibliotecas necessárias para o Node.js rodando o comando na raiz do projeto:

npm install
3. Configurar o Banco de Dados (MySQL)
Certifique-se de que o seu serviço do MySQL está rodando.
Abra o seu gerenciador de banco de dados preferido (como MySQL Workbench, DBeaver, ou via linha de comando).
Execute o script do arquivo database.sql que está na raiz do projeto. Ele criará o banco de dados sabordigital juntamente com todas as tabelas necessárias e alguns dados iniciais.
4. Configurar as Variáveis de Ambiente (.env)
Crie um arquivo chamado .env na raiz do projeto. Você pode se basear no arquivo de configuração atual ou usar o modelo abaixo:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_do_mysql
DB_NAME=sabordigital
DB_PORT=3306
PORT=3000
Nota: Não se esqueça de alterar o DB_PASSWORD para a senha real do seu usuário MySQL local.

▶️ Iniciando o Servidor
Após realizar todas as configurações acima, inicie o servidor:

node src/server.js
Dica: Você também pode usar node --watch src/server.js se estiver usando o Node.js v20+ e quiser recarregar o servidor automaticamente após salvar arquivos.

Se tudo estiver correto, você verá no terminal:

Conexão com MySQL estabelecida! ✔️
Servidor rodando na porta 3000 🚀
Rotas MVC ativas e escutando!
📚 Estrutura do Projeto
A aplicação foi desenvolvida seguindo o padrão MVC, o que facilita a manutenção e escalabilidade:

src/
 ├── config/        # Configuração de conexão com o banco de dados
 ├── controllers/   # Lógica de controle de requisições e respostas da API
 ├── repositories/  # Comunicação direta com o banco de dados (SQL)
 ├── routes/        # Rotas da aplicação (endpoints)
 ├── services/      # Regras de negócio da aplicação
 ├── app.js         # Configurações do express e middlewares (CORS, JSON)
 └── server.js      # Arquivo principal que inicia o servidor
🛠️ Tecnologias Utilizadas
Node.js
Express.js (Framework web)
MySQL2 (Driver para conexão com DB)
Cors (Controle de acesso à API)
Dotenv (Gerenciamento de variáveis de ambiente)