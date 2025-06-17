const itemsList = document.getElementById("items");
const addBtn = document.getElementById("addBtn");
const itemNameInput = document.getElementById("itemName");

function fetchItems() {
  fetch("/api/items")
    .then((res) => res.json())
    .then((data) => {
      itemsList.innerHTML = "";
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.id}: ${item.name}`;
        itemsList.appendChild(li);
      });
    })
    .catch((err) => console.error("Error fetching items:", err));
}

addBtn.addEventListener("click", () => {
  const name = itemNameInput.value.trim();
  if (!name) return alert("Please enter item name");

  fetch("/api/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  })
    .then((res) => res.json())
    .then(() => {
      itemNameInput.value = "";
      fetchItems();
    })
    .catch((err) => console.error("Error adding item:", err));
});

// Initial load
fetchItems();
