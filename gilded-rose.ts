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
      if (this.items[i].name === SULFURAS) continue;

      if (
        this.items[i].name != AGEDBRIE &&
        this.items[i].name != BACKSTAGEPASSES
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != SULFURAS) {
            this._downgradeQuality(this.items[i]);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this._upgradeQuality(this.items[i]);
          if (this.items[i].name == BACKSTAGEPASSES) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this._upgradeQuality(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this._upgradeQuality(this.items[i]);
              }
            }
          }
        }
      }
      if (this.items[i].name != SULFURAS) {
        this._downgradeSellIn(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != AGEDBRIE) {
          if (this.items[i].name != BACKSTAGEPASSES) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != SULFURAS) {
                this._downgradeQuality(this.items[i]);
              }
            }
          } else {
            this._resetQuality(this.items[i]);
          }
        } else {
          if (this.items[i].quality < 50) {
            this._upgradeQuality(this.items[i]);
          }
        }
      }
    }

    return this.items;
  }

  private _upgradeQuality(item: Item) {
    item.quality += 1;
  }

  private _downgradeQuality(item: Item) {
    item.quality -= 1;
  }

  private _resetQuality(item: Item) {
    item.quality = 0;
  }

  private _downgradeSellIn(item: Item) {
    item.sellIn -= 1;
  }
}

export const AGEDBRIE = "Aged Brie";
export const BACKSTAGEPASSES = "Backstage passes to a TAFKAL80ETC concert";
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
