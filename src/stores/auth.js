import { defineStore } from "pinia";
import axiosClient from "@/axios";


export const useAuthStore = defineStore('auth', {
    state: () => ({
            user: null,
            token: null,
            role: null,
        }),
    actions: {
        setAuthDetails(response) {
            this.user = response.user,
            this.token = response.token,
            this.role = response.role
        },
        signup(userData) {
            const response = axiosClient.post('api/register', {
                user_id: userData.user_id,
                firstname: userData.firstname,
                lastname: userData.lastname,
                email: userData.email,
                password: userData.password,
                password_confirmation: userData.password_confirmation,
            });
            return response;
        },
        signin(userData) {
            const response = axiosClient.post('api/login', {
                email: userData.email,
                password: userData.password
            });
            return response;
        },
        signout() {
            const response = axiosClient.post('api/logout');
            return response;
        },
        clearAuth() {
          this.role = null;
          this.user = null;
          this.token = null;
        }
    },
    getters: {
        currentUser: (state) => state.user
    },
    persist: {
        storage: sessionStorage,
    }

});
