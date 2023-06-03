<script setup>
    import { computed, watchEffect} from 'vue';
    import TicketsTable from '@/components/tables/TicketsTable.vue';
    import { useTicketStore } from '@/stores/ticket';
    import { useAuthStore } from  '@/stores/auth';

    const ticketStore = useTicketStore();
    const ticketsInStore = ticketStore.tickets
    const authStore = useAuthStore();
    const authUser = authStore.user;
    const clientTickets = computed(()=>{
        if(ticketsInStore) {
            return ticketsInStore.filter((ticket) => ticket.attributes.created_by === authUser.id);
        } else {
            return [];
        }
    })

    watchEffect(() => {
        ticketsInStore.value; 
    });

</script>

<template>
    <TicketsTable :dataObjects="clientTickets"/>
</template>