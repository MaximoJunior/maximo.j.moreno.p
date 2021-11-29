const { Schema, model } = require('mongoose');

const DepartmentSchema = new Schema({
      code: {
          type: String,
          required: [true, "The codigo is required"],
          unique: true
      },
      name:{
          type: String,
          required: [true, "The name is required" ],
          unique: true
      }
});

DepartmentSchema.methods.toJSON = function(){
    const { __v, _id, ...department } = this.toObject();
    department.id = _id;
    return department;
}



module.exports = model( 'Department', DepartmentSchema );