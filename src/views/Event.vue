<template >
  <div class="Home">
    <EventCard
      class="event"
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
// Axios configuration is done in the EventService.js file 
import EventService from "@/EventService/EventService.js";

export default {
  name: "Event",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((res) => this.events = res.data)
      .catch((erorr) => console.log(erorr));
  },
};
</script>
<style scoped>
.Home {
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<!-- Alireza-shahbaziyan/tutorial-vue -->