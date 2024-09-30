<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="d-flex justify-content-center">
                <div class="col-md-6">
                    <div class="copyright text-center">
                        &copy; {{ year }} - Muhammad Henry Aditya & Maulana Ansari, supported by Creative Tim & Binar
                        Code.
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: 'app-footer',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
};
</script>
<style></style>
