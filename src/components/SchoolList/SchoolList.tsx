import React, { useState, useEffect } from 'react';
import styles from './SchoolList.module.css';

export type school = {
  dbn?: string;
  school_name?: string;
  overview_paragraph?: string;
};

function SchoolList({ setSchoolSelected }: { setSchoolSelected: () => void }) {
  const [list, setList] = useState<school[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          'https://data.cityofnewyork.us/resource/s3k6-pzi2.json'
        );
        const list = await res.json();
        setList(list);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <section>
      <h2>NYC Schools</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : list.length > 0 ? (
        <ul className={styles.schools}>
          {list.map((school) => {
            return (
              <li
                key={school?.dbn}
                onClick={() => {
                  setSchoolSelected(school);
                }}
              >
                {school?.school_name}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Data not found</p>
      )}
    </section>
  );
}

export default SchoolList;
