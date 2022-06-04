# Gerenciamento de dependências:

## Entendendo os códigos da versão:

```js
{
    ...
    "dependences": {
        "moment": "^2.29.1"
        /* 
            * ^ => Indica que vai atualizar o minor e o major;
                *  ~ => indica que somente o patch será atualizado;
                * sem nada antes do número da versão => indica que sempre vai manter a versão e não será mudada;
                * *(asterisco) => indica que vai mudar todas as versões.
            * 2 => major: é a versão do projeto e poderá até quebrar dependendo que acontecer ao pacote;
            * 29 => minor: indica que haverá alterações, mas que isso não irá quebrar o que está acontecendo neste pacote;
            * 1 => patch: está resolvendo algum bug ou alguma outra coisa dentro deste pacote.
        */
    }
}
```

    * Para instalarmos uma versão anterior de um pacote digitamos `npm nome-do-pacote@numero-da-versão. Ex: `npm i moment@1.5.1` instalará a versão 1.5.1 do pacote moment.

## Vendo quais quersões do pacote estão disponíveis:

    * Digitar no terminal `npm outdated` que exibirá as versões disponíveis dos pacotes instalados;
    * Para atualizar, basta digitar `npm upgrade`
      * Caso não funcione, digitar `npm i nome-do-pacote@latest`. Ex: `npm i moment@latest` para instalar a última versão do pacote moment.