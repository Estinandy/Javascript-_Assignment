async function fetchWithTimeout(url, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Request Timed Out"));
        }, ms);
    });

    const fetchRequest = fetch(url);

    return Promise.race([fetchRequest, timeout]);
}

// Example
fetchWithTimeout("https://api.com", 200)
    .then(response => console.log(response))
    .catch(error => console.log(error.message));