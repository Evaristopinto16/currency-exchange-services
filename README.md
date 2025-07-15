# Currency Exchange Service - Cambio Informal

## Descrição

O **Currency Exchange Service** é uma API desenvolvida com **Node.js** e **Fastify** que permite a conversão informal. Este projeto busca atender à necessidade de fornecer taxas de câmbio informais atualizadas, refletindo a dinâmica diária das moedas.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:
currency-exchange-service/

├── src/

  │   ├── config/ 

**Configurações do aplicativo**
      │   │   └── config.js         

**Arquivo de configuração**

     │   ├── controller/           

**Controladores API**

        │   │   └── exchangeController.js  

 **Gerenciamento de conversões**

    │   ├── router/               

 **Definição das rota**s
        │   │   └── exchangeRouter.js   

**Rotas da API**

    │   ├── serviceutils/         

**Lógica de negócios**

        │   │   └── exchangeService.js   

**Funções de conversão**
    │   └── app.js                

 **Inicialização do aplicativo Fastify**

├── package.json          

**Dependências e scripts**

├── README.md         

**Documentação do projeto**

└── .gitignore      

 **Arquivos a serem ignorados pelo Git**

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/): Certifique-se de ter o Node.js instalado (recomenda-se a versão LTS).

### Passos para Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Evaristopinto16/currency-exchange-service


   ```markdown

## URL Base

A URL base para a API é:

`http://127.0.0.1:3000/api/v2/`

## Endpoints

### 1. Obter Moedas Suportadas

Este endpoint permite obter uma lista de todas as moedas suportadas.

**URL:** `/getcoin`

**Método:** `GET`

**Descrição:** Retorna uma lista de códigos de moedas que podem ser usados para conversões.

**Exemplo de Requisição:**

```
GET http://127.0.0.1:3000/api/v1/getcoin
```

**Exemplo de Resposta (JSON):**

```json
{
  "status": "sucess",
  "date": {
    "coin": {
        "title": "EURO",
        "sigla": "eur"
      },
      "coin": {
        "title": "Dolar Americano",
        "sigla": "usd"
      },
      "coin": {
        "title": "metical mocambicano",
        "sigla": "mzn"
      },
      "coin": {
        "title": "Rublo",
        "sigla": "rub"
      },
      "coin": {
        "title": "Kwanza",
        "sigla": "aoa"
      }
    
  }
}
```

### 2. Realizar Conversão de Moeda

Este endpoint permite converter um valor de uma moeda para outra.

**URL:** `/conversor`

**Método:** `POST`

**Descrição:** Converte um valor especificado de uma moeda de origem para uma moeda de destino.

**Corpo da Requisição (JSON):**

```json
{
  "coin": "eur",
  "conversionto": "rub",
  "value": 1000
}
```

**Parâmetros:**

*   `coin` (string, obrigatório): O código da moeda do valor que você deseja converter (por exemplo, "eur").
*   `conversionto` (string, obrigatório): O código da moeda para a qual você deseja converter o valor (por exemplo, "rub").
*   `value` (número, obrigatório): O valor na moeda de origem que você deseja converter.

**Exemplo de Requisição:**

```
POST http://127.0.0.1:3000/api/v1/
Content-Type: application/json

{
  "coin": "eur",
  "conversionto": "rub",
  "value": 1000
}
```

**Exemplo de Resposta (JSON):**

```json
{
  "status": "sucess",
  "data": {
    "valueCoint": "1000 eur",
    "taxasInformal": {
      "result": {
        "compraMinima": "92679 RUB",
        "compraNormal": "108434.43 RUB",
        "compraMaxima": "110288.01 RUB"
      }
    },
    "atualizacao": "Atualização das informações: terça-feira, 06.05.2025 23:23"
  },
  "cotacoespassadas": {
    "day": {
      "day": "quarta",
      "price": "92 679.94 RUB "
    },
    "day2": {
      "day2": "terca",
      "price": "91 074.56 RUB "
    },
    "day3": {
      "day3": "segunda",
      "price": "93 756.33 RUB "
    },
    "day4": {
      "day4": "domingo",
      "price": "93 718.61 RUB "
    }
  }
}
```

**Tratamento de Erros:**

A API pode retornar códigos de status HTTP apropriados e respostas JSON em caso de erros, como:

*   `400 Bad Request`: Se o corpo da requisição for inválido ou faltarem parâmetros obrigatórios.
*   `404 Not Found`: Se o endpoint solicitado não for encontrado.
*   `500 Internal Server Error`: Se ocorrer um erro inesperado no servidor.

## Começando

1.  Certifique-se de que a API está em execução e acessível em `http://127.0.0.1:3000`.
2.  Use uma ferramenta como `curl`, Postman, ou integre a API em sua aplicação usando uma biblioteca cliente HTTP.

 
```