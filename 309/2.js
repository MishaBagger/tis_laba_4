function func(employee) {
	let [name,surname,...info] = employee
	console.log(info)
}

func( ['John', 'Smit', 'development', 
	'programmer', 2000] ); 