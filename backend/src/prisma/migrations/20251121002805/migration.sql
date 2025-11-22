/*
  Warnings:

  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cpd` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cpf` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_cpd_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `cpd`,
    DROP COLUMN `id`,
    ADD COLUMN `cpf` CHAR(11) NOT NULL,
    ADD COLUMN `id_user` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `password` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id_user`);

-- CreateTable
CREATE TABLE `Job` (
    `id_job` BIGINT NOT NULL AUTO_INCREMENT,
    `position` ENUM('MEMBERS', 'DEVELOPER', 'LEADER') NOT NULL DEFAULT 'MEMBERS',

    PRIMARY KEY (`id_job`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dashboard` (
    `id_panel` BIGINT NOT NULL AUTO_INCREMENT,
    `jobId` BIGINT NOT NULL,

    PRIMARY KEY (`id_panel`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Relatory` (
    `id_relat` BIGINT NOT NULL AUTO_INCREMENT,
    `datestart` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `datefinaly` DATETIME(3) NOT NULL,
    `totaltasks` BIGINT NOT NULL,
    `tasksPending` BIGINT NOT NULL,
    `tasksonWalk` BIGINT NOT NULL,
    `tasksCompleted` BIGINT NOT NULL,
    `createstatistic` BIGINT NOT NULL,
    `managementpanelId` BIGINT NOT NULL,
    `projectId` BIGINT NOT NULL,

    UNIQUE INDEX `Relatory_managementpanelId_key`(`managementpanelId`),
    UNIQUE INDEX `Relatory_projectId_key`(`projectId`),
    PRIMARY KEY (`id_relat`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id_project` BIGINT NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(50) NOT NULL,
    `dashboardId` BIGINT NOT NULL,

    PRIMARY KEY (`id_project`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Column` (
    `id_column` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(50) NOT NULL,
    `status` ENUM('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO') NOT NULL DEFAULT 'PENDENTE',
    `projectId` BIGINT NOT NULL,

    PRIMARY KEY (`id_column`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Card` (
    `id_card` BIGINT NOT NULL AUTO_INCREMENT,
    `qta_members` INTEGER NOT NULL,
    `title` VARCHAR(25) NOT NULL,
    `subtitle` VARCHAR(25) NOT NULL,
    `timeframe` DATETIME(3) NOT NULL,
    `datecreate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateupdate` DATETIME(3) NOT NULL,
    `columnId` BIGINT NOT NULL,

    PRIMARY KEY (`id_card`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPosition` (
    `jobId` BIGINT NOT NULL,
    `userId` BIGINT NOT NULL,

    PRIMARY KEY (`userId`, `jobId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_cpf_key` ON `User`(`cpf`);

-- AddForeignKey
ALTER TABLE `Dashboard` ADD CONSTRAINT `Dashboard_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id_job`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatory` ADD CONSTRAINT `Relatory_managementpanelId_fkey` FOREIGN KEY (`managementpanelId`) REFERENCES `Dashboard`(`id_panel`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Relatory` ADD CONSTRAINT `Relatory_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id_project`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Column` ADD CONSTRAINT `Column_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id_project`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Card` ADD CONSTRAINT `Card_columnId_fkey` FOREIGN KEY (`columnId`) REFERENCES `Column`(`id_column`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPosition` ADD CONSTRAINT `UserPosition_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPosition` ADD CONSTRAINT `UserPosition_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `Job`(`id_job`) ON DELETE RESTRICT ON UPDATE CASCADE;
