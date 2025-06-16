/*
  Warnings:

  - You are about to drop the column `Comments` on the `Dots` table. All the data in the column will be lost.
  - The primary key for the `Hills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Hills` table. All the data in the column will be lost.
  - You are about to drop the column `hilldate` on the `Hills` table. All the data in the column will be lost.
  - You are about to drop the column `nhf` on the `Hills` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Hills` table. All the data in the column will be lost.
  - You are about to drop the column `shoes` on the `Hills` table. All the data in the column will be lost.
  - The `id` column on the `Hills` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `best` column on the `Hills` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `et` to the `Hills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numHills` to the `Hills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dots" DROP COLUMN "Comments",
ADD COLUMN     "comments" TEXT;

-- AlterTable
ALTER TABLE "Hills" DROP CONSTRAINT "Hills_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "hilldate",
DROP COLUMN "nhf",
DROP COLUMN "number",
DROP COLUMN "shoes",
ADD COLUMN     "date" TEXT NOT NULL DEFAULT 'date',
ADD COLUMN     "et" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "numHills" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "best",
ADD COLUMN     "best" DOUBLE PRECISION,
ADD CONSTRAINT "Hills_pkey" PRIMARY KEY ("id");
