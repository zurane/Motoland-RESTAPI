import prisma from "../lib/prisma.js";

async function main() {
  console.log("Seeding vehicle models...");
  const vehicles = await prisma.vehicleModel.createMany({
    data: [
      // Audi (ID: 3)
      {
        manufacturerId: 3,
        name: "A4",
        modelVariant: "35 TFSI",
        modelEngineSize: 2.0,
        type: "SEDAN",
        yearFrom: 2021,
      },
      {
        manufacturerId: 3,
        name: "Q5",
        modelVariant: "40 TDI Quattro",
        modelEngineSize: 2.0,
        type: "SUV",
        yearFrom: 2022,
      },

      // BMW (ID: 4)
      {
        manufacturerId: 4,
        name: "3 Series",
        modelVariant: "320i M Sport",
        modelEngineSize: 2.0,
        type: "SEDAN",
        yearFrom: 2023,
      },
      {
        manufacturerId: 4,
        name: "X5",
        modelVariant: "xDrive30d",
        modelEngineSize: 3.0,
        type: "SUV",
        yearFrom: 2023,
      },

      // Honda (ID: 5)
      {
        manufacturerId: 5,
        name: "Civic",
        modelVariant: "Type R",
        modelEngineSize: 2.0,
        type: "HATCHBACK",
        yearFrom: 2023,
      },
      {
        manufacturerId: 5,
        name: "CR-V",
        modelVariant: "1.5T Executive",
        modelEngineSize: 1.5,
        type: "SUV",
        yearFrom: 2021,
      },

      // Ford (ID: 6)
      {
        manufacturerId: 6,
        name: "Ranger",
        modelVariant: "Wildtrak 3.0 V6",
        modelEngineSize: 3.0,
        type: "BAKKIE",
        yearFrom: 2023,
      },
      {
        manufacturerId: 6,
        name: "Everest",
        modelVariant: "2.0 Bi-Turbo Sport",
        modelEngineSize: 2.0,
        type: "SUV",
        yearFrom: 2022,
      },

      // Nissan (ID: 8)
      {
        manufacturerId: 8,
        name: "Qashqai",
        modelVariant: "1.3T Acenta",
        modelEngineSize: 1.3,
        type: "SUV",
        yearFrom: 2022,
      },
      {
        manufacturerId: 8,
        name: "Navara",
        modelVariant: "2.5 DDTi Pro-4X",
        modelEngineSize: 2.5,
        type: "BAKKIE",
        yearFrom: 2021,
      },

      // Hyundai (ID: 9)
      {
        manufacturerId: 9,
        name: "Tucson",
        modelVariant: "2.0 Elite",
        modelEngineSize: 2.0,
        type: "SUV",
        yearFrom: 2021,
      },
      {
        manufacturerId: 9,
        name: "i20",
        modelVariant: "1.2 Motion",
        modelEngineSize: 1.2,
        type: "HATCHBACK",
        yearFrom: 2022,
      },

      // Toyota (ID: 10)
      {
        manufacturerId: 10,
        name: "Corolla",
        modelVariant: "1.8 Hybrid",
        modelEngineSize: 1.8,
        type: "SEDAN",
        yearFrom: 2020,
      },
      {
        manufacturerId: 10,
        name: "Fortuner",
        modelVariant: "2.8 GD-6 VX",
        modelEngineSize: 2.8,
        type: "SUV",
        yearFrom: 2023,
      },
      {
        manufacturerId: 10,
        name: "Hilux",
        modelVariant: "2.8 GD-6 Raider",
        modelEngineSize: 2.8,
        type: "BAKKIE",
        yearFrom: 2022,
      },

      // Haval (ID: 11)
      {
        manufacturerId: 11,
        name: "Jolion",
        modelVariant: "1.5T Premium",
        modelEngineSize: 1.5,
        type: "SUV",
        yearFrom: 2022,
      },
      {
        manufacturerId: 11,
        name: "H6",
        modelVariant: "2.0T Super Luxury",
        modelEngineSize: 2.0,
        type: "SUV",
        yearFrom: 2021,
      },

      // Mercedes-Benz (ID: 12)
      {
        manufacturerId: 12,
        name: "C-Class",
        modelVariant: "C200 AMG Line",
        modelEngineSize: 1.5,
        type: "SEDAN",
        yearFrom: 2022,
      },
      {
        manufacturerId: 12,
        name: "GLC",
        modelVariant: "GLC 220d",
        modelEngineSize: 2.0,
        type: "SUV",
        yearFrom: 2023,
      },

      // Mazda (ID: 13)
      {
        manufacturerId: 13,
        name: "CX-5",
        modelVariant: "2.0 Active",
        modelEngineSize: 2.0,
        type: "SUV",
        yearFrom: 2021,
      },
      {
        manufacturerId: 13,
        name: "Mazda3",
        modelVariant: "1.5 Astina",
        modelEngineSize: 1.5,
        type: "HATCHBACK",
        yearFrom: 2020,
      },

      // Renault (ID: 14)
      {
        manufacturerId: 14,
        name: "Clio",
        modelVariant: "1.0 Turbo Zen",
        modelEngineSize: 1.0,
        type: "HATCHBACK",
        yearFrom: 2022,
      },
      {
        manufacturerId: 14,
        name: "Duster",
        modelVariant: "1.5 dCi Zen",
        modelEngineSize: 1.5,
        type: "SUV",
        yearFrom: 2021,
      },

      // Porsche (ID: 15)
      {
        manufacturerId: 15,
        name: "911",
        modelVariant: "Carrera S",
        modelEngineSize: 3.0,
        type: "COUPE",
        yearFrom: 2021,
      },
      {
        manufacturerId: 15,
        name: "Macan",
        modelVariant: "Macan S",
        modelEngineSize: 2.9,
        type: "SUV",
        yearFrom: 2022,
      },

      // Peugeot (ID: 16)
      {
        manufacturerId: 16,
        name: "208",
        modelVariant: "1.2T Allure",
        modelEngineSize: 1.2,
        type: "HATCHBACK",
        yearFrom: 2021,
      },
      {
        manufacturerId: 16,
        name: "3008",
        modelVariant: "1.6T Allure",
        modelEngineSize: 1.6,
        type: "SUV",
        yearFrom: 2022,
      },
    ],
    skipDuplicates: true,
  });
  console.table(vehicles);
  console.log(`Seeded ${vehicles.count} vehicle models.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
