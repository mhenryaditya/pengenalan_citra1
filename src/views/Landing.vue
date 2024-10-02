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
}

</script>

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
                                <!-- <div class="btn-wrapper">
                                    <base-button tag="a"
                                        href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                        class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
                                        Components
                                    </base-button>
                                    <base-button tag="a" href="https://www.creative-tim.com/product/argon-design-system"
                                        class="mb-3 mb-sm-0" type="white" icon="ni ni-cloud-download-95">
                                        Download HTML
                                    </base-button>
                                </div> -->
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
                                    <h6 class="text-primary text-uppercase">Download Argon</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4
                                        that includes the most important components and features.</p>
                                    <div>
                                        <badge type="primary" rounded>design</badge>
                                        <badge type="primary" rounded>system</badge>
                                        <badge type="primary" rounded>creative</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="primary" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Build Something</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="success" rounded>business</badge>
                                        <badge type="success" rounded>vision</badge>
                                        <badge type="success" rounded>success</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="success" class="mt-4">
                                        Learn more
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                    <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                        4 that includes the most important components and features.</p>
                                    <div>
                                        <badge type="warning" rounded>marketing</badge>
                                        <badge type="warning" rounded>product</badge>
                                        <badge type="warning" rounded>launch</badge>
                                    </div>
                                    <base-button tag="a" href="#" type="warning" class="mt-4">
                                        Learn more
                                    </base-button>
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

        <p>Untuk lanjut ke proses pengolahan citra, silakan pilih salah satu operasi yang tersedia berikut.</p>

        <div class="d-flex flex-wrap" style="gap: 10px;">
            <base-dropdown class="flex-grow-1">
                <template v-slot:title>
                    <base-button type="primary" class="dropdown-toggle">
                        <FontAwesomeIcon :icon="faPenFancy" />
                        <span class="nav-link-inner--text">Pengolahan Gambar</span>
                    </base-button>
                </template>
                <a href="/tresholding" @click.prevent="clickMenu('tresholding')" class="dropdown-item">Tresholding</a>
                <a href="/negative" @click.prevent="clickMenu('negative')" class="dropdown-item">Citra
                    Negatif</a>
                <a href="/brightness" @click.prevent="clickMenu('brightness')" class="dropdown-item">Kecerahan
                    Gambar</a>
                <a href="/convert" @click.prevent="clickMenu('convert')" class="dropdown-item">Konversi
                    Grayscale</a>
            </base-dropdown>
            <base-dropdown class="flex-grow-1">
                <template v-slot:title>
                    <base-button type="success" class="dropdown-toggle">
                        <FontAwesomeIcon :icon="faGears" />
                        <span class="nav-link-inner--text">Geometri Gambar</span>
                    </base-button>
                </template>
                <a href="/rotate" @click.prevent="clickMenu('rotate')" class="dropdown-item">Rotasi Gambar</a>
                <a href="/flip" @click.prevent="clickMenu('flip')" class="dropdown-item">Flipping Gambar</a>
            </base-dropdown>
            <base-dropdown class="flex-grow-1">
                <template v-slot:title>
                    <base-button type="warning">
                        <FontAwesomeIcon :icon="faBolt" />
                        <span class="nav-link-inner--text">
                            <a href="/equalise" @click.prevent="clickMenu('equalise')" class="dropdown-item">Ekualisasi
                                Citra</a>
                        </span>
                    </base-button>
                </template>
            </base-dropdown>
            <base-dropdown class="flex-grow-1">
                <template v-slot:title>
                    <base-button type="danger">
                        <FontAwesomeIcon :icon="faCircleUp" />
                        <span class="nav-link-inner--text">
                            <a href="/convolution" @click.prevent="clickMenu('convolution')"
                                class="dropdown-item">Konvolusi
                                Citra</a>
                        </span>
                    </base-button>
                </template>
            </base-dropdown>

        </div>
    </modal>


</template>