
function Pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  console.log(campoPesquisa)

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tag = "";

  campoPesquisa = campoPesquisa.toLowerCase()

  // Itera sobre cada elemento (dado) da lista de dados
  for (let dado of dados) {
    
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    tag = dado.tag.toLocaleLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
      // Cria um novo elemento div para cada resultado
      resultados += `<div class="item-resultado">
  <h2>
  <a href=${dado.link} target="_blank">${dado.titulo}</a>
   </h2>
  <p class="descricao-meta">${dado.descricao}</p>
  </div>`
    }

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nenhum resultado encontrado</p>"
      return
    } ;

  

  // Atribui o HTML gerado para a seção HTML
  section.innerHTML = resultados;
};
}
