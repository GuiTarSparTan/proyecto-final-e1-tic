import React, { useEffect } from 'react';

import useDrivePicker from 'react-google-drive-picker';

const SharedFolder = () => {
    const [openPicker, data] = useDrivePicker();

    const handleOpenPicker = () => {
        openPicker({
            clientId: "469637016678-072nl94aj21oo5hejq9amo8if6ds9frp.apps.googleusercontent.com",
            developerKey: "AIzaSyDKHNVX2LNHVIjW36rbNe0vO07zRt5VYik",
            viewId: "DOCS",
            token: "ya29.a0AfB_byCJcolXFhriUPIVjqGtZJ20SonfheIGYtt7ud_-Ppxzp3DPG4dje7UBhQ5CZ-dlM9FfWbKKYmOAsIeThSM4zWerImRsTEDfjWRRCigxJPM-juTsA3YnF8zZ7N8mMRic3Dxqr__9yqHfPyzB9R_ro3RojvqdFPbplwaCgYKAbESARESFQHsvYlsuHItgHu1bUHUXIyesGkZ4g0173",
            setIncludeFolders: true,
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            callbackFunction: (data) => {
                if (data.action === 'cancel') {
                    console.log('User clicked cancel/close button')
                }
                console.log(data)
            },
        })
    }

    useEffect(() => {
        if (data) {
            data.docs.map((i) => console.log(i))
        }
    }, [data])

    return (
        <div className="shared-folder">
            <div className="content">
                <h1>Welcome to the Shared Google Drive Folder </h1>
                <div className="text-box">
                    <p>In this Google Drive folder, you can upload and find information about software development with React.</p>
                    <p>Feel free to use this page to help grow our community.</p>
                    <button className="button" onClick={() => handleOpenPicker()}>Open</button>
                </div>
            </div>
            <div className="image">
                <img src="https://images.pexels.com/photos/7654125/pexels-photo-7654125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shared Drive" />
            </div>
        </div>
    );
};

export default SharedFolder;
