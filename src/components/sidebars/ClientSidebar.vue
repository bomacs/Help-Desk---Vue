<script setup>
    import Links from '@/components/utilities/Links.vue';
</script>

<template>
    <li class="my-px">
        <span class="flex font-medium text-sm text-gray-300 px-2 my-4 uppercase">Tickets</span>
    </li>
    <links link="Client-tickets">
        <span class="flex items-center justify-center text-lg text-gray-400">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
            </svg>
        </span>
        <span class="ml-3">Existing</span>
    </links>
    <links link="Tickets-create">
        <span class="flex items-center justify-center text-lg text-green-400">
            <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
            >
            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </span>
        <span class="ml-3">New Ticket</span>
    </links>
    <li class="my-px">
        <span class="flex font-medium text-sm text-gray-300 px-2 my-4 uppercase">Account</span>
    </li>
    <links link="Client-profile">
        <span class="flex items-center justify-center text-lg text-gray-400">
            <svg
            fill="#f5f5f5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
            >
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </span>
        <span class="ml-3">Profile</span>
    </links>
</template>