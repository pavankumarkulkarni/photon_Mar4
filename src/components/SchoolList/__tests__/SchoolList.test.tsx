import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SchoolList from '../SchoolList';

describe('School List', () => {
  const mockSetSchool = () => {};
  it('Default School List loading', () => {
    render(<SchoolList setSchoolSelected={mockSetSchool} />);
    const header = screen.getByText('NYC Schools');
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeTruthy();
    expect(header).toBeTruthy();
  });
});
