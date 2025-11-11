import React from 'react'

export const BeforeLogin: React.FC = () => {

  const SERVER_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.PAYLOAD_PUBLIC_SERVER_URL ||
    undefined;

  const loginURL = SERVER_URL ? `${SERVER_URL}/login` : `/login`;

  return (
    <div>
      <p>
        <b>Welcome to your dashboard!</b>
        {' This is where site admins will log in to manage your store. Customers will need to '}
        <a href={loginURL}>log in to the site instead</a>
        {' to access their user account, order history, and more.'}
      </p>
    </div>
  )
}
