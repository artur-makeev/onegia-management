// converts date string from YYYY-MM-DD to DD-MM-YYYY

export const dateConvert = (date: string): string => {
	const regex = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9].*/gm;

	if (!date.match(regex)) {
		return 'date error';
	}

	return date.slice(0, 10).split('-').reverse().join('-').replaceAll('-', '.');
};
