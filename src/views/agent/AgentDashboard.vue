<script setup>
    import AppLayout from '@/components/layouts/AppLayout.vue';
    import AgentSidebar from '@/components/sidebars/AgentSidebar.vue';
</script>

<template>
    <AppLayout>
        <template #sidebarContent>
            <AgentSidebar />
        </template>
        <template #body>
            <RouterView />
        </template>
    </AppLayout>
</template>