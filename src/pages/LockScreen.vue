<template>
	<q-layout class="bg-image" v-cloak>
		<q-page-container>
			<q-page class="flex flex-center">
				<q-card class="bg-transparent no-border no-shadow">
					<h1
						class="title"
						style="
							color: #fff;
							font-size: 2.3rem;
							text-align: center;
						"
					>
						Login
					</h1>
					<q-card-section class="text-center">
						<q-avatar
							size="130px"
							class="shadow-10"
							style="
								background: #fff;
								margin-top: 30px;
								margin-bottom: 10px;
							"
						>
							<img
								src="~assets/Profile.svg"
								style="width: 45px"
							/>
						</q-avatar>
					</q-card-section>
					<q-card-section class="text-center">
						<q-input
							dark
							v-model="id"
							color="white"
							placeholder="Entre com o Id"
						/>
						<q-input
							dark
							v-model="password"
							color="white"
							:type="isPwd ? 'password' : 'text'"
							placeholder="Entre com a senha"
							:rules="[(val) => !!val || 'Field is required']"
						>
							<template v-slot:append>
								<q-icon
									:name="
										isPwd ? 'visibility_off' : 'visibility'
									"
									class="cursor-pointer"
									@click="isPwd = !isPwd"
								/>
							</template>
						</q-input>
						<q-btn
							@click="login()"
							round
							flat
							color="blue-3"
							class="q-mt-lg bg-white"
							icon="arrow_right_alt"
						></q-btn>
					</q-card-section>

					<span
						@click="$router.push('/Register')"
						style="
							color: #fff;
							display: inline-block;
							width: 100%;
							text-align: center;
						"
						>Cadastrar conta?</span
					>
				</q-card>
			</q-page>
		</q-page-container>
	</q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import Installer from '../service/installers'
import axios from 'axios';

export default defineComponent({
	name: "LockScreen",

	setup() {
		return {
			id: ref(""),
			password: ref(""),
			isPwd: ref("password"),
			isEmail: ref("email"),
		};
	},
	watch: {
		email: function (mail) {
			if (mail !== "") {
				this.emailRules = [
					(v) =>
						v.match(
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
						) || "Invalid Email address",
				];
			} else if (mail === "") {
				this.emailRules = [];
			}
		},
	},
  methods: {
    login() {
      fetch("https://connet-app.herokuapp.com/connet-app/api/connet/v1/installer/installers/login/id="+this.id + "/password="+this.password,
      { method: "POST",
        headers:  { "Content-Type": "application/json" }
      })
      .then(response => response.json())
      .then(data => {
        window.console.log(data)
      }).catch(error => {
        window.console.log(error);
        alert("Erro de servidor ao carregar as informações por favor tente novamente")
        //location.reload()
      })

    },
    teste() {
       const article = { id: this.id, password: this.password };
        axios.post("https://connet-app.herokuapp.com/connet-app/api/connet/v1/installer/installers/login", article)
        .then(response => console.log(response));;
    },
  },
});
</script>

<style>
.bg-image {
	background-image: linear-gradient(135deg, #42a5f5 0%, #d1f8fd 100%);
}

[v-cloak] {
	display: none !important;
}
</style>
