<template>
  <div class="ShowData">
    <h1 ref="title">0</h1>
    <button @click="add()">Add</button>
  </div>
</template>

<script>
export default {
  name: "ShowData",
  methods: {
    add() {
      console.log(this.$refs.title);
        this.$refs.title += 1;
    },
  },
};
</script>