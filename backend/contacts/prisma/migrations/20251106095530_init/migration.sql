-- CreateTable
CREATE TABLE "ContactUs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "message" TEXT NOT NULL,
    "companyName" TEXT,

    CONSTRAINT "ContactUs_pkey" PRIMARY KEY ("id")
);
