    document.addEventListener("DOMContentLoaded", function(){
    function getPokemonData(pokemonName){
    // Aqui, vamos acessar a PokeAPI
    const urlPadrao = "https://pokeapi.co/api/v2/pokemon/"
    const url = `${urlPadrao}${pokemonName}`
    console.log(url)
    // Faz uma requisição GET para a URL acima
    fetch(url)
        .then(response => {
            // Verifica a resposta
            if(!response.ok){
                //
            } else {
                return response.json();
            }
        })
        .then(data =>{
            // Rcuperar o nome a imagem do JSON
            const name = data.name;
            const imageUrl = data.sprites.front_default; 
            console.log(imageUrl)
            // Para trabalhar com a API você precisa conhecer as suas propriedades.
            //Irei atualizar o conteudo do html com esses dados.
            document.getElementById("pokemon-name").textContent = name;
            document.getElementById("pokemon-img").src = imageUrl;
            console.log(document.getElementById("pokemon-img")) // Aqui dá dando problema...
        })
    }  // recupere o dados da url então.

    // Nosso código Javascript será adicionado aqui. Ele entrará na pokedex.
    // Pesquisar sobre DOMContentLoeaded.
    document.getElementById("search-button").addEventListener("click", function(){
        const pokemonName = document.getElementById("pokemon-input").value

        // Utilizar a conta Pokemonname para obter os dados do PokeAPI.
        getPokemonData(pokemonName)
        console.log(getPokemonData(pokemonName))
    })

});

