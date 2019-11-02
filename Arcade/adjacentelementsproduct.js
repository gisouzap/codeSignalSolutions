function adjacentElementsProduct(inputArray) {
    var len = inputArray.length;
    var product = inputArray[0] * inputArray[1];

    for (let i = 0; i < len; i++)
        {
            /*vê se a condição é verdadeira, se for, grava no product, 
             * senão, mantém o valor dp product
             * product = inputArray[i] * inputArray [i + 1] >= product ? 
             * inputArray[i] * inputArray[i + 1] : product;
            */
         //outro modo de fazer: 
        multiply = inputArray[i] * inputArray[i+1];
            if (multiply >= product)
                {
                    product = multiply;
                }
        }
    return product;
}
