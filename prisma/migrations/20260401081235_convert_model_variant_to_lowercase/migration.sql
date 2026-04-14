/*
  Warnings:

  - You are about to drop the column `ModelVariant` on the `VehicleModel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VehicleModel" DROP COLUMN "ModelVariant",
ADD COLUMN     "modelVariant" TEXT;
