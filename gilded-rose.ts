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
      if (this.items[i].name !== SULFURAS) {
        if (
          this.items[i].name != AGEDBRIE &&
          this.items[i].name != BACKSTAGEPASSES
        ) {
          this._downgradeQualityIfPossible(this.items[i]);
        } else {
          this._upgradeQualityIfPossible(this.items[i]);
          if (this.items[i].name == BACKSTAGEPASSES) {
            this._updateBackstagePasses(this.items[i]);
          }
        }

        this.items[i];

        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != AGEDBRIE) {
            if (this.items[i].name != BACKSTAGEPASSES) {
              this._downgradeQualityIfPossible(this.items[i]);
            } else {
              this._resetQuality(this.items[i]);
            }
          } else {
            this._upgradeQualityIfPossible(this.items[i]);
          }
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

  _updateBackstagePasses(item) {
    if (item.sellIn < 11) this._upgradeQualityIfPossible(item);
    if (item.sellIn < 6) this._upgradeQualityIfPossible(item);
  }
}

export const AGEDBRIE = "Aged Brie";
export const BACKSTAGEPASSES = "Backstage passes to a TAFKAL80ETC concert";
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
