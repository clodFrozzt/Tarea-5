const titulo = "pokemons";
const tituloEnMayuscula = titulo.toUpperCase();

console.log(tituloEnMayuscula);

var pokemons = [
    { nombre: "vulpix", tipo: "fuego" },
    { nombre: "jigglypuff", tipo: "hada" },
    { nombre: "squirtle", tipo: "agua" },
    { nombre: "bulbasur", tipo: "hierba" },
    { nombre: "charmander", tipo: "fuego" },
    { nombre: "Beedrill", tipo: "bicho" },
    { nombre: "magmar", tipo: "fuego" },
    { nombre: "Vileplume", tipo: "veneno" },
    { nombre: "Ponyta", tipo: "fuego" }
  ];
  var pokemonFuego = pokemons.filter(function (pokemon)
   {
    return pokemon.tipo == "fuego";
  });
  
  console.log (pokemonFuego);
  