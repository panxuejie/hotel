set names utf8;
drop database if exists hot;
create database hot charset=utf8;
use hot;

create table hot_user (
	fid INT PRIMARY KEY AUTO_INCREMENT,
	uname varchar(32),
	upwd varchar(32)
);
