/*
  Warnings:

  - You are about to drop the column `companyName` on the `ContactUs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ContactUs" DROP COLUMN "companyName",
ADD COLUMN     "company" TEXT;
