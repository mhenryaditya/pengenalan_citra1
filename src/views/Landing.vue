<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import FileUpload from '@/components/FileUpload.vue';
import { inject, onMounted, ref, type Ref } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import Badge from '@/components/Badge.vue';
import Modal from '@/components/Modal.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import BaseDropdown from '@/components/BaseDropdown.vue';
import { faPenFancy } from "@fortawesome/free-solid-svg-icons/faPenFancy";
import { faBolt, faCircleUp, faGears } from "@fortawesome/free-solid-svg-icons";
import router from '@/router';


let initPct = inject<Ref<File | undefined>>('initPct')
let image = (value: File) => {
    initPct!.value = value
}
let modals: Ref<{ modal3: boolean }> = ref({
    modal3: false
})

let clickMenu = (link: string) => {
    router.push(`/${link}`)
    modals.value.modal3 = !modals.value.modal3
}

</script>

<style>
.optionDropdown {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
}

@media (min-width: 769px) {
    .optionDropdown {
        flex-direction: row;
    }
}
</style>

<template>

    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <h1 class="display-3  text-white">Olah Citra dengan Beberapa Pengaturan
                                    <span>disertai dengan preview gambar</span>
                                </h1>
                                <p class="lead text-white" style="font-size: 13pt;">Memungkinkan Anda untuk mengolah
                                    gambar dengan berbagai
                                    fitur, mulai dari penyesuaian citra, transformasi geometri, ekualisasi histogram,
                                    hingga penggunaan filter konvolusi pada citra. Sesuaikan gambar sesuai kebutuhan
                                    Anda dengan mudah dan simpan hasilnya!</p>
                                <FileUpload name="initPct" @file="image" @removefile="image" :init-pct="initPct" />
                                <base-button v-if="!initPct" tag="button" class="mb-3 mb-sm-0" block type="default"
                                    icon="fa fa-code" disabled>
                                    Proses Pengolahan Citra
                                </base-button>
                                <base-button v-else block type="default" tag="button" class="mb-3 mb-sm-0"
                                    icon="fa fa-code" @click="modals.modal3 = true">
                                    Proses Pengolahan Citra
                                </base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Upload Citra</h6>
                                    <p class="description mt-3">Anda tinggal memasukkan gambar pada halaman ini dan
                                        kemudian pilih proses pengolahan citra yang diinginkan.</p>
                                    <div>
                                        <badge type="primary" rounded>Upload</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Pilih Operasi Pengolahan Citra</h6>
                                    <p class="description mt-3">Terdapat tujuh operasi citra yang dapat Anda gunakan.
                                        Sesuaikan operasi citra tersebut berdasarkan kebutuhan Anda.</p>
                                    <div>
                                        <badge type="success" rounded>Edit</badge>
                                        <badge type="success" rounded>Proses</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Download Hasil</h6>
                                    <p class="description mt-3">Proses citra dengan beberapa pengaturan jika
                                        memungkinkan kemudian dan simpan hasilnya dengan mudah tanpa repot.</p>
                                    <div>
                                        <badge type="warning" rounded>Unduh</badge>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

    <modal v-model:show="modals.modal3">
        <template v-slot:header>
            <h6 class="modal-title" id="modal-title-default">
                <FontAwesomeIcon :icon="faCode" /> Pilih Pengolahan Citra
            </h6>
        </template>
        <template v-slot:body>
            <p>Untuk lanjut ke proses pengolahan citra, silakan pilih salah satu operasi yang tersedia berikut.</p>

            <div class="optionDropdown">
                <base-dropdown class="flex-grow-1">
                    <template v-slot:title>
                        <base-button type="primary" class="dropdown-toggle">
                            <FontAwesomeIcon :icon="faPenFancy" />
                            <span class="nav-link-inner--text">Pengolahan Gambar</span>
                        </base-button>
                    </template>
                    <a href="" @click.prevent="clickMenu('tresholding')" class="dropdown-item">Tresholding</a>
                    <a href="" @click.prevent="clickMenu('negative')" class="dropdown-item">Citra
                        Negatif</a>
                    <a href="" @click.prevent="clickMenu('brightness')" class="dropdown-item">Kecerahan
                        Gambar</a>
                    <a href="" @click.prevent="clickMenu('convert')" class="dropdown-item">Konversi
                        Grayscale</a>
                </base-dropdown>
                <base-dropdown class="flex-grow-1">
                    <template v-slot:title>
                        <base-button type="success" class="dropdown-toggle">
                            <FontAwesomeIcon :icon="faGears" />
                            <span class="nav-link-inner--text">Geometri Gambar</span>
                        </base-button>
                    </template>
                    <a href="" @click.prevent="clickMenu('rotate')" class="dropdown-item">Rotasi Gambar</a>
                    <a href="" @click.prevent="clickMenu('flip')" class="dropdown-item">Flipping Gambar</a>
                </base-dropdown>
                <base-dropdown class="flex-grow-1">
                    <template v-slot:title>
                        <base-button type="warning" class="dropdown-toggle">
                            <FontAwesomeIcon :icon="faBolt" />
                            <span class="nav-link-inner--text">Perbaikan Gambar</span>
                        </base-button>
                    </template>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('equalise')">Ekualisasi Gambar</a>
                    <a href="" class="dropdown-item" @click.prevent="clickMenu('convolution')">Konvolusi Gambar</a>
                </base-dropdown>
            </div>
        </template>
    </modal>


</template>