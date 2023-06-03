<script setup>
    import { computed } from 'vue';
    import UsersTable from '@/components/tables/UsersTable.vue';
    import { useUserStore } from '@/stores/user';

    const userStore = useUserStore();

    const allUsers = computed(() => {
        if(userStore.users) {
            return userStore.users;
        } else {
            return []; 
        }
    });
</script>

<template>
    <UsersTable  :users="allUsers"/>
</template>