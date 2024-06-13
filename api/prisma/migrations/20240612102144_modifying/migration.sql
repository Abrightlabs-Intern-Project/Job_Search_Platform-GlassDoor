/*
  Warnings:

  - You are about to drop the column `city_asciiname` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_country_code` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_country_region_id` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_country_region_name` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_geonameid` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_latitude` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_longitude` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `city_timezone` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `company_github_url` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `company_twitter_handle` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `country_code` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `country_name` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `country_region_id` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `country_region_name` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `ext_id` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `region_id` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `region_name` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `type_id` on the `Job` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "city_asciiname",
DROP COLUMN "city_country_code",
DROP COLUMN "city_country_region_id",
DROP COLUMN "city_country_region_name",
DROP COLUMN "city_geonameid",
DROP COLUMN "city_latitude",
DROP COLUMN "city_longitude",
DROP COLUMN "city_timezone",
DROP COLUMN "company_github_url",
DROP COLUMN "company_twitter_handle",
DROP COLUMN "country_code",
DROP COLUMN "country_name",
DROP COLUMN "country_region_id",
DROP COLUMN "country_region_name",
DROP COLUMN "ext_id",
DROP COLUMN "region_id",
DROP COLUMN "region_name",
DROP COLUMN "type_id";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "current_profession" TEXT,
ADD COLUMN     "preferred_job" TEXT,
ADD COLUMN     "year_experience" INTEGER;

-- CreateTable
CREATE TABLE "Userdata" (
    "username" TEXT NOT NULL,
    "jobs_bookmarks" INTEGER[],
    "company_bookmarks" INTEGER[],
    "search" INTEGER[]
);

-- CreateTable
CREATE TABLE "Company" (
    "company_id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "icon_url" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "company_size" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "description" TEXT,
    "reviews_cnt" TEXT,
    "salary_cnt" TEXT,
    "jos_cnt" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("company_id")
);

-- CreateTable
CREATE TABLE "Log" (
    "id" INTEGER NOT NULL,
    "is_login" BOOLEAN NOT NULL,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" SERIAL NOT NULL,
    "bowl_name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "time" TEXT NOT NULL,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Userdata_username_key" ON "Userdata"("username");
