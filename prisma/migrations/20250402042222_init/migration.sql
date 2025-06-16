-- CreateTable
CREATE TABLE "Exercises" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "reps" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dots" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "rundate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "et" TEXT NOT NULL,
    "loops" INTEGER NOT NULL,
    "best" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dots_pkey" PRIMARY KEY ("id")
);
