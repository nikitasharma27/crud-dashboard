import users from './db.json';
    
export const getUsers = () =>
    new Promise((resolve, reject) => {

    if (!users) {
        return setTimeout(
            () => reject(new Error('Users not found')),
            250
        );
    }
        
        console.log("22222" , Object.values(users.data));

    setTimeout(() => resolve(Object.values(users.data)), 250);
});

// usage (1)
getUsers()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// usage (2)
const doGetUsers = async () => {
  try {
    const result = await getUsers();
    console.log("Users", result);
  } catch (error) {
    console.log(error);
  }
};

// doGetUsers();