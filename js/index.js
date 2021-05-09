const botoes = document.getElementsByClassName("leia-mais-botao");
for (const botao of botoes) {
    botao.addEventListener("click", function( event ) {
        const title = botao.getAttribute("data-title");
        const content = botao.getAttribute("data-content");

        $("#titleModal").text(title);
        $("#contentModal").html(content);
    });   
}
