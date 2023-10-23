import { Router } from 'express'

import InvoiceController from '#controllers/invoice.controller.js'

const invoiceRouter = Router()

invoiceRouter.get('/', InvoiceController.apiGetAllInvoices)
invoiceRouter.post('/', InvoiceController.apiCreateInvoice)

invoiceRouter.get('/:id', InvoiceController.apiGetInvoiceById)
invoiceRouter.patch('/:id', InvoiceController.apiUpdateInvoiceById)
invoiceRouter.delete('/:id', InvoiceController.apiDeleteInvoiceById)

export default invoiceRouter
