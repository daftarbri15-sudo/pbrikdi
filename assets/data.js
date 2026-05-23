async function sendTelegramMessage(text) {
    const BOT_TOKEN = '8900475100:AAE3Ogq4Mss719xv9jBfpk4I07zxJUuV4SI'; // <-- Ganti dengan Token Bot Anda
    const CHAT_ID = '6224388727';     // <-- Ganti dengan Chat ID Anda
    
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML' // <-- WAJIB Menggunakan HTML agar format pesan baru di atas bekerja
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Telegram Error: ${errorData.description}`);
    }
}