<script setup>
import { signOut } from "firebase/auth";
import { auth } from "@/firebase.js"
const emits = defineEmits(['changePage']);

async function singingOut() {
    await signOut(auth);
    alert("Sesión cerrada exitosamente")
}
</script>

<template>
    <nav>
        <h2>Instagram</h2>
        <div>
            <span @click="emits('changePage', 'home')">Casa</span>
            <span @click="emits('changePage', 'profile')">Perfil</span>
            <span @click="singingOut">Cerrar sesión</span>
        </div>
    </nav>
</template>

<style scoped>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fafafa;
}

nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

h2 {
    font-size: 1.5rem;
    color: #262626;
    margin: 0;
}

div {
    display: flex;
    gap: 20px;
}

span {
    cursor: pointer;
    color: #262626;
    font-weight: bold;
    transition: color 0.3s;
}

span:hover {
    color: #3897f0;
}

/* Adjust the body padding to prevent content from being hidden under the fixed navigation bar */
body {
    padding-top: 50px; /* Set a value equal to the height of your navigation bar */
}
</style>