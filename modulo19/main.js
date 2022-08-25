// DESAFIO FETCH
// Consumir la api fake de https://jsonplaceholder.typicode.com/ implementando API Fetch y pintar en nuestro html (utilizando bootstrap vía cdn para los estilos) una tabla de 10 usuarios y debe contener las propiedades en sus columnas de Id, name, username, email y address-street.

const usuarios = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  const response = await fetch(usuarios);
  const data = await response.json();

  const titles = ["Id", "Name", "Username", "Email", "Address"];
  let table = document.createElement("table");

  table.className = "table table-dark table-striped";
  let thead = document.createElement("thead");
  thead.className = "table-dark";


  // Cabecera de la tabla
  let tr = document.createElement("tr");
  titles.map((title) => {
    let th = document.createElement("th");
    th.innerHTML = title;
    tr.appendChild(th);
  });
  // Cuerpo de la tabla
  thead.appendChild(tr);
  table.appendChild(thead);

  let tbody = document.createElement("tbody");
  data.map(({ id, name, username, email, address }) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${id}</td><td>${name}</td><td>${username}</td><td>${email}</td><td>${address.street}</td>`;
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.getElementById("table").appendChild(table);
}
getUsers();

