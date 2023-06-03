<script setup>
    import { computed } from 'vue';
    import TicketsTable from '@/components/tables/TicketsTable.vue';
    import { useTicketStore } from '@/stores/ticket';

    const ticketStore = useTicketStore();
    const newTickets = computed(() => {
        if (ticketStore.tickets) {
            return ticketStore.tickets.filter((ticket) => ticket.attributes.status === 'open' && ((new Date() - new Date(ticket.attributes.created_at)) / (1000 * 60 * 60)) < 24)
        } else {
            return [];
        }
    });
</script>

<template>
    <TicketsTable :dataObjects="newTickets"/>
</template>