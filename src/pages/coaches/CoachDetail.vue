<template>
  <div v-if="selectedCouch">
    <section>
      <base-card>
        <h2>{{ selectedCouch.firstName }}</h2>
        <h3>{{ selectedCouch.hourlyRate }}/hour</h3>
      </base-card>
    </section>

    <section>
      <base-card>
        
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink"></base-button>
        
        <router-view></router-view>
      </base-card>
    </section>

    <section>
      <base-card>
        <base-badge
          v-for="area in selectedCouch.areas"
          :key="area"
          :title="area"
        ></base-badge>
        <p>{{ selectedCouch.description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCouch: null,
    };
  },

  computed: {
    contactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
  },

  created() {
    this.selectedCouch = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
