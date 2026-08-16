import prisma from "../src/lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  // 清空舊資料
  await prisma.collection.deleteMany();
  await prisma.vinyl.deleteMany();
  await prisma.user.deleteMany();

  // 建立預設管理者帳號
  const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
  const rawPassword = process.env.ADMIN_PASSWORD || "Admin123456!";
  const hashedPassword = await bcrypt.hash(rawPassword, 10);

  const admin = await prisma.user.create({
    data: {
      email: adminEmail,
      password: hashedPassword,
      name: "系統管理者",
      role: "ADMIN",
    },
  });

  console.log(`管理者帳號建立成功：${admin.email}`);

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

  console.log("測試黑膠唱片建立成功！");
  console.log("Seed 假資料建立成功！");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
