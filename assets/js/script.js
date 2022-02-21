//Definimos nuestras variables
var nombre = prompt("Ingrese su Nombre y Apellido", "Yeminson Sanchez");
var carrera = prompt("Ingrese su Carrera", "Desarrollo Web");
var n1_html = parseInt(prompt("Ingrese nota 1 [HTML]:", 4));
var n2_html = parseInt(prompt("Ingrese nota 2 [HTML]:", 5));
var n3_html = parseInt(prompt("Ingrese nota 3 [HTML]:", 4));

var n1_css = parseInt(prompt("Ingrese nota 1 [CSS]:", 3));
var n2_css = parseInt(prompt("Ingrese nota 2 [CSS]:", 4));
var n3_css = parseInt(prompt("Ingrese nota 3 [CSS]:", 5));

var n1_js = parseInt(prompt("Ingrese nota 1 [JAVASCRIPT]:", 2));
var n2_js = parseInt(prompt("Ingrese nota 2 [JAVASCRIPT]:", 6));

var divisor_html = parseInt(3);
var promedio_html = parseInt(n1_html + n2_html + n3_html) / divisor_html;

var divisor_css = parseInt(3);
var promedio_ccs = parseInt(n1_css + n2_css + n3_css) / divisor_css;

var divisor_js = parseInt(12);
var promedio_js = parseInt(divisor_js - (n1_js + n2_js));

//Aquí creamos nuestro div contenedor para el titulo y el logo
document.write("<div class='container d-flex justify-content-between'>");
document.write('<span class="fs-1 fw-bold">Notas Finales</span>');
document.write(
  '<img src="assets/img/desafio-latam.png" alt="logo-desafio-latam" class="w-25 ms-auto"></img>'
);
document.write("</div>");
//Aquí creamos nuestro div contenedor para la tabla
document.write("<div class='container'>");
//Aquí creamos nuestra tabla con bootstrap
document.write("Nombre: " + nombre + "<br>" + "Carrera: " + carrera);
document.write("<table class='table'>");
//Aquí indicamos que nuestra tabla tendrá encabezado
document.write("<thead class='bg-dark text-white'>");
//Con tr definimos las columnas de la tabla document.write("<tr>");
//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");

document.write("</tr");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla

//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<th scope='row'>HTML</th>");
document.write("<td>" + n1_html + "</td>");
document.write("<td>" + n2_html + "</td>");
document.write("<td>" + n3_html + "</td>");
document.write("<td>" + promedio_html.toFixed(2) + "</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>CSS</th>");
document.write("<td>" + n1_css + "</td>");
document.write("<td>" + n2_css + "</td>");
document.write("<td>" + n3_css + "</td>");
document.write("<td>" + promedio_ccs.toFixed(2) + "</td>");
document.write("<tr>");
document.write("<tr>");
document.write("<th scope='row'>JAVASCRIPT</th>");
document.write("<td>" + n1_js + "</td>");
document.write("<td>" + n2_js + "</td>");
document.write("<td> - </td>");
document.write("<td> - </td>");
document.write("</tr>");
document.write("</tbody>");
//Aquí cerramos el cuerpo con el contenido de la t
document.write("</table>");
document.write(
  "<p>Para aprobar el ramo JAVASCRIPT con nota 4, necesitas obtener un " +
    promedio_js.toFixed(2) +
    " en la nota 3.</p>"
);
//Aquí cerramos nuestro div contenedor
document.write("</div>");
