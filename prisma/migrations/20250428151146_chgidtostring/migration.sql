/*
  Warnings:

  - The primary key for the `Hills` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Workouts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Hills" DROP CONSTRAINT "Hills_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Hills_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Hills_id_seq";

-- AlterTable
ALTER TABLE "Workouts" DROP CONSTRAINT "Workouts_pkey",
ALTER COLUMN "id" SET DEFAULT gen_random_uuid(),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Workouts_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Workouts_id_seq";
