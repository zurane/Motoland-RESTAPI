/*
  Warnings:

  - The `modelEngineSize` column on the `VehicleModel` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "VehicleModel" DROP COLUMN "modelEngineSize",
ADD COLUMN     "modelEngineSize" INTEGER;
