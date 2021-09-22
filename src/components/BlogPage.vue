<template>
  <div class="flex items-center justify-left ml-4">
    <div>
      <router-link v-for="blog in blogs" :key="blog.title" :to="blog.link">
        {{ blog.title }}</router-link
      >
    </div>
  </div>
</template>

<script>
const blogs = [
  {
    title: "Test 1",
    link: "/blog/test1",
  },
  {
    title: "Test 2",
    link: "/blog/test2",
  },
];

export default {
  setup() {
    return {
      blogs,
    };
  },
};
</script>