<template >
<div class="Home">
  <EventCard class="event" v-for="event in events" :key="event.id" :event="event"/>  
</div>
</template>

<script>
  import EventCard from '@/components/EventCard.vue'
  export default{
    name:'Event',
    components:{
      EventCard
    },
    data(){
        return {
           events: [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
                { id: "5007", type: "Powdered Sugar" },
            ]
        }
    }
}
</script>
<style scoped>
.Home{
/* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>