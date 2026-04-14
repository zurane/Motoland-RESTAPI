/*
  Warnings:

  - You are about to drop the column `variant` on the `VehicleModel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VehicleModel" DROP COLUMN "variant",
ADD COLUMN     "modelEngineSize" TEXT;
