# ReactJS

Creating React App

To Do that we need to run a command in the terminal

1 Old / School method to Create A React App

npx create-react-app {Project/file Name you want to mention} => it Takes some time to 
get installed .

Now after installing react we need to go-to package.json file since it contains all the development dependencies in it.

to start the app 1st make sure that your in your project file to get into you project file => cd file/project-file name

Now Your In your Project file to start run command => npm run start 

Note -> npm run start is a command only to run your application locally but we can not deploy by using npm run start.

By installing react we get Two main Libraries 1) React 2) React-DOM 

Scripts => start    , build , test , eject
          npm run start -> Runs Locally.
          npm run build -> while deploying it into production and hositing out side  your computer. It creates a build file which you need to deploy.
          num run test -> to test.
          npm run eject -> to remove React From your project 

2 Latest method to Creact React App => 

command -> npm create vite@latest
Project name -> creat your Project file by jst typing in terminal
Choose React and JavaScript 
Now cd to your project file .
and you need to run npm install / npm i , to install node modules in the project .
And Done now run npm run dev. (Don't forget to check the Dev dependencies).


Best Practices For Creating the Component in React => Always keep Captalized letter 
at beginning of Component Name. And It may vary for different Libraries but mostly all Key Restrictions are Same for every Librarby

Hooks => Used to Update the Values on User Interface.(use Case Of Hooks)
