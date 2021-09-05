import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const findUser = () => {
    //     if (username !== "") {
    //         const user = users.findUser( user => user.username === username)
    //         if (user) {
    //             loggedInUser(user)
    //             history.push(`users/${user.id}`)
    //         } else {
    //             alert("Sign Up")
    //         }
    //     }
    // }

    // useEffect(findUser, [username])
