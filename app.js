// Función para actualizar el display
const updateDisplay = value => document.getElementById('display').value = value;

// Función para limpiar el display
const clearDisplay = () => updateDisplay('');

// Función para agregar al display
const appendToDisplay = value => updateDisplay(document.getElementById('display').value + value);

// Función para calcular el resultado
const calculateResult = () => {
    try {
        const result = eval(document.getElementById('display').value);
        updateDisplay(result);
    } catch (error) {
        updateDisplay('Error');
    }
};