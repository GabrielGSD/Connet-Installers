<template>
  <q-page class="flex flex-center " style="align-content: flex-start;">
    <div class="boxTitle" style="position: absolute; top: 0; left: 0; right: 0">
      <h1 class="title" style="padding-left: 30px">Meus Pedidos</h1>
    </div>
    <div class="scroll" style="margin-top: 100px;">
      <card-item
        v-for="(c, index) in client"
        :key="index"
        :client="c"
        style="margin: 10px 0"
        @click="open('bottom'); clientSel=c"
      ></card-item>
    </div>

    <q-dialog v-model="dialog" :position="position" >
      <q-card style="width: 350px" class="dialogOrder">
        <q-linear-progress :value="1" color="blue-3" />

        <div class="dialogAvatar">
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
        </div>

        <h1 class="title" style="text-align: center; font-weight: bold; font-size: 1.5rem;">{{clientSel.name}}</h1>

        <q-card-section class="col" style="padding: 0 30px">
          <div class="row lineInfo">
            <p class="infoClient">
              <img
								src="~assets/local.svg"
								style="width: 18px; "
							/>
              {{clientSel.distance}}
            </p>
            <div class="infoClient">
              <img
								src="~assets/R$.svg"
								style="width: 18px; filter: brightness(0) saturate(100%) invert(50%) sepia(4%) saturate(39%) hue-rotate(344deg) brightness(102%) contrast(85%);"
							/>
              {{clientSel.final_price}}
            </div>
          </div>

          <div class="row lineInfo">
            <div class="infoClient">
              <img
              width="18"
								src="~assets/Date.svg"
							/>
              {{clientSel.data}}
            </div>
          </div>

          <q-space />

          <div class="row lineInfo" >
            <q-btn label="Atualizar Status" style="background: #3caef0; color: #fff; margin: 30px 0"/>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style scoped>
.scroll {
  max-height: 80vh;
  overflow: overlay;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.scroll .q-card {
  width: 230px;
  height: 315px;
}
.dialogOrder {
  border-radius: 1rem 1rem 0 0 !important;
  height: 45vh;
}
.dialogOrder .dialogAvatar {
  margin: 30px;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
}
.infoClient {
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #828282;
  margin: 0;
}
.infoClient img {
  margin-right: 5px;
}
.lineInfo {
  display: flex;
    align-items: center;
    justify-content: space-evenly;
        width: 70vw;
    margin: 0 auto;
  margin-bottom: 10px
}
</style>

<script>
import { defineAsyncComponent, defineComponent } from "vue";
import { ref } from 'vue'

export default defineComponent({
  name: "OrderScreen",
  components: {
    CardItem: defineAsyncComponent(() => import("components/CardItem")),
  },
  setup () {
    const dialog = ref(false)
    const position = ref('top')

    return {
      dialog,
      position,

      open (pos) {
        console.log(pos)
        position.value = pos
        dialog.value = true
      }
    }
  },
  data() {
    return {
      clientSel: {},
      client: [{ name: "Margarita Cronin", distance: "20km", final_price: "200,00",  data: "2022-05-29"}, { name: "ASdgfdh", distance: "20km", final_price: "200,00",  data: "2022-05-29"}, { name: "AGSdyuagsd", distance: "20km", final_price: "200,00",  data: "2022-05-29"}],
    };
  },

});
</script>
