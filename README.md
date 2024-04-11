# shortUrlBuild

# ShortURL Project (Node.js Version)

This project implements a URL shortener service that allows users to shorten long URLs and easily share them. It's built with Node.js and leverages a database for persistence.

## Features

- Shorten long URLs to a more manageable size.
- (Optional) Allow customization of shortened URLs with a limited character set (alphanumeric and underscores).
- Redirect users to the original URL when they access the shortened version.
- Track usage statistics for shortened URLs, including the number of clicks.

## Technologies Used

- Node.js (JavaScript runtime environment)
- Express.js (Web Framework)
- Mongoose (ODM for MongoDB)
- NanoId

## Installation

**Prerequisites:**

- Node.js and npm (Node Package Manager) - Download from [Node.js official website](https://nodejs.org/)

**Clone the repository:**

https://github.com/mankal-27/shortUrlBuild.git

**Configuration (Optional):**

1. Create a file named `.env` in the project root directory.
2. Include configurations like database connection details, allowed shortening length, etc. Here's an example:

MONGODB_URI=mongodb://localhost:27017/shorturl
ALLOWED_CHARACTERS=0123456789abcdefghijklmnopqrstuvwxyz_
SHORT_URL_LENGTH=6

## Usage

**Run the application:**

This will start the Node.js server.

**Shorten a URL:**

There are two ways to shorten a URL (depending on implementation):
- **Still UnderProgress**
- **Web Interface:** If the project includes a web interface, visit [http://localhost:3000/](http://localhost:3000/) (or the specified port) in your web browser. You'll see a form where you can enter a long URL and optionally customize the shortened URL (within allowed characters). Clicking the "Shorten" button will generate a shortened URL.
- **API:** The application might expose a REST API for shortening URLs. Refer to the project documentation (if implemented) for API details.

**Example:**

Shortening the URL "https://www.wikipedia.org/" might generate a shortened URL like "http://localhost:3000/sH0rtL1nk". Clicking on this shortened URL will redirect you to the original Wikipedia page.

## Testing

Unit tests are likely located in a folder named `test` or `tests`. Refer to the project's README or instructions for running the tests.

