//Faça um script em javascript 1. Pergunte para o usuário uma palavra; 2. Devolva para ele todos os anagramas da mesma

console.log("Olá, Digite uma palavra para revelar seu anagrama: ")

let palavra = ""
let anagramas = []

process.stdin.on("data",function(data){
    if (!palavra){
        palavra = data.toString().trim()
        anagramas.push(palavra)
        palavra = palavra.split("") // transforma em array
        console.log(palavra)
    } else {
        for (let i = 0; i < anagramas.length; i++){
            palavra = palavra.join("") // transforma em string
            console.log(palavra)
        }

    }
})







