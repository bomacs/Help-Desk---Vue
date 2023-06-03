<script setup>
    import AppLayout from '@/components/layouts/AppLayout.vue';
    import ClientSidebar from '@/components/sidebars/ClientSidebar.vue';  
</script>

<template>
    <AppLayout>
        <template #sidebarContent>
            <ClientSidebar />
        </template>
        <template #body>
            <RouterView />
        </template>
    </AppLayout>
</template>