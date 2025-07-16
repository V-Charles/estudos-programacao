let lista = ["a", "b", "c"];

//Adicionar
lista.push("d");            // ["a", "b", "c", "d"]
lista.unshift("0");         // ["0", "a", "b", "c", "d"]
lista.splice(2, 0, "x");    // ["0", "a", "x", "b", "c", "d"]

//Remover
lista.pop();                // ["0", "a", "x", "b", "c"]    
lista.shift();              // ["a", "x", "b", "c"]
lista.splice(1, 2);         // ["a", "c"]

console.log(lista); // ["a", "c"]