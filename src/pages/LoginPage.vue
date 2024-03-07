<script setup>
import { ref } from "vue"

const emits = defineEmits(['hide-login']);

const email = ref();
const password = ref();

async function login() {

}

async function signup() {
}
</script>

<template>
    <div class="login-container">
        <img src="https://s3-alpha-sig.figma.com/img/3547/9ad1/258a7842069b888c9631a2c821e5b49b?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k18Kk1BPbEDDQxTKMlxVOgUsf~nfmIMPA3aPhXi8HE0dgPf6TKY0hdf-o3hfYCbm31wTxtAAr~jnGNsLpn3af-0wdXEwMTKfL32ieateob8CPAxXH1t3Y7sNU0L-4Zjnw9IBFwVdcTbsiuN~kzJ1VsxZ8Is3kxUttQRgTlo1g3jxaLWdq39h1G3Zqp2Hv5~BeLQ2VPLHbOhV0fYSrHXSPKnMscFxPmegEUHv31eZl2XNNrIZYsjIReJ9g3~9zu84x7UYfwLHRHu36VrjRMUUxX-jgv7ADfXNBVUMcJvyzadB-DbRNK3M~EIdoSlrVc0pgDcBd5EUeiF0sWHkyar1~w__"
        alt="">
        <form @submit.prevent>
            <div>
                <label for=""></label>
                <br>
                <input v-model="email" type="text" name="email">
            </div>
            <div>
                <label for="password"></label>
                <br>
                <input v-model="password" type="text" name="password">
            </div>
            <br>
            <button class="button-is" @click="login">Iniciar Sesión</button>
            <button class="button-cc" @click="signup">Crear cuenta</button>
        </form>
    </div>
</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    background-color: #282c34;
    color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

.login-container {
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* Centering from top to bottom and left to right */
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    margin-top: 10px;
    color: #000000;
    width: 100%; /* Set a specific width for the labels to match the buttons */
    box-sizing: border-box; /* Include padding and border in the width calculation */
    text-align: left; /* Adjust text alignment as needed */
}

input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    color: #D9D9D9;
    border-radius: 4px;
}

img {
    max-width: 25%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
}

.button-is {
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    background-color: #D43A72;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button-cc {
    margin-top: 15px;
    padding: 10px;
    width: 100%;
    background-color: #F0B166;
    color: #000000;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #D9D9D9;
}
</style>