import users from './db.json';

const createUser = (data) =>
    new Promise((resolve, reject) => {
        
    if (!data.firstname || !data.lastname) {
      reject(new Error('Not all information provided'));
    }

    const id = '20';
    const newUser = { id, ...data };

    users = { ...users, [id]: newUser };

    setTimeout(() => resolve(true), 250);
});

// usage
const doCreateUser = async (data) => {
  try {
    const result = await createUser(data);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export default doCreateUser;