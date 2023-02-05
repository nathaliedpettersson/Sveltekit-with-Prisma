import { json, type RequestHandler } from '@sveltejs/kit'

// /api/newsletter GET

export const GET: RequestHandler = async (event) => {
  const options: ResponseInit = {
    status: 418,
    headers: {
      X: 'Gon give it to ya',
    }
  }

  return new Response('Hello', options)
}

// /api/newsletter POST

export const POST: RequestHandler = async (event) => {
  const data = await event.request.formData()
  const email: FormDataEntryValue | null = data.get('email')

  // subscribe the user to the newsletter
  console.log(email)

  // return success
  return new Response(JSON.stringify({ success: true }), {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  // it's common to return JSON, so SvelteKit has a helper
  return json({ success: true })
}
