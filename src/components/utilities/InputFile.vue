<script setup>
    import { computed, toRefs } from 'vue';

    const emit = defineEmits(['update:modelValue'])

    const props = defineProps({
        modelValue: Array,
        default: '',
        required: true
    })

    const { modelValue } = toRefs(props)

    const inputUpdated = computed({
        get: () => modelValue.value,
        set: (val) => emit('update:modelValue',val)
    });

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
            modelValue.value.push(selected[file]); 
        }
        isDragging.value = false;
    }

    function showSelected(event){   
        var selected = [...event.target.files];

        for (let file = 0; file < selected.length; file ++) {  
            modelValue.value.push(selected[file]); 
        }

        emit('update:modelValue',modelValue);
    }

    function generateURL(file) {
        let fileSrc = URL.createObjectURL(file);
        setTimeout(() => {
            URL.revokeObjectURL(fileSrc);
        }, 1000);
        return fileSrc;
    }

    function removeAttached(i){
        modelValue.value.splice(i, 1);
    }

</script>

<template>
    <!-- <div>
        <label class="" for="details-desc">Issue Details<span class="ml-2 text-red-500">*</span></label>
        <textarea 
        v-model="inputUpdated"
        class="w-full rounded-lg border-gray-200 p-3 text-sm"
        placeholder="Additional details"
        rows="6"
        id="details-desc"
        ></textarea>
    </div> -->
    <div class="col-span-full">
        <label class="block text-sm font-medium leading-6 text-gray-900">ATTACHMENTS</label>
        <div @dragover="dragover" @dragleave="dragleave" @drop="drop" class="mx-auto flex flex-col justify-center content-center rounded-lg border border-dashed border-gray-900/25 mt-2 px-6 py-6 md:py-0 md:pl-0">
            <div class="flex flex-row">
                <div class="flex flex-col flex-center justify-center space-x-2 mt-4 sm:flex-row" >
                    <div v-for="file in modelValue" :key="file.name" class="w-1/3 grid grid-cols-1">
                        <div class="w-full flex flex-col text-center">
                            <div class="flex">
                                <img :src="generateURL(file)" :alt="file.name" class="w-full p-2">
                                <div class="top-0">
                                    <button
                                        class="text-lg"
                                        type="button"
                                        @click="removeAttached(modelValue.indexOf(file))"
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
            <div v-if="modelValue.length < 3" class="w-full grid grid-cols-1 place-items-center">
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
                <p class="text-xs leading-5 text-gray-600">PNG, JPEG, JPG, GIF up to 10MB</p>
            </div>
            <label v-if="isDragging" class="text-center block bg-white font-semibold text-indigo-600">
                Release to drop files here.
            </label>
        </div>
    </div>
</template>