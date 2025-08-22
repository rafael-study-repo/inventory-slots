export class InventorySlots5eSheet extends dnd5e.applications
  .ActorSheet5eCharacter {
  static get defaultOptions() {
    const options = super.defaultOptions;
    options.classes = [...(options.classes ?? []), "inventory-slots"];
    options.template = "modules/inventory-slots/template/actor-sheet.html";
    return options;
  }

  async getData(options) {
    const data = await super.getData(options);

    const strength = data.actor.system.abilities.str.value;
    const maxSlots = strength + 5;

    const items = data.items.filter((i) => i.type === "equipment");
    let usedSlots = 0;

    for (const item of items) {
      item.slotSize = item.flags["inventory-slots"]?.slotSize || 1;
      usedSlots += item.slotSize;
    }

    data.inventorySlots = {
      used: usedSlots,
      max: maxSlots,
    };

    return data;
  }
}
