/*
  Warnings:

  - You are about to drop the column `currentProfession` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Company_companyName_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "currentProfession",
ADD COLUMN     "location" VARCHAR(100);
