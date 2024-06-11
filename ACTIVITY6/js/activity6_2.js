function calculate() 
{
    const r = document.getElementById('radiusInput');
    const aOut = document.getElementById('areaOutput');
    const cOut = document.getElementById('circumferenceOutput');

    aOut.value = '';
    cOut.value = '';

    const radius = parseFloat(r.value);

    if (isNaN(radius) || radius < 0) {
        alert('Please enter a valid positive number for the radius.');
        return;
    }

    const area = Math.PI * radius * radius;
    const circumference = 2 * Math.PI * radius;

    aOut.value = area.toFixed(2);
    cOut.value = circumference.toFixed(2);
}