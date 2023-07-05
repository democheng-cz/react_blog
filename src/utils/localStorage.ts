class DcStorage {
	setItem(key: string, val: any) {
		console.log(val);
		console.log(JSON.stringify({ value: val }));
		window.localStorage.setItem(key, JSON.stringify({ value: val }));
	}

	getItem(key: string) {
		const val = window.localStorage.getItem(key);
		if (val) {
			return JSON.parse(val).value;
		} else {
			return undefined;
		}
	}

	removeItem(key: string) {
		window.localStorage.removeItem(key);
	}

	clearItem() {
		window.localStorage.clear();
	}
}

const dcStorage = new DcStorage();
export { dcStorage };
