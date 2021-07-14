const livros = require('./database')

// pegar um input do usuário - se quer escolher o livro por categoria
//Se for sim, mostrar categorias disponíveis e pergunta qual categoria ela escolhe
//Se for não, mostrar todos os livros em ordem crescente pela quantidade de páginas

const readline = require("readline-sync") //eh possivel acessar tudo o que a readline-sync tem a partir do objeto readline

const entradaInicial = readline.question("Deseja buscar um livro? (S/N)") //nativa da readline

if (entradaInicial.toLocaleUpperCase() === "S"){
    console.log("Essas são as categorias disponíveis:")
    console.log("Aventura", "/Crônicas", "/Quadrinhos", "/Teoria Queer", "/ENEM", "/Romance")
    
    const entradaCategoria = readline.question("Qual categoria você escolhe?") //input do usuario

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas )
    console.log("Esses são todos os livros disponíveis:")
    console.table(livrosOrdenados)
}