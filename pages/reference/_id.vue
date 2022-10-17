<template>
    <div class="column is-8 is-offset-2 has-text-centered">
        <figure class="image is-2by1 mb-6">
            <img :src="reference.photo" />
        </figure>

        <hr />

        <p>
            <textarea ref="description" class="textarea has-fixed-size is-read" readonly
                v-model="reference.description" />
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
                photo: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1600",
                description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                              
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
            }
        }
    },
    mounted() {
        const textarea = document.getElementsByTagName("textarea")[0];
        const height = textarea.scrollHeight;
        textarea.style.cssText = "height:" + height + "px";
    }
};
</script>