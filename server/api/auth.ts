import { useBody } from 'h3'

export default eventHandler(async (event: any) => {
  // if(event !== 'POST') return 'Must be post request'
  console.log(event)
  const { user } = await useBody(event) // only for POST request

  event.user = user

  return { updated: true }
})
