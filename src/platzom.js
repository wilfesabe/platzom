export default function platzom(str){
	let translation = str;

	const reverse = (str) => str.split('').reverse().join('');

	const minMay = (str) => str.split('').map( (l) => str.indexOf(l) % 2 == 0 ? l.toUpperCase() : l.toLowerCase() ).join('');

	if (str == reverse(str)){
		return minMay(str);
	}

	if (str.toLowerCase().endsWith('ar') ){
		translation = str.slice(0, -2);
	}
	if (str.toLowerCase().startsWith('z')){
		translation += 'pe' ;
	}
	const length = translation.length
	if (length >= 10){
		const firstHalf = translation.slice(0, Math.round(translation.length / 2));
		const secondHalf = translation.slice(Math.round(translation.length / 2) );

		translation = `${firstHalf}-${secondHalf}`;
	}
	return translation;
}