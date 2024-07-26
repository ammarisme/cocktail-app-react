
```markdown
# Cocktail App React
A NextJS-based web application to browse and favorite cocktail recipes (consuming apis freely available at - https://www.thecocktaildb.com/api.php), built with Next.js and deployed on GitHub Pages.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)


## Introduction

Cocktail App React is a web application that allows users to search for cocktail recipes, add them to their favorites, and view a list of their favorite cocktails. The app is built with React and Next.js and uses the CocktailDB API for fetching cocktail data.

## Features
- Search for cocktail recipes
- Add cocktails to favorites
- View list of favorite cocktails
- Responsive design
- Deployed on GitHub Pages

## Future improvements
- View cocktail details 


## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ammarisme/cocktail-app-react.git
   cd cocktail-app-react
   ```


2. **Install dependencies:**
   ```bash
   npm install
   ```


## Usage


To run the application locally, use the following command:


```bash
npm run build
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application in action.


## Deployment

The application is deployed on GitHub Pages. To deploy the application, follow these steps:


1. **Ensure `next.config.js` is correctly configured:**


   ```javascript
   const isProd = process.env.NODE_ENV === 'production';


   const nextConfig = {
     reactStrictMode: true,
     assetPrefix: isProd ? '/cocktail-app-react/' : '',
     basePath: isProd ? '/cocktail-app-react' : '',
     output: 'export',
   };


   export default nextConfig;
   ```


2. **Install `gh-pages` and `cross-env`:**


   ```bash
   npm install --save-dev gh-pages cross-env
   ```


3. **Update `package.json` scripts:**


   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "cross-env NODE_ENV=production next build",
       "start": "next start",
       "lint": "next lint",
       "export": "next export",
       "deploy": "cross-env NODE_ENV=production next build && next export && gh-pages -d out"
     }
   }
   ```


4. **Deploy the application:**


   ```bash
   npm run deploy
   ```
   Application is deployed at 

5. **Configure GitHub Pages:**


   - Go to your repository on GitHub.
   - Click on the "Settings" tab.
   - Scroll down to the "GitHub Pages" section.
   - In the "Source" drop-down, select `gh-pages` branch.


## Contributing


Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.


1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit them:**
   ```bash
   git commit -m 'Add some feature'
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a pull request.**


## License


This project is licensed under the MIT License.
```


This `README.md` provides a clear overview of your project, including installation, usage, deployment, and contribution guidelines. Adjust any sections as needed to better fit your project specifics.
