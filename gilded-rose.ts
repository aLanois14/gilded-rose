export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name === SULFURAS) continue;

      const isAgedBrie = item.name === AGEDBRIE;
      const isBackstagePasses = item.name === BACKSTAGEPASSES;

      if (isAgedBrie) {
        this._upgradeQualityIfPossible(item);
      } else if (isBackstagePasses) {
        this._upgradeQualityIfPossible(item);
        this._updateBackstagePasses(item);
      } else {
        this._downgradeQualityIfPossible(item);
      }

      this._downgradeSellIn(item);

      if (item.sellIn < 0) {
        if (isAgedBrie) {
          this._upgradeQualityIfPossible(item);
        } else if (isBackstagePasses) {
          this._resetQuality(item);
        } else {
          this._downgradeQualityIfPossible(item);
        }
      }
    }

    return this.items;
  }

  private _upgradeQualityIfPossible(item: Item) {
    if (item.quality < 50) item.quality += 1;
  }

  private _downgradeQualityIfPossible(item: Item) {
    if (item.quality > 0) item.quality -= 1;
  }

  private _resetQuality(item: Item) {
    item.quality = 0;
  }

  private _downgradeSellIn(item: Item) {
    if (item.name != SULFURAS) item.sellIn -= 1;
  }

  _updateBackstagePasses(item) {
    if (item.sellIn < 11) this._upgradeQualityIfPossible(item);
    if (item.sellIn < 6) this._upgradeQualityIfPossible(item);
  }
}

export const AGEDBRIE = "Aged Brie";
export const BACKSTAGEPASSES = "Backstage passes to a TAFKAL80ETC concert";
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
