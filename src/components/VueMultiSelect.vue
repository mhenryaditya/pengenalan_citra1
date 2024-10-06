<template>
    <div>
        <multiselect v-model="value" :options="options" :multiple="false" track-by="name" label="name"
            placeholder="Pilih salah satu jenis kernel" @select="selected" :disabled="props.disabled">
        </multiselect>
    </div>
</template>
<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

const emit = defineEmits<{
    valueSelected: [value: Ref<[{ name: string, kernel: number[][] }]>]
}>()

const props = defineProps<{
    disabled: boolean
    value2: Ref<any>
}>()

let value: Ref<[{ name: string, kernel: number[][] }]> = ref(null)

watch(() => props.value2, (newVal) => {
    if (newVal) {
        value.value = newVal;
    }
}, { immediate: true });

let options: object[] = [
    { name: 'Box Blur', kernel: [[1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9]] },
    { name: 'Gaussian Blur', kernel: [[1 / 16, 2 / 16, 1 / 16], [2 / 16, 4 / 16, 2 / 16], [1 / 16, 2 / 16, 1 / 16]] },
    { name: 'Emboss', kernel: [[-2, -1, 0], [-1, 1, 1], [0, 1, 2]] },
    { name: 'Sharpen', kernel: [[0, -1, 0], [-1, 5, -1], [0, -1, 0]] },
    { name: 'Motion Blur (Horizontal)', kernel: [[1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9], [1 / 9, 1 / 9, 1 / 9]] },
    { name: 'Unsharp Mask', kernel: [[-1, -1, -1], [-1, 9, -1], [-1, -1, -1]] },
]

let selected = () => {
    emit('valueSelected', value)
}

</script>