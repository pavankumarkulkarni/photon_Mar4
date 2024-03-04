import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SchoolDetails from '../SchoolDetails';

describe('School Details', () => {
  it('Default header should be displayed', () => {
    render(<SchoolDetails schoolSelected={{}} />);
    const defaultTest = screen.getByText('School Details');
    expect(defaultTest).toBeTruthy();
  });
  it('Overview should be displayed when school is passed', () => {
    const mockSchool = {
      dbn: 'test',
      name: 'school name',
      overview_paragraph: '123 overview',
    };
    render(<SchoolDetails schoolSelected={mockSchool} />);
    const defaultTest = screen.getByText('123 overview');
    expect(defaultTest).toBeTruthy();
  });
});
