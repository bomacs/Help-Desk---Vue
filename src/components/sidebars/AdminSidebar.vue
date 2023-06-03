<script setup>
    import { computed } from 'vue';
    import {  useTicketStore } from '@/stores/ticket';
    import Links from '@/components/utilities/Links.vue';

    const ticketStore = useTicketStore();
    const newTicketsCount = computed(() => {
        if (ticketStore.tickets) {
            return ticketStore.tickets.filter((ticket) => ticket.attributes.status === 'open' && ((new Date() - new Date(ticket.attributes.created_at)) / (1000 * 60 * 60)) < 24).length;
        } else {
            return [];
        }
    })
</script>

<template>
    <li class="my-px">
        <span class="flex font-medium text-sm text-gray-300 px-2 my-4 uppercase">Tickets</span>
    </li>
    <links link="Admin-newtickets">
        <span class="flex items-center justify-center text-lg text-green-400">
            <svg class="h-6 w-6" viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                <path fill="#394240" d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701
                    l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478 M31.998,0
                    c-0.775,0-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
                    c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
                    c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719
                    c0.302,0.166,0.636,0.25,0.968,0.25c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704
                    l14.294-14.657c0.523-0.537,0.703-1.321,0.465-2.031c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
                    C33.479,0.448,32.773,0,31.998,0L31.998,0z"/>
                <path fill="#F9EBB2" d="M31.998,2.478c0.279,0,0.463,0.509,0.463,0.509l8.806,18.759l20.729,3.167l-14.999,15.38l3.541,21.701
                    l-18.54-10.254l-18.54,10.254l3.541-21.701L2,24.912l20.729-3.167l8.798-18.743C31.527,3.002,31.719,2.478,31.998,2.478"/>
            </svg>
        </span>
        <span class="ml-3">New</span>
        <span
            class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
        >{{ newTicketsCount }}</span>
    </links>
    <links link="Unresolved-tickets">
        <span class="flex items-center justify-center text-lg text-gray-400">
            <svg fill="#f5f5f5" 
            viewBox="0 0 1920 1920" 
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            class="h-5 w-6"
            >
                <path d="m494.165 640.333-278.4 890.774 101.867 31.786L572.459 747h1211.306l-183.36 917.12c-5.013 24.853-26.986 42.88-52.266 42.88H159.979c-29.334 0-53.334-23.893-53.334-53.333v-1440h454.507L732.779 427h760.533v106.667h106.667V320.333H783.872L612.139 107H-.021v1546.667c0 88.213 71.786 160 160 160h1388.16c75.946 0 141.973-54.08 156.906-128.64l208.96-1044.694H494.165Z" fill-rule="evenodd"/>
            </svg>
        </span>
        <span class="ml-3">Unresolved</span>
    </links>
    <links link="Resolved-tickets">
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
            <path
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
            </svg>
        </span>
        <span class="ml-3">Resolved</span>
    </links>
    <links link="Closed-tickets">
        <span class="flex items-center justify-center text-lg text-gray-400">
            <svg class="h-6 w-5" viewBox="0 0 233.741 233.741">
                <path style="fill:#f5f5f5;" d="M233.486,83.462V54.886c0-10.201-8.299-18.5-18.5-18.5h-85.322c-3.63,0-9.295-2.876-11.437-5.806
                    l-6.386-8.736C106.859,15.03,96.736,9.892,88.296,9.892H58.731c-9.295,0-18.64,6.608-21.738,15.371l-2.034,5.753
                    c-0.958,2.711-4.72,5.37-7.595,5.37H18.5c-10.201,0-18.5,8.299-18.5,18.5v41.456c0,0.661,0.095,1.299,0.255,1.91V201.35
                    c0,12.407,10.094,22.5,22.5,22.5h188.486c12.406,0,22.5-10.093,22.5-22.5V86.847C233.741,85.696,233.653,84.566,233.486,83.462z
                    M18.5,51.386h8.864c9.296,0,18.641-6.608,21.737-15.371l2.034-5.752c0.958-2.711,4.721-5.371,7.596-5.371h29.564
                    c3.63,0,9.295,2.877,11.438,5.806l6.385,8.735c4.982,6.815,15.104,11.954,23.546,11.954h85.322c1.898,0,3.5,1.604,3.5,3.5V65.55
                    c-2.275-0.776-4.71-1.204-7.245-1.204H22.755c-2.725,0-5.336,0.487-7.755,1.378V54.886C15,52.989,16.603,51.386,18.5,51.386z
                    M211.241,208.85H22.755c-4.136,0-7.5-3.365-7.5-7.5V86.847c0-4.135,3.364-7.5,7.5-7.5h188.486c3.477,0,6.398,2.38,7.245,5.594
                    v3.915c0,0.661,0.095,1.3,0.255,1.91V201.35C218.741,205.485,215.377,208.85,211.241,208.85z"/>
            </svg>
        </span>
        <span class="ml-4">Closed</span>
    </links>
    <li class="my-px">
        <span class="flex font-medium text-sm text-gray-300 px-2 my-4 uppercase">Tables</span>
    </li>
    <links link="Admin-ticket_types">
            <span class="flex items-center justify-center text-lg text-gray-400">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="#f5f5f5">
                    <path stroke="#4f4f4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16H8a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h9m0 11h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3m0 11v-1m0-10v1"/><path stroke="#4f4f4f" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 20H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3m6 11h3a1 1 0 0 0 1-1v-2.5M13 20v-1m4-9.999V9m0 3.001V12"/>
                </svg>
            </span>
            <span class="ml-3">Ticket Types</span>   
    </links>
    <links link="Admin-users">
        <span class="flex items-center justify-center text-lg text-gray-400">
            <svg class="h-8 w-6" viewBox="0 -8 72 72" id="Layer_1" fill="#f5f5f5" stroke="#4f4f4f">
                <path class="cls-1" d="M18.87,28.44c.2.21.41.4.63.6a10.59,10.59,0,0,0,14.15,0c.22-.2.43-.39.62-.6s.4-.43.58-.65a10.64,10.64,0,1,0-16.55,0C18.48,28,18.68,28.23,18.87,28.44Z"/><path class="cls-1" d="M41.63,25.76c.17.18.35.35.53.52a9,9,0,0,0,12.05,0c.19-.17.36-.34.53-.52a6.41,6.41,0,0,0,.49-.55,9,9,0,0,0-7-14.73,9,9,0,0,0-7,14.73C41.3,25.4,41.46,25.59,41.63,25.76Z"/><path class="cls-1" d="M9.49,45.52H43.66A1.57,1.57,0,0,0,44.83,45a1.24,1.24,0,0,0,.31-1,18.77,18.77,0,0,0-9.9-14.22,12.25,12.25,0,0,1-17.33,0A18.77,18.77,0,0,0,8,44a1.25,1.25,0,0,0,.31,1A1.57,1.57,0,0,0,9.49,45.52Z"/><path class="cls-1" d="M9.49,45.52H43.66A1.57,1.57,0,0,0,44.83,45a1.24,1.24,0,0,0,.31-1,18.77,18.77,0,0,0-9.9-14.22,12.25,12.25,0,0,1-17.33,0A18.77,18.77,0,0,0,8,44a1.25,1.25,0,0,0,.31,1A1.57,1.57,0,0,0,9.49,45.52Z"/>
                <path class="cls-1" d="M64,39a16,16,0,0,0-8.42-12.11,10.41,10.41,0,0,1-14.76,0,16.59,16.59,0,0,0-3.13,2.16,18.81,18.81,0,0,1,8.26,11.24H62.73a1.33,1.33,0,0,0,1-.44A1.06,1.06,0,0,0,64,39Z"/>
            </svg>
        </span>
        <span class="ml-3">Users</span>
    </links>
    <links link="Admin-departments">
        <span class="flex items-center justify-center text-lg text-gray-400">
            <svg fill="#f5f5f5" class="h-6 w-6" viewBox="0 0 24 24">
                <path d="M5.04146 3C5.22009 2.6906 5.55022 2.5 5.90748 2.5L9.75278 2.5C10.11 2.5 10.4402 2.6906 10.6188 3L12.5415 6.33013C12.7201 6.63953 12.7201 7.02073 12.5415 7.33013L10.6188 10.6603C10.4402 10.9697 10.11 11.1603 9.75278 11.1603H5.90748C5.55022 11.1603 5.22009 10.9697 5.04146 10.6603L3.11881 7.33013C2.94017 7.02073 2.94017 6.63953 3.11881 6.33013L5.04146 3Z"/>
                <path d="M5.1216 13.2272C5.30023 12.9178 5.63036 12.7272 5.98762 12.7272H9.83292C10.1902 12.7272 10.5203 12.9178 10.6989 13.2272L12.6216 16.5574C12.8002 16.8668 12.8002 17.248 12.6216 17.5574L10.6989 20.8875C10.5203 21.1969 10.1902 21.3875 9.83292 21.3875H5.98762C5.63036 21.3875 5.30023 21.1969 5.1216 20.8875L3.19895 17.5574C3.02031 17.248 3.02031 16.8668 3.19895 16.5574L5.1216 13.2272Z"/>
                <path d="M14.1216 8.22723C14.3002 7.91783 14.6304 7.72723 14.9876 7.72723L18.8329 7.72723C19.1902 7.72723 19.5203 7.91783 19.6989 8.22723L21.6216 11.5574C21.8002 11.8668 21.8002 12.248 21.6216 12.5574L19.6989 15.8875C19.5203 16.1969 19.1902 16.3875 18.8329 16.3875H14.9876C14.6304 16.3875 14.3002 16.1969 14.1216 15.8875L12.1989 12.5574C12.0203 12.248 12.0203 11.8668 12.1989 11.5574L14.1216 8.22723Z"/>
            </svg>
        </span>
        <span class="ml-3">Departments</span>
    </links>
    <li class="my-px">
        <span class="flex font-medium text-sm text-gray-300 px-2 my-4 uppercase">Account</span>
    </li>
    <links link="Admin-profile">
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