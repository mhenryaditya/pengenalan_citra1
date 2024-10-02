<template>
    <div>
        <input ref="autonumericInput" class="form-control" :placeholder="placeholder" @keydown.enter="emitValue" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, type Ref } from 'vue';
import AutoNumeric from 'autonumeric/dist/autoNumeric.min';

const autonumericInput = ref<HTMLInputElement | null>(null);
const props = defineProps({
    value: {
        type: Number,
        required: true,
    },
    options: {
        type: Object,
        default: () => ({ minimumValue: '0', maximumValue: '255' }),
    },
    placeholder: {
        type: String,
        default: 'Enter a value',
    },
});

const emit = defineEmits<{
    valueNumber: [number]
}>();

onMounted(() => {
    if (autonumericInput.value) {
        // Inisialisasi AutoNumeric pada input
        const autoNumericInstance = new AutoNumeric(autonumericInput.value, props.options);
        // Set nilai awal dari prop value
        autoNumericInstance.set(props.value);
    }
});

const emitValue = () => {
    if (autonumericInput.value) {
        const value = autonumericInput.value.value;
        emit('valueNumber', Number(value));
    }
};
</script>
