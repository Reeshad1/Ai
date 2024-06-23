// script.js

// Get DOM elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Predefined responses to simulate AI personality
const responses = [
    "I'm here to help you!",
    "Why do you think that?",
    "That's interesting, tell me more!",
    "I'm not sure about that, but let's find out!",
    "How do you feel about it?",
    "Can you explain that in another way?",
    "Wow, that sounds amazing!",
    "I'm listening.",
    "Let's talk more about this.",
    "Hmm, that's something to think about.",
    "I understand.",
    "How can I assist you further?"
];

// Simulated bot emotions and expressions
const emotions = [
    "😊", "😃", "😔", "🤔", "😁", "😅", "😕", "😌", "😇"
];

// Function to add a message to the chat
function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to handle the user's message
function handleUserMessage() {
    const text = userInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        userInput.value = '';
        getBotResponse(text);
    }
}

// Function to generate a bot response
function getBotResponse(userText) {
    setTimeout(() => {
        // Simple emotional response simulation
        const responseIndex = Math.floor(Math.random() * responses.length);
        const emotionIndex = Math.floor(Math.random() * emotions.length);
        const botResponse = `${responses[responseIndex]} ${emotions[emotionIndex]}`;
        
        addMessage(botResponse, 'bot');
    }, 1000); // Simulate response delay
}

// Event listeners
sendButton.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleUserMessage();
    }
});
