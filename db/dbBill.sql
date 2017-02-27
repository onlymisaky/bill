--����
create database dbBill
on  primary 
( 
	name='dbBill_data',  -- �������ļ����߼�����
	filename='I:\angular\db\dbBill.mdf', -- �������ļ�����������
	size=5mb, --�������ļ��ĳ�ʼ��С
	maxsize=100mb, -- �������ļ����������ֵ
	filegrowth=15%--�������ļ���������
)
log on
(
	name='dbBill_log',
	filename='I:\angular\db\dbBill.ldf',
	size=2mb,
	filegrowth=1mb
)

--����

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