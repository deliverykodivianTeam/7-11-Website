import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import botIcon from '../assets/bot_4712015.png'; // Your bot icon
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isChatStarted, setIsChatStarted] = useState(false);
    const messagesEndRef = useRef(null);

    // State for movable icon
    const [iconPosition, setIconPosition] = useState({ x: window.innerWidth - 90, y: window.innerHeight - 170 });
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });

    const navigate = useNavigate(); // Initialize navigate

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Handle mouse down for dragging
    const handleMouseDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
        dragOffset.current = {
            x: e.clientX - iconPosition.x,
            y: e.clientY - iconPosition.y,
        };
    };

    // Handle mouse move for dragging
    const handleMouseMove = (e) => {
        if (!isDragging) return;
        let newX = e.clientX - dragOffset.current.x;
        let newY = e.clientY - dragOffset.current.y;

        // Keep icon within viewport bounds
        newX = Math.max(0, Math.min(newX, window.innerWidth - 50)); // Assuming bot icon is 50px wide
        newY = Math.max(0, Math.min(newY, window.innerHeight - 50)); // Assuming bot icon is 50px high

        setIconPosition({ x: newX, y: newY });
    };

    // Handle mouse up to stop dragging
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, iconPosition]);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setIsChatStarted(false); // Reset chat state when closing
            setMessages([]);
        }
    };

    const startChat = async () => {
        console.log("Attempting to start chat...");
        setIsChatStarted(true); // Transition to chat view

        try {
            console.log("Fetching initial message from backend...");
            const response = await fetch('https://seven-11-website-chatbot.onrender.com/initial_message');
            console.log("Response status:", response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Server Error Response:", errorText);
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const data = await response.json();
            console.log("Received data from backend:", data);

            const initialBotMessage = { sender: 'bot', text: data.message };
            setMessages([initialBotMessage]);
            console.log("Messages state updated with initial bot message.");

        } catch (error) {
            console.error("Caught error:", err.message);
            console.error('Error fetching initial message:', error);
            const errorMessage = { sender: 'bot', text: 'Sorry, I could not load the initial greeting. Please check console for errors.' };
            setMessages([errorMessage]);
        }
    };

    const handleSendMessage = async () => {
        if (input.trim() === '') return;

        const newUserMessage = { sender: 'user', text: input };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);
        setInput('');

        try {
            const response = await fetch('https://seven-11-website-chatbot.onrender.com/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: newUserMessage.text }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessageText = errorData.response || `HTTP error! status: ${response.status}`;
                throw new Error(errorMessageText);
            }

            const data = await response.json();
            const botResponse = { sender: 'bot', text: data.response };
            setMessages((prevMessages) => [...prevMessages, botResponse]);
        } catch (error) {
            console.error('Error sending message to bot:', error);
            const errorMessage = { sender: 'bot', text: error.message || 'Sorry, I am having trouble connecting. Please try again later.' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    const goBackToInitialChatbotView = () => {
        setIsChatStarted(false);
        setMessages([]);
    };

    // New function for Join the Academy
    const handleJoinAcademy = () => {
        setIsOpen(false); // Optionally close the chatbot
        navigate('/register'); // Redirect to /register
    };

    return (
        <>
            {/* Floating bot icon to open the chatbot */}
            <button
                className="chatbot-toggle-button"
                onClick={toggleChatbot}
                onMouseDown={handleMouseDown}
                style={{ left: iconPosition.x, top: iconPosition.y }}
            >
                <img src={botIcon} alt="Chatbot Icon" className="bot-icon" />
            </button>

            {isOpen && (
                <div className="chatbot-container">
                    <div className="chatbot-header">
                        {isChatStarted && (
                            <button className="chatbot-back-button" onClick={goBackToInitialChatbotView}>
                                &#x2190;
                            </button>
                        )}
                        <span className="header-title">Seven Eleven Bot</span>
                        <button className="chatbot-minimize-button" onClick={toggleChatbot}>
                            &#x2212;
                        </button>
                    </div>

                    {!isChatStarted ? (
                        <div className="chatbot-initial-view">
                            <div className="initial-greeting">
                                <h1>How can we help you today?</h1>
                                <span role="img" aria-label="waving hand">👋</span>
                            </div>
                            <div className="initial-options">
                                <button className="option-button primary-button" onClick={startChat}>Chat with us</button>
                                {/* Modified Join the Academy button */}
                                <button className="option-button secondary-button" onClick={handleJoinAcademy}>Join the Academy</button>
                                <button className="option-button secondary-button">Visit Help Center</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="chatbot-messages">
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.sender}`}>
                                        {msg.text.split('\n').map((line, i) => (
                                            <p key={i} style={{ margin: 0 }}>{line}</p>
                                        ))}
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                            <div className="chatbot-input-area">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                />
                                <button onClick={handleSendMessage}>Send</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Chatbot;