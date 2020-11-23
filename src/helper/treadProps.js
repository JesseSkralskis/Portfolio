const treadProps = {
  title: "Tread Track",
  description: `Tread Track is a React Native fitness app that you can get on the apple app store now.
  It allows a user to track their path for a run, hike, bikeride, or even a car ride.
  When the user is finished tracking the path it will be saved and stored on the Mongo data base. After the user saves the track it can then be clicked on and a variety of detailed stats will be given along with the path animated on the map.
  The backend was built using Express.js and Mongo DB. When a user enters the email and password to sign up a check is ran to see if the email already exists. If it does not exist the email is stored as is in the database and the password is ran through bcrypt and after being encrypted is stored in the database.
  When a user is signed in a Web Token is given and stored in the users phones storage so the user doesnt need to sign in unless they have logged out. Every track saved will be stored in the database connected to that unique user.`,

  tech: [
    "React Native",
    "React Navigation",
    "React Native Elements",
    "React Hooks",
    "Custom Hooks",
    "Expo CLI",
    "Expo Location",
    "Express JS",
    "Web Tokens",
    "Async Storage",
    "Mongo DB",
    "Mongoose",
    "Bcrypt",
    "Axios",
    "App Store Connect",
    "Git",
  ],
  seeCodeUrl: "https://github.com/JesseSkralskis/TreadTrack",
  viewurl: "#",
  buttonColor: "#000000",
  headerColor: "#5f5f5f",
  photo: "/images/treadCollageBlack.png",
  buttonHeight: "10",
};

export default treadProps;
