const nomes = ["Matheus", "Nicolas", "Rodrigo", "Pedro",
    "Larissa", "Maria", "Pedro"];
    export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
    }
    export const nome = aleatorio(nomes)