export default eventHandler(async (event: any) => {
  const user = event.user

  return user ? user : 'User is signed out'
})
