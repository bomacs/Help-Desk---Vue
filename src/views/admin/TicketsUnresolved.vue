<script setup>
    import TicketsTable from '@/components/tables/TicketsTable.vue';
    import { computed } from 'vue';
    import { useTicketStore } from '@/stores/ticket';

    const ticketStore = useTicketStore();

    const unresolvedTickets = computed(() => { 
        if(ticketStore.tickets) {
            return ticketStore.tickets.filter((ticket) => ticket.attributes.status === 'open');
        } else {
            return [];
        }
    });
</script>

<template>
    <TicketsTable :dataObjects="unresolvedTickets" />
</template>