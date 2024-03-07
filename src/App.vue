<script setup>
import { ref, onMounted, computed } from "vue"
import LoginPage from "./pages/LoginPage.vue"
import NavBar from "./components/NavBar.vue"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase.js"

const isUserAuthenticated = computed(() => user.value !== null);
const user = ref(null);

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser !== null) {
      user.value = currentUser;
    } else {
      user.value = null;
    }
  })
})

const pageShown = ref("about-us");

function changePage(page) {
  pageShown.value = page;
}
</script>

<template>
  <!-- Login -->
  <LoginPage @hide-login="isUserAuthenticated = false" v-if="isUserAuthenticated === false" />

  <!-- Contenido de la app -->
  <div v-else>
    <!-- Navbar -->
    <NavBar @change-page="changePage" @hide-login="isUserAuthenticated = true" />
    <!-- Páginas-->
    <section class="about-us-container" v-if="pageShown === 'home'">
      <Home v-if="pageShown === 'home'" @hide-login="isUserAuthenticated = true" />
    </section>

    <section>
      <Profile v-if="pageShown === 'profile'" @hide-login="isUserAuthenticated = true" />
    </section>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>./components/Nav.vue
