import prisma from '../lib/prisma.js';



async function main() {
  console.log('Starting complete database reset and seed...');

  // =========================================================================
  // delete Tutorials first before deleting VehicleModels!
  // =========================================================================
  // console.log('Wiping old data...');
  // await prisma.tutorial.deleteMany({});
  // await prisma.vehicleModel.deleteMany({});

  // =========================================================================
  // 2. SEED CATEGORIES
  // =========================================================================
  console.log('Seeding Categories...');
  const categories = [
    { id: 1, name: 'Basic Maintenance', slug: 'basic-maintenance', description: 'Everyday DIY car care and checks' },
    { id: 2, name: 'Wheels & Tyres', slug: 'wheels-tyres', description: 'Tyre changes, rotations, and pressure checks' },
    { id: 3, name: 'Electrical', slug: 'electrical', description: 'Batteries, fuses, bulbs, and remotes' },
    { id: 4, name: 'Fluids & Engine', slug: 'fluids-engine', description: 'Oil, coolant, spark plugs, and engine filters' },
    { id: 5, name: 'Brakes', slug: 'brakes', description: 'Brake pads, rotors, and brake fluid' }
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: {},
      create: cat,
    });
  }

  // =========================================================================
  // 3. SEED ALL VEHICLE MODELS
  // =========================================================================
  console.log('Seeding Vehicle Models...');
  await prisma.vehicleModel.createMany({
    data: [
      // 1. VOLKSWAGEN (id: 1)
      { manufacturerId: 1, modelEngineSize: 1.4, modelVariant: '1.4 TSI Comfortline', name: 'Golf 7', type: 'HATCHBACK', yearFrom: 2017 },
      { manufacturerId: 1, modelEngineSize: 2.0, modelVariant: '2.0 TSI GTI', name: 'Golf 8', type: 'HATCHBACK', yearFrom: 2021 },
      { manufacturerId: 1, modelEngineSize: 1.0, modelVariant: '1.0 TSI Life', name: 'T-Cross', type: 'SUV', yearFrom: 2020 },
      { manufacturerId: 1, modelEngineSize: 1.4, modelVariant: '1.4 TSI R-Line', name: 'Tiguan', type: 'SUV', yearFrom: 2019 },
      { manufacturerId: 1, modelEngineSize: 2.0, modelVariant: '2.0 BiTDI Double Cab Highline', name: 'Amarok', type: 'BAKKIE', yearFrom: 2018 },
      { manufacturerId: 1, modelEngineSize: 3.0, modelVariant: '3.0 V6 TDI Style', name: 'Amarok', type: 'BAKKIE', yearFrom: 2023 },

      // 2. VOLVO (id: 2)
      { manufacturerId: 2, modelEngineSize: 2.0, modelVariant: 'D4 Momentum', name: 'XC40', type: 'SUV', yearFrom: 2019 },
      { manufacturerId: 2, modelEngineSize: 2.0, modelVariant: 'T6 Inscription', name: 'XC90', type: 'SUV', yearFrom: 2018 },
      { manufacturerId: 2, modelEngineSize: 2.0, modelVariant: 'B5 Momentum', name: 'S60', type: 'SEDAN', yearFrom: 2021 },
      { manufacturerId: 2, modelEngineSize: 2.0, modelVariant: 'B6 R-Design', name: 'XC60', type: 'SUV', yearFrom: 2022 },

      // 3. AUDI (id: 3)
      { manufacturerId: 3, modelEngineSize: 1.0, modelVariant: '30 TFSI', name: 'A3 Sportback', type: 'HATCHBACK', yearFrom: 2021 },
      { manufacturerId: 3, modelEngineSize: 2.0, modelVariant: '35 TDI Advanced', name: 'A4', type: 'SEDAN', yearFrom: 2022 },
      { manufacturerId: 3, modelEngineSize: 1.4, modelVariant: '35 TFSI Urban Edition', name: 'Q3', type: 'SUV', yearFrom: 2020 },
      { manufacturerId: 3, modelEngineSize: 2.0, modelVariant: '40 TFSI Sportback', name: 'Q5', type: 'SUV', yearFrom: 2021 },

      // 4. BMW (id: 4)
      { manufacturerId: 4, modelEngineSize: 2.0, modelVariant: '320d M Sport', name: '3 Series', type: 'SEDAN', yearFrom: 2020 },
      { manufacturerId: 4, modelEngineSize: 2.0, modelVariant: 'sDrive20i M Sport', name: 'X1', type: 'SUV', yearFrom: 2023 },
      { manufacturerId: 4, modelEngineSize: 2.0, modelVariant: 'xDrive20d M Sport', name: 'X3', type: 'SUV', yearFrom: 2021 },
      { manufacturerId: 4, modelEngineSize: 1.5, modelVariant: '118i M Sport', name: '1 Series', type: 'HATCHBACK', yearFrom: 2019 },

      // 5. HONDA (id: 5)
      { manufacturerId: 5, modelEngineSize: 1.5, modelVariant: '1.5 Comfort', name: 'Ballade', type: 'SEDAN', yearFrom: 2021 },
      { manufacturerId: 5, modelEngineSize: 1.5, modelVariant: '1.5 i-VTEC Elegance', name: 'Fit', type: 'HATCHBACK', yearFrom: 2022 },
      { manufacturerId: 5, modelEngineSize: 1.5, modelVariant: '1.5 Executive', name: 'HR-V', type: 'SUV', yearFrom: 2022 },
      { manufacturerId: 5, modelEngineSize: 1.5, modelVariant: '1.5 Elegance', name: 'BR-V', type: 'SUV', yearFrom: 2023 },

      // 6. FORD (id: 6)
      { manufacturerId: 6, modelEngineSize: 2.0, modelVariant: '2.0 SiT XL Single Cab', name: 'Ranger', type: 'BAKKIE', yearFrom: 2023 },
      { manufacturerId: 6, modelEngineSize: 1.0, modelVariant: '1.0 EcoBoost Trend', name: 'EcoSport', type: 'SUV', yearFrom: 2019 },
      { manufacturerId: 6, modelEngineSize: 1.0, modelVariant: '1.0 EcoBoost Titanium', name: 'Fiesta', type: 'HATCHBACK', yearFrom: 2017 },
      { manufacturerId: 6, modelEngineSize: 2.0, modelVariant: '2.0 SiT XLT Chrome', name: 'Ranger SuperCab', type: 'BAKKIE', yearFrom: 2022 },

      // 8. NISSAN (id: 8)
      { manufacturerId: 8, modelEngineSize: 1.5, modelVariant: '1.5 dCi Acenta', name: 'Qashqai', type: 'SUV', yearFrom: 2018 },
      { manufacturerId: 8, modelEngineSize: 1.6, modelVariant: '1.6 Acenta', name: 'NP200', type: 'BAKKIE', yearFrom: 2019 },
      { manufacturerId: 8, modelEngineSize: 1.0, modelVariant: '1.0T Turbo Aura', name: 'Magnite', type: 'SUV', yearFrom: 2021 },
      { manufacturerId: 8, modelEngineSize: 2.5, modelVariant: '2.5 dCi Tekna 4x4', name: 'X-Trail', type: 'SUV', yearFrom: 2019 },

      // 9. HYUNDAI (id: 9)
      { manufacturerId: 9, modelEngineSize: 1.4, modelVariant: '1.4 Fluid', name: 'Grand i10', type: 'HATCHBACK', yearFrom: 2022 },
      { manufacturerId: 9, modelEngineSize: 1.6, modelVariant: '1.6 Executive', name: 'Creta', type: 'SUV', yearFrom: 2021 },
      { manufacturerId: 9, modelEngineSize: 1.2, modelVariant: '1.2 Fluid', name: 'Venue', type: 'SUV', yearFrom: 2020 },
      { manufacturerId: 9, modelEngineSize: 2.0, modelVariant: '2.0 Executive', name: 'Kona', type: 'SUV', yearFrom: 2021 },

      // 10. TOYOTA (id: 10)
      { manufacturerId: 10, modelEngineSize: 1.5, modelVariant: '1.5 Xs', name: 'Urban Cruiser', type: 'SUV', yearFrom: 2021 },
      { manufacturerId: 10, modelEngineSize: 2.4, modelVariant: '2.4 GD-6 Raider Single Cab', name: 'Hilux', type: 'BAKKIE', yearFrom: 2021 },
      { manufacturerId: 10, modelEngineSize: 1.2, modelVariant: '1.2T Luxury', name: 'C-HR', type: 'SUV', yearFrom: 2019 },
      { manufacturerId: 10, modelEngineSize: 1.4, modelVariant: '1.4 Xs', name: 'Starlet', type: 'HATCHBACK', yearFrom: 2020 },
      { manufacturerId: 10, modelEngineSize: 1.0, modelVariant: '1.0 XR', name: 'Vitz', type: 'HATCHBACK', yearFrom: 2023 },
      { manufacturerId: 10, modelEngineSize: 2.0, modelVariant: '2.0 VX', name: 'RAV4', type: 'SUV', yearFrom: 2019 },

      // 11. HAVAL (id: 11)
      { manufacturerId: 11, modelEngineSize: 1.5, modelVariant: '1.5T Luxury', name: 'Jolion', type: 'SUV', yearFrom: 2021 },
      { manufacturerId: 11, modelEngineSize: 2.0, modelVariant: '2.0T Super Luxury', name: 'H6', type: 'SUV', yearFrom: 2022 },
      { manufacturerId: 11, modelEngineSize: 2.0, modelVariant: '2.0T 4WD S', name: 'H6 GT', type: 'SUV', yearFrom: 2023 },

      // 12. MERCEDES-BENZ (id: 12)
      { manufacturerId: 12, modelEngineSize: 1.3, modelVariant: 'A200 AMG Line', name: 'A-Class', type: 'HATCHBACK', yearFrom: 2019 },
      { manufacturerId: 12, modelEngineSize: 2.0, modelVariant: 'C220d Avantgarde', name: 'C-Class', type: 'SEDAN', yearFrom: 2022 },
      { manufacturerId: 12, modelEngineSize: 2.0, modelVariant: 'GLC220d AMG Line', name: 'GLC', type: 'SUV', yearFrom: 2021 },

      // 13. MAZDA (id: 13)
      { manufacturerId: 13, modelEngineSize: 2.0, modelVariant: '2.0 Dynamic', name: 'CX-5', type: 'SUV', yearFrom: 2020 },
      { manufacturerId: 13, modelEngineSize: 1.5, modelVariant: '1.5 Dynamic', name: 'Mazda2', type: 'HATCHBACK', yearFrom: 2018 },
      { manufacturerId: 13, modelEngineSize: 2.0, modelVariant: '2.0 Astina', name: 'Mazda3', type: 'SEDAN', yearFrom: 2019 },

      // 14. RENAULT (id: 14)
      { manufacturerId: 14, modelEngineSize: 1.0, modelVariant: '1.0 Zen', name: 'Kwid', type: 'HATCHBACK', yearFrom: 2020 },
      { manufacturerId: 14, modelEngineSize: 1.5, modelVariant: '1.5 dCi Zen', name: 'Duster', type: 'SUV', yearFrom: 2021 },
      { manufacturerId: 14, modelEngineSize: 1.0, modelVariant: '1.0T Intens', name: 'Kiger', type: 'SUV', yearFrom: 2022 },

      // 15. PORSCHE (id: 15)
      { manufacturerId: 15, modelEngineSize: 3.0, modelVariant: 'Carrera', name: '911', type: 'SEDAN', yearFrom: 2020 },
      { manufacturerId: 15, modelEngineSize: 3.0, modelVariant: 'V6 Tiptronic', name: 'Cayenne', type: 'SUV', yearFrom: 2019 },
      { manufacturerId: 15, modelEngineSize: 2.0, modelVariant: 'PDK', name: 'Macan', type: 'SUV', yearFrom: 2021 },

      // 16. PEUGEOT (id: 16)
      { manufacturerId: 16, modelEngineSize: 1.2, modelVariant: '1.2T Allure', name: '208', type: 'HATCHBACK', yearFrom: 2021 },
      { manufacturerId: 16, modelEngineSize: 1.2, modelVariant: '1.2T GT', name: '2008', type: 'SUV', yearFrom: 2022 },
      { manufacturerId: 16, modelEngineSize: 1.9, modelVariant: '1.9 HDi Allure Double Cab', name: 'Landtrek', type: 'BAKKIE', yearFrom: 2022 }
    ],
    skipDuplicates: true,
  });

  // =========================================================================
  // 4. FETCH NEW VEHICLES & BUILD TUTORIALS
  // =========================================================================
  const vehicles = await prisma.vehicleModel.findMany();
  console.log(`Found ${vehicles.length} vehicles. Generating tutorials...`);

  const tutorialTemplates = [
    // --- CATEGORY 1: BASIC MAINTENANCE ---
    { title: 'Replace Squeaky Wiper Blades', slug: 'replace-squeaky-wiper-blades', description: 'Quickly remove old, worn-out wiper blades and snap on new ones for clear vision during rain.', difficulty: 'Beginner Level', estimatedTimeMinutes: 10, categoryId: 1, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_1' },
    { title: 'Replace Cabin Air Filter', slug: 'replace-cabin-air-filter', description: 'Improve your AC and heating airflow by swapping out a dirty cabin air filter usually located behind the glovebox.', difficulty: 'Beginner Level', estimatedTimeMinutes: 20, categoryId: 1, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_2' },
    { title: 'Top Up Windshield Washer Fluid', slug: 'top-up-washer-fluid', description: 'Locate the washer fluid reservoir and fill it up to ensure you can clean your windshield on the go.', difficulty: 'Beginner Level', estimatedTimeMinutes: 5, categoryId: 1, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_3' },
    { title: 'Restore Cloudy Headlights', slug: 'restore-cloudy-headlights', description: 'Use a simple restoration kit or toothpaste to polish oxidized headlights back to perfect clarity.', difficulty: 'Beginner Level', estimatedTimeMinutes: 30, categoryId: 1, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_4' },
    { title: 'Fix a Squeaky Car Door', slug: 'fix-squeaky-car-door', description: 'Clean and lubricate the door hinges and latch mechanisms to get rid of annoying squeaks.', difficulty: 'Beginner Level', estimatedTimeMinutes: 10, categoryId: 1, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_5' },

    // --- CATEGORY 2: WHEELS & TYRES ---
    { title: 'How to Change a Flat Tyre', slug: 'how-to-change-a-flat-tyre', description: 'A step-by-step guide to safely lifting your car with a jack and swapping a flat tyre with your spare.', difficulty: 'Beginner Level', estimatedTimeMinutes: 30, categoryId: 2, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_6' },
    { title: 'Check Tyre Pressure and Tread Depth', slug: 'check-tyre-pressure-tread', description: 'Learn how to use a pressure gauge and the coin test to make sure your tyres are safe for the road.', difficulty: 'Beginner Level', estimatedTimeMinutes: 10, categoryId: 2, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_7' },
    { title: 'How to Plug a Punctured Tyre', slug: 'plug-punctured-tyre', description: 'Find a nail in your tread? Learn how to use a simple tyre plug kit to seal the leak without removing the wheel.', difficulty: 'Intermediate Level', estimatedTimeMinutes: 25, categoryId: 2, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_8' },

    // --- CATEGORY 3: ELECTRICAL ---
    { title: 'Jumpstart a Dead Battery', slug: 'jumpstart-dead-battery', description: 'Learn the correct, safe order to connect jumper cables and revive a dead car battery.', difficulty: 'Beginner Level', estimatedTimeMinutes: 15, categoryId: 3, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_9' },
    { title: 'Replace the Car Battery', slug: 'replace-car-battery', description: 'Safely disconnect the negative and positive terminals, remove the battery hold-down, and install a new battery.', difficulty: 'Intermediate Level', estimatedTimeMinutes: 30, categoryId: 3, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_10' },
    { title: 'Replace a Burnt-Out Headlight Bulb', slug: 'replace-headlight-bulb', description: 'Access the back of the headlight housing and swap out a halogen or LED bulb without touching the glass.', difficulty: 'Beginner Level', estimatedTimeMinutes: 20, categoryId: 3, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_11' },
    { title: 'Replace a Tail Light / Brake Light', slug: 'replace-tail-light-bulb', description: 'Open the boot, remove the tail light housing cover, and twist in a fresh bulb to stay visible at night.', difficulty: 'Beginner Level', estimatedTimeMinutes: 15, categoryId: 3, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_12' },
    { title: 'Check and Replace a Blown Fuse', slug: 'check-replace-blown-fuse', description: 'Radio or 12V socket stopped working? Locate the fuse box, identify the blown fuse, and replace it.', difficulty: 'Beginner Level', estimatedTimeMinutes: 10, categoryId: 3, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_13' },
    { title: 'Replace Key Fob Battery', slug: 'replace-key-fob-battery', description: 'Pry open your car remote and swap out the dead coin-cell battery so your push-to-start and locks work again.', difficulty: 'Beginner Level', estimatedTimeMinutes: 5, categoryId: 3, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_14' },

    // --- CATEGORY 4: FLUIDS & ENGINE ---
    { title: 'Check and Top Up Engine Oil', slug: 'check-and-top-up-engine-oil', description: 'How to properly read the dipstick and safely add the correct amount of oil to your engine.', difficulty: 'Beginner Level', estimatedTimeMinutes: 10, categoryId: 4, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_15' },
    { title: 'Full Oil and Filter Change', slug: 'oil-and-filter-change', description: 'Drain the old engine oil, replace the spin-on or cartridge oil filter, and refill with fresh synthetic oil.', difficulty: 'Intermediate Level', estimatedTimeMinutes: 45, categoryId: 4, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_16' },
    { title: 'Replace Engine Air Filter', slug: 'replace-engine-air-filter', description: 'Unclip the airbox beneath the hood and drop in a fresh air filter to improve fuel economy and performance.', difficulty: 'Beginner Level', estimatedTimeMinutes: 10, categoryId: 4, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_17' },
    { title: 'Check and Top Up Engine Coolant', slug: 'top-up-engine-coolant', description: 'Identify the coolant reservoir and safely top it up with premixed antifreeze to prevent engine overheating.', difficulty: 'Beginner Level', estimatedTimeMinutes: 10, categoryId: 4, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_18' },
    { title: 'Replace Spark Plugs', slug: 'replace-spark-plugs', description: 'Remove ignition coils and use a spark plug socket to carefully extract and replace old spark plugs for a smoother idle.', difficulty: 'Intermediate Level', estimatedTimeMinutes: 60, categoryId: 4, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_19' },

    // --- CATEGORY 5: BRAKES ---
    { title: 'Replace Front Brake Pads', slug: 'replace-front-brake-pads', description: 'Safely lift the car, remove the caliper bolts, compress the brake piston, and install new brake pads to stop squealing.', difficulty: 'Advanced Level', estimatedTimeMinutes: 90, categoryId: 5, videoUrl: 'https://www.youtube.com/watch?v=dummy_video_20' }
  ];

  const tutorialsToInsert = [];

  for (const vehicle of vehicles) {
    for (const template of tutorialTemplates) {
      tutorialsToInsert.push({
        modelId: vehicle.id,
        categoryId: template.categoryId,
        title: template.title,
        slug: `${template.slug}-${vehicle.id}`,
        description: template.description,
        difficulty: template.difficulty,
        videoUrl: template.videoUrl,
        estimatedTimeMinutes: template.estimatedTimeMinutes
      });
    }
  }

  await prisma.tutorial.createMany({
    data: tutorialsToInsert,
    skipDuplicates: true 
  });

  console.log(`🎉 Success! Cleaned DB and seeded ${tutorialsToInsert.length} tutorials across ${vehicles.length} vehicles!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });