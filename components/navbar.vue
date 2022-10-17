<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <nuxt-link :to="{ name: 'index' }" tag="img" src="/logo.png" class="navbar-item logo is-clickable">
                    Şahinkaya Grup
                </nuxt-link>

                <span class="navbar-burger has-text-black-bis" ref="burgerButton" data-target="navbarMenuHeroA">
                    <span style="border: 1px black solid"></span>
                    <span style="border: 1px black solid"></span>
                    <span style="border: 1px  black solid"></span>
                </span>
            </div>

            <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                    <nuxt-link @click.native="close" :to="{ name: 'index' }"
                        class="navbar-item is-clickable is-active has-text-info" tag="a">Ana Sayfa</nuxt-link>

                    <nuxt-link @click.native="close" :to="{ name: 'about-us' }"
                        class="navbar-item is-clickable has-text-info" tag="a">Hakkımızda
                    </nuxt-link>

                    <a v-if="this.$route.name == 'index'" href="#references"
                        class="navbar-item is-clickable is-active has-text-info">Referanslarımız</a>

                    <nuxt-link v-else @click.native="close" :to="{ name: 'references', params: { page: 'references' } }"
                        class="navbar-item is-clickable is-active has-text-info" tag="a">
                        Referanslarımız
                    </nuxt-link>

                    <a href="#contacts" class="navbar-item is-clickable has-text-info">İletişim</a>

                    <!-- <nuxt-link v-if="$store.getters['admin/getAuth']" @click.native="close" :to="{ name: 'dashboard' }" -->
                        <!-- tag="a" class="navbar-item is-clickable is-active has-text-info">Yönetim paneli</nuxt-link> -->

                    <!-- <a v-if="$store.getters['admin/getAuth']" @click="$store.dispatch('admin/signOut'), close()" -->
                        <!-- class="navbar-item is-clickable is-active has-text-info">Çıkış</a> -->
                </div>
            </div>
        </div>
    </nav>
</template>
  
  
<script>
export default {
    mounted() {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-burger"),
            0
        );
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach((el) => {
                el.addEventListener("click", () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active");
                    $target.classList.toggle("is-active");
                });
            });
        }
    },
    methods: {
        close() {
            const navbarMenu = document.getElementById("navbarMenuHeroA");
            const burgerButton = this.$refs.burgerButton;

            if (navbarMenu) navbarMenu.classList.toggle("is-active");
            if (burgerButton) burgerButton.classList.toggle("is-active");
        },
    },
};
</script>