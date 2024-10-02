<template>
     <div v-if="loading" class="mt-5 p-5 d-flex justify-content-center">
        <div class="align-self-center p-5 shadow-lg rounded-lg">
            <PulseLoader :size="'50px'"></PulseLoader>
            <div class="mt-2 d-block d-flex flex-column gap-2 align-items-center">
                <h5>Loading...</h5>
                <span>Mohon Tunggu Sebentar</span>
            </div>
        </div>
    </div>
    <div v-else class="mt-5 pt-5">
        <section class="section-shaped my-0">
            <div class="container shape-container">
                <!-- Title -->
                <h3>Citra Negatif</h3>
                <!-- Image Preview -->
                <div class="row mt-3">
                    <div class="col-6 d-flex flex-column align-items-center">
                        <img :src="urlInit" alt="initPct" class="img-thumbnail">
                        <span class="d-block text-center">Gambar Awal</span>
                    </div>
                    <div class="col-6 d-flex flex-column align-items-center">
                        <img :src="urlAfter" alt="afterPct" class="img-thumbnail">
                        <span class="d-block text-center">Gambar Akhir</span>
                    </div>

                </div>
                <!-- Adjust Tools -->
                <div class="row mt-3">
                    <!-- Tools -->
                    <!-- <div class="col-6">
                        <div class="input-group d-flex">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-black" id="basic-addon1">Ambang</span>
                            </div>
                            <VueAutoNumeric :value="maxNumber" @valueNumber="setNumber" id="basic-addon1"
                                class="flex-grow-1">
                            </VueAutoNumeric>
                        </div>
                        <span class="text-info d-block" style="font-size: 10pt;">Tekan Enter untuk menerapkan
                            hasil</span>
                    </div> -->
                    <!-- Download Hasil -->
                    <div class="col-6 d-flex flex-column flex-end">
                        <base-button tag="a" :href="urlAfter" class="mb-3 mb-sm-0" type="success"
                            icon="ni ni-cloud-download-95" download="inverted-image">
                            Download Hasil
                        </base-button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BaseButton from '@/components/BaseButton.vue';
import { inject, onMounted, ref, watch, type Ref } from 'vue';
import PulseLoader from 'vue-spinner/src/ClipLoader.vue';
import { bufferImgUrl, createImgUrl } from '@/plugins/Image';
import VueAutoNumeric from '@/components/VueAutoNumeric.vue';
import { Jimp } from 'jimp';

let initPct = inject<Ref<File | undefined>>('initPct');
let loading: Ref<boolean> = ref(true)
let urlInit: string
let urlAfter: string
let maxNumber: Ref<number> = ref(50)

if (!initPct!.value) {
    router.push('/') // apabila user belum input gambar dari landing, maka arahkan ke landing
}

let setNumber = (value: any) => {
    maxNumber.value = value
}

onMounted(async () => {
    await applyImg()
})

watch(() => maxNumber.value, async () => {
    await applyImg()
})

let applyImg = async () => {
    loading.value = true
    urlInit = createImgUrl(initPct!.value as File)
    let image = await Jimp.read(urlInit);
    image.invert();
    urlAfter = bufferImgUrl((await image.getBuffer(initPct!.value!.type as string)).buffer, `${initPct!.value?.name}-thresholding`, initPct!.value!.type as string)
    loading.value = !loading.value
}

</script>