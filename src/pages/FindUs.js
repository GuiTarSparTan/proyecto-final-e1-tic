import React from 'react';

const FindUs = () => {
    return (
        <div>
            <h1>We are located in Avenida Escazú</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.000647860468!2d-84.145717524262!3d9.93390317416713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fddbcf52fccd%3A0xb731ae425252c4b8!2sAvenida%20Escaz%C3%BA%20402!5e0!3m2!1sen!2scr!4v1691448477969!5m2!1sen!2scr"
                width="700"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <h2>We are open for scheduled visits for job applications</h2>
            <h2>Contact us to schedule your visit!</h2>
            <h3>phone: 2299-0707 or 2299-0808</h3>
        </div>
    );
};

export default FindUs;