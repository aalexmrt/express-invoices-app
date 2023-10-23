import { Router } from 'express'

import invoiceRouter from '#routes/v1/invoice.routes.js'

const v1Router = Router()
v1Router.use('/invoices', invoiceRouter)

export default v1Router
