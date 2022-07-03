import { CompatibilityEvent } from "h3"

export default eventHandler(async (event: CompatibilityEvent) => {
  const userCookie = useCookies(event.req)

  event.context.auth = userCookie
})
