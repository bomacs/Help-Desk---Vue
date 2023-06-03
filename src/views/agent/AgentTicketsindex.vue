<script setup>
    import {computed} from 'vue';
    import TicketsTable from '@/components/tables/TicketsTable.vue';
    import { useTicketStore } from '@/stores/ticket';

    const ticketStore = useTicketStore();
    const tickets = computed(() => {
        if(ticketStore.tickets) {
            return ticketStore.tickets;
        } else {
            return [];
        }    
    });

</script>

<template>
    <TicketsTable :dataObjects="tickets"/>
</template>