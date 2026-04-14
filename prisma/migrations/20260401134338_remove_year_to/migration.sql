/*
  Warnings:

  - You are about to drop the column `yearTo` on the `VehicleModel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name,manufacturerId,yearFrom]` on the table `VehicleModel` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "VehicleModel_name_manufacturerId_yearFrom_yearTo_key";

-- AlterTable
ALTER TABLE "VehicleModel" DROP COLUMN "yearTo";

-- CreateIndex
CREATE UNIQUE INDEX "VehicleModel_name_manufacturerId_yearFrom_key" ON "VehicleModel"("name", "manufacturerId", "yearFrom");
