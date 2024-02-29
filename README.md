# StartupPlan

Startup plan is a SME/Bootstrapping platform that Provides customizable and user-friendly business plan templates, customer survey templates, competitive analysis and SWOT analysis templates that cater to the specific needs of startups

The product will help Startups:

1. Access business plan templates.
2. Access customer survey samples.
3. Register businesses with appropriate institutions.
4. Procure affordable legal and financial consultation.
// "start": "react-scripts --openssl-legacy-provider start",
## Functional Requirements

1. Shows the header and an overview of what to expect.
2. Authentication whenever the user logs into the system.
3. A verification email is sent to user whenever she registers for the first time.

## System Features

1. Landing Page.
2. Signup/Login.
3. Our services.
4. Customer chat feature.
5. Templates.
6. Pricing and Subscription plan.
7. Support and resources
8. Testimonials and Reviews
9. Social media links

# Setting up the repository

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# App Link
Kindly click the app link to view
https://ada-software-engineering-program.github.io/startup-plan/

## install

- Create the folder in which your project would be located in.
- Move into the folder and insall react.
- To install react, run `npx create-react-app <app-name>`.

## Available Scripts

In the project directory, you can run the command below after setting up:

### `npm start` to run the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Install Tailwind CSS with Create React App

- Start by creating a new React project with Create React App.
- Install tailwindcss via npm by running `npm install -D tailwindcss`.
- Setup the tailwind config file by running the command `npx tailwindcss init`.
- Configure your template paths.

```
module.exports = {
 content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
   extend: {},
 },
 plugins: [],

}

```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file. :

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

-Run your build process with `npm run start` and start using tailwindcss.
