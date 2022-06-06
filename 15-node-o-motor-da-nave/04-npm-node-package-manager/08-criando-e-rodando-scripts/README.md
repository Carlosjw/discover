# Criando e rodando scripts com npm

    * Os scripts são criados dentro da propriedade `script` no `package.json`. Essa propriedade `script` é um objeto.
      * Para rodar o script, digitamos no terminal `npm rum nome-do-script`

    ** Rodarmos um script direto, podemos colocar o seu nome como `start`, que é um comando especial Node. Caso não coloquemos o script com essa nomeclatura, precisaremmos escrever `run` log após o `npm` para que o script seja executado:

        Exs:
         ```js

            {
                "scripts":{
                    "start": "node index.js"
                },
            }
         ```
         O script acima será rodado direto, sem o auxílio do `run`. Ex: `npm start`;

         ```js

            {
                "scripts":{
                    "other": "node index.js"
                },
            }
         ```
         O script acima será executado somente com o auxílio do `run`. Ex: `npm run other`.


