function shapeArea(n) {
var area = 1;
    
    for (let i = 1; i < n; i++)
        {
            //4 é o valor adicionado a cada poligono
            area += 4 * i;
        }
    return area;
}
