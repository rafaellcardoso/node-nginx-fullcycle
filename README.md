# FULLCYCLE: DESAFIO 2: NGINX/NODE

Este é o código desenvolvido para o primeiro desafio do módulo Docker do curso Full Cycle. O objetivo é criar 3 imagens, sendo elas:
- Uma imagem NGINX, que servirá como proxy reverso
- Uma imagem MySQL, que salvará uma lista de nomes na tabela `people` 
- Uma imagem NODE, que ao ser iniciada cria um registro no banco de dados e quando o usuário acessar o servidor através do NGINX, retorna a mensagem `<h1>Full Stack Rocks!!</h1> - Lista de nomes cadastrada no banco de dados.` seguido de uma lista com os nomes cadastrados no banco

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.



## Usando o código-fonte

Após clonar o projeto, navegue pelo terminal até a pasta com os arquivos e faça o `build` do docker-compose

```bash
docker-compose up --build
```

Em seguida, vá ao seu navegador e acesse `http://localhost:8080`