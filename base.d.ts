export interface BaseResponseType<T> {
	code: number;
	message: string;
	result: T;
}
