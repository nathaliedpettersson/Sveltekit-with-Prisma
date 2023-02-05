import { json, type RequestHandler } from '@sveltejs/kit'

import db from '../../../lib/database'

export const GET: RequestHandler = async (event) => {
    const posts = await db.post.findMany({
        // get random numbers of posts to test caching
        take: Math.round(Math.random() * 30)
      })
    
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching
      event.setHeaders({
        'Cache-Control': 'max-age=60'
      })
    
      return json(posts)
    }


  
