<script setup>
    import TheHeader from '@/components/TheHeader.vue';
    import { onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';
    import { useTicketStore } from '@/stores/ticket';
    import { useTicket_typeStore } from '@/stores/ticket_type';

    const authStore = useAuthStore();
    const ticketStore = useTicketStore();
    const ticket_typeStore = useTicket_typeStore();
    const router = useRouter();

    onMounted(() => {
        ticketStore.fetchAllTickets();
        ticket_typeStore.fetchAllTicket_types();
    })

    const logout = async () => {
        await authStore.signout()
        .then (res => {
            if (res.status === 200) {
                authStore.clearAuth();
                sessionStorage.clear(); 
                router.push('/login');
            };
            
        })
        .catch((err) => {
            console.error(err)
        });
    }

</script>

<template>
    <div class="flex flex-row min-h-screen bg-midBlue text-gray-800">
        <aside class="hidden sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-originalBlue lg:block">
            <div class="sidebar-header flex items-center justify-center py-4">
                <div class="inline-flex p-3">
                    <router-link to="/" class="inline-flex flex-row items-center">
                        <img src="/imgs/logowhite.png" class="w-60 h-18" />                        
                    </router-link>
                </div>
            </div>
            <div class="sidebar-content px-4 pt-4 pb-6">
                <ul class="flex flex-col w-full">
                    <!-- Slots for sidebar-contents -->
                    <slot name="sidebarContent"></slot>
                    <li class="my-px">
                        <div v-if="authStore.user" class="text-ellipsis flex flex-row items-center h-10 px-3 rounded-lg text-gray-300">
                            <span class="flex items-center justify-center text-lg text-gray-400">
                                <svg  fill="#B2BEB5" class="h-5 w-6" viewBox="0 0 1920 1920">
                                    <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"/>
                                </svg>
                            </span>
                            <span class="ml-3">{{ authStore.user.email }}</span>
                        </div>
                    </li>
                    <button @click="logout"  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-midBlue hover:text-gray-700" >
                        <span class="flex items-center justify-center text-lg text-red-400">
                            <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="h-6 w-6"
                            >
                            <path
                                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                            </svg>
                        </span>
                        <span class="ml-3">Logout</span>
                    </button>
                </ul>
            </div>
        </aside>
        <main class="w-full">
            <TheHeader />
            <section class="min-h-screen py-0 bg-bgWhite" >
                <div class="w-full p-4 md:p-12">
                    <slot name="body"></slot>
                </div>
            </section>
        </main>
    </div>
</template>