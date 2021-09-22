<template>
  <header class="bg-white">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="w-full pt-6 flex items-center justify-center">
        <p>paul perrone</p>
      </div>
      <div class="w-full py-6 flex items-center justify-center">
        <div class="space-x-8">
          <a
            v-for="link in navigation"
            :key="link.name"
            :href="link.href"
            class="text-base font-medium text-blue-600 hover:underline"
          >
            <router-link :to="link.href">{{ link.name }}</router-link>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import { useRouter, useRoute } from "vue-router";
const navigation = [
  { name: "about", href: "/about" },
  { name: "blog", href: "/blog" },
  { name: "career", href: "/career" },
];

export default {
  setup() {
    // const router = useRouter();
    // const route = useRoute();

    return {
      navigation,
    };
  },
};
</script>