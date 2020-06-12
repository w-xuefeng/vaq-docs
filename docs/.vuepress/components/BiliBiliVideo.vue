<template>
  <div class="video-content">
    <iframe
      class="video-iframe"
      :src="`//player.bilibili.com/player.html?aid=${aid}&bvid=${bvid}&cid=${cid}&page=${page}`"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowfullscreen="true">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'bilibili-video',
  props: {
    aid: {
      type: String,
      required: true
    },
    bvid: {
      type: String,
      required: true
    },
    cid: {
      type: String,
      required: true
    },    
    page: {
      type: String,
      default: '1'
    },
  }
}
</script>

<style scoped>
.video-content {
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;  
}
.video-iframe {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
