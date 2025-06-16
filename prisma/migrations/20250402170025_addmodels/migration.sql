/*
  Warnings:

  - Added the required column `best` to the `Hills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercises" ALTER COLUMN "createdAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Hills" ADD COLUMN     "best" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3),
ALTER COLUMN "nhf" DROP NOT NULL,
ALTER COLUMN "shoes" DROP NOT NULL,
ALTER COLUMN "comments" DROP NOT NULL;
