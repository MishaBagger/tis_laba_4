let arr = ['2005','11','24']
function nowDay() {
	return (new Date).getDate();
}
let [year = nowDay(), month, day = nowDay()] = arr;