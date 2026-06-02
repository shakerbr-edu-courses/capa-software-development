# Assignment: Restaurant Management System

## Scenario

A restaurant wants a simple system to manage customers, meals, and orders.

The system should store:

**Customers**

For each customer store:
 - Name
 - Phone Number

**Meals**

For each meal store:
 - Name
 - Price

 **Orders**

When a customer places an order, store:
 - Customer
 - Order Date

 **Order Details**

 An order can contain multiple meals.

For each meal in an order, store:

 - Order
 - Meal
 - Quantity

### Example

Customer: Ali Kareem

Order: 2026-05-20

Meals:

| Meal   | Quantity |
| ------ | -------- |
| Burger | 2        |
| Pepsi  | 1        |
| Fries  | 1        |

## Tasks

You need to design the database schema and write SQL queries to manage the restaurant system.

### Scheme and Data

 - Identify the tables.
 - Identify the columns.
 - Define primary keys.
 - Define foreign keys.
 - Write all CREATE TABLE statements.
 - Insert at least 5 records into each table.

### Queries

#### Basic Queries

1. Show all customers
2. Show all meals sorted by price

#### Join Queries

3. Show all orders with customer names.
4. Show customer name, meal name, and quantity.

#### Aggregate Queries

5. Count the total number of customers.
6. Find the most expensive meal.

#### Group By Queries

7. Count how many times each meal was ordered.
8. Find the customer who placed the most orders.

#### Advanced Queries

9. Show meals that were never ordered.
10. Calculate the total amount spent by each customer.
11. Calculate the average order amount.
12. Show customers who ordered more than 3 times.

## Submission

Add all your SQL code in a single file named `restaurant.sql` and send it to me via email: [dilovan.salahadeen@auk.edu.krd](mailto:dilovan.salahadeen@auk.edu.krd)