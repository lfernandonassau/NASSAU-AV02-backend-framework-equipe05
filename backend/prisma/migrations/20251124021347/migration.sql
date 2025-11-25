-- CreateTable
CREATE TABLE `User` (
    `id_user` BIGINT NOT NULL AUTO_INCREMENT,
    `imagemUrl` VARCHAR(255) NULL,
    `name` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `cpf` CHAR(11) NOT NULL,
    `email` VARCHAR(120) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `datecreate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateupdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_cpf_key`(`cpf`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
    `title` VARCHAR(40) NOT NULL,
    `subtitle` VARCHAR(120) NULL,

    PRIMARY KEY (`id_project`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Column` (
    `id_column` BIGINT NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(40) NOT NULL,
    `subtitle` VARCHAR(120) NULL,
    `status` ENUM('PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO') NOT NULL DEFAULT 'PENDENTE',
    `projectId` BIGINT NOT NULL,

    PRIMARY KEY (`id_column`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Card` (
    `id_card` BIGINT NOT NULL AUTO_INCREMENT,
    `qta_members` INTEGER NOT NULL,
    `title` VARCHAR(40) NOT NULL,
    `subtitle` VARCHAR(120) NULL,
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
