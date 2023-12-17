// seed.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    // Seed data for the Race model
    const race1 = await prisma.race.create({
      data: {
        name: "Santos Tour Down Under",
        country_code: "AUS",
        category: "2.UWT",
        date: new Date("2024-01-16"),
      },
    });

    const race2 = await prisma.race.create({
      data: {
        name: "Cadel Evans Great Ocean Road Race",
        country_code: "AUS",
        category: "1.UWT",
        date: new Date("2024-01-28"),
      },
    });

    // Seed data for the BroadcastType model
    const broadcastType1 = await prisma.broadcastType.create({
      data: {
        code: "FREE",
        label: "Free",
      },
    });

    const broadcastType2 = await prisma.broadcastType.create({
      data: {
        code: "FREGEO",
        label: "Free géoblock",
      },
    });

    const broadcastType3 = await prisma.broadcastType.create({
      data: {
        code: "FREMIU",
        label: "Freemium",
      },
    });

    const broadcastType4 = await prisma.broadcastType.create({
      data: {
        code: "PAY",
        label: "Paywall",
      },
    });

    // Seed data for the Broadcast model
    const broadcast1 = await prisma.broadcast.create({
      data: {
        raceId: race1.id,
        name: "Broadcast 1",
        link: "https://example.com/broadcast1",
        country_code: "US",
        broadcastTypeId: broadcastType1.id,
      },
    });

    const broadcast2 = await prisma.broadcast.create({
      data: {
        raceId: race1.id,
        name: "Broadcast 2",
        link: "https://example.com/broadcast1",
        country_code: "US",
        broadcastTypeId: broadcastType1.id,
      },
    });

    console.log("Seed data created successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
