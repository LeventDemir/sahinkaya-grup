<template>
  <div class="column">
    <h1 class="is-size-1 has-text-centered has-text-grey">Hizmetlerimiz</h1>

    <hr class="mb-5">
    <nav class="columns is-centered is-multiline is-mobile">
      <Box class="column " title="İnşaat" icon="fa fa-person-digging" />
      <Box class="column " title="Tadilat" icon="fa fa-screwdriver-wrench" />
      <Box class="column " title="Hafriyat" icon="fa-solid fa-truck" />
      <Box class="column " title="Emlak" icon="fa fa-house" />
      <Box class="column " title="İletişim" icon="fa fa-headset" />
      <Box class="column " title="Ticaret" icon="fa fa-arrow-trend-up" />
    </nav>
    <hr class="mt-0">


    <div class="mt-6 pt-6" id="references">
      <div class="columns is-multiline is-centered mt-6 pt-6">
        <div v-for="reference in $store.getters['reference/getHomePageReferences']" :key=" reference._id"
          class="column is-half">
          <Card :data="reference" />
        </div>
      </div>

      <div class="has-text-centered mt-6 pt-6">
        <nuxt-link :to="{ name: 'references' }" class="button is-info is-outlined is-rounded" tag="button">
          Daha Fazla
        </nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  layout: "home"
}
</script>