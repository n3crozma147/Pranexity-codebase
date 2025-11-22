/*
  Warnings:

  - You are about to drop the column `phoneNumber` on the `ContactUs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ContactUs" DROP COLUMN "phoneNumber",
ADD COLUMN     "phone" TEXT;
