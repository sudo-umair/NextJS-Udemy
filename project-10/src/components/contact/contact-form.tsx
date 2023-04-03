import React, { Fragment, useEffect, useRef, useState } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';
import type { INotification } from '@/common/types';

export default function ContactForm() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const [notification, setNotification] = useState<INotification | null>(null);

  useEffect(() => {
    if (notification && notification.status !== 'pending') {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  async function sendMessageHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;
    const enteredMessage = messageInputRef.current!.value;

    const newMessage = {
      name: enteredName,
      email: enteredEmail,
      message: enteredMessage,
    };

    setNotification({
      title: 'Sending message...',
      message: 'Your message is on its way!',
      status: 'pending',
    });

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setNotification({
        title: 'Error!',
        message: data.message || 'Something went wrong!',
        status: 'error',
      });
    }

    setNotification({
      title: 'Success!',
      message: 'Message sent successfully!',
      status: 'success',
    });
  }

  return (
    <Fragment>
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form onSubmit={sendMessageHandler} className={classes.form}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor='email'>Your Email Address</label>
              <input ref={emailInputRef} type='email' id='email' required />
            </div>
            <div className={classes.control}>
              <label htmlFor='name'>Your Name</label>
              <input ref={nameInputRef} type='text' id='name' required />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor='message'>Your Message</label>
            <textarea ref={messageInputRef} id='message' rows={5} required />
          </div>
          <div className={classes.actions}>
            <button type='submit'>Send Message</button>
          </div>
        </form>
      </section>
      <Notification notification={notification} />
    </Fragment>
  );
}
