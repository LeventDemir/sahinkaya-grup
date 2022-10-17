<template>
    <div class="level-item has-text-centered">
        <div class="card has-background-white-ter">

            <div class="card-content">
                <p>
                    <span class="icon is-size-4 has-text-info">
                        <i :class="icon"></i>
                    </span>
                </p>

                <p class="is-size-5 has-text-grey">{{ title }}</p>
            </div>
        </div>
    </div>
</template>
  
  
<script>
export default {
    props: {
        title: String,
        icon: String,
    },
};
</script>