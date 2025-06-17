const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

// In-memory data store
let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" },
];

// CRUD Endpoints

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Get item by id
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// Create new item
app.post("/api/items", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Name is required" });
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item
app.put("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const item = items.find((i) => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  if (!name) return res.status(400).json({ message: "Name is required" });
  item.name = name;
  res.json(item);
});

// Delete item
app.delete("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) return res.status(404).json({ message: "Item not found" });
  items.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
