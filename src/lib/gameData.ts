export type CharacterId = "badger" | "rabbit" | "fox" | "bear";
export type ClothingSlot = "hat" | "top" | "bottom" | "shoes";
export type Season = "spring" | "summer" | "fall" | "winter";

export interface ClothingItem {
  id: string;
  name: string;
  slot: ClothingSlot;
  season: Season;
}

export interface Equipped {
  hat: string | null;
  top: string | null;
  bottom: string | null;
  shoes: string | null;
}

export const characters: { id: CharacterId; name: string; label: string }[] = [
  { id: "badger", name: "Bramble", label: "Badger" },
  { id: "rabbit", name: "Clover", label: "Rabbit" },
  { id: "fox", name: "Rusty", label: "Fox" },
  { id: "bear", name: "Maple", label: "Bear" },
];

export const seasonLabels: Record<Season, string> = {
  spring: "Spring",
  summer: "Summer",
  fall: "Fall",
  winter: "Winter",
};

export const seasonColors: Record<Season, { bg: string; active: string; border: string }> = {
  spring: { bg: "#E8F5E0", active: "#6BAF5B", border: "#4A8B3A" },
  summer: { bg: "#E0F0F8", active: "#2E9ECE", border: "#1B7BA8" },
  fall: { bg: "#FFF0E0", active: "#C7522A", border: "#A04020" },
  winter: { bg: "#E8E8F8", active: "#6B6BAF", border: "#4A4A8B" },
};

export const slotLabels: Record<ClothingSlot, string> = {
  hat: "Hats",
  top: "Tops",
  bottom: "Bottoms",
  shoes: "Shoes",
};

export const clothingItems: ClothingItem[] = [
  // ═══════════ FALL ═══════════
  // Hats
  { id: "mushroom-beret", name: "Mushroom Beret", slot: "hat", season: "fall" },
  { id: "leaf-crown", name: "Leaf Crown", slot: "hat", season: "fall" },
  { id: "cozy-beanie", name: "Cozy Beanie", slot: "hat", season: "fall" },
  { id: "acorn-cap", name: "Acorn Cap", slot: "hat", season: "fall" },
  { id: "pumpkin-hat", name: "Pumpkin Hat", slot: "hat", season: "fall" },
  // Tops
  { id: "floral-sweater", name: "Floral Sweater", slot: "top", season: "fall" },
  { id: "plaid-jacket", name: "Plaid Jacket", slot: "top", season: "fall" },
  { id: "polka-vest", name: "Polka Dot Vest", slot: "top", season: "fall" },
  { id: "cozy-cardigan", name: "Cozy Cardigan", slot: "top", season: "fall" },
  { id: "harvest-poncho", name: "Harvest Poncho", slot: "top", season: "fall" },
  // Bottoms
  { id: "checkered-skirt", name: "Checkered Skirt", slot: "bottom", season: "fall" },
  { id: "corduroy-pants", name: "Corduroy Pants", slot: "bottom", season: "fall" },
  { id: "leaf-shorts", name: "Leaf Shorts", slot: "bottom", season: "fall" },
  { id: "ruffled-skirt", name: "Ruffled Skirt", slot: "bottom", season: "fall" },
  { id: "patchwork-pants", name: "Patchwork Pants", slot: "bottom", season: "fall" },
  // Shoes
  { id: "rain-boots", name: "Rain Boots", slot: "shoes", season: "fall" },
  { id: "fur-boots", name: "Fur Boots", slot: "shoes", season: "fall" },
  { id: "flower-shoes", name: "Flower Shoes", slot: "shoes", season: "fall" },
  { id: "acorn-boots", name: "Acorn Boots", slot: "shoes", season: "fall" },
  { id: "maple-clogs", name: "Maple Clogs", slot: "shoes", season: "fall" },

  // ═══════════ WINTER ═══════════
  // Hats
  { id: "snowflake-beanie", name: "Snowflake Beanie", slot: "hat", season: "winter" },
  { id: "earmuff-band", name: "Earmuffs", slot: "hat", season: "winter" },
  { id: "santa-hat", name: "Santa Hat", slot: "hat", season: "winter" },
  { id: "icicle-crown", name: "Icicle Crown", slot: "hat", season: "winter" },
  { id: "pine-beret", name: "Pine Beret", slot: "hat", season: "winter" },
  // Tops
  { id: "puffy-coat", name: "Puffy Coat", slot: "top", season: "winter" },
  { id: "fairisle-sweater", name: "Fair Isle Sweater", slot: "top", season: "winter" },
  { id: "velvet-cape", name: "Velvet Cape", slot: "top", season: "winter" },
  { id: "snowflake-hoodie", name: "Snowflake Hoodie", slot: "top", season: "winter" },
  { id: "reindeer-vest", name: "Reindeer Vest", slot: "top", season: "winter" },
  // Bottoms
  { id: "snow-pants", name: "Snow Pants", slot: "bottom", season: "winter" },
  { id: "plaid-wool-skirt", name: "Plaid Wool Skirt", slot: "bottom", season: "winter" },
  { id: "fleece-leggings", name: "Fleece Leggings", slot: "bottom", season: "winter" },
  { id: "candy-overalls", name: "Candy Overalls", slot: "bottom", season: "winter" },
  { id: "velvet-skirt", name: "Velvet Skirt", slot: "bottom", season: "winter" },
  // Shoes
  { id: "snow-boots", name: "Snow Boots", slot: "shoes", season: "winter" },
  { id: "ice-skates", name: "Ice Skates", slot: "shoes", season: "winter" },
  { id: "cozy-slippers", name: "Cozy Slippers", slot: "shoes", season: "winter" },
  { id: "candy-cane-boots", name: "Candy Cane Boots", slot: "shoes", season: "winter" },
  { id: "woolly-booties", name: "Woolly Booties", slot: "shoes", season: "winter" },

  // ═══════════ SPRING ═══════════
  // Hats
  { id: "flower-crown-spring", name: "Flower Crown", slot: "hat", season: "spring" },
  { id: "bunny-ears", name: "Bunny Ears", slot: "hat", season: "spring" },
  { id: "rain-hat", name: "Rain Hat", slot: "hat", season: "spring" },
  { id: "daisy-beret", name: "Daisy Beret", slot: "hat", season: "spring" },
  { id: "butterfly-bow", name: "Butterfly Bow", slot: "hat", season: "spring" },
  // Tops
  { id: "rainbow-cardigan", name: "Rainbow Cardigan", slot: "top", season: "spring" },
  { id: "floral-blouse", name: "Floral Blouse", slot: "top", season: "spring" },
  { id: "denim-jacket", name: "Denim Jacket", slot: "top", season: "spring" },
  { id: "garden-apron", name: "Garden Apron", slot: "top", season: "spring" },
  { id: "ladybug-vest", name: "Ladybug Vest", slot: "top", season: "spring" },
  // Bottoms
  { id: "floral-skirt", name: "Floral Skirt", slot: "bottom", season: "spring" },
  { id: "spring-overalls", name: "Spring Overalls", slot: "bottom", season: "spring" },
  { id: "tulip-shorts", name: "Tulip Shorts", slot: "bottom", season: "spring" },
  { id: "gingham-skirt", name: "Gingham Skirt", slot: "bottom", season: "spring" },
  { id: "pastel-pants", name: "Pastel Pants", slot: "bottom", season: "spring" },
  // Shoes
  { id: "garden-clogs", name: "Garden Clogs", slot: "shoes", season: "spring" },
  { id: "rain-galoshes", name: "Rain Galoshes", slot: "shoes", season: "spring" },
  { id: "daisy-sandals", name: "Daisy Sandals", slot: "shoes", season: "spring" },
  { id: "butterfly-slippers", name: "Butterfly Slippers", slot: "shoes", season: "spring" },
  { id: "lace-boots", name: "Lace Boots", slot: "shoes", season: "spring" },

  // ═══════════ SUMMER ═══════════
  // Hats
  { id: "sun-hat", name: "Sun Hat", slot: "hat", season: "summer" },
  { id: "sailor-cap", name: "Sailor Cap", slot: "hat", season: "summer" },
  { id: "tropical-crown", name: "Tropical Crown", slot: "hat", season: "summer" },
  { id: "beach-visor", name: "Beach Visor", slot: "hat", season: "summer" },
  { id: "watermelon-cap", name: "Watermelon Cap", slot: "hat", season: "summer" },
  // Tops
  { id: "hawaiian-shirt", name: "Hawaiian Shirt", slot: "top", season: "summer" },
  { id: "striped-tank", name: "Striped Tank", slot: "top", season: "summer" },
  { id: "seashell-vest", name: "Seashell Vest", slot: "top", season: "summer" },
  { id: "tiedye-tee", name: "Tie-Dye Tee", slot: "top", season: "summer" },
  { id: "sailor-top", name: "Sailor Top", slot: "top", season: "summer" },
  // Bottoms
  { id: "beach-shorts", name: "Beach Shorts", slot: "bottom", season: "summer" },
  { id: "grass-skirt", name: "Grass Skirt", slot: "bottom", season: "summer" },
  { id: "tropical-skirt", name: "Tropical Skirt", slot: "bottom", season: "summer" },
  { id: "denim-cutoffs", name: "Denim Cutoffs", slot: "bottom", season: "summer" },
  { id: "wave-shorts", name: "Wave Shorts", slot: "bottom", season: "summer" },
  // Shoes
  { id: "flip-flops", name: "Flip Flops", slot: "shoes", season: "summer" },
  { id: "beach-sandals", name: "Beach Sandals", slot: "shoes", season: "summer" },
  { id: "water-shoes", name: "Water Shoes", slot: "shoes", season: "summer" },
  { id: "starfish-slippers", name: "Starfish Slippers", slot: "shoes", season: "summer" },
  { id: "nautical-boots", name: "Nautical Boots", slot: "shoes", season: "summer" },
];
