---
title: 1-SQL基本操作
date: 2025-05-20 23:15:34
permalink: /pages/eef00a/
categories:
  - sql
  - sql必知必会
tags:
  - 
---
# MySQL基本操作

## 使用MySQL
下载create.sql和populate.sql两个sql脚本文件，其中，create.sql包含创建6个数据库表的MySQL语句，populate.sql包含用来填充这些表的INSERT语句。执行下列操作：
```
CREATE DATABASE crashcourse;
USE crashcourse;

SOURCE ~/create.sql;
SOURCE ~/populate.sql;
```
以上为准备工作。

### 了解数据库和表
```
SHOW DATABASES;

SHOW TABLES;

SHOW COLUMNS FROM customers;
DESCRIBE customers;

SHOW STATUS -- 用于显示广泛的服务器状态信息
SHOW CREATE DATABASE -- 显示创建特定数据库的MySQL语句
SHOW CREATE TABLE -- 显示创建特定表的语句
SHOW GRANTS -- 显示授予用户（所有用户或特定用户）的安全权限
SHOW ERRORS -- 显示服务器错误
SHOW WARNINGS -- 警告信息
```

## 检索数据
### SELECT语句
```
-- 检索单个列
-- 检索products表中的prod_name列
SELECT prod_name FROM products;

-- 检索多个列
-- 检索products表中的prod_id，prod_name和prod_price列
SELECT prod_id, prod_name, prod_price FROM products;

-- 检索所有列
--检索products表中的所有列
SELECT * FROM products;

-- 检索不同的行
-- DISTINCT关键字必须直接放在列名的前面，不能部分使用DISTINCT，DISTINCT关键字应用于所有列而不仅是前置它的列。
SELECT DISTINCT vend_id FROM products;

-- 限制结果，指定返回前几行
-- 返回不多于5行
SELECT prod_name FROM products LIMIT 5;
-- 返回从第5行开始的5行
SELECT prod_name FROM products LIMIT 5,5;
```
**检索出来的第一行为行0**，因此`LIMIT 1,1`检索出来的是第二行而不是第一行
MySQL 5 支持LIMIT的另一种替代语法
`LIMIT 4 OFFSET 3`为从行3开始取4行，同`LIMIT 3,4`

```
-- 使用完全限定的表名
SELECT products.prod_name FROM products;
SELECT products.prod_name FROM crashcoures.products;
```
## 排序检索数据
```
-- 排序数据
SELECT prod_name
FROM products
ORDER BY prod_name;
-- 按多个列排序
SELECT prod_id, prod_price, prod_name
FROM products
ORDER BY prod_price, prod_name;
```
对于上述例子中的输出，仅在多个行具有相同的prod_price 值时才对产品按prod_name进行排序。如果prod_price列中所有的值都是唯一的，则不会按prod_name排序。

```
-- 指定排序方向
-- 默认升序排序，降序使用DESC关键字
SELECT prod_id, prod_price, prod_name
FROM products
ORDER BY prod_price DESC;

SELECT prod_id, prod_price, prod_name
FROM products
ORDER BY prod_price DESC, prod_name;
```
DESC关键字只应用到直接位于其前面的列名。上例中，只对prod_price列指定DESC，对prod_name列不指定。
升序关键字ASC，可省略

### 找出一列中最高或最低的值
```
SELECT prod_proce FROM products
ORDER BY prod_price DESC LIMIT 1;
```
给出ORDER BY句子时，应保证位于FROM句子之后，如果使用LIMIT，应位于ORDER BY之后。

## 过滤数据
### 使用WHERE子句
```
-- 返回prod_price为2.50的行
SELECT prod_name, prod_price FROM products WHERE prod_price = 2.50
```
### WHERE子句操作符

| 符号 | 说明 |
|--------|--------|
|=|等于|
|<>|不等于|
|！=|不等于|
|<|小于|
|<=|小于等于|
|>|大于|
|>=|大于等于|
|BETWEEN|在指定的两个值之间|

```
-- 检查单个值
-- 返回prod_name为Fuses的一行（匹配时默认不区分大小写）
SELECT prod_name, prod_price FROM products WHERE prod_name = 'fuses';
-- 列出小于10美元的所有产品
SELECT prod_name, prod_price FROM products WHERE prod_price < 10;
-- 列出小于等于10美元的所有产品
SELECT prod_name, prod_price FROM products WHERE prod_price <= 10;

-- 不匹配检查
-- 列出不是1003的所有产品
SELECT vend_id, prod_name FROM products WHERE vend_id <> 1003;
SELECT vend_id, prod_name FROM products WHERE vend_id ！= 1003;

-- 范围值检查
-- 检索价格在5-10美元之间的所有产品
SELECT prod_name, prod_price FROM products
WHERE prod_price BETWEEN 5 AND 10;

-- 空值检查
-- 返回价格为空的所有产品
SELECT prod_name FROM products WHERE prod_price IS NULL;
```



## 补充
MySQL的注释方法
一共有三种，分别为
```
#单行注释可以使用"#"
-- 单行注释也可以使用"--"，注意与注释之间有空格
/*
用于多行注释
*/
```
