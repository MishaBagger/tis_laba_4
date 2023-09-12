function func(options) {
	let {width,height,color = 'black'} = options
	console.log(width,height,color)
}

func( {color: 'red', width: 400, height: 500} );