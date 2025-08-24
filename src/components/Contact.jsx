import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { useTranslation } from '../contexts/LanguageContext.jsx';

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef();
    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    // Fallback function for when EmailJS fails
    const handleFallbackSubmit = () => {
        const subject = 'Contact Form Message';
        const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`;
        const mailtoUrl = `mailto:nourzakhama2003@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoUrl, '_blank');

        showAlert({
            show: true,
            text: 'Opening email client. Please send the message manually.',
            type: 'success',
        });

        setTimeout(() => {
            hideAlert();
            setForm({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate form data
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setLoading(false);
            showAlert({
                show: true,
                text: t('contact.fillAllFields'),
                type: 'danger',
            });
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setLoading(false);
            showAlert({
                show: true,
                text: t('contact.validEmail'),
                type: 'danger',
            });
            return;
        }

        console.log('Sending email with EmailJS...', {
            service: 'service_g70ofn8',
            template: 'template_m7nomsa',
            form: form
        });

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_g70ofn8', // Service ID
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_m7nomsa', // Template ID
                {
                    from_name: form.name,
                    to_name: 'nourzakhama',
                    from_email: form.email,
                    to_email: 'nourzakhama2003@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'WH8iF-KS4p47dBzRj' // Public Key
            )
            .then((result) => {
                setLoading(false);
                console.log('Email sent successfully:', result);
                showAlert({
                    show: true,
                    text: t('contact.messageSent'),
                    type: 'success',
                });

                setTimeout(() => {
                    hideAlert();
                    setForm({ name: '', email: '', message: '' });
                }, 3000);
            })
            .catch((error) => {
                setLoading(false);
                console.error('EmailJS Error:', error);

                let errorMessage = t('contact.messageError');

                // Provide specific error messages based on error type
                if (error.status === 412) {
                    errorMessage = t('contact.authError');
                } else if (error.status === 400) {
                    errorMessage = t('contact.configError');
                } else if (error.status === 403) {
                    errorMessage = t('contact.accessError');
                } else if (error.text && error.text.includes('Invalid grant')) {
                    errorMessage = t('contact.connectionError');
                }

                showAlert({
                    show: true,
                    text: errorMessage,
                    type: 'danger',
                });
            });
    };

    return (
        <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                {/* Background Image */}
                <img
                    src="/assets/terminal.png"
                    alt="terminal-bg"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Form Container */}
                <div className="contact-container relative z-10 bg-black bg-opacity-70 p-8 rounded-lg " id="contact">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">{t('contact.name')}</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder={t('contact.namePlaceholder')}
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">{t('contact.email')}</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">{t('contact.message')}</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder={t('contact.messagePlaceholder')}
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? t('contact.sending') : t('contact.sendMessage')}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>

                        <button
                            type="button"
                            onClick={handleFallbackSubmit}
                            className="field-btn mt-3 bg-blue-600 hover:bg-blue-700 border-2 border-blue-400"
                            disabled={loading || !form.name.trim() || !form.email.trim() || !form.message.trim()}
                            title={t('contact.emailClientTitle')}
                        >
                            📧 {t('contact.sendViaEmail')}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-white-500">
                            💡 {t('contact.backupInfo')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;