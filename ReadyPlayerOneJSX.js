function getGreeting(user) {
  if (user) {
    return <h1>Ready,{formatName(user)}!</h1>;
  }
  return <h1>Ready, Player One.</h1>;
}
