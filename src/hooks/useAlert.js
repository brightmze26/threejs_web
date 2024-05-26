import { useState } from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'error' });

    const showAlert = ({ text, type = 'error' }) => setAlert({ show: true, text, type });
    const hideAlert = () => setAlert({ show: false, text: '', type: 'error' });

    return { alert, showAlert, hideAlert };
};

export default useAlert;