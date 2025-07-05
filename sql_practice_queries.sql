-- SQL Practice Queries - Individual Operations
-- Run these queries one by one to practice different SQL concepts
-- Make sure to run the main sql_concepts_demo.sql file first to create tables and insert data

-- =====================================================
-- 1. BASIC SELECT OPERATIONS
-- =====================================================

-- Query 1: Get all employees
SELECT * FROM employees;

-- Query 2: Get specific columns
SELECT first_name, last_name, salary FROM employees;

-- Query 3: Filter employees with high salary
SELECT * FROM employees WHERE salary > 70000;

-- Query 4: Sort employees by salary (highest first)
SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC;

-- Query 5: Get top 3 highest paid employees
SELECT first_name, last_name, salary FROM employees ORDER BY salary DESC LIMIT 3;

-- Query 6: Get employees from specific department
SELECT * FROM employees WHERE dept_id = 3;

-- =====================================================
-- 2. STRING OPERATIONS PRACTICE
-- =====================================================

-- Query 7: Combine first and last names
SELECT emp_id, CONCAT(first_name, ' ', last_name) AS full_name, email FROM employees;

-- Query 8: Convert product names to uppercase
SELECT product_name, UPPER(product_name) AS uppercase_name FROM products;

-- Query 9: Get first 10 characters of product names
SELECT product_name, SUBSTRING(product_name, 1, 10) AS short_name FROM products;

-- Query 10: Find customers whose names start with 'M'
SELECT * FROM customers WHERE first_name LIKE 'M%';

-- Query 11: Find emails with specific domain
SELECT * FROM customers WHERE email LIKE '%@email.com';

-- Query 12: Replace spaces with underscores in product names
SELECT product_name, REPLACE(product_name, ' ', '_') AS modified_name FROM products;

-- =====================================================
-- 3. AGGREGATE FUNCTIONS PRACTICE
-- =====================================================

-- Query 13: Count total employees
SELECT COUNT(*) AS total_employees FROM employees;

-- Query 14: Calculate total salary expense
SELECT SUM(salary) AS total_salary_cost FROM employees;

-- Query 15: Find average salary
SELECT AVG(salary) AS average_salary FROM employees;

-- Query 16: Find highest and lowest salaries
SELECT MIN(salary) AS lowest_salary, MAX(salary) AS highest_salary FROM employees;

-- Query 17: Count products by category
SELECT category, COUNT(*) AS product_count FROM products GROUP BY category;

-- =====================================================
-- 4. GROUP BY AND HAVING PRACTICE
-- =====================================================

-- Query 18: Employee count by department
SELECT dept_id, COUNT(*) AS employee_count FROM employees GROUP BY dept_id;

-- Query 19: Average salary by department
SELECT dept_id, AVG(salary) AS avg_salary FROM employees GROUP BY dept_id;

-- Query 20: Departments with more than 1 employee
SELECT dept_id, COUNT(*) AS employee_count FROM employees GROUP BY dept_id HAVING COUNT(*) > 1;

-- Query 21: Product count and average price by supplier
SELECT supplier_id, COUNT(*) AS product_count, AVG(price) AS avg_price FROM products GROUP BY supplier_id;

-- =====================================================
-- 5. JOIN OPERATIONS PRACTICE
-- =====================================================

-- Query 22: Employee names with department names (INNER JOIN)
SELECT e.first_name, e.last_name, d.dept_name FROM employees e INNER JOIN departments d ON e.dept_id = d.dept_id;

-- Query 23: All departments with employee count (LEFT JOIN)
SELECT d.dept_name, COUNT(e.emp_id) AS employee_count FROM departments d LEFT JOIN employees e ON d.dept_id = e.dept_id GROUP BY d.dept_id, d.dept_name;

-- Query 24: Employee-Manager relationship (SELF JOIN)
SELECT e.first_name AS employee, m.first_name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.emp_id;

-- Query 25: Customer orders with employee details (3-table JOIN)
SELECT c.first_name AS customer, o.order_date, o.total_amount, e.first_name AS sales_rep FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id INNER JOIN employees e ON o.employee_id = e.emp_id;

-- Query 26: Product sales summary (JOIN with GROUP BY)
SELECT p.product_name, SUM(oi.quantity) AS total_sold FROM products p INNER JOIN order_items oi ON p.product_id = oi.product_id GROUP BY p.product_id, p.product_name;

-- =====================================================
-- 6. SUBQUERY PRACTICE
-- =====================================================

-- Query 27: Employees earning above average salary
SELECT first_name, last_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);

-- Query 28: Products from USA suppliers
SELECT product_name, price FROM products WHERE supplier_id IN (SELECT supplier_id FROM suppliers WHERE country = 'USA');

-- Query 29: Customers who have placed orders
SELECT first_name, last_name FROM customers WHERE EXISTS (SELECT 1 FROM orders WHERE orders.customer_id = customers.customer_id);

-- Query 30: Employees earning above their department average
SELECT e1.first_name, e1.last_name, e1.salary, e1.dept_id FROM employees e1 WHERE e1.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.dept_id = e1.dept_id);

-- =====================================================
-- 7. WINDOW FUNCTIONS PRACTICE
-- =====================================================

-- Query 31: Rank employees by salary
SELECT first_name, last_name, salary, ROW_NUMBER() OVER (ORDER BY salary DESC) AS salary_rank FROM employees;

-- Query 32: Rank employees within each department
SELECT first_name, last_name, salary, dept_id, RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS dept_rank FROM employees;

-- Query 33: Compare with previous salary
SELECT first_name, last_name, salary, LAG(salary) OVER (ORDER BY salary) AS previous_salary FROM employees;

-- =====================================================
-- 8. CASE STATEMENTS PRACTICE
-- =====================================================

-- Query 34: Categorize employees by salary
SELECT first_name, last_name, salary, CASE WHEN salary < 60000 THEN 'Low' WHEN salary BETWEEN 60000 AND 80000 THEN 'Medium' ELSE 'High' END AS salary_category FROM employees;

-- Query 35: Count employees by salary category per department
SELECT dept_id, SUM(CASE WHEN salary > 70000 THEN 1 ELSE 0 END) AS high_earners, SUM(CASE WHEN salary <= 70000 THEN 1 ELSE 0 END) AS regular_earners FROM employees GROUP BY dept_id;

-- =====================================================
-- 9. DATE FUNCTIONS PRACTICE
-- =====================================================

-- Query 36: Extract date parts from orders
SELECT order_id, order_date, YEAR(order_date) AS order_year, MONTH(order_date) AS order_month, DAY(order_date) AS order_day FROM orders;

-- Query 37: Calculate shipping time
SELECT order_id, order_date, shipped_date, DATEDIFF(shipped_date, order_date) AS days_to_ship FROM orders WHERE shipped_date IS NOT NULL;

-- Query 38: Orders in specific date range
SELECT * FROM orders WHERE order_date BETWEEN '2023-06-01' AND '2023-06-30';

-- =====================================================
-- 10. UNION OPERATIONS PRACTICE
-- =====================================================

-- Query 39: Combine employee and customer names
SELECT first_name, last_name, 'Employee' AS type FROM employees UNION SELECT first_name, last_name, 'Customer' AS type FROM customers;

-- Query 40: All cities (with duplicates)
SELECT city FROM customers UNION ALL SELECT city FROM suppliers;

-- =====================================================
-- 11. ADVANCED QUERIES PRACTICE
-- =====================================================

-- Query 41: CTE for department statistics
WITH dept_stats AS (SELECT dept_id, COUNT(*) AS emp_count, AVG(salary) AS avg_salary FROM employees GROUP BY dept_id) SELECT d.dept_name, ds.emp_count, ds.avg_salary FROM dept_stats ds JOIN departments d ON ds.dept_id = d.dept_id;

-- Query 42: Top 3 highest earners
SELECT first_name, last_name, salary FROM (SELECT first_name, last_name, salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank FROM employees) ranked WHERE salary_rank <= 3;

-- Query 43: Monthly sales summary
SELECT YEAR(order_date) AS year, MONTH(order_date) AS month, COUNT(*) AS total_orders, SUM(total_amount) AS monthly_revenue FROM orders GROUP BY YEAR(order_date), MONTH(order_date) ORDER BY year, month;

-- =====================================================
-- 12. ANALYTICAL QUERIES PRACTICE
-- =====================================================

-- Query 44: Customer lifetime value
SELECT c.customer_id, CONCAT(c.first_name, ' ', c.last_name) AS customer_name, COUNT(o.order_id) AS total_orders, COALESCE(SUM(o.total_amount), 0) AS lifetime_value FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.first_name, c.last_name ORDER BY lifetime_value DESC;

-- Query 45: Product performance with stock status
SELECT p.product_name, p.price, COALESCE(SUM(oi.quantity), 0) AS total_sold, p.stock_quantity, CASE WHEN p.stock_quantity = 0 THEN 'Out of Stock' WHEN p.stock_quantity < 20 THEN 'Low Stock' ELSE 'In Stock' END AS stock_status FROM products p LEFT JOIN order_items oi ON p.product_id = oi.product_id GROUP BY p.product_id, p.product_name, p.price, p.stock_quantity ORDER BY total_sold DESC;

-- Query 46: Employee sales performance
SELECT e.first_name, e.last_name, COUNT(o.order_id) AS orders_handled, COALESCE(SUM(o.total_amount), 0) AS total_sales FROM employees e LEFT JOIN orders o ON e.emp_id = o.employee_id GROUP BY e.emp_id, e.first_name, e.last_name ORDER BY total_sales DESC;

-- =====================================================
-- 13. COMPLEX ANALYSIS QUERIES
-- =====================================================

-- Query 47: Revenue by product category
SELECT p.category, SUM(oi.quantity * oi.unit_price * (1 - oi.discount)) AS category_revenue FROM products p INNER JOIN order_items oi ON p.product_id = oi.product_id GROUP BY p.category ORDER BY category_revenue DESC;

-- Query 48: Department budget vs salary cost
SELECT d.dept_name, d.budget, SUM(e.salary) AS salary_cost, (d.budget - SUM(e.salary)) AS remaining_budget FROM departments d LEFT JOIN employees e ON d.dept_id = e.dept_id GROUP BY d.dept_id, d.dept_name, d.budget;

-- Query 49: Customer order frequency
SELECT c.first_name, c.last_name, COUNT(o.order_id) AS order_count, AVG(DATEDIFF(CURDATE(), o.order_date)) AS avg_days_since_order FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.customer_id, c.first_name, c.last_name;

-- Query 50: Supplier performance
SELECT s.supplier_name, COUNT(p.product_id) AS products_supplied, AVG(p.price) AS avg_product_price, SUM(COALESCE(sales.total_sold, 0)) AS total_units_sold FROM suppliers s LEFT JOIN products p ON s.supplier_id = p.supplier_id LEFT JOIN (SELECT product_id, SUM(quantity) AS total_sold FROM order_items GROUP BY product_id) sales ON p.product_id = sales.product_id GROUP BY s.supplier_id, s.supplier_name ORDER BY total_units_sold DESC;

-- =====================================================
-- PRACTICE TIPS:
-- =====================================================
-- 1. Run these queries one by one
-- 2. Try modifying the WHERE clauses to see different results
-- 3. Experiment with different ORDER BY columns
-- 4. Change the GROUP BY columns to see different groupings
-- 5. Try combining different concepts in a single query
-- 6. Practice writing your own variations of these queries