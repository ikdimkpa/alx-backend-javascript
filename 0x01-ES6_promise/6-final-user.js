import signUpUser from './4-user-promise.js'
import uploadPhoto from './5-photo-reject.js'

export default function handleProfileSignup(firstName, lastName, fileName) {
	const createPromise = signUpUser(firstName, lastName);
	const uploadPromise = uploadPhoto(fileName);
	return Promise.allSettled([createPromise, uploadPromise]).then(result => {
		return result.map(result => ({
			status: status_of_the_promise,
			value: result.status === 'fulfilled' ? result.value : result.error,
		}));
	});
}
