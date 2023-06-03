<script setup>
    import { onMounted, ref } from 'vue';
    import AdminSidebar from '@/components/sidebars/AdminSidebar.vue';
    import AppLayout from '@/components/layouts/AppLayout.vue';
    import { useUserStore } from '@/stores/user';
    import { useDepartmentStore } from '@/stores/department';
    
    const userStore = useUserStore();
    const departmentStore = useDepartmentStore();

    onMounted(() => {
        userStore.fetchAllUsers();
        departmentStore.fetchAllDepartments();
    })

</script>

<template>
    <AppLayout>
        <template #sidebarContent>
            <AdminSidebar />
        </template>
        <template #body>
            <RouterView />
        </template>
    </AppLayout>
</template>