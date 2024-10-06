<template>
    <div class="input-group d-flex flex-row">
        <div class="input-group-prepend border-right bg-bodys">
            <span class="input-group-text text-body" id="basic-addon1">{{ text }}</span>
        </div>
        <input ref="autonumericInput" class="form-control border-left pl-3 text-body" :placeholder="placeholder"
            @keydown.enter="emitValue" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, type Ref } from 'vue';
import AutoNumeric from 'autonumeric/dist/autoNumeric.min';

const autonumericInput = ref<HTMLInputElement | null>(null);
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
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
