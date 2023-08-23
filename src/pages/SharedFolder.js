import React, { useEffect } from 'react';

import useDrivePicker from 'react-google-drive-picker';

const SharedFolder = () => {
    const [openPicker, data] = useDrivePicker();

    const handleOpenPicker = () => {
        openPicker({
            clientId: "469637016678-lrlq55ra02ngcqssgsngte8t8929ujjk.apps.googleusercontent.com",
            developerKey: "AIzaSyD8ZLPJajZG3BT72Ez2dYFYaEmOqizlr64",
            viewId: "DOCS",
            token: "ya29.a0AfB_byDmkQbC4PBQ60XbWvm97rFrI2cwwIWMmMHOMCtJideEFNuVBZePyP9qNTgAVgedAn6IfrLXrK0o9Tg4zfyW7O_KYlh06I4OHvvbFmmIMR75QzSit3hvtBC8f6NFFN4F-cuisNpKEibbWXOTs6mGsZFx5zbkJ7KRAwaCgYKAcQSARESFQHsvYlsF_mj3cRsP6zTfJ3SA14PoQ0173",
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