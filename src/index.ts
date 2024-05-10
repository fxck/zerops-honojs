import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Zerops x Hono')
})

const port = 3000
console.log(`Server is deployed on zerops and currently running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
