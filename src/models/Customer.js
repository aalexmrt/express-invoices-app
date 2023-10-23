import mongoose, { Schema } from 'mongoose'

const customerSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  legalId: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    default: 'pending',
  },
  contactName: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
})

customerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Customer = mongoose.model('Customer', customerSchema)

export default Customer
