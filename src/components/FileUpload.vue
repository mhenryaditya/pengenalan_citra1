<template>
    <!-- <FileUpload name="initPicture" ref="pond" label-idle="Drop files here..." :allow-multiple="false"
        accepted-file-types="image/jpeg, image/png, image/jpg" :files="myFiles" @init="handleFilePondInit" /> -->
    <FileUpload :name="name" ref="pond" :label-idle="label" :allow-multiple="multiple" :accepted-file-types="mimeType"
        :files="myFiles" @addfile="handleFilePondInit" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { FilePond } from 'filepond';
import VueFilePond from 'vue-filepond';

// Style
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

const FileUpload = VueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);

// Props
const props = withDefaults(defineProps<{
    name: string,
    label?: string,
    multiple?: boolean,
    mimeType?: string,
    initPct?: any
}>(), {
    label: 'Drag & Drop your files or <a>Browse</a>',
    multiple: false,
    mimeType: 'image/jpeg, image/png, image/jpg'
})

// Emit
const emit = defineEmits<{
    file: [value: File]
}>()

// Defining the reference type
const pond = ref<FilePond | null>(null);
const myFiles = ref<any[]>([]);

const handleFilePondInit = () => {
    if (pond.value) {
        const files = pond.value.getFiles();
        emit('file', files[0].file as File)
    }
};

// You may also want to ensure FilePond is initialized after the DOM is ready
onMounted(() => {
    if (props.initPct) {
        myFiles.value = [{
            source: props.initPct,
            options: {
                type: 'local'
            }
        }]
    }
});

</script>
<style scoped>
.filepond--credits {
    color: red;
}
</style>