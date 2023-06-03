<script setup>
import { useAuthStore } from  '@/stores/auth';

const authStore = useAuthStore();
const authUser  = authStore.user;
const formatDate = (date) => {
    const fdate = new Date(date);
    const options = { month: 'long', day:'numeric', year: 'numeric'} 
    return fdate.toLocaleDateString('en-US', options);
}   
</script>

<template>
    <main class="mx-auto max-w-6xl bg-white border border-white rounded-md shadow-md py-0 md:py-24 md:mt-24">
        <div class="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32 lg:my-0">
            <!--Main Col-->
            <div id="profile" class="w-full shadow-2xl bg-white border border-blue-100 mx-6 lg:mx-0 lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none">
                <div class="text-center p-4 md:p-12 lg:text-left">
                    <!-- Image for mobile view-->
                    <div class="block lg:hidden rounded-full mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-transparent shadow-xl">
                        <img scr="/img/defaultpic.png"  class="w-30 h-30 z-10" />
                    </div>
                    
                    <h1 class="text-3xl font-bold pt-8 lg:pt-0">{{ authUser.firstname + ' ' + authUser.lastname }}</h1>
                    <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                    <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                        <svg fill="#000000" class="h-4 pr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z"/>
                        </svg>
                        Contact:
                        <span class="italic pl-2">{{ authUser.email }}</span>
                    </p>
                    <p class="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start"><svg class="h-4 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg>Joined: <span class="italic pl-2">{{ formatDate(authUser.created_at) }}</span></p>
                    <p class="pt-8 text-sm">Totally optional short description about yourself, what you do and so on.</p>

                </div>
            </div>         
            <!--Img Col-->
            <div class="w-full grid grid-cols-1 place-items-center bg-blue-100 rounded-2xl border border-blue-100 md:h-2/3  lg:w-2/5">
                <div class="p-8"> 
                    <img src="/imgs/defaultpic.png" class="bg-white rounded-full shadow-2xl hidden lg:block">
                </div>
            </div>
        </div>
    </main>
</template>