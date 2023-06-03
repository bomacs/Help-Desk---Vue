<script setup>
    import {computed} from 'vue';
    import TicketsTable from '@/components/tables/TicketsTable.vue';
    import { useTicketStore } from '@/stores/ticket';

    const ticketStore = useTicketStore();
    const closedTickets = computed(() => { 
        if(ticketStore.tickets){
            return ticketStore.tickets.filter((ticket) => ticket.attributes.status === 'closed');
        } else {
            return [];
        }
    });
</script>

<template>
    <TicketsTable :dataObjects="closedTickets"/>
</template>