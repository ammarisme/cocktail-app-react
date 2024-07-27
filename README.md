\# Cocktail App React

A React-based web application to browse and favorite cocktail recipes, built with Next.js and deployed on GitHub Pages.

\#\# Table of Contents

\- \[Introduction\](\#introduction)

\- \[Features\](\#features)

\- \[Installation\](\#installation)

\- \[Usage\](\#usage)

\- \[Deployment\](\#deployment)

\- \[Contributing\](\#contributing)

\- \[License\](\#license)

\#\# Introduction

Cocktail App React is a web application that allows users to search for cocktail recipes, add them to their favorites, and view a list of their favorite cocktails. The app is built with React and Next.js and uses the CocktailDB API for fetching cocktail data.

\#\# Features

\- Search for cocktail recipes

\- View cocktail details

\- Add cocktails to favorites

\- View list of favorite cocktails

\- Responsive design

\- Deployed on GitHub Pages

\#\# Installation

To get a local copy up and running, follow these steps:

1\. \*\*Clone the repository:\*\*

   \`\`\`bash

   git clone https://github.com/ammarisme/cocktail-app-react.git

   cd cocktail-app-react

2. **Install dependencies:**  
     
   npm install

## Usage

To run the application locally, use the following command:

npm run dev

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Deployment

The application is deployed on GitHub Pages. To deploy the application, follow these steps:

1. **Ensure `next.config.js` is correctly configured:**  
     
   const isProd \= process.env.NODE\_ENV \=== 'production';  
     
     
   const nextConfig \= {  
     
     reactStrictMode: true,  
     
     assetPrefix: isProd ? '/cocktail-app-react/' : '',  
     
     basePath: isProd ? '/cocktail-app-react' : '',  
     
     output: 'export',  
     
   };  
     
     
   export default nextConfig;  
     
1. **Install `gh-pages` and `cross-env`:**  
     
   npm install \--save-dev gh-pages cross-env  
     
1. **Update `package.json` scripts:**  
     
   {  
     
     "scripts": {  
     
       "dev": "next dev",  
     
       "build": "cross-env NODE\_ENV=production next build",  
     
       "start": "next start",  
     
       "lint": "next lint",  
     
       "export": "next export",  
     
       "deploy": "cross-env NODE\_ENV=production next build && next export && gh-pages \-d out"  
     
     }  
     
   }  
     
1. **Deploy the application:**  
     
   npm run deploy  
     
1. **Configure GitHub Pages:**  
     
   - Go to your repository on GitHub.  
   - Click on the "Settings" tab.  
   - Scroll down to the "GitHub Pages" section.  
   - In the "Source" drop-down, select `gh-pages` branch.

## Contributing

Contributions are welcome\! If you have any suggestions or improvements, feel free to open an issue or create a pull request.

1. **Fork the repository.**  
1. **Create a new branch:**  
     
   git checkout \-b feature/your-feature-name  
     
1. **Make your changes and commit them:**  
     
   git commit \-m 'Add some feature'  
     
1. **Push to the branch:**  
     
   git push origin feature/your-feature-name  
     
1. **Open a pull request.**

## License

This project is licensed under the MIT License.

This \`README.md\` provides a clear overview of your project, including installation, usage, deployment, and contribution guidelines. Adjust any sections as needed to better fit your project specifics.  
