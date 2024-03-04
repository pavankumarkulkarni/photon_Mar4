import React from 'react';
import type { school } from '../SchoolList/SchoolList';
import style from './SchoolDetails.module.css';

type Props = {
  schoolSelected: school | null;
};
function SchoolDetails(props: Props) {
  const { schoolSelected } = props;
  return (
    <section className={style.details}>
      <h2>School Details </h2>
      {!schoolSelected ? (
        <p>Select school to view details</p>
      ) : (
        <>
          <h3>School overview:</h3>
          <p>{schoolSelected.overview_paragraph}</p>
        </>
      )}
    </section>
  );
}

export default SchoolDetails;
