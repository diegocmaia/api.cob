import { model, Schema } from 'mongoose'

const occupationModel = model('Occupation', {
    title: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
})

export default occupationModel
