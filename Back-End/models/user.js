const { Schema, model } = require("mongoose");


const UserSchema = new Schema({

    name: {
        type: String,
        required: [true, "The name is required"]
    },
    lastName: {
        type: String,
        required: [true, "The lastName is required"]
    },
    gender: {
        type: String,
        enum: ['FEMALE', 'MALE'],
        required: [true, "The gender is required"]
    },
    number_ID: {
        type: String,
        required: [true, "The number_ID is required"]
    },
    birthDate: {
        type: Date,
        required: [true, "The gender is required"]
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    position: {
        type: String,
        required: [true, "The position is required"]
    },
    supervisor: {
        type: String,
        required: [true, "The supervisor is required"]
    }

});

 UserSchema.methods.toJSON = function(){
    const { __v, _id, ...user } = this.toObject();
    user.id = _id;
    return user;
}

module.exports = model( 'User', UserSchema );