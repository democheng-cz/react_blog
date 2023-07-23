export interface BaseResponseType<T> {
	status: number;
	message: string;
	result: T;
}
