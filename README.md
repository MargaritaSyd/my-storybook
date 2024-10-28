# My components with storybook

This project uses Storybook to develop UI components in isolation.  It's built with Vite and typescript and managed with npm.  
Install

### Prerequisites
Node.js 18 and npm or yarn installed.  Check with `node -v` and `npm -v`. 

### Installation  

1. Clone the repository:  

   ```bash  
   git clone https://github.com/MargaritaSyd/my-storybook.git  
   cd my-storybook
   ```bash  
    npm install
   ```bash
   npm run storybook  
This will create a storybook-static directory containing the built Storybook application.

### Project Structure
my-storybook/  
├── public/             
├── src/
├──├── components/     
├──├──├── MyButton/     
├──├──├──│── MyButton.tsx  
├──├──├──└── MyButton.css  
├──├──├── MyLabel
├──├──├──└──MyLabel.tsx
├──├──├──└── MyLabel.css
├──├── stories/                 // Static assets 
├──├──├──└── MyLabel.stories.ts
├──├──├──└──MyButton.stories.ts
├──├──├── App.css
├──├──├── App.tsx
├──├──├── index.css
├──├──├── index.ts
├──├──├── LICENSE
├──├──├── main.tsx
├──├──├── vite-env.d.ts
├── .gitignore
├── build-storybook.log
├── eslint.config.s
├── index.html
├── package.json
|── README.md
├── tsconfig.app.json
│── tsconfig.node.json
├── tsconfig.json
├── vite.config.ts

src/components: This directory contains your reusable UI components. Each component should have a corresponding .stories.jsx file (or .stories.tsx for TypeScript) to define its stories in Storybook.

.storybook: This directory contains Storybook configuration files. You can customize Storybook's appearance, add addons, and configure other aspects of your development environment here.

### Story Writing Conventions
It follow a consistent pattern for writing stories:
Component File: MyButton.tsx - Contains the React component code.
Story File: MyButton.stories.tsx (or .stories.tsx) - Exports stories using Storybook's API. This file should include different states and variations of your component.

### License MIT

