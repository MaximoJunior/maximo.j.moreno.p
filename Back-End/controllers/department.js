const Department = require('../models/department');

const getDepartments = async (req, res) => {


    try {

        const [ total, departments ] = await Promise.all([
            Department.countDocuments({}),
            Department.find({})
        ]);


        res.json({
            total,
            departments
        })

    } catch (error) {
          console.log("Error - getDepartments:", error );
          res.status(500).json( { message: "Error" } );
    }
    
}

const createDepartment = async (req, res) => {

      const { code, name } = req.body;


      try {

          const department =  new Department( { code, name }); 
          await department.save();

          res.status(201).json({ 
               message: "OK", 
               department 
            });
          
      } catch (error) {

          console.log("Error - createDepartment:", error );
          res.status(500).json( { message: "Error" } );

      }
      
}

module.exports = {
    getDepartments,
    createDepartment
}