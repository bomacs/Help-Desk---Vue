<script setup>
import { computed } from 'vue';
import Ticket_typesTable from '@/components/tables/Ticket_typesTable.vue';
import { useTicket_typeStore } from '@/stores/ticket_type';

    const ticket_typeStore = useTicket_typeStore();    
    const ticket_types = computed(() => {
        if(ticket_typeStore.ticket_types){
            return ticket_typeStore.ticket_types;
        } else {
            return [];
        }      
    });
</script>

<template>
    <Ticket_typesTable :ticket_types="ticket_types"/>
</template>