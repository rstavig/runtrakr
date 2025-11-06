/*
  Warnings:

  - The `date` column on the `Hills` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Hills" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Workouts" ALTER COLUMN "deadlifts" DROP NOT NULL,
ALTER COLUMN "ballrolls" DROP NOT NULL,
ALTER COLUMN "kneeups" DROP NOT NULL;
