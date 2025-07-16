let matriz = [
    [10, 20],
    [30, 40],
    [50, 60]
];

console.log("Valor na linha 1, coluna 0:", matriz[1][0]);

console.log("Toda a matriz:");
for (let linha = 0; linha < matriz.length; linha++) {
    console.log(matriz[linha].join(" | "));
}