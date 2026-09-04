/*
  Warnings:

  - You are about to drop the column `bio` on the `artist` table. All the data in the column will be lost.
  - You are about to drop the column `genre` on the `artist` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `artist` table. All the data in the column will be lost.
  - Added the required column `category` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Artist` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artist` DROP COLUMN `bio`,
    DROP COLUMN `genre`,
    DROP COLUMN `imageUrl`,
    ADD COLUMN `category` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL;
