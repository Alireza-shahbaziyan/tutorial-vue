<script >
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>

<template>
  <div class="event-card">
    <p>{{ event.id }}</p>
    <p>{{ event.type }}</p>
  </div>
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
