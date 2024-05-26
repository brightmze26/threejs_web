import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Question = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => {};
  const handleBlur = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID)
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bright Misael Zega",
          from_email: form.email,
          to_email: "brightmisaelzega@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({ show: true, text: 'Your question sent', type: 'success'})

          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);

        }).catch(
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({ show: true, text: 'Try again', type: 'error'})
        }
      );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
        {alert.show && <Alert {...alert} /> }
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Send Your Question</h1>

        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          ref={formRef}

        >
          <label className='text-black font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Jefry'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='jefry@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Question
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='write your question here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type='submit'
            disabled={loading}
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Sent"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Question;