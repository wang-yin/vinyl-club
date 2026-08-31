import { Product } from "@/app/types/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    category: "vinyl",
    genre: "jazz",
    title: "Kind of Blue",
    artist: "Miles Davis",
    label: "Columbia Records",
    year: 1959,
    price: 45,
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=600&h=600&fit=crop&auto=format",
    badge: "Classic",
    description:
      "The best-selling jazz album of all time. Modal improvisation at its purest.",
  },
  {
    id: 2,
    category: "vinyl",
    genre: "rock",
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    label: "Harvest Records",
    year: 1973,
    price: 52,
    image:
      "https://images.unsplash.com/photo-1645523906730-894addb64d64?w=600&h=600&fit=crop&auto=format",
    badge: "Reissue",
    description:
      "A landmark of progressive rock. Pristine audiophile pressing from the original masters.",
  },
  {
    id: 3,
    category: "vinyl",
    genre: "jazz",
    title: "A Love Supreme",
    artist: "John Coltrane",
    label: "Impulse! Records",
    year: 1965,
    price: 48,
    image:
      "https://images.unsplash.com/photo-1766932016632-8b3b198cd8f4?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "Coltrane's spiritual masterpiece. Four movements of transcendent saxophone.",
  },
  {
    id: 4,
    category: "vinyl",
    genre: "rock",
    title: "OK Computer",
    artist: "Radiohead",
    label: "Parlophone",
    year: 1997,
    price: 38,
    image:
      "https://images.unsplash.com/photo-1610292810008-04e6651034a5?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "Paranoid android pop. This 2XLP pressing captures every layer of the mix.",
  },
  {
    id: 5,
    category: "vinyl",
    genre: "soul",
    title: "I Put a Spell on You",
    artist: "Nina Simone",
    label: "Philips Records",
    year: 1965,
    price: 42,
    image:
      "https://images.unsplash.com/photo-1703761141824-c0e25cc887cf?w=600&h=600&fit=crop&auto=format",
    badge: "Limited",
    description:
      "Nina Simone at her most commanding. Original Dutch pressing in VG++ condition.",
  },
  {
    id: 6,
    category: "vinyl",
    genre: "rock",
    title: "Abbey Road",
    artist: "The Beatles",
    label: "Apple Records",
    year: 1969,
    price: 55,
    image:
      "https://images.unsplash.com/photo-1526394931762-90052e97b376?w=600&h=600&fit=crop&auto=format",
    badge: "50th Anniv.",
    description:
      "The 2019 half-speed master recut by Miles Showell at Abbey Road Studios.",
  },
  {
    id: 7,
    category: "vinyl",
    genre: "soul",
    title: "What's Going On",
    artist: "Marvin Gaye",
    label: "Tamla / Motown",
    year: 1971,
    price: 44,
    image:
      "https://images.unsplash.com/photo-1598363943803-54a01af6fec1?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "Gaye's concept masterwork. The Motown Records 50th anniversary reissue.",
  },
  {
    id: 8,
    category: "vinyl",
    genre: "rock",
    title: "Blood on the Tracks",
    artist: "Bob Dylan",
    label: "Columbia Records",
    year: 1975,
    price: 40,
    image:
      "https://images.unsplash.com/photo-1513746347121-4cfd77c7dc37?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "Dylan's most emotionally raw record. An audiophile 180g pressing from Mobile Fidelity.",
  },
  {
    id: 9,
    category: "vinyl",
    genre: "electronic",
    title: "Music Has the Right to Children",
    artist: "Boards of Canada",
    label: "Warp Records",
    year: 1998,
    price: 58,
    image:
      "https://images.unsplash.com/photo-1569823035625-1af6550f37d4?w=600&h=600&fit=crop&auto=format",
    badge: "Rare",
    description:
      "The definitive electronic ambient album. Original 1998 UK pressing, near mint.",
  },
  {
    id: 10,
    category: "vinyl",
    genre: "electronic",
    title: "Mezzanine",
    artist: "Massive Attack",
    label: "Virgin Records",
    year: 1998,
    price: 46,
    image:
      "https://images.unsplash.com/photo-1645523906695-d33575166412?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "Dark trip-hop at its peak. 2019 remaster on heavyweight black vinyl.",
  },
  // ── Hardware ────────────────────────────────────────────────────────────
  {
    id: 11,
    category: "hardware",
    hwType: "turntable",
    title: "Debut Carbon EVO",
    artist: "Pro-Ject",
    label: "Turntable",
    year: 2021,
    price: 499,
    image:
      "https://images.unsplash.com/photo-1601148071764-8c3f50e9ab20?w=600&h=600&fit=crop&auto=format",
    badge: "Bestseller",
    description:
      "The gold standard entry-level audiophile deck. Ships with Ortofon 2M Red cartridge.",
  },
  {
    id: 12,
    category: "hardware",
    hwType: "turntable",
    title: "Planar 3",
    artist: "Rega",
    label: "Turntable",
    year: 2023,
    price: 945,
    image:
      "https://images.unsplash.com/photo-1601389926382-bcf545a238ab?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "Rega's benchmark mid-tier table. Phenolic plinth, hand-assembled RB330 tonearm.",
  },
  {
    id: 13,
    category: "hardware",
    hwType: "amplifier",
    title: "PM6007",
    artist: "Marantz",
    label: "Integrated Amplifier",
    year: 2022,
    price: 799,
    image:
      "https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "60W/ch of Marantz HDAM musicality. Built-in phono stage, headphone amp.",
  },
  {
    id: 14,
    category: "hardware",
    hwType: "turntable",
    title: "AT-LP120XUSB",
    artist: "Audio-Technica",
    label: "Turntable",
    year: 2022,
    price: 349,
    image:
      "https://images.unsplash.com/photo-1663174494200-7802f72775ba?w=600&h=600&fit=crop&auto=format",
    badge: "New",
    description:
      "Direct-drive reliability with USB output. Ideal for digitising your collection.",
  },
  {
    id: 15,
    category: "hardware",
    hwType: "speaker",
    title: "Debut 2.0 B6.2",
    artist: "ELAC",
    label: "Bookshelf Speakers",
    year: 2022,
    price: 329,
    image:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "Andrew Jones-designed drivers in a vented cabinet. Exceptional imaging for the price.",
  },
  {
    id: 16,
    category: "hardware",
    hwType: "amplifier",
    title: "AXR100D",
    artist: "Cambridge Audio",
    label: "Stereo Receiver",
    year: 2023,
    price: 599,
    image:
      "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "100W/ch with built-in DAB+ tuner, phono stage, and Bluetooth 5.0 aptX HD.",
  },
  {
    id: 17,
    category: "hardware",
    hwType: "accessory",
    title: "2M Red",
    artist: "Ortofon",
    label: "Phono Cartridge",
    year: 2023,
    price: 129,
    image:
      "https://images.unsplash.com/photo-1766932016632-8b3b198cd8f4?w=600&h=600&fit=crop&auto=format",
    badge: null,
    description:
      "The most popular cartridge in the world. Clean, detailed, upgradeable stylus.",
  },
  {
    id: 18,
    category: "hardware",
    hwType: "speaker",
    title: "Monitor 100",
    artist: "Q Acoustics",
    label: "Floorstanding Speakers",
    year: 2022,
    price: 799,
    image:
      "https://images.unsplash.com/photo-1561314105-e6ac04c2984a?w=600&h=600&fit=crop&auto=format",
    badge: "New",
    description:
      "Two-and-a-half-way design with Helmholtz pressure equaliser. Room-filling sound.",
  },
];
