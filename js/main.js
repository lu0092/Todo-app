var lista_tareas = document.getElementById("_nt"),
	nTarea = document.getElementById("nuevaTarea"),
	guardar = document.getElementById("guardar");

guardar.onclick = function () {
	if (nTarea.value == "") {
		return alert("Olvidaste colocar una tarea!");
	} else {
		var n_t = nTarea.value,
			li = document.createElement("li"),
			span = document.createElement("span"),
			nuevaTarea = document.createTextNode(n_t),
			borrar = document.createElement("i"),
			aspa = document.createElement("input");
		aspa.setAttribute("type", "checkbox");
		aspa.setAttribute("class", "aspa");
		li.appendChild(aspa);
		li.setAttribute("class", "listaTarea");
		span.appendChild(nuevaTarea);
		li.appendChild(span);
		lista_tareas.appendChild(li);
		borrar.setAttribute("class", "glyphicon glyphicon-trash borrar");
		borrar.setAttribute("id", "tborrar");
		borrar.setAttribute("aria-hidden", "true");
		li.appendChild(borrar);
		nTarea.value = "";
		borrar.onclick = function () {
			lista_tareas.removeChild(li);
		};
		aspa.onclick = function () {
			if (this.checked == true) {
				span.setAttribute("class", "tachado");
			} else {
				span.removeAttribute("class");
			}
		};
	};
};