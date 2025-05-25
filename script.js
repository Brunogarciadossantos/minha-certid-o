document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const genero = document.getElementById("genero").value;
  const sexualidade = document.getElementById("sexualidade").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const localNascimento = document.getElementById("localNascimento").value;

  const resultado = `
    <h2>🌟 Certidão de Vida Passada 🌟</h2>
    <p><strong>Nome cósmico:</strong> ${nome.split(" ")[0]} das Estrelas</p>
    <p><strong>Era de nascimento:</strong> ${new Date(dataNascimento).getFullYear() - 500}</p>
    <p><strong>Local:</strong> Uma vila mágica em ${localNascimento}</p>
    <p><strong>Missão de alma:</strong> Iluminar os caminhos com empatia e sabedoria.</p>
    <p><strong>Rastro energético:</strong> ${genero}, alma livre, com amor por ${sexualidade}.</p>
    <p>✨ Sua história foi registrada nos arquivos eternos do universo. ✨</p>
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
