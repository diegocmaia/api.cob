import { model, Schema } from 'mongoose'

const categoryModel = model('Category', {
    title: { type: String }
})

export default categoryModel
