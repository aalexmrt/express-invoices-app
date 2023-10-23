# Invoice Management API

**Status: In progress**

Restful API for invoice management built with Node.js, Express, MongoDB, and Mongoose, all wrapped up in an MVC architecture.

## Features

- **Invoice Creation:** Create new invoices effortlessly using intuitive API endpoints.
- **Data Storage:** Securely store invoice data in MongoDB, ensuring data integrity and reliability.
- **Update and Delete:** Easily update or delete existing invoices as needed.
- **MVC Architecture:** Organized codebase following the Model-View-Controller pattern for maintainability.
- **Flexible Integration:** Seamlessly integrate the API into your applications and services.
   
## API Endpoints:
- `GET /api/v1/invoices`: Retrieve all invoices.
- `GET /api/v1/invoices/:id`: Retrieve a specific invoice by ID.
- `POST /api/v1/invoices`: Create a new invoice.
- `PATCH /api/v1/invoices/:id`: Update an existing invoice.
- `DELETE /api/v1/invoices/:id`: Delete a specific invoice.

## How to Contribute

We welcome contributions from the community! To contribute to the Invoice Management API, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

## On going tasks
- [X] Create project structure.
- [X] Create invoice and customer model.
- [X] Create invoices endpoints. 
- [ ] Improve handle errors and status codes. [Some hints](https://github.com/hagopj13/node-express-boilerplate/blob/master/src/services/user.service.js)
- [ ] Add export to pdf feature and it's corresponding ENDPOINT.

## License

This project is licensed under the [MIT License](LICENSE.md) - see the [LICENSE.md](LICENSE.md) file for details. Happy coding!
