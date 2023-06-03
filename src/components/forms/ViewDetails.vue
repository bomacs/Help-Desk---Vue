<script setup>
import axiosClient from '@/axios';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ref, onMounted, computed} from 'vue';
import { useTicketStore } from '@/stores/ticket';

const ticketStore = useTicketStore();
const route = useRoute();
const ticketId = route.params.id;
const ticketDetails = ref(null);

onMounted(() => {
    const id = parseInt(ticketId, 10);
    ticketDetails.value = ticketStore.getTicketById(id);
}); 
</script>

<template>
    <div v-if="ticketDetails" class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-0">
        <div class="grid grid-cols-1 gap-x-16 gap-y-10">
            <div class="w-full rounded-lg bg-white p-8 shadow-lg lg:p-12">
                <form action="" class="space-y-4">
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="" for="id">TICKET ID</label>
                            <input
                                v-model="ticketDetails.id"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="id"
                                disabled
                            />
                        </div>

                        <div>
                            <label class="" for="type-id">DEPARTMENT</label>
                            <input
                                v-model="ticketDetails.department.name"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="type-id"
                                disabled
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="" for="priority">PRIORITY LEVEL</label>
                            <input
                                v-model="ticketDetails.attributes.priority"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="priority"
                                required
                                disabled
                            />
                        </div>
                        <div>
                            <label for="status" class="">STATUS</label>
                            <input
                                v-model="ticketDetails.attributes.status"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="status"
                                required
                                disabled
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label for="ticket-type" class="">TICKET TYPE</label>
                            <input
                                v-model="ticketDetails.ticket_type.name"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="ticket_type"
                                required
                                disabled
                            />
                        </div>
                        <div>
                            <label for="status" class="">MODULE TYPE</label>
                            <input
                                v-model="ticketDetails.ticket_details.module_type"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="status"
                                required
                                disabled
                            />
                        </div>
                    </div>
                    <div>
                        <label class="" for="details-issue">ISSUE DETAILS</label>
                        <textarea
                        v-model="ticketDetails.ticket_details.details_desc"
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Additional details"
                        rows="6"
                        id="details-issue"
                        disabled
                        ></textarea>
                    </div>
                    <div class="">
                        <label class="" for="details-issue">ATTACHMENTS</label>
                        <div class="w-full rounded-lg border border-gray-200 h-12 p-3 text-sm">
                            <p>{{ ticketDetails.ticket_details.attachments}}</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1">
                        <label class="" for="first-name">CREATED BY:</label>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <input
                                    v-model="ticketDetails.client.firstname"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="first-name"
                                    required
                                    disabled
                                />
                            </div>

                            <div>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    v-model="ticketDetails.client.lastname"
                                    type="text"
                                    id="last-name"
                                    required
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="" for="created_at">CREATED AT</label>
                            <input
                                v-model="ticketDetails.attributes.created_at"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="created_at"
                                disabled
                            />
                        </div>
                        <div>
                            <label class="" for="email">EMAIL</label>
                            <input
                                v-model="ticketDetails.client.email"
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Email address"
                                type="email"
                                id="email"
                                required
                                disabled
                            />
                        </div>
                    </div>
                    <fieldset class="space-y-4">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="acknowledged_by">ACKNOWLEDGED BY</label>
                                <input
                                    v-model="ticketDetails.attributes.acknowledged_by"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="acknowledged_by"
                                    disabled
                                />
                            </div>

                            <div>
                                <label class="" for="acknowledged_at">ACKNOWLEDGED AT</label>
                                <input
                                    v-model="ticketDetails.attributes.acknowledged_at"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="acknowledged_at"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="assigned_by">ASSIGNED BY</label>
                                <input
                                    v-model="ticketDetails.attributes.assigned_by"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="assigned_by"
                                    disabled
                                />
                            </div>

                            <div>
                                <label class="" for="assigned_to">Assigned to</label>
                                <input
                                    v-model="ticketDetails.attributes.assigned_to"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="assigned_to"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="updated_by">Updated by</label>
                                <input
                                    v-model="ticketDetails.attributes.updated_by"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="updated_by"
                                    disabled
                                    />
                            </div>

                            <div>
                                <label class="" for="updated_at">Updated at</label>
                                <input
                                    v-model="ticketDetails.attributes.updated_at"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="updated_at"
                                    disabled
                                    />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>