import React from 'react';


const Signup = () =>
<form>
  <h1>Signup</h1>
  <div>
    <input type="text" name="username" placeholder="Username" />
    <label htmlFor="username">Username</label>
  </div>
  <div>
    <input type="password" name="password" placeholder="Password" />
    <label htmlFor="password">Password</label>
  </div>
  <div>
    <input type="password" name="password" placeholder="Password" />
    <label htmlFor="password">Confirm Password</label>
  </div>
  <input type="submit" value="Login" />
</form>;

export default Signup