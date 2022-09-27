import users from './db.json';
    
export const getUsers = (id) =>
  new Promise((resolve, reject) => {

    //   const user = users[id];
      
    if (!users) {
      return setTimeout(
        () => reject(new Error('Users not found')),
        250
      );
    }

    setTimeout(() => resolve(Object.values(users.data)), 250);
    // setTimeout(() => resolve(users[id]), 250);
});

// usage (1)
// getUsers()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// usage (2)
const doGetUsers = async (id) => {
  try {
    const result = await getUsers(id);
    console.log("Users", result);
  } catch (error) {
    console.log(error);
  }
};

doGetUsers();