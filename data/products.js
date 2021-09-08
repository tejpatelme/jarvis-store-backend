const products = [
  {
    name: "Edge Icons",
    description:
      "Outline icons that work in any style of design project. Get 150 icons in 3 styles of line: medium, regular, thin",
    category: "Icons",
    software: "Figma",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/08/free-edge-icons-thumb-768x576.jpg",
    price: 2500,
    by: "Craftwork",
  },
  {
    name: "Heroicons",
    description:
      "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS",
    category: "Icons",
    software: "Figma",
    imageURL:
      "https://s3.us-west-1.wasabisys.com/uistore/assets/images/heroicons-thumb.jpg",
    price: 3000,
    by: "heroicons.com",
  },
  {
    name: "Glass Icons",
    description:
      "A pack of icons with a frosted glass look and a vivid color scheme made in Sketch.",
    category: "Icons",
    software: "Sketch",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/05/glass-icons-r8-768x576.jpg",
    price: 5000,
    by: "J.hong",
  },
  {
    name: "Key Icons",
    description:
      "This kit contains +100 icons, 24×24 size pixel perfect which are compatible with Sketch & Figma. It is also compatible with Protopie & Framer.",
    category: "Icons",
    software: "Sketch",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2020/06/keyicons-thumb-768x576.jpg",
    price: 5000,
    by: "@noyonosoyesa & @elnodos",
  },
  {
    name: "Notification Icons",
    description:
      "Colorful and lively notifications icons of different style to suit all needs",
    category: "Icons",
    software: "Adobe XD",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2020/07/notification-icon-set-600x340-1-1.jpg",
    price: 4500,
    by: "Unknown",
  },
  {
    name: "Arrow Icons Set",
    description:
      "This contains 60 vector that can be edited through Adobe Illustrator and SVG.",
    category: "Icons",
    software: "Adobe Illustrator",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2020/04/arrow-set-thumb-768x576.jpg",
    price: 4500,
    by: "Apply Pixels",
  },
  {
    name: "3D Cartoon Illustrations",
    description:
      "A collection of 3D cartoon hands, hand-crafted to use for your design and illustrations!",
    category: "Illustrations",
    software: "Figma",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/07/free-3d-cartoon-hands-for-figma-thumb-768x576.jpg",
    price: 7000,
    by: "Lionel Taurus",
  },
  {
    name: "SALY – 3D Illustrations",
    description:
      "Collection of high-quality 3D illustrations, hand-crafted and full of personalities.",
    category: "Illustrations",
    software: "Figma",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/06/AA-768x436.png",
    price: 9000,
    by: "Alzea",
  },
  {
    name: "75 illustrations – Surface",
    description:
      "This kit contains 75 free illustrations of different everyday thigns and objects for your design/product",
    category: "Illustrations",
    software: "Figma",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/04/fdf99b56-0b10-4011-86a6-695a4b1b8dfe-cover-768x414.png",
    price: 9000,
    by: "Treetop",
  },
  {
    name: "Blues Dual Tone Illustrations",
    description:
      "Blues illustrations are made for use in website interface, app design or printed material",
    category: "Illustrations",
    software: "Adobe Illustrator",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/02/blues-dual-tone-free-illustrations-thumb-768x576.jpg",
    price: 7500,
    by: "Getillustrations",
  },
  {
    name: "404 Illustrations",
    description:
      "This kit contains scenes for 404 pages to use in your website",
    category: "Illustrations",
    software: "Sketch",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2020/05/404-illustrations-thumb-768x576.jpg",
    price: 7000,
    by: "craftwork.design",
  },
  {
    name: "Wireframe Kit for Adobe XD",
    description:
      "This is going to save you time and it will help you to impress your clients with great looking wireframes.",
    category: "Wireframe",
    software: "Adobe XD",
    imageURL:
      "https://s3.us-west-1.wasabisys.com/uistore/assets/images/Free-wireframe-kits-for-Adobe-XD-thumb.jpg",
    price: 8000,
    by: "CE ALi Omar",
  },
  {
    name: "ios 14 UI Wireframe kit",
    description:
      "Minimal and clean app design. This one features 120 screens you can use for wireframing your iPhone app ideas.",
    category: "Wireframe",
    software: "Adobe XD",
    imageURL:
      "https://s3.us-west-1.wasabisys.com/uistore/assets/images/ios-14-wireframe-ui-kit-for-adobe-xd-thumb.jpg",
    price: 9500,
    by: "Brigita",
  },
  {
    name: "Hand-drawn wireframe kit for Figma",
    description:
      "With this kit, you can enhance your hand-drawn sketches in Figma All lines have variable width for that wobbly marker look and you can adjust the stroke width to that of your markers and pens.",
    category: "Wireframe",
    software: "Figma",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/07/2550f87a-ccd8-4088-8faa-5d6cac079573-cover-768x531.png",
    price: 9500,
    by: "Koos",
  },
  {
    name: "Easy-Peasy Wireframe Kit",
    description:
      "Here’s a quick and simple fix for seamlessly crafting wireframes and prototypes for your design projects.",
    category: "Wireframe",
    software: "Figma",
    imageURL:
      "https://assets.uigarage.net/content/uploads/2021/07/49a3a464-7a7e-4967-b306-342a4ab0717c-cover-768x384.png",
    price: 8500,
    by: "Estefanía Montaña",
  },
  {
    name: "Printable wireframe template",
    description:
      "Free printable templates for your mobile sketching. Start creating your app with a clean mind and representation of a screen structure. There are 12 devices in the pack, for both iPhone and Android, so you can display on multiple devices.",
    category: "Wireframe",
    software: "None",
    imageURL:
      "https://s3.us-west-1.wasabisys.com/uistore/assets/images/printables-free-template-for-figma-thumb.jpg",
    price: 6000,
    by: "Craftwork",
  },
];

module.exports = products;
