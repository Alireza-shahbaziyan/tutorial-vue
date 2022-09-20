<script >
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    <div class="event-card">
      <p>{{ event.name }}</p>
      <p>{{ event.username }}</p>
      <p>{{ event.email }}</p>
    </div>
  </router-link>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #24252a;
  margin: 20px;
  border-radius: 6px;
  text-align: center;
}
.event-card:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
</style>
