
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const genero = document.getElementById("genero").value;
  const sexualidade = document.getElementById("sexualidade").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const localNascimento = document.getElementById("localNascimento").value;

  const primeiroNome = nome.split(" ")[0];
  const nascimentoAno = new Date(dataNascimento).getFullYear();
  const vidaPassadaAno = nascimentoAno - 437; // apenas para criar uma era antiga
  const ocupacoes = [
    "astrólogo real",
    "curandeiro das florestas encantadas",
    "guardião das escrituras celestiais",
    "navegador das constelações",
    "feiticeiro do reino perdido",
    "guardião dos portais místicos"
  ];
  const ocupacao = ocupacoes[Math.floor(Math.random() * ocupacoes.length)];

  const resultado = `
    <div class="certidao">
      <h2>🌠 Certidão de Vida Passada 🌠</h2>
      <p><strong>Nome cósmico:</strong> ${primeiroNome} da Ordem Estelar</p>
      <p><strong>Gênero espiritual:</strong> ${genero}</p>
      <p><strong>Orientação do coração:</strong> ${sexualidade}</p>
      <p><strong>Era da existência anterior:</strong> Por volta de ${vidaPassadaAno}</p>
      <p><strong>Local de nascimento terreno:</strong> ${localNascimento}</p>
      <p><strong>Missão nesta existência anterior:</strong> Atuar como ${ocupacao}</p>
      <p><strong>Legado deixado:</strong> Inspirou gerações com sabedoria ancestral, deixando registros ocultos nas estrelas.</p>
      <p>🔮 Esta certidão é registrada nos Arquivos Eternos do Cosmos. 🔮</p>
      <div class="compartilhar">
        <p>Compartilhe sua certidão:</p>
        <a href="https://twitter.com/intent/tweet?text=Acabei de descobrir minha vida passada! Veja a minha certidão mística 🔮✨&url=https://brunogarciadossantos.github.io/minha-certidao/" target="_blank">Compartilhar no Twitter</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://brunogarciadossantos.github.io/minha-certidao/" target="_blank">Compartilhar no Facebook</a>
      </div>
    </div>
  `;

  document.getElementById("resultado").innerHTML = resultado;
});
