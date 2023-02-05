<script lang="ts">

import type { PageData } from './$types'

// using the generated types
export let data: PageData

    async function subscribe(event: Event) {
      const form = event.target as HTMLFormElement
      const data = new FormData(form)
  
      await fetch('/api/newsletter', {
        method: 'POST',
        body: data
      })
    }
  </script>
  
  <h1>Newsletter</h1>
  
  <form on:submit|preventDefault={subscribe}>
    <input type="email" name="email" />
    <button>Subscribe</button>
  </form>

   <h1>Posts</h1>

<p>Showing {data.posts.length} posts.</p>

<ul>
  {#each data.posts as post}
    <li>
      <a href="/posts/{post.slug}">{post.title}</a>
    </li>
  {/each}
</ul>