USE codeup_test_db;
DROP table if EXISTS albums;
CREATE table IF NOT EXISTS albums (
  'id' int(10) unsigned NOT NULL AUTO_INCREMENT,
  'artist' varchar(50) DEFAULT NULL,
  'name' varchar(50) NOT NULL,
  'release date' YEAR NOT NULL,
  'sales' Float,
  'genre' varchar(50) NOT NULL,
  PRIMARY KEY ('id')
)
