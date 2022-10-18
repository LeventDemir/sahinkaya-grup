<template>
    <div class="column">
        <form @submit.prevent="$store.dispatch('reference/create', reference)">
            <input @change="handleFileUpload" ref="photoInput" class="hide-file-input" type="file" accept="image/*"
                :required="reference.photo ? false : true" />

            <div class="field">
                <div class="control">
                    <button type="button" @click="$refs.photoInput.click()"
                        class="button is-fullwidth is-success is-rounded is-outlined">Fotoğraf Yükle</button>
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <textarea v-model="reference.description" class="textarea" placeholder="10 lines of textarea"
                        rows="10"></textarea>
                </div>
            </div>

            <div class="field mb-6">
                <div class="control">
                    <div class="select is-rounded is-fullwidth">
                        <select v-model="reference.status">
                            <option :value="false">Standart</option>
                            <option :value="true">Anasayfa</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="has-text-centered">
                <button class="button is-info is-rounded is-outlined" type="submit">Yükle</button>
            </div>
        </form>
    </div>
</template>
    
    
<script>
export default {
    middleware: "auth",
    data() {
        return {
            reference: {
                photo: null,
                description: null,
                status: false
            },
        };
    },
    methods: {
        handleFileUpload(e) {
            const files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            const reader = new FileReader();
            if (files[0].size / (1024 * 1024) < 6) {
                const vm = this;
                reader.onload = (e) => (vm.reference.photo = e.target.result);
                reader.readAsDataURL(files[0]);
                this.reference.photo = "";
            } else this.$toast.global.error("Yükleyeceğiniz fotoğraf 6 mb dan küçük olmalıdır!");
        }
    }
};
</script>