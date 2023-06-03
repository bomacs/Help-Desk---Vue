import { defineStore } from "pinia";
import axiosClient from "../axios";

export const useTicketStore = defineStore('ticket', {
    state: () => ({ 
        tickets: null,
    }),
    getters: {
      getTicketById: (state) =>  (ticketId) =>{
          return state.tickets.find((ticket) => ticket.id === ticketId);
      },
      getTicketsByClientId: (state) => (clientId) => {
        return state.tickets.filter((ticket) => ticket.attributes.created_by === clientId);
      },
      getNewTickets: (state)=> {
        return state.tickets.filter((ticket) => ticket.attributes.status === 'open' && (new Date() - new Date(ticket.attributes.created_at) / (1000 * 60 * 60)) < 24);
      }
    },
    actions: {
        async fetchAllTickets() {
          try {
            const response = await axiosClient.get('/api/tickets');
            this.tickets = response.data.data
          } catch (error) {
            console.error('Error fetching tickets:', error);
          }      
        },
        addTicket(ticket) {
          this.tickets.push(ticket);
        }
    },
    persist: {
      storage: sessionStorage,
      },

  })  

