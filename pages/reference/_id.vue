<template>
    <div class="column is-8 is-offset-2 has-text-centered">
        <figure class="image is-2by1 mb-6">
            <img :src="reference.photo" />
        </figure>

        <hr />

        <p>
            <client-only>

                <textarea ref="description" class="textarea has-fixed-size is-read" readonly
                    v-model="reference.description" />
            </client-only>
        </p>

        <hr />

        <p class="mt-6 mb-4 pt-3">
            <a href="tel:+905336850064">
                <span class="has-text-grey-dark">arayın:</span>
                <span class="has-text-info pr-2 pl-3"><i class="fa fa-phone"></i></span>
                <span class="has-text-info">0 533 685 00 64</span>
            </a>
        </p>

        <p>
            <a href="https://wa.me/+905336850064" title="Share on whatsapp" target="_blank">
                <span class="has-text-grey-dark">WhatsApp'tan mesaj atın:</span>
                <span class="has-text-info pr-2 pl-3"><i class="fa-brands fa-whatsapp"></i></span>
                <span class="has-text-info">0 533 685 00 64</span>
            </a>
        </p>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            reference: {
                photo: null,
                description: null
            }
        }
    },
    async mounted() {
        await this.$store.getters['reference/getReferences'].map(reference => {
            if (reference._id == this.$route.params.id) {
                this.reference = reference
            }
        })

        const textarea = document.getElementsByTagName("textarea")[0];
        const height = textarea.scrollHeight;

        textarea.style.cssText = "height:" + height + "px";
    }
};
</script>