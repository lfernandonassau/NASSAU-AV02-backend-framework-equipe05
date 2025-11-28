/*
  Warnings:

  - Added the required column `projectId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `job` ADD COLUMN `projectId` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `project` ADD COLUMN `ownerId` BIGINT NOT NULL;

-- CreateTable
CREATE TABLE `ProjectInvite` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `projectId` BIGINT NOT NULL,
    `userId` BIGINT NOT NULL,
    `email` VARCHAR(120) NOT NULL,
    `status` VARCHAR(20) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `acceptedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Job` ADD CONSTRAINT `Job_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id_project`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectInvite` ADD CONSTRAINT `ProjectInvite_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id_project`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProjectInvite` ADD CONSTRAINT `ProjectInvite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
