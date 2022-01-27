import React from 'react';
import Card1 from '../components/Cards/Card1';
import MainLayout from '../components/Layouts/MainLayout';

export default function cards() {
  return (
    <div>
      <MainLayout>
        <h3 className="mb-4 font-bold text-orange-400">Card1</h3>
        <Card1 />
      </MainLayout>
    </div>
  );
}
