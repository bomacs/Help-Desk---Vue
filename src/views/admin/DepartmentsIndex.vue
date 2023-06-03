<script setup>
    import { computed } from 'vue';
    import DepartmentsTable from '@/components/tables/DepartmentsTable.vue';
    import { useDepartmentStore } from '@/stores/department';

    const departmentStore = useDepartmentStore();
    const departments = computed(() => {
        if(departmentStore.departments) {
            return departmentStore.departments;
        } else {
            return [];
        }    
    });
</script>
<template>
    <DepartmentsTable :departments="departments"/>
</template>