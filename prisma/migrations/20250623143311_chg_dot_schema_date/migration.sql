/*
  Warnings:

  - The `daterun` column on the `Dots` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Dots" DROP COLUMN "daterun",
ADD COLUMN     "daterun" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
