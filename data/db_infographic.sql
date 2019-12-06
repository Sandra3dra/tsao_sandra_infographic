-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 06, 2019 at 08:01 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_africa`
--

CREATE TABLE `tbl_africa` (
  `ID` int(11) NOT NULL,
  `af_img` varchar(40) NOT NULL,
  `af_name` varchar(30) NOT NULL,
  `af_num` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_africa`
--

INSERT INTO `tbl_africa` (`ID`, `af_img`, `af_name`, `af_num`) VALUES
(1, 'south_africa.svg', 'South Africa', '168');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_america`
--

CREATE TABLE `tbl_america` (
  `ID` int(11) NOT NULL,
  `am_img` varchar(40) NOT NULL,
  `am_name` varchar(30) NOT NULL,
  `am_num` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_america`
--

INSERT INTO `tbl_america` (`ID`, `am_img`, `am_name`, `am_num`) VALUES
(1, 'brazil.svg', 'Brazil', '478'),
(2, 'canada.svg', 'Canada', '2512'),
(3, 'mexico.svg', 'Mexico', '680'),
(4, 'united_states.svg', 'United States', '19659');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_asia`
--

CREATE TABLE `tbl_asia` (
  `ID` int(11) NOT NULL,
  `as_img` varchar(40) NOT NULL,
  `as_name` varchar(30) NOT NULL,
  `as_num` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_asia`
--

INSERT INTO `tbl_asia` (`ID`, `as_img`, `as_name`, `as_num`) VALUES
(1, 'china.svg', 'China', '110089'),
(2, 'india.svg', 'India', '2382'),
(3, 'indonesia.svg', 'Indonesia', '8892'),
(4, 'japan.svg', 'Japan', '29419'),
(5, 'malaysia.svg', 'Malaysia', '12046'),
(6, 'philipines.svg', 'Philipines', '3642'),
(7, 'singapore.svg', 'Singapore', '8254'),
(8, 'korea.svg', 'Korea', '28381'),
(9, 'sudan.svg', 'Sudan', '1101'),
(10, 'thailand.svg', 'Thailand', '7664'),
(11, 'vietnam.svg', 'Vietnam', '7667');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_europe`
--

CREATE TABLE `tbl_europe` (
  `ID` int(11) NOT NULL,
  `eu_img` varchar(40) NOT NULL,
  `eu_name` varchar(30) NOT NULL,
  `eu_num` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_europe`
--

INSERT INTO `tbl_europe` (`ID`, `eu_img`, `eu_name`, `eu_num`) VALUES
(1, 'austria.svg', 'Austria', '1045'),
(2, 'france.svg', 'France', '10147'),
(3, 'germany.svg', 'Germany', '7314'),
(4, 'italy.svg', 'Italy', '2104'),
(5, 'russia.svg', 'Russia', '995'),
(6, 'spain.svg', 'Spain', '2187'),
(7, 'united_kingdom.svg', 'United Kingdom', '2004');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_oceania`
--

CREATE TABLE `tbl_oceania` (
  `ID` int(11) NOT NULL,
  `oc_img` varchar(40) NOT NULL,
  `oc_name` varchar(30) NOT NULL,
  `oc_num` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_oceania`
--

INSERT INTO `tbl_oceania` (`ID`, `oc_img`, `oc_name`, `oc_num`) VALUES
(1, 'australia.svg', 'Australia', '2264'),
(2, 'new_zealand.svg', 'New Zealand', '373');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_other`
--

CREATE TABLE `tbl_other` (
  `ID` int(11) NOT NULL,
  `ot_img` varchar(40) NOT NULL,
  `ot_name` varchar(30) NOT NULL,
  `ot_num` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_other`
--

INSERT INTO `tbl_other` (`ID`, `ot_img`, `ot_name`, `ot_num`) VALUES
(1, 'other.svg', 'Other', '44698');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tp101`
--

CREATE TABLE `tbl_tp101` (
  `ID` int(11) NOT NULL,
  `tp_img` varchar(25) NOT NULL,
  `tp_purposes` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tp101`
--

INSERT INTO `tbl_tp101` (`ID`, `tp_img`, `tp_purposes`) VALUES
(1, 'taipei101.svg', 'study');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_africa`
--
ALTER TABLE `tbl_africa`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_america`
--
ALTER TABLE `tbl_america`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_asia`
--
ALTER TABLE `tbl_asia`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_europe`
--
ALTER TABLE `tbl_europe`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_oceania`
--
ALTER TABLE `tbl_oceania`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_other`
--
ALTER TABLE `tbl_other`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_tp101`
--
ALTER TABLE `tbl_tp101`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_africa`
--
ALTER TABLE `tbl_africa`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_america`
--
ALTER TABLE `tbl_america`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_asia`
--
ALTER TABLE `tbl_asia`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_europe`
--
ALTER TABLE `tbl_europe`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_oceania`
--
ALTER TABLE `tbl_oceania`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_other`
--
ALTER TABLE `tbl_other`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_tp101`
--
ALTER TABLE `tbl_tp101`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
