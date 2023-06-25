import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

import { dcStorage } from '@/utils';

class DcRequest {
	instance: AxiosInstance;
	constructor() {
		this.instance = axios.create({
			baseURL: '/api',
			timeout: 20000,
		});

		this.instance.interceptors.request.use(
			(config: any) => {
				const token = dcStorage.getItem('token');
				const type = config.params?.type;
				config.headers.authorization = token;
				if (type === 'cover' || type === 'avatar') {
					config.headers['Content-Type'] = 'multipart/form-data';
				}
				return config;
			},
			(err: any) => {
				return Promise.reject(err);
			}
		);

		this.instance.interceptors.response.use(
			(res: AxiosResponse) => {
				return res.data;
			},
			(err: any) => {
				return Promise.reject(err);
			}
		);
	}

	request<T>(config: AxiosRequestConfig): Promise<T> {
		return new Promise((resolve, reject) => {
			this.instance
				.request(config)
				.then((res: AxiosResponse) => {
					resolve(res as unknown as Promise<T>);
				})
				.catch((err: any) => {
					reject(err);
				});
		});
	}

	get<T>(config: AxiosRequestConfig) {
		return this.request<T>({ ...config, method: 'GET' });
	}

	post<T>(config: AxiosRequestConfig) {
		return this.request<T>({ ...config, method: 'POST' });
	}

	delete<T>(config: AxiosRequestConfig) {
		return this.instance<T>({ ...config, method: 'DELETE' });
	}

	patch<T>(config: AxiosRequestConfig) {
		return this.instance<T>({ ...config, method: 'PATCH' });
	}
}

const request = new DcRequest();
export default request;
