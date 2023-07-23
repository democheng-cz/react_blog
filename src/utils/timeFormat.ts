import dayjs from "dayjs"

export function timeFormat(time: string) {
	const date = dayjs(time).format("YYYY-MM-D H:mm")

	return date
}
