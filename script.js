(() => {
    const button = document.querySelector('#trigger');
    const output = document.querySelector('#output');

    async function fetchData() {
        const response = await fetch('/api/data');
        const data = await response.json();
        return data;
    }

    button.addEventListener('click', async function(event) {
        event.preventDefault();
        const data = await fetchData();
        output.innerHTML = JSON.stringify(data, null, 4);
    });
})();

