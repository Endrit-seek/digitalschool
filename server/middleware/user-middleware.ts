// import type { IncomingMessage, ServerResponse } from 'http'
import { useCookie } from 'h3'

export default eventHandler(async (event: any) => {
  const userCookie = useCookie(event, 'userCookie')

  event.user = userCookie
})
