<template>
  <div>
    <h1>{{ `#${post.id}` }} {{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <p><n-link to="/">Back to posts</n-link></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class PostDetail extends Vue {
  post = {}

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
