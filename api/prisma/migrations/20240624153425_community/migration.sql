/*
  Warnings:

  - Added the required column `communityIcon` to the `CommunityPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `communityName` to the `CommunityPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CommunityPost" ADD COLUMN     "communityIcon" VARCHAR(256) NOT NULL,
ADD COLUMN     "communityName" VARCHAR(100) NOT NULL;
