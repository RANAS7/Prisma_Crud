/*
  Warnings:

  - You are about to drop the `create_product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `create_product`;

-- CreateTable
CREATE TABLE `product_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `company` VARCHAR(150) NULL,
    `quantity` INTEGER NULL,
    `price` DECIMAL(10, 2) NULL,
    `product_id` INTEGER NULL,

    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Product_Name` VARCHAR(150) NULL,
    `Images` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `product_details` ADD CONSTRAINT `product_details_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
