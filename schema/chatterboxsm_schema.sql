-- MySQL Script generated by MySQL Workbench
-- Thu May 25 22:26:35 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
SHOW WARNINGS;
-- -----------------------------------------------------
-- Schema chatterboxsm
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema chatterboxsm
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `chatterboxsm` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
SHOW WARNINGS;
USE `chatterboxsm` ;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`activities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`activities` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`activities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `archery_guns` TINYINT NULL DEFAULT NULL,
  `arts_crafts` TINYINT NULL DEFAULT NULL,
  `bars_clubs` TINYINT NULL DEFAULT NULL,
  `boxing_wrestling` TINYINT NULL DEFAULT NULL,
  `billiards_darts` TINYINT NULL DEFAULT NULL,
  `boating_camping` TINYINT NULL DEFAULT NULL,
  `classicsports` TINYINT NULL DEFAULT NULL,
  `cycling` TINYINT NULL DEFAULT NULL,
  `fishing_hunting` TINYINT NULL DEFAULT NULL,
  `hiking_climbing` TINYINT NULL DEFAULT NULL,
  `machines_electronics` TINYINT NULL DEFAULT NULL,
  `martialarts` TINYINT NULL DEFAULT NULL,
  `musicalinstruments` TINYINT NULL DEFAULT NULL,
  `puzzles_games` TINYINT NULL DEFAULT NULL,
  `reading_writing` TINYINT NULL DEFAULT NULL,
  `singing_dancing` TINYINT NULL DEFAULT NULL,
  `swimming` TINYINT NULL DEFAULT NULL,
  `videogames` TINYINT NULL DEFAULT NULL,
  `walking_running` TINYINT NULL DEFAULT NULL,
  `watchingtv` TINYINT NULL DEFAULT NULL,
  `other` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`chatmessages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`chatmessages` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`chatmessages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `groupid` INT NULL DEFAULT '0',
  `communityid` INT NULL DEFAULT '0',
  `messageto` INT NULL DEFAULT '0',
  `messagecontent` VARCHAR(8000) NULL DEFAULT NULL,
  `attachment` VARCHAR(250) NULL DEFAULT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT NULL,
  `markasread` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`communities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`communities` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`communities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `creator` INT NOT NULL,
  `communityname` VARCHAR(150) NOT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT NULL,
  `icon` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`communities_users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`communities_users` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`communities_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `communityid` INT NOT NULL,
  `userid` INT NOT NULL,
  `isadmin` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`donations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`donations` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`donations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `purpose` VARCHAR(8000) NULL DEFAULT NULL,
  `amount` DECIMAL(2,0) NULL DEFAULT '0',
  `donation_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`email`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`email` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`email` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`features_updates`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`features_updates` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`features_updates` (
  `id` INT NOT NULL,
  `month` INT NULL DEFAULT NULL,
  `day` INT NULL DEFAULT NULL,
  `year` INT NULL DEFAULT NULL,
  `features_updates` VARCHAR(8000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`foods`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`foods` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`foods` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NULL DEFAULT NULL,
  `american` TINYINT NULL DEFAULT NULL,
  `asian_indian` TINYINT NULL DEFAULT NULL,
  `cajun` TINYINT NULL DEFAULT NULL,
  `hungarian` TINYINT NULL DEFAULT NULL,
  `italian` TINYINT NULL DEFAULT NULL,
  `mediterranean` TINYINT NULL DEFAULT NULL,
  `latin_mexican` TINYINT NULL DEFAULT NULL,
  `russian` TINYINT NULL DEFAULT NULL,
  `middleeastern` TINYINT NULL DEFAULT NULL,
  `slavic` TINYINT NULL DEFAULT NULL,
  `romanian` TINYINT NULL DEFAULT NULL,
  `other` TINYINT NULL DEFAULT NULL,
  `favoritefood` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`groups`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`groups` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `creator` INT NOT NULL,
  `groupname` VARCHAR(150) NOT NULL,
  `created_date` DATE NULL DEFAULT NULL,
  `icon` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`groups_users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`groups_users` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`groups_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `groupid` INT NOT NULL,
  `userid` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`locations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`locations` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `city` VARCHAR(150) NULL DEFAULT NULL,
  `state` VARCHAR(150) NULL DEFAULT NULL,
  `country` VARCHAR(150) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`movies`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`movies` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `action` TINYINT NULL DEFAULT NULL,
  `comedy` TINYINT NULL DEFAULT NULL,
  `comics_animation` TINYINT NULL DEFAULT NULL,
  `documentary` TINYINT NULL DEFAULT NULL,
  `drama` TINYINT NULL DEFAULT NULL,
  `history` TINYINT NULL DEFAULT NULL,
  `mystery` TINYINT NULL DEFAULT NULL,
  `nature` TINYINT NULL DEFAULT NULL,
  `news_worldaffairs` TINYINT NULL DEFAULT NULL,
  `religion` TINYINT NULL DEFAULT NULL,
  `romance` TINYINT NULL DEFAULT NULL,
  `scifi` TINYINT NULL DEFAULT NULL,
  `sports` TINYINT NULL DEFAULT NULL,
  `suspense_thriller` TINYINT NULL DEFAULT NULL,
  `other` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`music`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`music` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`music` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `americanpop` TINYINT NULL DEFAULT NULL,
  `classical` TINYINT NULL DEFAULT NULL,
  `country_bluegrass` TINYINT NULL DEFAULT NULL,
  `flamenco_mariachi` TINYINT NULL DEFAULT NULL,
  `folk` TINYINT NULL DEFAULT NULL,
  `jazz` TINYINT NULL DEFAULT NULL,
  `jpop_kpop` TINYINT NULL DEFAULT NULL,
  `metal` TINYINT NULL DEFAULT NULL,
  `polka` TINYINT NULL DEFAULT NULL,
  `rap_hiphop` TINYINT NULL DEFAULT NULL,
  `regae` TINYINT NULL DEFAULT NULL,
  `rock` TINYINT NULL DEFAULT NULL,
  `tribal` TINYINT NULL DEFAULT NULL,
  `other` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`suggestions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`suggestions` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`suggestions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(150) NULL DEFAULT NULL,
  `description` VARCHAR(8000) NULL DEFAULT NULL,
  `votes` INT NULL DEFAULT NULL,
  `userid` INT NOT NULL,
  `created_date` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`systemsettings`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`systemsettings` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`systemsettings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userid` INT NOT NULL,
  `avatar` VARCHAR(250) NULL DEFAULT NULL,
  `primarycolor` VARCHAR(7) NULL DEFAULT NULL,
  `secondarycolor` VARCHAR(7) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `chatterboxsm`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `chatterboxsm`.`users` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `chatterboxsm`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL DEFAULT '',
  `middlename` VARCHAR(45) NULL DEFAULT NULL,
  `lastname` VARCHAR(45) NOT NULL DEFAULT '',
  `screenname` VARCHAR(45) NULL DEFAULT NULL,
  `agerange` VARCHAR(10) NOT NULL,
  `gender` VARCHAR(6) NULL DEFAULT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `identify` VARCHAR(10) NOT NULL,
  `description` VARCHAR(8000) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci
COMMENT = 'user accounts';

SHOW WARNINGS;
CREATE UNIQUE INDEX `username_UNIQUE` ON `chatterboxsm`.`users` (`username` ASC) VISIBLE;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;