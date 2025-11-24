import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<{ $disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  margin-bottom: 20px;
  background-color: #675e5eff;
`;

const Th = styled.th`
  background-color: #1c1a1aff;
  padding: 10px;
  border: 1px solid #131111ff;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Tfoot = styled.tfoot`
  background-color: #0c0c0cff;
  font-weight: bold;
`;

export const Table: React.FC<TableProps> = ({
  headers,
  data,
  footer,
  className,
  disabled = false,
}) => {
  return (
    <div className={className || 'table'}>
      <StyledTable $disabled={disabled}>
        <thead>
          <tr>
            {headers.map((header, i) => (
              <Th key={i}>{header}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <Td key={j}>{cell}</Td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <Tfoot>
            <tr>
              {footer.map((foot, i) => (
                <Td key={i}>{foot}</Td>
              ))}
            </tr>
          </Tfoot>
        )}
      </StyledTable>
    </div>
  );
};

export default Table;
