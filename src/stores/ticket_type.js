import { defineStore } from "pinia";
import axiosClient from "@/axios";

export const useTicket_typeStore = defineStore('ticket_type', {
    state: () => ({
        ticket_types: {},
    }),
    getters: {},
    actions: {
        async fetchAllTicket_types() {
            try {
            const response = await axiosClient.get('/api/ticket_types')
            this.ticket_types = response.data.data
            } catch (error) {
            console.log('Error fetching tickets:', error);
            }
        },
    },
    persist: {
        storage: sessionStorage,
        },
});