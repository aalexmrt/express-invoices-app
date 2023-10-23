import InvoiceService from '#services/InvoiceService.js'

class InvoiceController {
  static async apiGetAllInvoices(req, res, next) {
    try {
      const invoices = await InvoiceService.getAllInvoices()
      res.status(200).json(invoices)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async apiCreateInvoice(req, res, next) {
    try {
      const { body: invoice } = req
      const createdInvoice = await InvoiceService.createInvoice(invoice)
      if (!createdInvoice) {
        res.status(400).json({ error: 'Invalid input' })
        return
      }
      res.status(201).json(createdInvoice)
    } catch (error) {
      console.error(error)
      res.status(400).json({ error: 'Invalid input' })
    }
  }

  static async apiGetInvoiceById(req, res, next) {
    try {
      const {
        params: { id },
      } = req
      const invoice = await InvoiceService.getInvoiceById(id)
      if (!invoice) {
        res.status(404).json({ error: `Invoice with id '${id}' not found` })
        return
      }
      res.status(200).json(invoice)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async apiUpdateInvoiceById(req, res, next) {
    try {
      const {
        params: { id },
        body: invoice,
      } = req
      const updatedInvoice = await InvoiceService.updateInvoiceById(id, invoice)
      if (!updatedInvoice) {
        res.status(404).json({ error: `Invoice with id '${id}' not found` })
        return
      }
      res.status(200).json(updatedInvoice)
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }

  static async apiDeleteInvoiceById(req, res, next) {
    try {
      const {
        params: { id },
      } = req
      const deletedInvoice = await InvoiceService.deleteInvoiceById(id)
      if (!deletedInvoice) {
        res.status(404).json({ error: `Invoice with id '${id}' not found` })
        return
      }
      res.status(200).json({
        message: `Invoice with id ${deletedInvoice.id} deleted successfully!`,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
}

export default InvoiceController
