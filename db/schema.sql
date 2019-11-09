-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS Songs_dataset;
-- Creates the "Songs_dataset" database --
create database Songs_dataset;
-- Creates the songs table
use Songs_dataset;
CREATE TABLE songs (
    id INTEGER AUTO_INCREMENT NOT NULL,
    artist VARCHAR(100),
    track VARCHAR(100),
    playlistname VARCHAR(100),
    PRIMARY KEY (id)
);