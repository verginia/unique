function processArray() {
    const inputArrayElement = document.getElementById("inputArray");
    const inputArray = inputArrayElement.value.split(",").map(item => item.trim());

    const resultElement = document.getElementById("result");

    // Filter out unique values
    const uniqueValues = inputArray.filter((item, index, self) => self.indexOf(item) === index);

    // Count occurrences of each element
    const frequencyArray = {};
    inputArray.forEach(item => {
        frequencyArray[item] = (frequencyArray[item] || 0) + 1;
    });

    // Find the most frequent item
    let mostFrequentItem;
    let maxFrequency = 0;
    for (const key in frequencyArray) {
        if (frequencyArray[key] > maxFrequency) {
            mostFrequentItem = key;
            maxFrequency = frequencyArray[key];
        }
    }

    // Display result
    resultElement.innerHTML = `
        <p>Unique values: [${uniqueValues}]</p>
        <p>Most frequent item: ${mostFrequentItem} (Frequency: ${maxFrequency})</p>
    `;
}
function clearForm() {
    document.getElementById('inputArray').value = '';
    document.getElementById('result').innerText = '';
} 