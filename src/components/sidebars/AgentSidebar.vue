<script setup>
    import { computed } from 'vue';
    import {  useTicketStore } from '@/stores/ticket';
    import Links from '@/components/utilities/Links.vue';

    const ticketStore = useTicketStore();
    const newTicketsCount = computed(() => {
        if(ticketStore.tickets){
            return ticketStore.tickets.filter((ticket) => ticket.attributes.status === 'open' && ((new Date() - new Date(ticket.attributes.created_at)) / (1000 * 60 * 60)) < 24).length;
        } else {
            return [];
        }
    });
</script>
<template>
    <li class="my-px">
        <span class="flex font-medium text-sm text-gray-300 px-2 my-4 uppercase">Tickets</span>
    </li>
    <links link="Agent-newTickets">
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
    <links link="Agent-unresolvedTickets">
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
    <links link="Agent-resolvedTickets">
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
    <links link="Agent-closedTickets">
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
    <links link="Agent-tickets">
        <span class="flex items-center justify-center text-lg text-gray-400">
            <svg class="h-5 w-6" viewBox="0 0 16 16" fill="#f5f5f5" stroke-width="2">
                <path d="M8.04 10.471 2.938 7.953l2.085-1.03-.932-.46-3.017 1.49L8.04 11.39l6.965-3.437-3.017-1.49-.93.46 2.084 1.03z" style="-inkscape-stroke:none" transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)"/>
                <path d="M8.04 13.448 2.938 10.93 5.023 9.9l-.932-.46-3.017 1.49 6.966 3.437 6.965-3.437-3.017-1.49-.93.46 2.084 1.03z" style="-inkscape-stroke:none" transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)"/>
                <path d="M8.04 1.537 1.074 4.974 8.04 8.41l6.965-3.437zm0 .919 5.102 2.518L8.04 7.492 2.938 4.974z" style="-inkscape-stroke:none" transform="matrix(1.1485 0 0 1.2471 -1.233 -1.917)"/>
            </svg>
        </span>
        <span class="ml-3">All</span>
    </links>
    <li class="my-px">
        <span class="flex font-medium text-sm text-gray-300 px-2 my-4 uppercase">Account</span>
    </li>
    <links link="Agent-profile">
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