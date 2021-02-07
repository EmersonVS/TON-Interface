# TON-Interface

Projeto frontend desenvolvido com framework <i>Angular</i>, para teste técnico.

## Sobre

Projeto componentizado para consumir APIs. Funciona como interface para possibilitar ao usuário interagir com sistema de controle de funcionários. Possui dois módulos, um para autenticação e outro para operações.

## Diretórios

#### Aplicação

    .
    └── app
        ├── core            # Módulos e componentes principais
        └── shared          # Módulos, Componentes, serviços compartilhados pela aplicação

## Rotas

#### Login

Na rota de login é necessário um usuário e senha válidos para que seja feita [autenticação](#guard-service), e possibilitar o uso das funcionalidades da aplicação. Autenticação gera um [token](#interceptor) que é usado nas operações realizadas.

#### Painel de controle

As operações disponíveis se encontram no painel de controle. Para cada operação existe uma requisição que necessita de um token.

## Serviços

#### Funcionario Service

Responsável por carregar requisições para realizar operações com entidade funcionário.

#### Time Service

Responsável por administrar operações envolvendo tempo.

#### Token Service

Responsável por carregar requisição de autenticação.

#### Token Manager

Responsável por gerenciar armazenamento do token no local storage.

#### Interceptor

Responsável por adicionar um token ao cabeçalho de cada requisição.

#### Guard Service

Responsável por liberar acesso ao painel de controle.

## Como rodar

Necessário ter instalado <a href="https://nodejs.org/en/">Node|npm</a> e <a href="https://www.nginx.com/resources/wiki/start/topics/tutorials/install/">NGINX</a>.

#### Local
1. Clone o repositório
2. Utilize o comando <i>npm install</i>
3. Utilize o comando <i>npm start</i> para rodar localmente
4. O projeto deve estar disponível no endereço <b>http://localhost:4200</b>

#### Servidor
1. Clone o repositório
2. Utilize o comando <i>npm install</i>
3. Utilize o comando <i>npm build</i>
4. No diretório de instalação do NGINX acesse <b>/nginx/sites-available</b>
5. Crie um arquivo de configuração com nome TON-Interface seguindo o padrão abaixo
    ```shell
    server {     
        listen 80;      
        listen [::]:80;      
        server_name http://ton-interface.com;      
        root /var/www/TON-Interface;   
        server_tokens off;   
        index index.html index.htm;     
    
        location / {         
            # First attempt to server request as file, then         
            # as directory, then fall back to displaying a 404.          
            try_files $uri $uri/ /index.html =404;      
        }
    }
    ````
6. Acesse o diretório <b>/nginx/sites-enabled</b> e utilize o seguinte comando <i>ln -s ../sites-avaiable/TON-Interface</i>
7. Volte para o diretório do projeto e mova o diretório <b>/dist/TON-Interface</b> para <b>/var/www/</b>
8. Por fim execute o comando <i>service nginx restart</i>. O projeto deve estar disponível no endereço <b>http://{{ip}}:80</b>