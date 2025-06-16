/*
  Warnings:

  - You are about to drop the `Exercises` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Exercises";

-- CreateTable
CREATE TABLE "Workouts" (
    "id" SERIAL NOT NULL,
    "workoutDate" TEXT NOT NULL,
    "situps" INTEGER NOT NULL,
    "pushups" INTEGER NOT NULL,
    "deadlifts" INTEGER NOT NULL,
    "ballrolls" INTEGER NOT NULL,
    "kneeups" INTEGER NOT NULL,
    "comments" TEXT,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "Workouts_pkey" PRIMARY KEY ("id")
);
