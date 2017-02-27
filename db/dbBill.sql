--建库
create database dbBill
on  primary 
( 
	name='dbBill_data',  -- 主数据文件的逻辑名称
	filename='I:\angular\db\dbBill.mdf', -- 主数据文件的物理名称
	size=5mb, --主数据文件的初始大小
	maxsize=100mb, -- 主数据文件增长的最大值
	filegrowth=15%--主数据文件的增长率
)
log on
(
	name='dbBill_log',
	filename='I:\angular\db\dbBill.ldf',
	size=2mb,
	filegrowth=1mb
)

--建表

use dbBill

create table users
(
	id int identity(1000000,1) primary key,
	name nvarchar(50)  not null,
	pwd nvarchar(50) not null,
	email nvarchar(50) not null,
	face nvarchar(max) not null,
	regtime nvarchar(50) not null,
	logintime nvarchar(50) not null,
	states int not null
) 
insert into users values('onlymisaky','123456','onlymisaky@qq.com','upload/userface/waicai.jpg','2017-02-27 22:10:54','2017-02-27 22:10:54','1')

create table bills
(
	id int identity(1,1) primary key,
	typeid nvarchar(50)  not null,
	type nvarchar(50) not null,
	userid nvarchar(50) not null,
	username nvarchar(max) not null,
	money nvarchar(50) not null,
	time nvarchar(50) not null,
	content nvarchar(max) not null,
	address nvarchar(max) not null
)