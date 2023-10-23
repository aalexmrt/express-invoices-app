import mongoose, { Schema } from 'mongoose'

const invoiceSchema = Schema({
  number: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  mailStatus: {
    type: String,
    default: 'pending',
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
})

invoiceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Invoice = mongoose.model('Invoice', invoiceSchema)

export default Invoice
