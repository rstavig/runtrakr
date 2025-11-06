/*
  Warnings:

  - The `workoutDate` column on the `Workouts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Workouts" DROP COLUMN "workoutDate",
ADD COLUMN     "workoutDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
