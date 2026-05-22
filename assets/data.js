const TELEGRAM_CONFIG = {
    TOKEN: "8900475100:AAE3Ogq4Mss719xv9jBfpk4I07zxJUuV4SI", // Ganti dengan Token Bot Anda dari @BotFather
    CHAT_ID: "6224388727"                                   // Ganti dengan Chat ID Akun/Grup Anda
};

/**
 * Fungsi helper untuk mengirim pesan ke Telegram
 * @param {string} message - Teks pesan yang akan dikirim (mendukung Markdown)
 * @returns {Promise<Response>}
 */
async function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.TOKEN}/sendMessage`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CONFIG.CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Telegram API Error:", errorData);
        }
        
        return response;
    } catch (error) {
        console.error("Gagal mengirim data ke Telegram:", error);
        throw error;
    }
}
