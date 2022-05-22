<template>
  <div class="events">
    <img alt="Vue logo" src="../assets/logo.png" />
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    axios
      .get(
        "https://my-json-server.typicode.com/digital-sector/myTestServer/events"
      )
      .then((response) => {
        this.events = response.data;
      });
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
