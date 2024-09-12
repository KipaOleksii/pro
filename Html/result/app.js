const list = document.getElementById("list");
const filterInput = document.getElementById("filter");
let USERS = [];

filterInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  const filteredUsers = USERS.filter((user) => {
    return user.name.toLowerCase().includes(value);
  });
  render(filteredUsers);
});

async function start() {
  list.innerHTML = "Loading...";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    setTimeout(() => {
      USERS = data;
      render(data);
    }, 2000);
  } catch (err) {
    list.style.color = "red";
    list.innerHTML = "Error fetching data. Please try again later.";
    console.error(err);
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = "No users found.";
  } else {
    const html = users.map(toHTML).join("");
    list.innerHTML = html;
  }
}

function toHTML(user) {
  return `<li class="list-group-item">
  <span class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    ${user.name}, (${user.username})
  </span>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">City: ${user.address.city}</a>
    <a class="dropdown-item" href="#">Street: ${user.address.street}</a>
    <a class="dropdown-item" href="#">Suite: ${user.address.suite}</a>
    <a class="dropdown-item" href="#">Zipcode: ${user.address.zipcode}</a>
  </div>
</li>
`
  
  // <li class="list-group-item">${user.name}, (${user.username})</li>
  // <span class = dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded = "false">
  //  ${user.address.city}, ${user.address.street}, ${user.address.suite} </span>;
}
start();
