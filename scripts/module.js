import { InventorySlots5eSheet } from "./inventory-sheet.js";

Hooks.once("init", () => {
  console.log("Inventory Slots | Inicializando...");

  Actors.unregisterSheet("dnd5e", "core.ActorSheet5eCharacter");
  Actors.registerSheet("dnd5e", InventorySlots5eSheet, {
    types: ["character"],
    label: "Inventory Slots (Mausritter-style)",
    makeDefault: true,
  });
});
