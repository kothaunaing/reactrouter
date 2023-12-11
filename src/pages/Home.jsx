import {useContext} from 'react';
import { Context } from "../App";


export const Home = () => {
  const {username} = useContext(Context);
  return (
    <>
      <div>Home Page</div>
      <div>Username: {username}</div>
    </>
  );
};


export const Profile = () => {
  const {username, setUsername} = useContext(Context);

  return (
    <>
      <div>Profile Page</div>
      <input value={username} onChange={
        (e) => {
          setUsername(e.target.value);
        }
      } />
    </>
  );
};

export const Contact = () => {
  return (
    <>
      <div>Contact Page</div>
    </>
  );
};
