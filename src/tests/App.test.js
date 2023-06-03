import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('exibe o componente Filters corretamente', () => {
  render(<App />);

  // Verifica se os elementos do filtro estão presentes na tela
  const planetInput = screen.getByTestId('name-filter');
  const columnSelect = screen.getByTestId('column-filter');
  const comparisonSelect = screen.getByTestId('comparison-filter');
  const valueInput = screen.getByTestId('value-filter');
  const applyButton = screen.getByTestId('button-filter');
  const resetButton = screen.getByTestId('button-remove-filters');

  expect(planetInput).toBeInTheDocument();
  expect(columnSelect).toBeInTheDocument();
  expect(comparisonSelect).toBeInTheDocument();
  expect(valueInput).toBeInTheDocument();
  expect(applyButton).toBeInTheDocument();
  expect(resetButton).toBeInTheDocument();
});

test('atualiza o estado do filtro de nome do planeta', () => {
  render(<App />);

  const planetInput = screen.getByTestId('name-filter');

  // Simula a entrada de texto no campo do planeta
  userEvent.type(planetInput, 'Mars');

  // Verifica se o estado do filtro de nome do planeta é atualizado corretamente
  expect(planetInput.value).toBe('Mars');
});

