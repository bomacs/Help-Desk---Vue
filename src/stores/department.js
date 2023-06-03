import { defineStore } from "pinia";
import axiosClient from "@/axios";

export const useDepartmentStore = defineStore('department', {
    state: () => ({
        department: null,
        departments: null,
    }),
    getters: {
        getdepartments: (state) => {
            return state.departments;
          },
    },
    actions: {
        async fetchAllDepartments() {
            try {
                const response = await axiosClient.get('api/departments');
                this.departments = response.data.data
            } catch(error) {
                console.log('Error in fetching departments', error);
            }
        }
    },
    persist: {
        storage: sessionStorage,
        },
})