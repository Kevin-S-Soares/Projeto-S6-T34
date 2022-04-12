class Factorial{
	static #stored= {};

	static calculate(value){
		if(value in this.#stored){
			return this.#stored[value];
		}
		if(value <= 1){
			this.#stored[value] = 1;
			return 1;
		}
		let aux = value * this.calculate(value - 1);
		this.#stored[value] = aux;
		return aux;
	}
}

export default Factorial;