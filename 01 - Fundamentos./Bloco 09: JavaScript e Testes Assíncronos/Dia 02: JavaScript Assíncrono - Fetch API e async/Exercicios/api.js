const coinList = () => {

  let coins = fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data) => {
      for (let index = 0; index < 10; index++) {
        const li = document.createElement('li');
        li.innerHTML = `${data.data[index].name} (${data.data[index].symbol}): ${Math.round(data.data[index].priceUsd)} USD`;
        document.getElementById('coinList').appendChild(li);
      }
    });

  return coins;
}

coinList();
