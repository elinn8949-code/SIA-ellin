function tampilkanWaktu() {
  const waktu = new Date();
  document.getElementById("waktu").innerHTML =
    waktu.toLocaleString();
}
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = now.toLocaleDateString('id-ID', options);
    const time = now.toLocaleTimeString('id-ID');

    document.getElementById("datetime").innerHTML = `${date} | ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();