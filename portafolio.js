var trabajos = [{
    figure: "media/boquillailko.png",
    alt: "Descripción de la imagen",
    title: "Título de primer trabajo",
    about: "Texto simulado de descripción de primer trabajo"
}, {
    figure: "media/capullotide.jpeg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo"
}, {
    figure: "media/logocasareposo",
    alt: "Descripción de la imagen",
    title: "Título de tercer trabajo",
    about: "Texto simulado de descripción de tercer trabajo"
}, {
    figure: "media/exhibidorvino.jpeg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Texto simulado de descripción de cuarto trabajo"
}, {
    figure: "media/makotraje.png",
    alt: "Descripción de la imagen",
    title: "Título de quinto trabajo",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/fuentefreddy.jpeg",
    alt: "Descripción de la imagen",
    title: "Título de sexto trabajo",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/fotomontajepuente.jpeg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
