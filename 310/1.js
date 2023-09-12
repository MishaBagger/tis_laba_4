function func(options) {
	let {color,width,height} = options
	console.log(color,width,height)
}

func( {color: 'red', width: 400, height: 500} );