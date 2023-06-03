import { defineStore } from "pinia";
import axiosClient from "../axios";

export const useUserStore = defineStore('user', {
    state: () => ({
        users: null,
    }),
    actions: {
        setUserDetails(res) {
            this.id = res.data.id,
            this.token = res.data.token,
            this.role = res.data.role,
            this.empOrStud_id = res.data.user.user_id,
            this.firstname = res.data.user.firstname,
            this.lastname = res.data.user.lastname,
            this.email = res.data.user.email
        },
        async fetchAllUsers() {
            try {
                const response = await axiosClient.get('api/users')
                this.users = response.data.data
            } catch (error) {
                console.log('Error fetching users:', error);
            }
        },
        async fetchUser() {
            try {
                const res = await axiosClient.get('api/users/' + this.$state.id)

                this.id = res.data.id,
                this.empOrStud_id = res.data.user.user_id,
                this.firstname = res.data.user.firstname,
                this.lastname = res.data.user.lastname,
                this.email = res.data.user.email
            } catch(error) {
                console.log(error);
            }
        },
    },
    persist: {
        storage: sessionStorage,
        },
})