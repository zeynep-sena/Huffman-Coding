function encode(input, yollar){
	var bit_string = "";
	
	for(i = 0; i < input.length; i++){
		bit_string += yollar[input.charAt(i)];
	}

	return bit_string;
}