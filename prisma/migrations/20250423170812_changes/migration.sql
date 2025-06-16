/*
  Warnings:

  - Changed the type of `workoutDate` on the `Workouts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Workouts" DROP COLUMN "workoutDate",
ADD COLUMN     "workoutDate" TIMESTAMP(3) NOT NULL;
