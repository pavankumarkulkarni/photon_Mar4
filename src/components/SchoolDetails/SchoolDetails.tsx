import React from 'react';

function SchoolDetails({ schoolSelected }) {
  return (
    <section>
      <h2>School Details </h2>
      {!schoolSelected ? (
        <p>Select school to view details</p>
      ) : (
        <p>{schoolSelected.overview_paragraph}</p>
      )}
    </section>
  );
}

export default SchoolDetails;
