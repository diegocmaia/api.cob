import { model, Schema } from 'mongoose'

const userModel = model('User', {
    username: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    address: {
        street: { type: String },
        zipcode: { type: String },
        city: { type: String },
        country: { type: String }
    },
    mobile_phone: { type: String },
    occupation: { type: Schema.Types.ObjectId, ref: 'Occupation' },
    createdAt: { type: Date },
    updatedAt: { type: Date }
})

export default userModel
