<template>
  <q-card class="cardItem">
    <q-item>
      <q-item-section avatar style="padding-right: 30px;">
        <q-avatar
							size="70px"
							class="shadow-3"
							style="
								background: rgb(215 215 215);
							"
						>
							<img
								src="~assets/Profile.svg"
								style="width: 30px; "
							/>
						</q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="name">{{ client.name }}</q-item-label>
        <q-item-label caption class="center">
          <img
								src="~assets/local.svg"
								style="width: 15px; "
							/>
          {{ client.distance }}
        </q-item-label>
        <q-item-label caption class="center">
          <img
								src="~assets/R$.svg"
								style="width: 15px; filter: brightness(0) saturate(100%) invert(50%) sepia(4%) saturate(39%) hue-rotate(344deg) brightness(102%) contrast(85%);"
							/>
          {{ client.final_price }}
        </q-item-label>

      </q-item-section>


    </q-item>

  </q-card>
</template>

<style scoped>
.cardItem {
  width: 90% !important;
  height: 110px !important;
  padding: 10px;
}
.name {
  font-weight: bold;
}
.center {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.center img {
  margin-top: 3px;
  margin-right: 8px;
}
</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardItem",

  props: ['client']
})
</script>

<style scoped>

</style>
