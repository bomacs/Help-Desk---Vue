<script setup>
    import { ref } from 'vue';
    import axiosClient from "@/axios";
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '@/stores/auth';
    import { useTicketStore } from '@/stores/ticket';
    import { useTicket_typeStore } from '@/stores/ticket_type';
    import  BugFixRequest from '@/components/forms/ticket/BugFixRequest.vue';
    import  AccessRequest from '@/components/forms/ticket/AccessRequest.vue';
    import FlashMessage from '@/components/FlashMessage.vue';

    const router = useRouter();
    const authStore = useAuthStore();
    const ticketStore = useTicketStore();
    const ticket_typeStore = useTicket_typeStore();
    const ticket_types = ticket_typeStore.ticket_types;
    const errors = ref({});
    const department = ref('');
    const postTicketDone = ref(false);
    const flashMessage = ref(null);

    // ticket resouce
    const type_id = ref(0);
    const ticket_details = ref({
        moduleType:'None',
        details_desc:'',
    });
    const attachments = ref([]);

    const isDragging = ref(false);

    function showFlashMessage(text, type = 'info') {
        flashMessage.value = { text, type };
        setTimeout(() => {
            flashMessage.value  = null;
        }, 2000);
    }

    function onChange(id) { 
        const types = [...ticket_types.filter((t) => t.id === id)];
        department.value = types[0]['attributes']['department']['name'];
    }

    function dragover(e) {
      e.preventDefault();
      isDragging.value = true;
    }

    function dragleave() {
      isDragging.value = false;
    }

    function drop(e) {
        e.preventDefault();
        var selected = [...e.dataTransfer.files];
        for (let file = 0; file < selected.length; file ++) {  
            console.log(selected[file]);
            attachments.value.push(selected[file]); 
        }
        isDragging.value = false;
    }

    function showSelected(event){   
        var selected = [...event.target.files];

        for (let file = 0; file < selected.length; file ++) {  
            attachments.value.push(selected[file]); 
        }
    }

    function generateURL(file) {
        let fileSrc = URL.createObjectURL(file);
        setTimeout(() => {
            URL.revokeObjectURL(fileSrc);
        }, 1000);
        return fileSrc;
    }

    function removeAttached(i){
        attachments.value.splice(i, 1);
    }

    const postTicket = () => {
        errors.value = {};
        console.log(ticket_details.value.details_desc);
        console.log(ticket_details.value.moduleType);
        console.log(attachments.value);
        const files = attachments.value;
        let formData = new FormData();
        formData.append('type_id', type_id.value);
        formData.append('module_type', ticket_details.value.moduleType);
        formData.append('details_desc', ticket_details.value.details_desc);
        if (files){
            for (let i= 0; i < files.length; i++) {
                formData.append('attachments[]', files[i])
            }
        }

        const headers = { 
            'Content-Type': 'multipart/form-data',
        };

        try {
            axiosClient.post('api/tickets', formData, {headers})
            .then((res) => {
                ticketStore.addTicket(res.data.data);
                showFlashMessage("Submitted!", 'success')
                postTicketDone.value = true;
                type_id.value = '';
                department.value = '';
                attachments.value = [];
                ticket_details.value  = {
                    moduleType:'',
                    details_desc:'',
                };
            })
        }catch (error) {
            showFlashMessage("Error:" + error, 'error')
        }
    }
</script>
<template>
    <FlashMessage v-if="flashMessage" :flashMessage="flashMessage"/>
    <div class="max-w-7xl bg-white mx-auto rounded-lg shadow-lg px-2 py-4 sm:px-6 lg:px-8 lg:pt-16 lg:pb-20">
        <h1 class="text-center text-3xl pb-4">Create Ticket Form</h1>
        <div class="max-w-5xl mx-auto grid grid-cols-1 gap-x-16 gap-y-10">
            <div class="w-full rounded-lg bg-white border border-gray-200 p-8 lg:p-12">
                <form @submit.prevent="postTicket" class="space-y-4">
                    <div v-if="authStore.user" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label class="" for="first-name">First Name<span class="ml-2 text-red-500">*</span></label>
                        <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="First Name"
                            type="text"
                            id="first-name"
                            v-model="authStore.user.firstname"
                            disabled
                        />
                        </div>

                        <div>
                        <label class="" for="last-name">Last Name<span class="ml-2 text-red-500">*</span></label>
                        <input
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Last Name"
                            type="text"
                            id="last-name"
                            v-model="authStore.user.lastname"
                            disabled
                        />
                        </div>
                    </div>
                    <div v-if="authStore.user" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="" for="id">ID<span class="ml-2 text-red-500">*</span></label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="id"
                                v-model="authStore.user.user_id"
                                disabled
                            />
                        </div>
                        <div>
                            <label class="" for="email">Email<span class="ml-2 text-red-500">*</span></label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Email address"
                                type="email"
                                id="email"
                                v-model="authStore.user.email"
                                disabled
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label for="ticket_type" class="">Ticket Type<span class="ml-2 text-red-500">*</span></label>
                            <select v-model="type_id" id="ticket_type" @change="onChange(type_id)" class="w-full rounded-lg border-gray-200 p-3 text-sm" required>
                                <option v-for="ticket_type in ticket_types" :key="ticket_type.id" :value="ticket_type.id">{{ ticket_type.attributes.name }} - {{ticket_type.attributes.department.name}} </option>
                            </select>
                        </div>
                        <div>
                            <label for="department" class="">Department<span class="ml-2 text-red-500">*</span></label>
                            <input
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                type="text"
                                id="id"
                                v-model="department"
                                disabled
                            />
                        </div>
                    </div>
                    <div>
                        <AccessRequest :ticketType="type_id" v-model:accessRequest="ticket_details"/>
                    </div>
                    <!-- <div v-if="type_id === 3">
                        <BugFixRequest v-model:bugFixRequest="details_desc"/>
                    </div> -->
                    <div class="col-span-full">
                        <label class="block text-sm font-medium leading-6 text-gray-900">ATTACHMENTS</label>
                        <div @dragover="dragover" @dragleave="dragleave" @drop="drop" class="mx-auto flex flex-col justify-center content-center rounded-lg border border-dashed border-gray-900/25 mt-2 px-6 py-6 md:py-0 md:pl-0">
                            <div class="flex flex-row">
                                <div class="flex flex-col flex-center justify-center space-x-2 mt-4 sm:flex-row" >
                                    <div v-for="file in attachments" :key="file.name" class="w-1/3 grid grid-cols-1">
                                        <div class="w-full flex flex-col text-center">
                                            <div class="flex">
                                                <img :src="generateURL(file)" :alt="file.name" class="w-full p-2">
                                                <div class="top-0">
                                                    <button
                                                        class="text-lg"
                                                        type="button"
                                                        @click="removeAttached(attachments.indexOf(file))"
                                                        title="Remove file"
                                                        >
                                                        <b>x</b>
                                                    </button>
                                                </div>
                                            </div>  
                                            <div class="w-full">
                                                <p>
                                                {{ file.name}}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="attachments.length < 3" class="w-full grid grid-cols-1 place-items-center">
                                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                </svg>
                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" @change="showSelected($event)" name="file-upload" type="file" ref="files" class="sr-only" multiple>
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs leading-5 text-gray-600">PDF, PNG, JPEG, JPG, GIF up to 10MB</p>
                            </div>
                            <label v-if="isDragging" class="text-center block bg-white font-semibold text-indigo-600">
                                Release to drop files here.
                            </label>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button
                        type="submit"
                        class="float-right inline-block w-full rounded-lg bg-originalBlue px-5 py-3 font-medium hover:bg-midBlue text-white sm:w-auto md:mt-8"
                        >
                        Send Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>