# SelfPaced.io - Coming Soon!

Welcome to SelfPaced.io - an innovative self-paced learning platform designed to empower individuals with the necessary tech skills to achieve their career goals. This repository contains a simple "Coming Soon" template for the SelfPaced.io platform.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Docker Hub](#docker-hub)


## Description

The SelfPaced.io "Coming Soon" template is a static web page that provides an overview of the SelfPaced.io platform, its mission, and a countdown timer until its official launch. It also includes a newsletter signup form for visitors to stay updated with the latest information and announcements. Currently the data is stored locally, however the ability to store the data in Supabase or similar may be added later.

## Installation

To use the SelfPaced.io "Coming Soon" template, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd selfpaced-coming-soon
```

3. Install the required dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root directory and provide the necessary environment variables:

```bash
HCAPTCHA_SECRET_KEY=yourKeyHere
```

## Usage

To run the SelfPaced.io "Coming Soon" template, use the following command:

```bash
npm start
```


This will start the application and make it accessible at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions are welcome! If you'd like to contribute to the SelfPaced.io "Coming Soon" template, please follow these guidelines:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit and push your changes
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Docker Hub

The SelfPaced.io "Coming Soon" template is also available on Docker Hub. 

You can find the Docker image at `itz4blitz/selfpacedcomingsoon:latest`. 

To use the Docker image, you can pull it using the following command:

```bash
docker pull itz4blitz/selfpacedcomingsoon:latest
```