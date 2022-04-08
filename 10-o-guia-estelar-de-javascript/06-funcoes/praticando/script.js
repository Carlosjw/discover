function calcCallBack(calc){
    calc(2, 3)
}

calcCallBack(
    function calc (n1, n2){
        return 'Esta é a soma ' + n1 * n2
    }
)

