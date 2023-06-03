<script setup>
import TicketsTable from '@/components/tables/TicketsTable.vue';
import { useTicketStore } from '@/stores/ticket';

    const ticketStore = useTicketStore();    
    const tickets = ticketStore.tickets;
    
</script>

<template>
    <TicketsTable :dataObjects="tickets"/>
</template>