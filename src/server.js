const inquirer = require('inquirer');
const { getAllDepartments, getAllRoles, getAllEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries');

const mainMenu = async()=>{
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: "Select an action",
            choices: [
                "View all employees",
                "Add new employee",
                "Update Employee Role",
                "View all roles",
                "Add new role",
                "View all departments",
                "Add new department",
            ],
        },
    ])

    switch (action) {
        case 'View all employees':
            console.table(await getAllEmployees()); // when would I put something in these parenthesis?
            break;
        
        case 'Add new employee':
            const employeeData = await inquirer.prompt([
                { name: 'first_name', message: "Enter employee's first name:" },
                { name: 'last_name', message: "Enter employee's last name" },
                { name: 'role_id', message: "Enter role ID:" },
                { name: 'manager_id', message: "Enter the manager ID (leave blank if none)", default: null},
            ]);
            await addEmployee(employeeData.first_name, employeeData.last_name, employeeData.role_id, employeeData.manager_id);
            console.log("New employee has been added");
            break;

        case 'Update Employee Role':
            const updateData = await inquirer.prompt([
                { name: 'employee_id', message: "Enter ID of employee you want to update:" },
                { name: 'role_id', message: "Enter the NEW role ID:" },
            ]);
            await updateEmployeeRole(updateData.employee_id, updateData.role_id);
            console.log("Employee role updated");
            break;
            
        case 'View all roles':
            console.table(await getAllRoles());
            break;
        
        case 'Add new role':
            const roleData = await inquirer.prompt([
                { name: 'title', message: "Enter role title:" },
                { name: 'salary', mesaage: "Enter total salary for the role:" },
                { name: 'department_id', message: "Enter department ID:" },
            ]);
            await addRole(roleData.title, roleData.salary, roleData.department_id);
            console.log("New role has been added");
            break;

        case 'View all departments':
            console.table(await getAllDepartments());
            break;

        case 'Add new department':
            const departmentData = await inquirer.prompt([
                { name: 'name', message: "Enter department name" },
            ]);
            await addDepartment(departmentData.name);
            console.log("New department added");
            break;

    }
    mainMenu();
};

mainMenu();