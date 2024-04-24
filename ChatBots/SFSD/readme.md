# AI SFSD Chatbot

Welcome to the AI SFSD (Structure Fichiers et Structures de Données) Chatbot! This chatbot is designed to engage in conversations with students, providing assistance, and answering questions.

## Installation

To install the required dependencies for the AI SFSD Chatbot, simply run the following command:

pip install -r requirements.txt



This will install all the necessary Python packages specified in the `requirements.txt` file.

## Launching the API

To launch the API for the AI SFSD Chatbot, execute the following command:

waitress-serve --listen=127.0.0.1:8000 app:app



This command will start the API server, listening on `127.0.0.1:8000`. You can then interact with the chatbot through this API.

## Usage

Once the API is up and running, you can start interacting with the AI SFSD Chatbot by sending HTTP requests to the appropriate endpoints. Here are some example endpoints you can use:

- `/chat`: Use this endpoint to send a message to the chatbot and receive a response.

Refer to the API documentation or source code for more details on available endpoints and their usage.

## Contributors

- [Turki Haris](https://github.com/TurkiHaris) : Created the chatbots for the platform.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
