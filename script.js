(() => {
    const button = document.querySelector('#trigger');
    const output = document.querySelector('#output');

    async function fetchData() {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    }

    button.addEventListener('click', function(event) {
        event.preventDefault();
        output.innerHTML = 'Button was clicked!';
    });
})();

