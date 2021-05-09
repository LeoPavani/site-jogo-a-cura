const botoes = document.getElementsByClassName("leia-mais-botao");
for (const botao of botoes) {
    botao.addEventListener("click", function( event ) {
        const title = botao.getAttribute("data-title");
        $("#titleModal").text(title);

        const content = botao.getAttribute("data-content");
        $("#contentModal").html(content);

        const src = botao.getAttribute("data-src");
        if(!!$("#imageModal")){
            $("#imageModal").attr("src", src);
        }
        
    });   
}
