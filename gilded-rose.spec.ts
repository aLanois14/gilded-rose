import { describe, expect } from "@jest/globals";
import {
  AGEDBRIE,
  BACKSTAGEPASSES,
  GildedRose,
  Item,
  SULFURAS,
} from "./gilded-rose";

describe("Gilded Rose", () => {
  it("doit diminuer la qualité d'un article normal", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item("foo", 10, 20)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(19);
  });

  it("doit diminuer sellIn d'un article normal", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item("foo", 10, 20)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].sellIn).toBe(9);
  });

  it("doit diminuer la qualité deux fois plus vite après expiration", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item("foo", 0, 10)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(8);
  });

  it("ne doit jamais avoir une qualité inférieure à 0", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item("foo", 5, 0)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(0);
  });

  it("doit augmenter la qualité de Aged Brie", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(AGEDBRIE, 10, 10)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(11);
  });

  it("ne doit pas augmenter la qualité de Aged Brie au-dessus de 50", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(AGEDBRIE, 10, 50)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(50);
  });

  it("doit augmenter la qualité des Backstage passes si sellIn > 10", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(BACKSTAGEPASSES, 11, 20)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(21);
  });

  it("doit augmenter la qualité des Backstage passes de 2 si sellIn est 10", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(BACKSTAGEPASSES, 10, 20)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(22);
  });

  it("doit augmenter la qualité des Backstage passes de 3 si sellIn est 5", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(BACKSTAGEPASSES, 5, 20)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(23);
  });

  it("doit réduire la qualité des Backstage passes à 0 après expiration", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(BACKSTAGEPASSES, 0, 20)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(0);
  });

  it("ne doit pas diminuer la qualité de Sulfuras", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(SULFURAS, 10, 80)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(80);
  });

  it("ne doit pas diminuer sellIn de Sulfuras", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(SULFURAS, 10, 80)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].sellIn).toBe(10);
  });

  it("doit augmenter la qualité de Aged Brie après expiration", () => {
    //GIVEN
    const gildedRose = new GildedRose([new Item(AGEDBRIE, -1, 10)]);
    //WHEN
    const items = gildedRose.updateQuality();
    //THEN
    expect(items[0].quality).toBe(12);
  });
});
