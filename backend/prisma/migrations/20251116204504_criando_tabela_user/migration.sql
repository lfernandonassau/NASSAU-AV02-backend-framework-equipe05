-- CreateTable
CREATE TABLE `User` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `cpd` CHAR(11) NOT NULL,
    `email` VARCHAR(120) NOT NULL,
    `password` VARCHAR(12) NOT NULL,
    `datecreate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dateupdate` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_cpd_key`(`cpd`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
