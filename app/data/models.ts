export interface ModelData {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  polycount: string;
  textures: string;
  software: string[];
  link?: string;
  thumbnailPosition?: string;
  thumbnailFit?: string;
}

export const models: ModelData[] = [
  {
    id: "dodge-charger",
    title: "Dodge Charger | Fast & Furious Fan Model (Blender)",
    category: "Vehicles",
    description:
      "Fast & Furious fan model of the iconic Dodge Charger. Detailed 3D recreation with accurate body work, interior details, and realistic materials.",
    image: "/images/charger-rendered.png",
    images: [
      "/images/charger-rendered.png",
      "/images/charger-front.jpg",
      "/images/charger-front-right.jpg",
      "/images/charger-back-right.jpg",
      "/images/charger-left.jpg",
    ],
    polycount: "65K",
    textures: "4K PBR",
    software: ["Blender"],
    link: "https://sketchfab.com/3d-models/fast-furious-charger-619132ee94fa4264af5741af260922b2",
  },
  {
    id: "miles-morales-room",
    title: "Miles Morales' Room | Scene Recreation W/ Reference (Unreal Engine)",
    category: "Environments",
    description:
      "Scene recreation with reference from Spider-Man: Into the Spider-Verse. Detailed interior environment capturing the character and atmosphere of the iconic bedroom.",
    image: "/images/miles-room.jpg",
    images: [
      "/images/miles-room.jpg",
      "/images/miles-room-reference.jpg",
    ],
    polycount: "120K",
    textures: "4K PBR",
    software: ["Unreal Engine"],
  },
  {
    id: "uss-enterprise",
    title: "USS Enterprise | Star Trek Ship Model (Maya)",
    category: "Vehicles",
    description:
      "Star Trek ship model featuring the legendary USS Enterprise. High-detail exterior with accurate proportions and design elements from the iconic series.",
    image: "/images/uss-rendered.png",
    images: [
      "/images/uss-rendered.png",
      "/images/uss-enterprise.jpg",
      "/images/uss-enterprise-2.jpg",
      "/images/uss-enterprise-3.jpg",
    ],
    thumbnailFit: "cover",
    thumbnailPosition: "center",
    polycount: "85K",
    textures: "4K PBR",
    software: ["Maya"],
  },
  {
    id: "acoustic-guitar",
    title: "Green Acoustic Guitar | 3D Model (Blender)",
    category: "Props",
    description:
      "Detailed acoustic guitar model with accurate body shape, realistic wood grain textures, and finely crafted fretboard and hardware.",
    image: "/images/acoustic-guitar.png",
    images: ["/images/acoustic-guitar.png"],
    polycount: "38K",
    textures: "4K PBR",
    software: ["Blender"],
  },
  {
    id: "coins",
    title: "Uncharted Coins | Rendered Collectible on Tabletop (Maya)",
    category: "Props",
    description:
      "Collectible coin set inspired by Uncharted. High-detail sculpt with aged metal textures and realistic surface imperfections.",
    image: "/images/coins.png",
    images: ["/images/coins.png"],
    polycount: "12K",
    textures: "4K PBR",
    software: ["Blender"],
  },
  {
    id: "mountain-bike",
    title: "Blue Bicycle | 3D Model (Maya)",
    category: "Vehicles",
    description:
      "Full mountain bike model with detailed frame geometry, suspension components, and realistic tire tread. Built for use in game environments.",
    image: "/images/mountain-bike.png",
    images: ["/images/mountain-bike.png", "/images/bike-frame.png"],
    polycount: "55K",
    textures: "4K PBR",
    software: ["Blender"],
  },
  {
    id: "door-scene",
    title: "Door Scene | Recreation of Real-World Photo (Blender)",
    category: "Environments",
    description:
      "Atmospheric door scene with detailed frame, panel, and surrounding environment. Designed for interactive use in game and VR projects.",
    image: "/images/door-scene.png",
    images: ["/images/door-scene.png"],
    polycount: "28K",
    textures: "4K PBR",
    software: ["Blender", "Unreal Engine"],
  },
];
