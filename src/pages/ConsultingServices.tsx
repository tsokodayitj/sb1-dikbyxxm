import React from 'react';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { PageLayout } from '../components/PageLayout';

export function ConsultingServices() {
  return (
    <PageLayout>
      <Services />
      <Contact />
    </PageLayout>
  );
}