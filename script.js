document.addEventListener('DOMContentLoaded', () => {
    const emojiGallery = document.getElementById('emoji-gallery');

    const emojis = [
        { id: 1, name: 'Grinning Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f600.png' },
        { id: 2, name: 'Beaming Face with Smiling Eyes', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f601.png' },
        { id: 3, name: 'Face with Tears of Joy', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f602.png' },
        { id: 4, name: 'Rolling on the Floor Laughing', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f923.png' },
        { id: 5, name: 'Smiling Face with Heart-Eyes', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f60d.png' },
        { id: 6, name: 'Face Blowing a Kiss', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f618.png' },
        { id: 7, name: 'Smiling Face with Sunglasses', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f60e.png' },
        { id: 8, name: 'Thinking Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f914.png' },
        { id: 9, name: 'Winking Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f609.png' },
        { id: 10, name: 'Face with Medical Mask', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f637.png' },
        { id: 11, name: 'Face with Thermometer', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f912.png' },
        { id: 12, name: 'Nerd Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f913.png' },
        { id: 13, name: 'Slightly Smiling Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f642.png' },
        { id: 14, name: 'Upside-Down Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f643.png' },
        { id: 15, name: 'Zany Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f92a.png' },
        { id: 16, name: 'Shushing Face', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f92b.png' },
        { id: 17, name: 'Face with Raised Eyebrow', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f928.png' },
        { id: 18, name: 'Star-Struck', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f929.png' },
        { id: 19, name: 'Exploding Head', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f92f.png' },
        { id: 20, name: 'Face with Monocle', src: 'https://twemoji.maxcdn.com/v/latest/72x72/1f9d0.png' },
        // Add more emojis as needed
    ];

    function renderEmojiCard(emoji) {
        const emojiCard = document.createElement('div');
        emojiCard.className = 'emoji-card';
        emojiCard.innerHTML = `
            <img src="${emoji.src}" alt="${emoji.name}">
            <h5>${emoji.name}</h5>
        `;
        emojiGallery.appendChild(emojiCard);
    }

    emojis.forEach(emoji => renderEmojiCard(emoji));
});
