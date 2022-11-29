-- CreateTable
CREATE TABLE `rts_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `create_date` DATE NULL DEFAULT (curdate()),
    `create_time` DATETIME(0) NULL DEFAULT (curtime()),

    UNIQUE INDEX `rts_user_username_uindex`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
