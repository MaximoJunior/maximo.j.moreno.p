const User = require('../models/user');

const getUsers = async (req, res) => {

    try {

        const [ total, users ] = await Promise.all([
            User.countDocuments({}),
            User.find({}).populate('department')
        ]);


        res.json({
            total,
            users
        })

    } catch (error) {
          console.log("Error - getUsers:", error );
          res.status(500).json( { message: "Error" } );
    }
    
}

const createUser = async (req, res) => {

    const { 
            name, 
            lastName, 
            gender, 
            number_ID, 
            birthDate, 
            department,
            position, 
            supervisor } = req.body;

    const data = { name, lastName, gender, number_ID, 
                   birthDate, department, 
                   position, supervisor };

    try {

        const user = new User( data );
        await user.save();

        res.status(201).json({
            message: "OK",
            user
        });

    } catch (error) {

        console.log("Error - createUser:", error );
        res.status(500).json( { message: "Error" } );

    }

    
}


module.exports = {
    getUsers,
    createUser
}