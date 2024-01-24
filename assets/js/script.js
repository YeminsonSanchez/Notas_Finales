// Estas líneas solicitan al usuario su nombre completo y carrera.
const fullName = prompt('Ingrese su Nombre y Apellido', 'Yeminson Sanchez')
const career = prompt('Ingrese su Carrera', 'Desarrollo Web')

// Estas constantes almacenan las notas del usuario para las tres asignaturas.
// Las notas se solicitan al usuario a través de cuadros de diálogo de entrada.
const notesHtml = [
	parseInt(prompt('Ingrese nota 1 [HTML]:', 4)),
	parseInt(prompt('Ingrese nota 2 [HTML]:', 5)),
	parseInt(prompt('Ingrese nota 3 [HTML]:', 4)),
]
const notesCss = [
	parseInt(prompt('Ingrese nota 1 [CSS]:', 3)),
	parseInt(prompt('Ingrese nota 2 [CSS]:', 4)),
	parseInt(prompt('Ingrese nota 3 [CSS]:', 5)),
]
const notesJs = [
	parseInt(prompt('Ingrese nota 1 [JAVASCRIPT]:', 2)),
	parseInt(prompt('Ingrese nota 2 [JAVASCRIPT]:', 6)),
	'-',
]

/**
 * Calcula el promedio de un array de números.
 *
 * @param {number[]} notes - Un array de números.
 * @returns {number} El promedio de los números en el array.
 */
const noteAverage = (notes) => notes.reduce((a, b) => a + b, 0) / notes.length

const averageHtml = noteAverage(notesHtml)
const averageCss = noteAverage(notesCss)
const averageJs = 12 - (notesJs[0] + notesJs[1])

// container, title, img: Estas constantes crean elementos HTML para mostrar la información al usuario.
const container = document.createElement('div')
container.className = 'container d-flex justify-content-between mt-5'
const title = document.createElement('span')
title.className = 'fs-1 fw-bold'
title.textContent = 'Notas Finales'
const img = document.createElement('img')
img.src = 'assets/img/desafio-latam.png'
img.alt = 'logo-desafio-latam'
img.className = 'w-25 ms-auto'
container.appendChild(title)
container.appendChild(img)
document.body.appendChild(container)

// tableContainer, info, table, thead, trHead, ths, tbody, subjects:
// Estas constantes crean una tabla HTML que muestra las notas
// y los promedios del usuario para las tres asignaturas.

const tableContainer = document.createElement('div')
tableContainer.className = 'container'
const info = document.createElement('p')
info.innerHTML = `Nombre: ${fullName}<br>Carrera: ${career}`
tableContainer.appendChild(info)
const table = document.createElement('table')
table.className = 'table'
const thead = document.createElement('thead')
thead.className = 'bg-dark text-white'
const trHead = document.createElement('tr')
const ths = ['Ramo', 'Nota 1', 'Nota 2', 'Nota 3', 'Promedio'].map((text) => {
	const th = document.createElement('th')
	th.scope = 'col'
	th.textContent = text
	return th
})
ths.forEach((th) => trHead.appendChild(th))
thead.appendChild(trHead)
table.appendChild(thead)
const tbody = document.createElement('tbody')
const subjects = [
	{ name: 'HTML', notes: notesHtml, average: averageHtml.toFixed(2) },
	{ name: 'CSS', notes: notesCss, average: averageCss.toFixed(2) },
	{ name: 'JAVASCRIPT', notes: notesJs, average: '-' },
]
subjects.forEach((subject) => {
	const tr = document.createElement('tr')
	const th = document.createElement('th')
	th.scope = 'row'
	th.textContent = subject.name
	tr.appendChild(th)
	subject.notes.forEach((note) => {
		const td = document.createElement('td')
		td.textContent = note
		tr.appendChild(td)
	})
	const tdAverage = document.createElement('td')
	tdAverage.textContent = subject.average
	tr.appendChild(tdAverage)
	tbody.appendChild(tr)
})
table.appendChild(tbody)
tableContainer.appendChild(table)

// p.textContent: Esta línea crea un párrafo que informa al usuario qué nota
// necesita en su tercer examen de JavaScript para obtener un promedio de 4.

const p = document.createElement('p')
p.textContent = `Para aprobar el ramo JavaScript con nota mínimo de 4, necesitas obtener un ${
	averageJs.toFixed(2) < 0 ? 0 : averageJs.toFixed(2)
} en la nota 3.`
tableContainer.appendChild(p)

// document.body.appendChild(tableContainer): Esta línea agrega la tabla y el párrafo
// al cuerpo del documento HTML, lo que permite al usuario verlos.
document.body.appendChild(tableContainer)
