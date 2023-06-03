<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const userRole = authStore.role;

const props = defineProps({
    image: String,
});

</script>

<template>
    <header class="shadow-md py-4 px-4">
        <div class="flex items-center flex-row">
            <div>
                <h1 class="text-lg font-bold text-originalBlue">NU Desk<span class="text-sm"> - Online Helpdesk System</span></h1>
            </div>
            <div v-if="userRole === 'Client'" class="flex ml-auto">
                <router-link :to="{name:'Client-notification'}" class="flex flex-row items-center">
                    <span class="flex items-center justify-center text-lg text-slate-200">
                        <svg
                        fill="#f5f5f5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-8 w-8"
                        >
                        <path
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                        </svg>
                    <span class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-4 p-2 rounded-full"
                    >10</span>
                    </span>
                </router-link>
            </div>
            <div v-if="userRole === 'Agent'" class="flex ml-auto">
                <router-link :to="{name:'Agent-notification'}" class="flex flex-row items-center">
                    <span class="flex items-center justify-center text-lg text-slate-200">
                        <svg
                        fill="#f5f5f5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-8 w-8"
                        >
                        <path
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                        </svg>
                    <span class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-4 p-2 rounded-full"
                    >10</span>
                    </span>
                </router-link>
            </div>
            <div v-if="userRole === 'Admin'" class="flex ml-auto">
                <router-link :to="{name:'Admin-notification'}" class="flex flex-row items-center">
                    <span class="flex items-center justify-center text-lg text-slate-200">
                        <svg
                        fill="#f5f5f5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-8 w-8"
                        >
                        <path
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                        </svg>
                    <span class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-4 p-2 rounded-full"
                    >10</span>
                    </span>
                </router-link>
            </div>
        </div>
    </header>
</template>
