<script setup>
import { onMounted, ref } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI.js'
import VideoList from './components/VideoList.vue'
import VideoDetails from './components/VideoDetails.vue'

const videos = ref(null)
const selectedVideo = ref(null)

async function searchVideos(query) {
  const response = await youtubeAPI.get('/search', {
    params: {
      ...defaultParams,
      q: query,
    },
  })
  videos.value = response.data.items
  selectedVideo.value = videos.value[0]
}

onMounted(() => searchVideos('vuejs'))
</script>

<template>
  <header>
    <div class="container">SearchBar</div>
  </header>
  <main>
    <div class="container">
      <div v-if="videos" class="row">
        <div class="col-lg-8">
          <VideoDetails :video="selectedVideo" />
        </div>
        <div class="col-lg-4">
          <VideoList :videos="videos" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
