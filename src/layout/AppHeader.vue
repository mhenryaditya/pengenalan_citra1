<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <template v-slot:brand>
                <router-link class="navbar-brand mr-lg-5" to="/">
                    <img src="/img/brand/logo1-removebg-preview.png" alt="logo">
                </router-link>
            </template>

            <template v-slot:content-header="{ closeMenu }">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="/pengolahan_citra1/">
                            <img src="/img/brand/logo2-removebg-preview.png">
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <close-button @click="closeMenu"></close-button>
                    </div>
                </div>
            </template>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <base-dropdown tag="li" class="nav-item">
                    <template v-slot:title>
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <FontAwesomeIcon :icon="faPenFancy" />
                            <span class="nav-link-inner--text">Pengolahan Gambar</span>
                        </a>
                    </template>
                    <!-- <router-link to="/tresholding" class="dropdown-item">Tresholding</router-link> -->
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('tresholding')">Tresholding</a>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('negative')">Citra
                        Negatif</a>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('brightness')">Kecerahan
                        Gambar</a>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('convert')">Konversi
                        Grayscale</a>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <template v-slot:title>
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <FontAwesomeIcon :icon="faGears" />
                            <span class="nav-link-inner--text">Geometri Gambar</span>
                        </a>
                    </template>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('rotate')">Rotasi Gambar</a>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('flip')">Flipping Gambar</a>
                </base-dropdown>
                <base-dropdown tag="li" class="nav-item">
                    <template v-slot:title>
                        <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                            <FontAwesomeIcon :icon="faBolt" />
                            <span class="nav-link-inner--text">Perbaikan Gambar</span>
                        </a>
                    </template>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('equalise')">Ekualisasi Gambar</a>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('convolution')">Konvolusi Gambar</a>
                </base-dropdown>
            </ul>
        </base-nav>
    </header>
</template>
<script setup lang="ts">
import BaseNav from "../components/BaseNav.vue";
import BaseDropdown from "../components/BaseDropdown.vue";
import CloseButton from "../components/CloseButton.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons/faPenFancy";
import { faBolt, faCircleUp, faGears } from "@fortawesome/free-solid-svg-icons";
import { inject, type Ref } from "vue";
import Swal from "sweetalert2";
import router from "@/router";

let initPct = inject<Ref<File | undefined>>('initPct')
let clickMenu = (link: string) => {
    if (!initPct!.value || initPct!.value == null) {
        Swal.fire({
            icon: 'error',
            title: 'Pengeditan Citra',
            text: 'Mohon inputkan gambar terlebih dahulu!'
        })
    } else {
        router.push(`/${link}`)
    }
}

</script>
<style></style>
