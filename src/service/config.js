import axios from 'axios';

export const httpConnet = axios.create({
	baseURL: 'https://connet-app.herokuapp.com/connet-app/api/connet/v1/installer'
})

export const httpChallenge = axios.create({
	baseURL: 'https://app-challenge-api.herokuapp.com'
})
