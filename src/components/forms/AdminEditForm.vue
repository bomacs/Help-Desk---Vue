<script setup>
const props = defineProps({
    ticket: Object,
})
</script>

<template>
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-0">
        <div class="grid grid-cols-1 gap-x-16 gap-y-10">
            <div class="w-full rounded-lg bg-white p-8 shadow-lg lg:p-12">
                <form action="" class="space-y-4">
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="" for="id">Ticket ID</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="id"
                                disabled
                            />
                        </div>

                        <div>
                            <label class="" for="type-id">Type ID</label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="type-id"
                                disabled
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="" for="first-name">First Name<span class="ml-2 text-red-500">*</span></label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="First Name"
                                type="text"
                                id="first-name"
                                required
                            />
                        </div>

                        <div>
                            <label class="" for="last-name">Last Name<span class="ml-2 text-red-500">*</span></label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Last Name"
                                type="text"
                                id="last-name"
                                required
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="" for="email">Email<span class="ml-2 text-red-500">*</span></label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Email address"
                                type="email"
                                id="email"
                                required
                            />
                        </div>

                        <div>
                            <label for="ticket-type" class="">Ticket Type<span class="ml-2 text-red-500">*</span></label>
                            <select id="ticket-type" class="w-full rounded-lg border-gray-200 p-3 text-sm" required>
                                <option value="bug">Bug</option>
                                <option value="account-disabled">Acount disabled</option>
                                <option value="unregistered">Unregistered</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="" for="subject-issue">Subject<span class="ml-2 text-red-500">*</span></label>
                        <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Subject/Issue"
                        type="text"
                        id="subject-issue"
                        required
                        />
                    </div>
                    <div>
                        <label class="" for="details-issue">Issue Details<span class="ml-2 text-red-500">*</span></label>
                        <textarea
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Additional details"
                        rows="6"
                        id="details-issue"
                        ></textarea>
                    </div>
                    <fieldset class="w-full border border-gray-200 rounded-lg px-2 py-4">
                        <div>
                            <label class="" for="attachments">Screenshot of the issue</label>
                            <input
                            class="w-full content-['Choose File'] rounded-lg border-gray-200 cursor-pointer p-3 text-sm"
                            placeholder="Attachments"
                            type="file"
                            accept="image/png, image/jpg, image/gif, image/jpeg"
                            id="attachments"
                            />
                        </div>
                    </fieldset>
                    <fieldset class="space-y-4">
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="acknowledged_by">Acknowledged by</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="acknowledged_by"
                                />
                            </div>

                            <div>
                                <label class="" for="acknowledged_at">Acknowledged at</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="acknowledged_at"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="assigned_by">Assigned by</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="assigned_by"
                                />
                            </div>

                            <div>
                                <label class="" for="assigned_to">Assigned to</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="assigned_to"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="created_by">Created by</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="created_by"
                                />
                            </div>

                            <div>
                                <label class="" for="created_at">Created at</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="created_at"
                                />
                            </div>
                        </div>
                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="" for="updated_by">Updated by</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="updated_by" />
                            </div>

                            <div>
                                <label class="" for="updated_at">Updated at</label>
                                <input
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    type="text"
                                    id="updated_at"
                                    />
                            </div>
                        </div>
                    </fieldset>
                    <div class="mt-4">
                        <button
                        type="submit"
                        class="float-right inline-block w-full rounded-lg bg-blue-500 px-5 py-3 font-medium hover:bg-blue-700 text-white sm:w-auto"
                        >
                        Update Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>