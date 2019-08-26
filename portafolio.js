var trabajos = [{
    figure: "portafolio cami/arruca.png",
    alt: "arruca",
    title: "Arruca",
    about: "Diseñado por las tres. Cuna armable para situación de emergencia en albergues",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio cami/boquillailko.png",
    alt: "Boquilla",
    title: "Boquilla ILKO",
    about: "Diseño por Camila. Boquilla acoplable a bolsas con contenido líquido o gelatinoso",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio cami/capullotide.jpeg",
    alt: "Capullo",
    title: "Capullo",
    about: "Diseño por Camila. Textil que permite el acto de lactancia en público",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio cami/exhibidorvino.jpeg",
    alt: "Güelta",
    title: "Güelta",
    about: "Diseño por Camila. Exhibidor para 6 botellas de vino",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio cami/fuentefreddy.jpeg",
    alt: "Fuente",
    title: "Fuente Freddy",
    about: "Diseño por Camila. Fuente de agua para camaleón velado",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio cami/logocasareposo.png",
    alt: "Logo",
    title: "Logo Casa de Reposo Las Condes",
    about: "Diseño por Camila. Logo representativo de la identidad Casa de Reposo Las Condes",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio cami/makotraje.png",
    alt: "Mako",
    title: "Mako",
    about: "Diseño por Camila y Josefina. Traje de nado para personas con paraplejia",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio jose/el borrador.png",
    alt: "El borrador",
    title: "El Borrador",
    about: "Diseño por Camila y Josefina. Kit lúdico para el desarrollo de una investigación",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio jose/foster.png",
    alt: "Estamapado",
    title: "Estamopado",
    about: "Diseño por Josefina. Pattern floral para estampado de bolsas",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio jose/rum.png",
    alt: "RUM",
    title: "RUM",
    about: "Diseño por Josefina. Juguete móvil, versátil, fabricado de plástico reciclado",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio jose/virutex.png",
    alt: "Parches",
    title: "Parche Adhesivo",
    about: "Diseño por Josefina. Parches adhesivos de prelavado para manchas en la ropa",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio jose/zoologico.png",
    alt: "Zoom",
    title: "Zoom",
    about: "Diseño por Josefina y Bernardita. Dispositivo de enriquecimiento ambiental animal",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio berni/depoxer2.jpg",
    alt: "Depoxer",
    title: "Depoxer",
    about: "Diseño por Bernardita. Rieles para la práctica de boxeo para personas con parkinson",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio berni/fritangana1.jpg",
    alt: "Fritangana",
    title: "Fritangana",
    about: "Diseño por Bernardita. Snack carnavalesco de paso",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio berni/monstrario1.jpg",
    alt: "Monstrario",
    title: "Monstrario",
    about: "Diseño por Bernardita. Kit lúdico para el desarrollo de investigaciones",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio berni/pep1.jpg",
    alt: "PEP",
    title: "PEP",
    about: "Diseño por Bernardita. Porcionador de comida para niños",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}, {
    figure: "portafolio berni/yeso1.jpg",
    alt: "Iluminaria Yeso",
    title: "Luminaria Yeso",
    about: "Diseño por Bernardita. Liminaria de yeso experimental",
    url: "http://instagram.com/tres_intentos_de_disenadoras/"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href="' + trabajos[i].url + '"> Ver más</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});
