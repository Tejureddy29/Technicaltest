# Dynamic Form Generator

A dynamic form generator that takes a JSON schema and generates a styled, functional form in real-time. This application features a split-screen interface with a JSON editor on the left and a form preview on the right.

To run the application locally:

1. **Start the Development Server**:
   Make sure you are in the project directory and run:
   
   ```bash
   npm start
   ```

2. **Accessing the Application**:
   Open your web browser and go to `http://localhost:3000`. You should see the application running.

### Making Changes

You can modify components located in the `src/components` directory. The main application logic is in `src/App.tsx`. 

### Testing Changes

Whenever you make changes to your code, save them, and the development server will automatically reload to reflect those changes.

### Building for Production

To create a production build of your application, run:

```bash
npm run build
```

This will generate static files in a `build` directory that can be deployed to any static file server.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```