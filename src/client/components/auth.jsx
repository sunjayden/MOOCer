import {
	getFromStorage,
	setInStorage,
	deleteFromStorage
} from "./storage";

export const VerifyToken = () => {
	const token = getFromStorage("moocer");
	if (!token) {
		return false;
	}
	return true;
}