## Integration Test

<h2>Rodando a aplicação</h2>
<p>Para conseguir executar a aplicação, faça clone do repositório</p>
<p>Abra a pasta do projeto no seu terminal/IDE favorito, execute o comando "yarn"</p>
<p>Crie uma imagem postgress no docker com o comando</p>

```
docker run --name integration-test -p 27017:27017 -d -t mongo
```
<p>Na pasta raiz do projeto crie um arquivo ".env"</p>
<p>dentro do arquivo siga o padrão encontrado no arquivo ".env.example" adicione as Keys do pipedrive e Bling</p>

<h2>Subir servidor com live-reload</h2>

```
yarn dev:server
```

<h2>Build</h2>

```
yarn build
```

<h2>Exemplo de response</h2>

```
{
    "Consolidado": [
        {
            "data": "2020/11/07",
            "total_negociado": "R$ 99750"
        },
        {
            "data": "2020/11/23",
            "total_negociado": "R$ 79450"
        },
        {
            "data": "2020/11/26",
            "total_negociado": "R$ 47500"
        }
    ],
    "integrationStatus": {
        "blingStatus": "Nenhum pedido de venda novo",
        "pipedriveStatus": "Dados coletados"
    }
}
```
<p>
Consolidado: Resultado agregado por dia e valor,
IntegrationStatus: {
  blingStatus: Informa se houve post de novos pedidos, caso sim informa quantos novos pedidos,
  pipedriveStatus: Informa conseguiu realizar a coleta dos dados do pipedrive, caso não, retorna status code e status text
}
</p>

<h2>Postman</h2>


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/6f7d2e96be5b56dcb845)

