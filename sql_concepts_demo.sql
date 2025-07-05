-- SQL Concepts Demonstration
-- This file contains comprehensive examples of SQL concepts including:
-- DDL, DML, Joins, Aggregations, String Operations, Subqueries, etc.

-- =====================================================
-- 1. DATABASE CREATION AND TABLE DEFINITIONS (DDL)
-- =====================================================

-- Create database (uncomment if needed)
-- CREATE DATABASE company_management;
-- USE company_management;

-- Drop tables if they exist (for clean setup)
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS suppliers;

-- Create Departments table
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL,
    location VARCHAR(50),
    budget DECIMAL(12,2)
);

-- Create Employees table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    hire_date DATE,
    salary DECIMAL(10,2),
    dept_id INT,
    manager_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id),
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id)
);

-- Create Suppliers table
CREATE TABLE suppliers (
    supplier_id INT PRIMARY KEY,
    supplier_name VARCHAR(100) NOT NULL,
    contact_name VARCHAR(50),
    contact_email VARCHAR(100),
    phone VARCHAR(20),
    address VARCHAR(200),
    city VARCHAR(50),
    country VARCHAR(50)
);

-- Create Products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10,2),
    stock_quantity INT,
    supplier_id INT,
    created_date DATE,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(supplier_id)
);

-- Create Customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    address VARCHAR(200),
    city VARCHAR(50),
    country VARCHAR(50),
    registration_date DATE
);

-- Create Orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    employee_id INT,
    order_date DATE,
    shipped_date DATE,
    total_amount DECIMAL(12,2),
    status VARCHAR(20),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (employee_id) REFERENCES employees(emp_id)
);

-- Create Order Items table
CREATE TABLE order_items (
    order_item_id INT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    unit_price DECIMAL(10,2),
    discount DECIMAL(5,2) DEFAULT 0,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

-- =====================================================
-- 2. DATA INSERTION (DML)
-- =====================================================

-- Insert Departments
INSERT INTO departments VALUES
(1, 'Sales', 'New York', 500000.00),
(2, 'Marketing', 'Los Angeles', 300000.00),
(3, 'IT', 'San Francisco', 800000.00),
(4, 'HR', 'Chicago', 200000.00),
(5, 'Finance', 'New York', 400000.00);

-- Insert Employees
INSERT INTO employees VALUES
(1, 'John', 'Doe', 'john.doe@company.com', '555-0101', '2020-01-15', 75000.00, 1, NULL),
(2, 'Jane', 'Smith', 'jane.smith@company.com', '555-0102', '2019-03-20', 80000.00, 2, NULL),
(3, 'Mike', 'Johnson', 'mike.johnson@company.com', '555-0103', '2021-06-10', 95000.00, 3, NULL),
(4, 'Sarah', 'Williams', 'sarah.williams@company.com', '555-0104', '2020-08-05', 65000.00, 4, NULL),
(5, 'David', 'Brown', 'david.brown@company.com', '555-0105', '2018-11-30', 70000.00, 1, 1),
(6, 'Emily', 'Davis', 'emily.davis@company.com', '555-0106', '2022-02-14', 60000.00, 2, 2),
(7, 'Robert', 'Miller', 'robert.miller@company.com', '555-0107', '2021-09-22', 85000.00, 3, 3),
(8, 'Lisa', 'Wilson', 'lisa.wilson@company.com', '555-0108', '2020-12-01', 55000.00, 4, 4),
(9, 'James', 'Moore', 'james.moore@company.com', '555-0109', '2019-07-18', 72000.00, 5, NULL),
(10, 'Amanda', 'Taylor', 'amanda.taylor@company.com', '555-0110', '2021-04-25', 68000.00, 1, 1);

-- Insert Suppliers
INSERT INTO suppliers VALUES
(1, 'TechCorp Solutions', 'Alice Green', 'alice@techcorp.com', '555-1001', '123 Tech St', 'San Jose', 'USA'),
(2, 'Global Electronics', 'Bob White', 'bob@globalelec.com', '555-1002', '456 Circuit Ave', 'Austin', 'USA'),
(3, 'Premium Parts Ltd', 'Carol Black', 'carol@premiumparts.com', '555-1003', '789 Industry Blvd', 'Detroit', 'USA'),
(4, 'Innovation Inc', 'Dan Silver', 'dan@innovation.com', '555-1004', '321 Innovation Dr', 'Seattle', 'USA'),
(5, 'Quality Goods Co', 'Eva Gold', 'eva@qualitygoods.com', '555-1005', '654 Quality Ln', 'Portland', 'USA');

-- Insert Products
INSERT INTO products VALUES
(1, 'Laptop Pro 15"', 'Electronics', 1299.99, 50, 1, '2023-01-01'),
(2, 'Wireless Mouse', 'Electronics', 29.99, 200, 2, '2023-01-15'),
(3, 'Mechanical Keyboard', 'Electronics', 89.99, 75, 2, '2023-02-01'),
(4, 'External Monitor 24"', 'Electronics', 249.99, 30, 1, '2023-02-15'),
(5, 'USB-C Hub', 'Electronics', 49.99, 100, 3, '2023-03-01'),
(6, 'Webcam HD', 'Electronics', 79.99, 60, 4, '2023-03-15'),
(7, 'Desk Chair Ergonomic', 'Furniture', 199.99, 25, 5, '2023-04-01'),
(8, 'Standing Desk', 'Furniture', 399.99, 15, 5, '2023-04-15'),
(9, 'Tablet 10"', 'Electronics', 299.99, 40, 1, '2023-05-01'),
(10, 'Smartphone Case', 'Accessories', 19.99, 150, 3, '2023-05-15');

-- Insert Customers
INSERT INTO customers VALUES
(1, 'Michael', 'Jackson', 'michael.j@email.com', '555-2001', '100 Music Ave', 'Nashville', 'USA', '2022-01-10'),
(2, 'Jennifer', 'Lopez', 'jennifer.lopez@email.com', '555-2002', '200 Dance St', 'Miami', 'USA', '2022-02-20'),
(3, 'Robert', 'Downey', 'robert.downey@email.com', '555-2003', '300 Hero Blvd', 'Los Angeles', 'USA', '2022-03-15'),
(4, 'Emma', 'Watson', 'emma.watson@email.com', '555-2004', '400 Magic Ln', 'London', 'UK', '2022-04-05'),
(5, 'Chris', 'Evans', 'chris.evans@email.com', '555-2005', '500 Shield Dr', 'Boston', 'USA', '2022-05-12'),
(6, 'Scarlett', 'Johansson', 'scarlett.j@email.com', '555-2006', '600 Spy St', 'New York', 'USA', '2022-06-18'),
(7, 'Leonardo', 'DiCaprio', 'leonardo.d@email.com', '555-2007', '700 Ocean Ave', 'California', 'USA', '2022-07-22'),
(8, 'Natalie', 'Portman', 'natalie.p@email.com', '555-2008', '800 Swan Lake', 'Boston', 'USA', '2022-08-30');

-- Insert Orders
INSERT INTO orders VALUES
(1, 1, 1, '2023-06-01', '2023-06-03', 1379.98, 'Delivered'),
(2, 2, 2, '2023-06-05', '2023-06-07', 369.97, 'Delivered'),
(3, 3, 3, '2023-06-10', '2023-06-12', 649.98, 'Delivered'),
(4, 4, 1, '2023-06-15', '2023-06-17', 119.98, 'Delivered'),
(5, 5, 4, '2023-06-20', NULL, 799.98, 'Processing'),
(6, 6, 5, '2023-06-25', '2023-06-27', 229.98, 'Shipped'),
(7, 7, 2, '2023-07-01', '2023-07-03', 1699.97, 'Delivered'),
(8, 8, 3, '2023-07-05', NULL, 89.99, 'Processing'),
(9, 1, 1, '2023-07-10', '2023-07-12', 579.98, 'Delivered'),
(10, 3, 4, '2023-07-15', '2023-07-17', 319.98, 'Delivered');

-- Insert Order Items
INSERT INTO order_items VALUES
(1, 1, 1, 1, 1299.99, 0.05), -- 5% discount
(2, 1, 2, 2, 29.99, 0.00),
(3, 1, 3, 1, 89.99, 0.10), -- 10% discount
(4, 2, 4, 1, 249.99, 0.00),
(5, 2, 5, 2, 49.99, 0.00),
(6, 2, 6, 1, 79.99, 0.05),
(7, 3, 7, 1, 199.99, 0.00),
(8, 3, 8, 1, 399.99, 0.00),
(9, 3, 5, 1, 49.99, 0.00),
(10, 4, 2, 2, 29.99, 0.00),
(11, 4, 10, 3, 19.99, 0.00),
(12, 5, 1, 1, 1299.99, 0.15), -- 15% discount
(13, 6, 3, 2, 89.99, 0.00),
(14, 6, 5, 1, 49.99, 0.00),
(15, 7, 1, 1, 1299.99, 0.00),
(16, 7, 4, 1, 249.99, 0.00),
(17, 7, 6, 2, 79.99, 0.10),
(18, 8, 3, 1, 89.99, 0.00),
(19, 9, 9, 2, 299.99, 0.10),
(20, 10, 2, 5, 29.99, 0.00),
(21, 10, 10, 8, 19.99, 0.00);

-- =====================================================
-- 3. BASIC SELECT QUERIES
-- =====================================================

-- Simple SELECT
SELECT * FROM employees;

-- SELECT with specific columns
SELECT first_name, last_name, salary FROM employees;

-- SELECT with WHERE clause
SELECT * FROM employees WHERE salary > 70000;

-- SELECT with ORDER BY
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary DESC;

-- SELECT with LIMIT
SELECT * FROM products ORDER BY price DESC LIMIT 5;

-- =====================================================
-- 4. STRING OPERATIONS
-- =====================================================

-- CONCAT function
SELECT emp_id, 
       CONCAT(first_name, ' ', last_name) AS full_name,
       email
FROM employees;

-- UPPER and LOWER functions
SELECT product_name,
       UPPER(product_name) AS uppercase_name,
       LOWER(category) AS lowercase_category
FROM products;

-- SUBSTRING function
SELECT product_name,
       SUBSTRING(product_name, 1, 10) AS short_name
FROM products;

-- LENGTH function
SELECT product_name,
       LENGTH(product_name) AS name_length
FROM products;

-- LIKE operator with wildcards
SELECT * FROM customers 
WHERE first_name LIKE 'M%';  -- Names starting with 'M'

SELECT * FROM customers 
WHERE email LIKE '%@email.com';  -- Emails ending with '@email.com'

-- REPLACE function
SELECT product_name,
       REPLACE(product_name, ' ', '_') AS modified_name
FROM products;

-- =====================================================
-- 5. AGGREGATE FUNCTIONS
-- =====================================================

-- COUNT
SELECT COUNT(*) AS total_employees FROM employees;
SELECT COUNT(DISTINCT dept_id) AS total_departments FROM employees;

-- SUM
SELECT SUM(salary) AS total_salary_cost FROM employees;
SELECT SUM(total_amount) AS total_revenue FROM orders;

-- AVG
SELECT AVG(salary) AS average_salary FROM employees;
SELECT AVG(price) AS average_product_price FROM products;

-- MIN and MAX
SELECT MIN(salary) AS lowest_salary, 
       MAX(salary) AS highest_salary 
FROM employees;

SELECT MIN(order_date) AS first_order,
       MAX(order_date) AS latest_order
FROM orders;

-- =====================================================
-- 6. GROUP BY and HAVING
-- =====================================================

-- Basic GROUP BY
SELECT dept_id, COUNT(*) AS employee_count
FROM employees
GROUP BY dept_id;

-- GROUP BY with aggregate functions
SELECT dept_id, 
       COUNT(*) AS employee_count,
       AVG(salary) AS avg_salary,
       SUM(salary) AS total_salary
FROM employees
GROUP BY dept_id;

-- GROUP BY with HAVING
SELECT dept_id, 
       COUNT(*) AS employee_count,
       AVG(salary) AS avg_salary
FROM employees
GROUP BY dept_id
HAVING COUNT(*) >= 2;

-- GROUP BY with multiple columns
SELECT category, 
       supplier_id,
       COUNT(*) AS product_count,
       AVG(price) AS avg_price
FROM products
GROUP BY category, supplier_id;

-- =====================================================
-- 7. JOINS
-- =====================================================

-- INNER JOIN
SELECT e.first_name, e.last_name, e.salary, d.dept_name
FROM employees e
INNER JOIN departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN
SELECT d.dept_name, e.first_name, e.last_name
FROM departments d
LEFT JOIN employees e ON d.dept_id = e.dept_id;

-- RIGHT JOIN
SELECT e.first_name, e.last_name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.dept_id = d.dept_id;

-- Multiple table joins
SELECT c.first_name, c.last_name, o.order_date, o.total_amount,
       e.first_name AS sales_rep_first, e.last_name AS sales_rep_last
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
INNER JOIN employees e ON o.employee_id = e.emp_id;

-- Self JOIN (employees and their managers)
SELECT e.first_name AS employee_name,
       e.last_name AS employee_lastname,
       m.first_name AS manager_name,
       m.last_name AS manager_lastname
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.emp_id;

-- Complex join with aggregation
SELECT p.product_name, p.category, p.price,
       SUM(oi.quantity) AS total_sold,
       SUM(oi.quantity * oi.unit_price * (1 - oi.discount)) AS total_revenue
FROM products p
INNER JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name, p.category, p.price;

-- =====================================================
-- 8. SUBQUERIES
-- =====================================================

-- Scalar subquery
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Subquery with IN
SELECT product_name, price
FROM products
WHERE supplier_id IN (
    SELECT supplier_id 
    FROM suppliers 
    WHERE country = 'USA'
);

-- Correlated subquery
SELECT e1.first_name, e1.last_name, e1.salary, e1.dept_id
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);

-- EXISTS subquery
SELECT c.first_name, c.last_name
FROM customers c
WHERE EXISTS (
    SELECT 1 
    FROM orders o 
    WHERE o.customer_id = c.customer_id
);

-- =====================================================
-- 9. WINDOW FUNCTIONS
-- =====================================================

-- ROW_NUMBER
SELECT first_name, last_name, salary,
       ROW_NUMBER() OVER (ORDER BY salary DESC) AS salary_rank
FROM employees;

-- RANK and DENSE_RANK
SELECT first_name, last_name, salary, dept_id,
       RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dept_salary_rank,
       DENSE_RANK() OVER (ORDER BY salary DESC) AS overall_dense_rank
FROM employees;

-- LAG and LEAD
SELECT first_name, last_name, salary,
       LAG(salary) OVER (ORDER BY salary) AS previous_salary,
       LEAD(salary) OVER (ORDER BY salary) AS next_salary
FROM employees;

-- =====================================================
-- 10. CASE STATEMENTS
-- =====================================================

-- Simple CASE
SELECT first_name, last_name, salary,
       CASE 
           WHEN salary < 60000 THEN 'Low'
           WHEN salary BETWEEN 60000 AND 80000 THEN 'Medium'
           ELSE 'High'
       END AS salary_category
FROM employees;

-- CASE with aggregation
SELECT dept_id,
       COUNT(*) AS total_employees,
       SUM(CASE WHEN salary > 70000 THEN 1 ELSE 0 END) AS high_earners,
       SUM(CASE WHEN salary <= 70000 THEN 1 ELSE 0 END) AS regular_earners
FROM employees
GROUP BY dept_id;

-- =====================================================
-- 11. DATE FUNCTIONS
-- =====================================================

-- Date formatting and extraction
SELECT order_id, order_date,
       YEAR(order_date) AS order_year,
       MONTH(order_date) AS order_month,
       DAY(order_date) AS order_day,
       DAYNAME(order_date) AS day_of_week
FROM orders;

-- Date arithmetic
SELECT order_id, order_date, shipped_date,
       DATEDIFF(shipped_date, order_date) AS days_to_ship
FROM orders
WHERE shipped_date IS NOT NULL;

-- Date ranges
SELECT * FROM orders
WHERE order_date BETWEEN '2023-06-01' AND '2023-06-30';

-- =====================================================
-- 12. UNION OPERATIONS
-- =====================================================

-- UNION (distinct records)
SELECT first_name, last_name, 'Employee' AS type
FROM employees
UNION
SELECT first_name, last_name, 'Customer' AS type
FROM customers;

-- UNION ALL (includes duplicates)
SELECT city FROM customers
UNION ALL
SELECT city FROM suppliers;

-- =====================================================
-- 13. ADVANCED QUERIES
-- =====================================================

-- Common Table Expression (CTE)
WITH dept_stats AS (
    SELECT dept_id,
           COUNT(*) AS emp_count,
           AVG(salary) AS avg_salary
    FROM employees
    GROUP BY dept_id
)
SELECT d.dept_name, ds.emp_count, ds.avg_salary, d.budget
FROM dept_stats ds
JOIN departments d ON ds.dept_id = d.dept_id
WHERE ds.avg_salary > 65000;

-- Recursive CTE (Employee hierarchy)
WITH RECURSIVE employee_hierarchy AS (
    -- Base case: employees with no manager
    SELECT emp_id, first_name, last_name, manager_id, 0 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive case: employees with managers
    SELECT e.emp_id, e.first_name, e.last_name, e.manager_id, eh.level + 1
    FROM employees e
    INNER JOIN employee_hierarchy eh ON e.manager_id = eh.emp_id
)
SELECT * FROM employee_hierarchy ORDER BY level, emp_id;

-- Top N query with ties
SELECT first_name, last_name, salary
FROM (
    SELECT first_name, last_name, salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank
    FROM employees
) ranked_employees
WHERE salary_rank <= 3;

-- Moving average
SELECT order_date, total_amount,
       AVG(total_amount) OVER (
           ORDER BY order_date 
           ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
       ) AS moving_avg_3_orders
FROM orders
ORDER BY order_date;

-- =====================================================
-- 14. ANALYTICAL QUERIES
-- =====================================================

-- Monthly sales analysis
SELECT YEAR(o.order_date) AS year,
       MONTH(o.order_date) AS month,
       COUNT(*) AS total_orders,
       SUM(o.total_amount) AS monthly_revenue,
       AVG(o.total_amount) AS avg_order_value
FROM orders o
GROUP BY YEAR(o.order_date), MONTH(o.order_date)
ORDER BY year, month;

-- Customer lifetime value
SELECT c.customer_id,
       CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
       COUNT(o.order_id) AS total_orders,
       SUM(o.total_amount) AS lifetime_value,
       AVG(o.total_amount) AS avg_order_value,
       MIN(o.order_date) AS first_order,
       MAX(o.order_date) AS last_order
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name
ORDER BY lifetime_value DESC;

-- Product performance analysis
SELECT p.product_name,
       p.category,
       p.price,
       COALESCE(SUM(oi.quantity), 0) AS total_sold,
       COALESCE(SUM(oi.quantity * oi.unit_price * (1 - oi.discount)), 0) AS total_revenue,
       p.stock_quantity,
       CASE 
           WHEN p.stock_quantity = 0 THEN 'Out of Stock'
           WHEN p.stock_quantity < 20 THEN 'Low Stock'
           ELSE 'In Stock'
       END AS stock_status
FROM products p
LEFT JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name, p.category, p.price, p.stock_quantity
ORDER BY total_revenue DESC;

-- Employee performance (sales)
SELECT e.first_name,
       e.last_name,
       d.dept_name,
       COUNT(o.order_id) AS orders_handled,
       COALESCE(SUM(o.total_amount), 0) AS total_sales,
       COALESCE(AVG(o.total_amount), 0) AS avg_order_value
FROM employees e
LEFT JOIN orders o ON e.emp_id = o.employee_id
LEFT JOIN departments d ON e.dept_id = d.dept_id
GROUP BY e.emp_id, e.first_name, e.last_name, d.dept_name
ORDER BY total_sales DESC;

-- =====================================================
-- 15. DATA MODIFICATION EXAMPLES
-- =====================================================

-- UPDATE examples
-- Increase salaries by 5% for IT department
UPDATE employees 
SET salary = salary * 1.05 
WHERE dept_id = 3;

-- Update order status
UPDATE orders 
SET status = 'Delivered', shipped_date = '2023-07-20'
WHERE order_id = 5;

-- DELETE examples
-- Delete discontinued products (assuming stock_quantity = 0 means discontinued)
-- DELETE FROM products WHERE stock_quantity = 0;

-- =====================================================
-- 16. INDEX CREATION (Performance Optimization)
-- =====================================================

-- Create indexes for better performance
CREATE INDEX idx_employee_dept ON employees(dept_id);
CREATE INDEX idx_employee_salary ON employees(salary);
CREATE INDEX idx_order_customer ON orders(customer_id);
CREATE INDEX idx_order_date ON orders(order_date);
CREATE INDEX idx_product_category ON products(category);

-- =====================================================
-- 17. VIEW CREATION
-- =====================================================

-- Create a view for employee details with department info
CREATE VIEW employee_details AS
SELECT e.emp_id,
       CONCAT(e.first_name, ' ', e.last_name) AS full_name,
       e.email,
       e.salary,
       d.dept_name,
       d.location,
       CONCAT(m.first_name, ' ', m.last_name) AS manager_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.dept_id
LEFT JOIN employees m ON e.manager_id = m.emp_id;

-- Create a view for order summary
CREATE VIEW order_summary AS
SELECT o.order_id,
       CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
       o.order_date,
       o.total_amount,
       o.status,
       COUNT(oi.order_item_id) AS total_items
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY o.order_id, c.first_name, c.last_name, o.order_date, o.total_amount, o.status;

-- Query the views
SELECT * FROM employee_details;
SELECT * FROM order_summary WHERE total_amount > 500;

-- =====================================================
-- END OF SQL CONCEPTS DEMONSTRATION
-- =====================================================

-- This file demonstrates:
-- 1. DDL (Data Definition Language) - CREATE, ALTER, DROP
-- 2. DML (Data Manipulation Language) - INSERT, UPDATE, DELETE
-- 3. DQL (Data Query Language) - SELECT with various clauses
-- 4. String functions and operations
-- 5. Aggregate functions (COUNT, SUM, AVG, MIN, MAX)
-- 6. GROUP BY and HAVING clauses
-- 7. Various types of JOINs
-- 8. Subqueries (scalar, correlated, EXISTS)
-- 9. Window functions
-- 10. CASE statements
-- 11. Date and time functions
-- 12. UNION operations
-- 13. Common Table Expressions (CTEs)
-- 14. Advanced analytical queries
-- 15. Data modification operations
-- 16. Index creation
-- 17. View creation and usage