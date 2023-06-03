<script setup>
import { ref, reactive} from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = useRouter();
const authStore = useAuthStore();
const errors = ref({});
const errorsBE = ref({});
const showPassword = ref(false);
const showPasswordConfirm = ref(false);

const user = reactive({
    user_id: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password_confirmation: '',
});

function validateRegister() {
    errors.value = {};

    if (!user_id.value){
        errors.value.user_id = "Employee/Student ID is required.";
    }

    if (!firstname.value) {
        errors.value.firstname = "Firstname is required.";
    }

    if (!lastname.value) {
        errors.value.lastname = "Lastname is required.";
    }

    if (!email.value) {
        errors.value.email = "Email is required.";
    } else if (!isValidEmail(email.value)) {
        errors.value.email = "Invalid email format.";
    }

    if (!password.value) {
        errors.value.password = "Password is required.";
    } else if (password.value.length < 8 ) {
        errors.value.password = "Password must be not less than 8 characters.";
    } else if (!isValidPassword(password.value)) {
        errors.value.password = "Password must contain symbol character.";
    }

    if (password.value !== password_confirmation.value) {
        errors.value.password_confirmation = "Password and Password Confirmation do not match.";
    }

    return Object.keys(errors.value).length === 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    return passwordRegex.test(password);
}

const register = async () => {
    if (validateRegister()) {
        try {
        const response = await authStore.signup(user);
        await authStore.setAuthDetails(response.data.data);
        if (authStore.role === 'Admin')
        {
            await router.push({name: 'Admin-dashboard'})
        } else if (authStore.role === 'Agent'){
            await router.push({name: 'Agent-dashboard'})
        } else if (authStore.role === 'Client') {
            await router.push({name: 'Client-dashboard'})
        }  
    } catch(err) {
        if (err.response && err.response.status === 422){
            errorsBE.value = err.response.data.errors
        } else {
            errors.value = err.response.data
        }
    };
    }
}
</script>

<template>    
    <div class="flex flex-col justify-center pt-8 md:px-16 md:justify-start md:pt-0 sm:mt-24">
        <p class="text-center font-semibold text-3xl">Create an Account.</p>
        <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="register">
            <div class="flex flex-col pt-4">
                <label for="user_id" class="text-lg">Employee/Student ID<span class="text-red-500">*</span></label>
                <input v-model="user.user_id" type="text" id="user_id" name="user_id" placeholder="0000-00-0000" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                <span v-if="errors.user_id" class="text-red-500 mt-1">{{ errors.user_id }}</span>
                <span v-if="errorsBE.user_id" class="text-red-500 mt-1">{{ errorsBE.user_id[0] }}</span>
            </div>
            <div class="flex flex-col pt-4">
                <label for="firstname" class="text-lg">First Name<span class="text-red-500">*</span></label>
                <input v-model="user.firstname" type="text" id="firstname" name="firstname" placeholder="Juan" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                <span v-if="errors.firstname" class="text-red-500 mt-1">{{ errors.firstname }}</span>
                <span v-if="errorsBE.firstname" class="text-red-500 mt-1">{{ errorsBE.firstname[0] }}</span>
            </div>
            <div class="flex flex-col pt-4">
                <label for="lastname" class="text-lg">Last Name<span class="text-red-500">*</span></label>
                <input v-model="user.lastname" type="text" id="lastname" name="lastname" placeholder="Carlos" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                <span v-if="errors.lastname" class="text-red-500 mt-1">{{ errors.lastname }}</span>
                <span v-if="errorsBE.lastname" class="text-red-500 mt-1">{{ errorsBE.lastname[0] }}</span>
            </div>
            <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">Email<span class="text-red-500">*</span></label>
                <input v-model="user.email" type="email" id="email" name="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                <span v-if="errors.email" class="text-red-500 mt-1">{{ errors.email }}</span>
                <span v-if="errorsBE.email" class="text-red-500 mt-1">{{ errorsBE.email[0] }}</span>
            </div>
            <div class="flex flex-col pt-4">
                <label for="password" class="text-lg">Password<span class="text-red-500">*</span></label>
                <div class="relative items-center">
                    <input v-model="user.password" :type="showPassword ? 'text' : 'password'" id="password" name="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                    <button type="button" @click="showPassword = !showPassword" class="absolute inline-block bottom-2 right-2">
                            <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                    </button>
                </div>
                <span v-if="errors.password" class="text-red-500 mt-1">{{ errors.password }}</span>
                <span v-if="errorsBE.password" class="text-red-500 mt-1">{{ errorsBE.password[0] }}</span>
            </div>
            <div class="flex flex-col pt-4">
                <label for="password_confirmation" class="text-lg">Confirm Password<span class="text-red-500">*</span></label>
                <input v-model="user.password_confirmation" :type="showPassword ? 'text': 'password'" id="password_confirmation" name="password_confirmation" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"/>
                <span v-if="errors.password_confirmation" class="text-red-500 mt-1">{{ errors.password_confirmation }}</span>
            </div>
            <input type="submit" value="Register" class="bg-originalBlue text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
        </form>
        <div class="text-center pt-12 pb-12">
            <p>Already have an account? <router-link to="login" class="underline font-semibold">Log in here.</router-link></p>
        </div>
    </div>  
</template>