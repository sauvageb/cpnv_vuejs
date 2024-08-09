<script setup>
import {ref} from "vue";

defineProps({
  comments: {
    type: Array,
    required: true
  }
})

const isShown = ref(false);

</script>
<template>
  <button type="button" :disabled="comments.length < 1" @click="isShown= !isShown"
          class="btn btn-primary position-relative">
    Voir les commentaires
    <span v-show="comments.length > 0"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ comments.length }}
  </span>
  </button>

  <div v-if="isShown" class="list-group comments">
    <figure v-for="comment in comments" :key="comment.id">
      <blockquote class="blockquote">
        <p>{{ comment.content }}</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        {{ comment.author.firstName }} {{ comment.author.lastName.toUpperCase() }}
      </figcaption>
    </figure>
  </div>

</template>
