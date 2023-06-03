<script setup>
import { useRouter, RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const role = authStore.role;
const router = useRouter();

const logout = async () => {
  await authStore.signout()
  .then (res => {
      if (res.status === 200) {
        authStore.clearAuth();
        sessionStorage.clear(); 
        router.push({name: 'Login'})
      };
  })
  .catch((err) => {
      console.error(err)
  });
}
</script>

<template>
  <nav class="flex items-center bg-originalWhite p-3 flex-wrap">
    <router-link :to="{name: 'Home'}" class="p-2 mr-4 inline-flex items-center">
      <img src="/imgs/logodark.png" class="h-16 w-full" />
    </router-link>
    <div class="hidden text-lg w-full lg:inline-flex lg:flex-grow lg:w-auto">
      <div class="items-start flex flex-col lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center lg:h-auto">
        <div v-if="authStore.user">
          <button 
            @click="logout" 
            class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-900 items-center justify-center hover:bg-midBlue hover:text-white"
          >
            <span>Log out</span>
          </button>
          <router-link v-if="role === 'Client'"
          :to="{name: 'Client-dashboard'}"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-900 items-center justify-center hover:bg-midBlue hover:text-white"
          >
            <span>Dashboard</span>
          </router-link>
          <router-link v-if="role === 'Agent'"
          :to="{name: 'Agent-dashboard'}"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-900 items-center justify-center hover:bg-midBlue hover:text-white"
          >
            <span>Dashboard</span>
          </router-link>
          <router-link v-if="role === 'Admin'"
          :to="{name: 'Admin-dashboard'}"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-900 items-center justify-center hover:bg-midBlue hover:text-white"
          >
            <span>Dashboard</span>
          </router-link>
        </div>
        <div v-if="!authStore.user">
          <router-link
          :to="{name: 'Login'}"
          class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-900 items-center justify-center hover:bg-midBlue hover:text-white"
          >
            <span>Login</span>
          </router-link>
          <router-link
            :to="{name: 'Register'}"
            class="w-full px-3 py-2 rounded text-gray-900 items-center justify-center hover:bg-midBlue hover:text-white lg:inline-flex lg:w-auto"
          >
            <span>Register</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
  <pre>
  </pre>
  <div class="container min-h-screen grid place-items-center bg-midBlue">
      <div class="mx-auto flex flex-col items-center pb-12 sm:py-0">
        <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col sm:mb-4">
          <h1 class="text-4xl text-center text-originalBlue font-black leading-7 tracking-wider mb-4 md:text-6xl md:leading-10">
            NU Desk  
          </h1>
          <h3 class="text-xl text-originalBlue font-semibold text-center md:text-2xl" >
            Online Helpdesk System
          </h3>
          <p class="text-gray-700 text-center text-md italic mt-5 lg:w-10/12 lg:text-lg ">Need support? NU Desk is a website that handles school concerns. Ask for support now. </p>
        </div>
        <div class="flex justify-center items-center">
          <router-link :to="{ name: 'Tickets-create' }" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-originalBlue bg-safeBlue transition duration-150 ease-in-out hover:bg-originalBlue lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-originalBlue py-2 sm:py-4 text-sm">Get Support</router-link>
        </div>
      </div>
  </div>
</template>
