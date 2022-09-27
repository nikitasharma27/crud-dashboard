import users from './db.json';
    
export const getUser = (email) =>
  new Promise((resolve, reject) => {

    let LoggedInUser = "";

    Object.values(users.data).forEach(function(user, index) {
      
      if (user.email === email) {
        LoggedInUser = user;
      }
    });
      
    if (!LoggedInUser) {
      return setTimeout(
        () => reject(new Error('Users not found')),
        250
      );
    }

    // setTimeout(() => resolve(Object.values(user.data)), 250);
    setTimeout(() => resolve(LoggedInUser), 250);
});

// usage (1)
getUser()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// usage (2)
const doGetUsers = async (email) => {
  try {
    const result = await getUser(email);
    console.log("Users", result);
  } catch (error) {
    console.log(error);
  }
};

// doGetUsers(email);