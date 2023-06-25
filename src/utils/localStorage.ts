class DcStorage {
	setItem(key: string, val: any) {
		if (typeof val === 'object') {
			val = JSON.stringify(val);
		}
		window.localStorage.setItem(key, val);
	}

	getItem(key: string) {
		return JSON.parse(window.localStorage.getItem(key)!);
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
