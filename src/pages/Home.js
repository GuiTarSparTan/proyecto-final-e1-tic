import React from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const navigateToSharedFolder = () => {
        navigate('/SharedFolder');
    }

    return (
        <div className="background">
            <div className="box">
                <h1>Welcome to the Official TechDev Costa Rica Website</h1>
                <div className="text-box">
                    <p>In this website you can find information about our company.</p>
                    <p>
                        You can also collaborate through our Google Drive shared
                        folder, downloading and uploading files and documents
                        related to React and software development.
                    </p>
                    <p>
                        Feel free to navigate around our website and contact us if you have
                        any questions.
                    </p>
                </div>
                <p>Navigate to the shared folder section clicking the button below.</p>
                <button className="button" onClick={navigateToSharedFolder}>Shared Folder</button>
            </div>
        </div>
    );
};

export default Home;
