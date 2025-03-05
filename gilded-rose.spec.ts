import { describe, expect } from "@jest/globals";
import { GildedRose, Item } from "./gilded-rose";

describe("Gilded Rose", () => {
  it("should foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should Aged Brie", () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
  });

  it("should Backstage passes to a TAFKAL80ETC concert", () => {
    const gildedRose = new GildedRose([
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
  });

  it("should Sulfuras, Hand of Ragnaros", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 0),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
  });

  it("should foo 50", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});
