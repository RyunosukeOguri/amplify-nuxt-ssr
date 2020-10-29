<template>
  <div>
    <h1>{{ `#${post.id}` }} {{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <p><n-link to="/">Back to posts</n-link></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface Post {
  id: number
  title: string
  body: string
}

@Component
export default class PostDetail extends Vue {
  post: Post | null = null

  head() {
    return {
      title: this.post ? this.post.title : '',
    }
  }

  async asyncData({ app, params }: { app: any; params: any }) {
    const { data } = await app.$axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    )
    return {
      post: data,
    }
  }
}
</script>
