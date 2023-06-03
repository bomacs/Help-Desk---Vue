<script setup>
import { useAuthStore } from '@/stores/auth';
import  { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';

const errors = ref({});
const errorsBE = ref({});
const showPassword = ref(false);
const user = {
    email: '',
    password: '',   
    };
const authStore = useAuthStore();
const router = useRouter();

function validateLogin() {
    errors.value = {};

    if (!email.value) {
        errors.value.email = "Email is required.";
    } else if (!isValidEmail(email.value)) {
        errors.value.email = "Invalid email format.";
    }

    if (!password.value) {
        errors.value.password = "Invalid password"
    } else if(password.value.length < 8) {
        errors.value.password = "Credentials do not match."
    }

    return Object.keys(errors.value).length === 0;

}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const login = async (userData) => {
    if (validateLogin()) {
        try {
            const response = await authStore.signin(userData);
            await authStore.setAuthDetails(response.data.data);
        } catch(err) {
            if (err.response && err.response.status === 401) 
            {
                errors.value = err.response;
            } else if(err.response && err.response.status === 422){
                errorsBE.value = err.response.data;
            } else {
                console.error(err);
            }
        } 
    }
    if (authStore.role === 'Admin')
        {
            router.push({name: 'Admin-dashboard'})
        } else if (authStore.role === 'Agent'){
            router.push({name: 'Agent-dashboard'})
        } else if (authStore.role === 'Client') {
            router.push({name: 'Client-dashboard'})
        }   
}

</script>
<template>
    <div class="flex flex-col justify-center pt-8 md:px-16 md:justify-start md:pt-0 sm:mt-16">
        <p class="text-center text-3xl font-semibold">Welcome.</p>
        <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="login(user)">
            <div v-if="errorsBE.message" class="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-red-500 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                <p>{{ errorsBE.message }}</p>
            </div>
            <div class="flex flex-col pt-4">
                <label for="email" class="text-lg">Email</label>
                <input v-model="user.email" type="email" id="email" name="email" placeholder="your@email.com" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                <span v-if="errors.email" class="text-red-500">{{ errors.email }}</span>
            </div>
            <div class="flex flex-col pt-4">
                <label for="password" class="text-lg">Password</label>
                <div class="relative items-center">
                    <input v-model="user.password" :type="showPassword ? 'text' : 'password'" id="password" name="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                    <button type="button" @click.prevent="showPassword = !showPassword" class="absolute inline-block bottom-2 right-2">
                        <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
	                </button>
                </div>
                <span v-if="errors.password" class="text-red-500">{{ errors.password}}</span>
                <span v-if="errors.status === 401" class="text-red-500 px-px">{{ 'Oops!, ' + errors.data.message }}</span>
            </div>
            <input type="submit" value="Log In" class="bg-originalBlue text-white font-bold text-lg cursor-pointer hover:bg-gray-700 p-2 mt-8">
        </form>
        <div class="w-full text-md pb-12">
            <div class="w-full flex place-content-between pt-2">
                <div class="flex w-1/2 text-left" >Forgot your password</div>
                <p class="w-1/2 flex flex-col text-right "><span>Don't have an account?</span><router-link to="register" class="underline font-semibold">Register here.</router-link></p>
            </div>
        </div>
    </div>
</template>