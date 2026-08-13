import prisma from "../src/lib/prisma.js";

async function main() {
  // 清空舊資料
  await prisma.collection.deleteMany();
  await prisma.vinyl.deleteMany();
  await prisma.user.deleteMany();

  // 建立測試黑膠唱片
  const vinyls = await prisma.vinyl.createMany({
    data: [
      {
        title: "Plastic Love / VARIETY",
        artist: "Mariya Takeuchi (竹內瑪莉亞)",
        coverImage:
          "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac",
        releaseYear: 1984,
        description: "昭和時代 City Pop 的經典代表作。",
      },
      {
        title: "Kind of Blue",
        artist: "Miles Davis",
        coverImage:
          "https://images.unsplash.com/photo-1603048588665-791ca8aea617",
        releaseYear: 1959,
        description: "史上最暢銷且最具影響力的爵士樂專輯之一。",
      },
      {
        title: "Abbey Road",
        artist: "The Beatles",
        coverImage:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        releaseYear: 1969,
        description: "披頭四樂團錄製的最後一張錄音室專輯。",
      },
    ],
  });

  console.log("✅ Seed 假資料建立成功！");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
