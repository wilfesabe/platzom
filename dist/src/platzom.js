'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	var minMay = function minMay(str) {
		return str.split('').map(function (l) {
			return str.indexOf(l) % 2 == 0 ? l.toUpperCase() : l.toLowerCase();
		}).join('');
	};

	if (str == reverse(str)) {
		return minMay(str);
	}

	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}
	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(translation.length / 2));
		var secondHalf = translation.slice(Math.round(translation.length / 2));

		translation = firstHalf + '-' + secondHalf;
	}
	return translation;
}