let day = 1;

if (day > 1 && day < 10) {
	console.log('Первая декада месяца');
} else if (day > 10 && day < 20) {
	console.log('Вторая декада месяца');
} else if (day > 20 && day < 31) {
	console.log('Третья декада месяца');
} else {
	console.log('ошибка');
}