import React, { useState } from 'react';

const About = () => {
    const [question, setQuestion] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleQuestionSubmit = () => {
        console.log('Pregunta enviada:', question);
        setQuestion("");
        alert("Your Message has been sent!")
    };

    return (
        <div className="about-container">
            <div className="about-content">
                <h1>TechDev is a Software Development Company Based in Costa Rica </h1>
                <p>We are actively recruiting new developers!</p>
                <p>Don't hesitate to contact us:</p>
                <p>Email: <a href="mailto:techdev.recruiting@gmail.com">techdev.recruiting@gmail.com</a></p>
                <p>Phone: 2299-0707 or 2299-0808</p>
            </div>
            <div className="question-box">
                <h2>¿Have a Question or Comment?</h2>
                <textarea
                    value={question}
                    onChange={handleQuestionChange}
                    placeholder="Enter your question or comment here..."
                />
                <button className='button' onClick={handleQuestionSubmit}>Send</button>
            </div>
        </div>
    );
};

export default About;
