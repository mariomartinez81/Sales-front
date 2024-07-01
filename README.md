This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Sales-front

## Description

`Sales-front` is a frontend application for managing sales products. It is built with Next.js and TypeScript, and utilizes Tailwind CSS for styling.

## Features

- Product listing
- Product details
- Responsive design
- API integration with Sales-Api
- User authentication

## Technologies Used

- **Next.js**: React framework for production
- **TypeScript**: Strongly typed programming language that builds on JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: Promise-based HTTP client
- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React
- **React Hook Form**: Performant, flexible and extensible forms with easy-to-use validation
- **Zod**: TypeScript-first schema declaration and validation library
- **Docker**: Container platform to manage and run services
- **ESLint** and **Prettier**: Tools to maintain clean and formatted code

## Requirements

- Node.js (version 14 or higher)
- NPM or Yarn
- Docker

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mariomartinez81/Sales-front.git
   cd Sales-front
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Copy the environment variables example file and configure it:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Usage

### Available Scripts

- **Start the server**:
  ```bash
  npm run dev
  # or
  yarn dev
  ```
- **Build for production**:
  ```bash
  npm run build
  # or
  yarn build
  ```
- **Run tests**:
  ```bash
  npm test
  # or
  yarn test
  ```
- **Linting**:
  ```bash
  npm run lint
  # or
  yarn lint
  ```

### Docker

To run the application using Docker:

1. Build the Docker image:

   ```bash
   docker build -t sales-front .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 sales-front
   ```

### Screenshots

Here are some screenshots of the application:

#### Home Page

![Home Page](/public/image/screenshots/product_page.png)

#### Add Product

![Product Details](/public/image/screenshots/create_product.png)

#### Validation form

![Home Page](/public/image/screenshots/validation_create_product.png)

#### Actions Product

![Product Details](/public/image/screenshots/actions_product.png)

#### Update Product

![Product Details](/public/image/screenshots/update_product.png)

#### Delete Product

![Home Page](/public/image/screenshots/delete_product.png)

#### Product Details

![Product Details](/public/image/screenshots/details_product.png)

#### Dark Mode

![Product Details](/public/image/screenshots/dark_mode.png)

## Contributing

Contributions are welcome. Please open an issue or a pull request to discuss any changes you would like to make.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Contact

For any inquiries, please contact Mario Martínez.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
