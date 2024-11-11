CREATE TABLE `users_table` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `age` INT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    CONSTRAINT `users_table_id` PRIMARY KEY (`id`),
    CONSTRAINT `users_table_email_unique` UNIQUE (`email`)
);
