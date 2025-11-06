-- CreateTable
CREATE TABLE "Test" (
    "id" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "item" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
