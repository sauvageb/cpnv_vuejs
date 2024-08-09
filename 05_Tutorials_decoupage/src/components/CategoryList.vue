<script setup>
const categories = [
  'Java',
  'Javascript',
  'Typescript',
  'VueJs',
  'C#',
  'Angular',
  'Ruby',
  'Python',
  'C++',
  'Rust',
  'VBA'
];
</script>

<template>
  <div class="container">
    <h1>Catégories</h1>
    <div class="col-6 mb-3">
      <div class="row">
        <div class="card mb-3" v-for="category in categories" :key="category">
          <div class="card-body">
            {{ category }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
