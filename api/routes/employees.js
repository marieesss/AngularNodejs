// Importing important packages
const express = require('express');

// Using express and routes
const app = express();
const employeeRoute = express.Router();

// Employee module which is required and imported
let employeeModel= require('../models/employees')

// To Get List Of Employees
employeeRoute.get("/", async (req, res) => {
    try{
        const employee = await employeeModel.find();
        res.status(200).json(employee);

    }catch(err){
        res.status(500).json(err);
    }
})

// To Add New Employee
employeeRoute.route('/addEmployee').post(function (req, res) {
 let employee = new employeeModel(req.body);
 employee.save()
 .then(game => {
 res.status(200).json({ 'employee': 'Employee Added Successfully' });
 })
 .catch(err => {
 res.status(400).send("Something Went Wrong");
 });
});



employeeRoute.get('/editEmployee/:id', async (req, res) => {
    let id = req.params.id;
    try{
        const employee = await employeeModel.findById(id);
        res.status(200).json(employee);

    }catch(err){
        res.status(500).json(err);
    }
})

employeeRoute.put('/updateEmployee/:id', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// To Delete The Employee


employeeRoute.delete('/deleteEmployee/:id', async (req, res) => {
    try {
      await employeeModel.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = employeeRoute;