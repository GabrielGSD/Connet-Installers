<template>
  <q-layout view="lHh Lpr lFf">
    <q-tabs
      v-model="tab"
      narrow-indicator
      dense
      align="justify"
      class="absolute-bottom menuBar"
    >
      <q-route-tab name="order" to="/">
        <img alt="Icone Order" src="~assets/Order.svg" />
        <span>Pedidos</span>
      </q-route-tab>
      <q-route-tab name="history" to="/hist" active-color="blue-grey-1">
        <img alt="Icone History" src="~assets/hist.svg" />
        <span>Pendentes</span>
      </q-route-tab>
      <q-route-tab name="profile" to="/profile">
        <img alt="Icone Profile" src="~assets/Profile.svg" />
        <span>Perfil</span>
      </q-route-tab>
    </q-tabs>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.menuBar {
  z-index: 2;
  background: #fff;
  padding: 0.5rem;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.13);
  border-radius: 32px 32px 0px 0px;
}
.menuBar * {
  color: #98999a;
  font-size: 0.7rem;
  text-transform: capitalize;
}
img {
  width: auto;
  height: 25px;
  margin-bottom: 5px;
}
.q-tab--active * {
  font-weight: bold;
  filter: brightness(0) saturate(100%) invert(63%) sepia(73%) saturate(1926%)
    hue-rotate(173deg) brightness(96%) contrast(96%);
}
</style>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MenuBar",

  data() {
    return {
      tab: "plans",
    };
  },
  watch: {},
});
</script>
