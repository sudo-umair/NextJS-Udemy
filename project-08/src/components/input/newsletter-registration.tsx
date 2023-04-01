import { useRef } from 'react';
import classes from './newsletter-registration.module.css';
import { useContext } from 'react';
import { NotificationContext } from '@/store/notification-context';

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(event: React.FormEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current!.value;

    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Registering for newsletter.',
      status: 'pending',
    });

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          notificationCtx.showNotification({
            title: 'Success!',
            message: 'Successfully registered for newsletter!',
            status: 'success',
          });
        }
      })
      .catch((error) => {
        console.log(error);
        notificationCtx.showNotification({
          title: 'Error!',
          message: 'Error registering for newsletter!',
          status: 'error',
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
