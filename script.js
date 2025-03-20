document.addEventListener('DOMContentLoaded', function () {
    const costSlider = document.getElementById('cost-slider');
    const timeSlider = document.getElementById('time-slider');
    const qualitySlider = document.getElementById('quality-slider');
    const triangle = document.querySelector('.triangle');

    const updateTriangleColor = () => {
        const costValue = parseInt(costSlider.value);
        const timeValue = parseInt(timeSlider.value);
        const qualityValue = parseInt(qualitySlider.value);

        // Logik zur Bestimmung der Farbe basierend auf den Werten
        if (costValue === 100 && timeValue === 100 && qualityValue === 100) {
            triangle.style.borderBottomColor = 'green';         // Grün für maximale Werte
        } else if (costValue > 66 && timeValue > 66 && qualityValue > 66) {
            triangle.style.borderBottomColor = 'lightgreen';    // Hellgrün für hohe Werte
        } else if (costValue > 33 && timeValue > 33 && qualityValue > 33) {
            triangle.style.borderBottomColor = 'yellow';        // Gelb für mittlere Werte
        } else {
            triangle.style.borderBottomColor = 'red';           // Rot für niedrige Werte
        }
    };

    // Initialaufruf, um die Farbe beim Laden korrekt zu setzen
    updateTriangleColor();

    costSlider.addEventListener('input', updateTriangleColor);
    timeSlider.addEventListener('input', updateTriangleColor);
    qualitySlider.addEventListener('input', updateTriangleColor);
});
