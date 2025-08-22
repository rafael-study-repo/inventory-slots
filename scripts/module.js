import { InventorySlots5eSheet } from "./inventory-sheet.js";
Hooks.once("init", () => {
  console.log("Inventory Slots | Inicializando..."); // Registrar nova ficha para personagens
  Actors.registerSheet("dnd5e", InventorySlots5eSheet, {
    types: ["character"],
    label: "Inventory Slots (Mausritter-style)",
    makeDefault: false,
  });
});
