import { CompatibilityEvent, useBody } from 'h3'

export default eventHandler(async (event: CompatibilityEvent) => {
  const { user } = await useBody(event)

  event.context.auth = { user }

  return { updated: true }
})
