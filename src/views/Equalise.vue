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
                <h3>Ekualisasi Gambar</h3>
                <!-- Image Preview -->
                <div class="row mt-3 d-flex justify-content-center">
                    <div class="col-6 d-flex flex-column align-items-center">
                        <img :src="urlInit" alt="initPct" class="img-thumbnail">
                        <span class="d-block text-center">Gambar Awal</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-6 d-flex flex-column align-items-center">
                        <img :src="urlGray" alt="initPct" class="img-thumbnail">
                        <span class="d-block text-center">Gambar Setelah Grayscale</span>
                    </div>
                    <div class="col-6 d-flex flex-column align-items-center">
                        <img :src="urlEqualised" alt="afterPct" class="img-thumbnail">
                        <span class="d-block text-center">Gambar Hasil Ekualisasi</span>
                    </div>
                </div>
                <!-- Adjust Tools -->
                <div class="row mt-3">
                    <!-- Tools -->
                    <div class="col-6">
                        <!-- <div class="input-group d-flex">
                            <div class="input-group-prepend">
                                <span class="input-group-text text-black" id="basic-addon1">Ambang</span>
                            </div>
                            <VueAutoNumeric :value="maxNumber" @valueNumber="setNumber" id="basic-addon1"
                                class="flex-grow-1">
                            </VueAutoNumeric>
                        </div>
                        <span class="text-info d-block" style="font-size: 10pt;">Tekan Enter untuk menerapkan
                            hasil</span> -->
                    </div>
                    <!-- Download Hasil -->
                    <div class="col-6 d-flex flex-column flex-end">
                        <base-button tag="a" :href="urlEqualised" class="mb-3 mb-sm-0" type="success"
                            icon="ni ni-cloud-download-95" download="equalised-image">
                            Download Hasil
                        </base-button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import { inject, onMounted, ref, type Ref } from 'vue';
import PulseLoader from 'vue-spinner/src/ClipLoader.vue';
import { createImgUrl } from '@/plugins/Image';
import cv from '@techstark/opencv-js'
import router from '@/router';

let initPct = inject<Ref<File | undefined>>('initPct');
let loading: Ref<boolean> = ref(true)
let urlInit: string
let urlGray: Ref<string> = ref('')
let urlEqualised: Ref<string> = ref('')

if (!initPct!.value) {
    router.push('/') // apabila user belum input gambar dari landing, maka arahkan ke landing
}

let blobUrl = async (dst: cv.Mat): Promise<string> => {
    const rgbData = new Uint8ClampedArray(dst.cols * dst.rows * 4);

    for (let i = 0; i < dst.data.length; i++) {
        const grayValue = dst.data[i];
        rgbData[i * 4] = grayValue;
        rgbData[i * 4 + 1] = grayValue;
        rgbData[i * 4 + 2] = grayValue;
        rgbData[i * 4 + 3] = 255;
    }

    const imgData = new ImageData(rgbData, dst.cols, dst.rows);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = dst.cols;
    canvas.height = dst.rows;
    ctx.putImageData(imgData, 0, 0);
    let result = await new Promise(resolve => canvas.toBlob(resolve));
    return URL.createObjectURL(result as Blob)
}

onMounted(async () => {
    urlInit = createImgUrl(initPct!.value as File)

    const img = new Image()
    img.src = urlInit
    const gray = new cv.Mat()
    const dst = new cv.Mat()

    loading.value = true
    img.onload = async () => {
        const src = cv.imread(img)
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0)
        urlGray.value = await blobUrl(gray)

        cv.equalizeHist(gray, dst)
        urlEqualised.value = await blobUrl(dst)

        src.delete();
        gray.delete();
        dst.delete();
        loading.value = !loading.value
    }

})

</script>