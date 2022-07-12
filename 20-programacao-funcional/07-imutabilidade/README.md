# `Imutabilidade`

    * Uma variável não vai variar
    * Se você mudar uma variável, você não muda, você `cria uma nova`

```js

    // Exemplo em JS
    const cart = {
        qunatity: 2,
        total: 200
    };

    // bad
    cart.quantity = 3;

    // good
    const newCart = {...cart, qunatity: 3};

    // Exemplo em ReactJS
    const [amount, setAmount] = useState(0);

    // bad
    amount = 2;

    // good
    setAmount(2);
    
```