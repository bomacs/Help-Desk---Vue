<template>
    <div class="w-full flex flex-wrap">
        <!-- Login Section -->
        <div class="w-full lg:w-1/2 flex flex-col">
            <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                <router-link to="/" class="bg-originalBlue text-white font-bold text-xl p-4">
                    <img src="/imgs/logowhite.png"  class="w-30 h-12"/>
                </router-link>
            </div>

            <div class="mx-auto  my-auto px-8 w-full sm:w-2/3 lg:w-full xl:w-2/3">
                <router-view></router-view>
            </div>
        </div>
        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
            <img class="object-cover w-full h-screen hidden lg:block" src="/imgs/NU-MOA.jpg">
        </div>
    </div>
</template>