import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.posts.createMany({
    data: [
      { title: "My first post", content: "This is my first post", status: "published" },
      { title: "My second post", content: "This is my second post", status: "published" },
      { title: "My third post", content: "This is my third post", status: "published" },
    ],
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
