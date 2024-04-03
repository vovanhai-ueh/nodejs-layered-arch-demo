-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.11.2-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table enrolldb.course
CREATE TABLE IF NOT EXISTS `course` (
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(250) NOT NULL,
  `no_credit` tinyint(4) NOT NULL DEFAULT 0,
  `description` text NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table enrolldb.course_registry
CREATE TABLE IF NOT EXISTS `course_registry` (
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `result` float DEFAULT NULL,
  `notes` text DEFAULT NULL,
  PRIMARY KEY (`student_id`,`course_id`),
  KEY `FK_course_registry_course` (`course_id`),
  CONSTRAINT `FK_course_registry_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `FK_course_registry_student` FOREIGN KEY (`student_id`) REFERENCES `student` (`student_id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table enrolldb.student
CREATE TABLE IF NOT EXISTS `student` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` varchar(200) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(15) NOT NULL,
  PRIMARY KEY (`student_id`) USING BTREE,
  UNIQUE KEY `UK_fe0i52si7ybu0wjedj6motiim` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
