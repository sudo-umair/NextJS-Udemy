import ContactForm from '@/components/contact/contact-form';
import Head from 'next/head';
import React, { Fragment } from 'react';

export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />;
    </Fragment>
  );
}
