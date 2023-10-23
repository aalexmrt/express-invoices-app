import Invoice from '#models/invoice.js'

class InvoiceService {
  static async getAllInvoices() {
    try {
      const invoices = await Invoice.find()
      return invoices
    } catch (error) {
      console.error(`Could not fetch invoices: ${error}`)
    }
  }

  static async createInvoice(invoice) {
    try {
      const createdInvoice = await new Invoice(invoice).save()
      console.log(createdInvoice)
      return createdInvoice
    } catch (error) {
      console.error(`Could not create invoice: ${error}`)
    }
  }

  static async getInvoiceById(invoiceId) {
    try {
      const invoice = await Invoice.findById({ _id: invoiceId })
      return invoice
    } catch (error) {
      console.error(`Could not fetch invoice: ${error}`)
    }
  }

  static async updateInvoiceById(invoiceId, invoice) {
    try {
      const updatedInvoice = await Invoice.findByIdAndUpdate(
        { _id: invoiceId },
        invoice,
        { new: true }
      )
      return updatedInvoice
    } catch (error) {
      console.error(`Could not update invoice: ${error}`)
    }
  }

  static async deleteInvoiceById(invoiceId) {
    try {
      const deletedInvoice = await Invoice.findByIdAndDelete({ _id: invoiceId })
      return deletedInvoice
    } catch (error) {
      console.error(`Could not delete invoice: ${error}`)
    }
  }
}

export default InvoiceService
