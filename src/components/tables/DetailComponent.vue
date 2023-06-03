<script setup>
    const props = defineProps({
        ticket: Object
    });
</script>
<template>
    <section class="py-0 lg:py-6">
         <div class="mx-auto px-4 py-0 sm:px-6 lg:py-0">
            <div class="grid grid-cols-1 gap-x-16 gap-y-10">
                <div class="w-full rounded-lg bg-white p-8 shadow-lg lg:p-12">
                    <form class="space-y-4">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div>
                                <label class="" for="id">Ticket ID</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    v-model="ticket.id"
                                    disabled
                                />
                            </div>

                            <div>
                                <label class="" for="type-id">Type ID</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    v-model="ticket.attributes.type_id"
                                    disabled
                                />
                            </div>
                            <div>
                                <label for="ticket-type" class="">Ticket Type</label>
                                <select id="ticket-type" class="w-full rounded-lg border-gray-200 p-3 text-sm" disabled>
                                    <option value="bug">Bug</option>
                                    <option value="account-disabled">Acount disabled</option>
                                    <option value="unregistered">Unregistered</option>
                                </select>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div>
                                <label class="" for="subject-issue">Subject/Issue</label>
                                <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Subject/Issue"
                                type="text"
                                v-model="ticket.attributes.title"
                                disabled
                                />
                            </div>
                            <div>
                                <label class="">Priority Level</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    v-model="ticket.attributes.priority"
                                    disabled
                                />
                            </div>
                            <div>
                                <label class="" for="email">Client Email</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Email address"
                                    type="email"
                                    v-model="ticket.client.email"
                                    disabled
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="details-issue">Issue Details</label>
                                <textarea
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Additional details"
                                rows="6"
                                v-model="ticket.attributes.description"
                                disabled
                                ></textarea>
                            </div>
                            <fieldset class="w-full border border-gray-200 rounded-lg px-2 py-4">
                                <div>
                                    <label class="" for="attachments">Attached Screenshot</label>
                                    <input
                                    class="w-full content-['Choose File'] rounded-lg border-gray-200 cursor-pointer p-3 text-sm"
                                    placeholder="Attachments"
                                    type="file"
                                    accept="image/png, image/jpg, image/gif, image/jpeg"
                                    id="attachments"
                                    disabled
                                    />
                                </div>
                            </fieldset>
                        </div>
                        <fieldset class="w-full border-t-2 border-dashed border-gray-200 rounded-lg px-2 py-4 space-y-4">
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div>
                                    <label class="" for="acknowledged_at">Acknowledged at</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        type="text"
                                        v-model="ticket.attributes.acknowledged_at"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label class="" for="assigned_by">Assigned by</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        type="text"
                                        v-model="ticket.attributes.assigned_by"
                                        disabled
                                    />
                                </div>
                                 <div>
                                    <label class="" for="assigned_to">Assigned to</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        type="text"
                                        v-model="ticket.attributes.assigned_to"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div>
                                    <label class="" for="created_at">Created at</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        type="text"
                                        v-model="ticket.attributes.created_at"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label class="" for="updated_by">Updated by</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        type="text"
                                        v-model="ticket.attributes.updated_by"
                                        disabled
                                         />
                                </div>

                                <div>
                                    <label class="" for="updated_at">Updated at</label>
                                    <input
                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        type="text"
                                        v-model="ticket.attributes.updated_at"
                                        disabled
                                        />
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>