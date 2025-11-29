class OneRepMaxCalculator{
    constructor(weight, reps) {
    this.weight = parseFloat(weight);
    this.reps = parseFloat(reps);
    }
   
validate() {
    if (isNaN(this.weight) || isNaN(this.reps)) {
        throw new Error("Proszę wpisać liczby w obu polach.");
    }
    if (this.weight <= 0 || this.reps <= 0) {
        throw new Error("Waga i powtórzenia muszą być większe od zera.");
    }
    if (this.reps > 30) {
        throw new Error("Kalkulator jest nieprecyzyjny powyżej 30 powtórzeń.");
    }
    return true;
    }
            
calculate() {
    if (this.reps === 1) return this.weight;
    let result = this.weight * (1 + this.reps / 30);
    return Math.round(result);
    }
}


document.addEventListener('DOMContentLoaded', () => {

            const btn = document.getElementById('oblicz');
            const errorBox = document.getElementById('error-box');
            const wynik = document.getElementById('wynik');
            const resultValue = document.getElementById('wynik-value');

            btn.addEventListener('click', () => {
                const weightInput = document.getElementById('weight').value;
                const repsInput = document.getElementById('reps').value;

                errorBox.style.display = 'none';
                wynik.style.display = 'none';

                try {
                    const calculator = new OneRepMaxCalculator(weightInput, repsInput);
                    
                    calculator.validate();

                    const max = calculator.calculate();

                    resultValue.textContent = `${max} kg`;
                    wynik.style.display = 'block';

                } 

                catch (error) {
                    errorBox.textContent = error.message;
                    errorBox.style.display = 'block';
                }
            });
        });