<template >
  <div><h1>Hello , is Working </h1></div>
  <div>
    <h1>{{ event.name }}</h1>
    <h5>email:{{ event.username }}</h5>
    <!-- <h5>City:{{event.city}}</h5> -->
  </div>
</template>
<script>
import EventService from "@/EventService/EventService.js";

export default {
  name: "EventDetails",
  props:['id'],
  data() {
    return {
      event: null,
    };
  },
  created() {
    //fatch event (by id) and set local data
    EventService.getEvent(this.id)
      .then((res) => (this.event = res.data))
      .catch((erorr) => console.log("Error: ", erorr));
  },
};
</script>
