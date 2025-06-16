/*
  Warnings:

  - The primary key for the `Dots` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `rundate` on the `Dots` table. All the data in the column will be lost.
  - The primary key for the `Exercises` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `Exercises` table. All the data in the column will be lost.
  - You are about to drop the column `reps` on the `Exercises` table. All the data in the column will be lost.
  - The `id` column on the `Exercises` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `daterun` to the `Dots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ballrolls` to the `Exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deadlifts` to the `Exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exerdate` to the `Exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kneeups` to the `Exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pushups` to the `Exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `situps` to the `Exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dots" DROP CONSTRAINT "Dots_pkey",
DROP COLUMN "rundate",
ADD COLUMN     "Comments" TEXT,
ADD COLUMN     "daterun" TEXT NOT NULL,
ADD COLUMN     "shoes" TEXT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "createdAt" DROP DEFAULT,
ADD CONSTRAINT "Dots_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Exercises" DROP CONSTRAINT "Exercises_pkey",
DROP COLUMN "name",
DROP COLUMN "reps",
ADD COLUMN     "ballrolls" INTEGER NOT NULL,
ADD COLUMN     "deadlifts" INTEGER NOT NULL,
ADD COLUMN     "exerdate" TEXT NOT NULL,
ADD COLUMN     "kneeups" INTEGER NOT NULL,
ADD COLUMN     "pushups" INTEGER NOT NULL,
ADD COLUMN     "situps" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Hills" (
    "id" SERIAL NOT NULL,
    "hilldate" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "nhf" TEXT NOT NULL,
    "shoes" TEXT NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "Hills_pkey" PRIMARY KEY ("id")
);
