# yellowHEAD Interview Assignments

Please follow these rules when working on **yellowHead** coding assignment:

- Candidates have 2 hours to complete the assignment.  
The time is measured from the time the email containing the assignment is sent.
- You can submit the assignment by sending a github link, to the same mail you got the assignment from.  
The github repository link you send should contain you solution.
- You are not measured by how the app looks so do not focus on `CSS` and styling.
- If you have any questions about the assignment, please send them to the following email: `yariv@nerdeez.com`

## React Assignment


### Technologies you **HAVE** to use

During this assignment you have to use the following libraries to complete the assignments:

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Formik](https://formik.org/)
- [Typescript](https://www.typescriptlang.org/)

Feel free to use any additional libraries of your choice, but the ones above are obligatory

#### Create a new website

Create a new website using `create-next-app`

#### Login page

When the user navigates to the root url `/` the user will see a Login page.  
The Login page contains a login form where the user can enter his email and password.  
- You have to manage the form using `Formik`  
- You should validate that the email is in the correct email format.  
- You should send the email and password to a REST server, the request should look like this:

```
// values is: {email: 'yariv@nerdeez.com', password: '12345678'}
const response = await fetch(
	'https://academeez-login-ex.herokuapp.com/api/users/login',
	{
		method: 'POST',
		body: JSON.stringify(values),
		headers: {
			'Content-Type': 'application/json'
		}
	}
)
```

- If the server will get in the `email` field, the value `yariv@nerdeez.com` and in the `password` field `12345678` the server will authorize the login and send a `JWT token`
- If the user managed to login he will be directed to the next page `TodoList page`
- If the user failed to login that you should place the error you got from the server.

#### TodoList page

Create another page in your app that displays a list of todo items.  
The url of that page should be: `/todo`

- You should get the list of items from a server.
- example request:

```
fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
	headers: {
		'Authorization': `Bearer ${token}`
	}
})
```

- Notice that the `token` is the same token you got from the response of the server in the login page.
- The todo list you get should be store in `redux store` 
- You should use `redux` with `redux toolkit` and create a `todo` slice
- You should also use `createAsyncThunk` from `redux toolkit` for the fetching of the data
- You should also use `createEntityAdapter` from `redux toolkit` to arrange the data properly in the store.





