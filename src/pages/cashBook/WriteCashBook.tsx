import React, { useState } from 'react';
import LeftSide3 from '@components/LeftSide3';
import styled from 'styled-components';
import menuList from '@components/Modal/menu';
import WriteRow from '@components/WriteCashBook/WriteRow';
import { ReactComponent as Add } from '@image/add.svg';

function WriteCashBook() {
  const [rowItems, setRowItems] = useState([{ rowKey: Date.now() }]);

  const handleAddRow = () => {
    const newRowKey = Date.now();
    const newRow = { rowKey: newRowKey };
    setRowItems([...rowItems, newRow]);
  };

  const handleRemoveRow = (rowKeyToRemove: number) => {
    const updatedRows = rowItems.filter((row) => row.rowKey !== rowKeyToRemove);
    setRowItems(updatedRows);
  };

  return (
    <div
      style={{
        display: 'flex',
        marginTop: '150px',
        marginBottom: '230px',
        justifyContent: 'center',
        border: '1px solid red',
      }}
    >
      <div style={{ width: '1280px', display: 'flex', gap: '200px', border: '1px solid black' }}>
        <LeftSide3 />

        <div>
          <Tab>
            <span>가계부 작성</span>
          </Tab>

          <Menus>
            {menuList.map((menu) => (
              <Menu key={menu.title} size={menu.size}>
                {menu.title}
              </Menu>
            ))}
          </Menus>

          <AccountRows>
            {rowItems.map((item) => (
              <div key={item.rowKey}>
                <WriteRow rowKey={item.rowKey} onRemove={handleRemoveRow} />
              </div>
            ))}
          </AccountRows>

          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
            onClick={handleAddRow}
          >
            <AddBtn />
            <p style={{ fontSize: '14px', fontWeight: '600', opacity: '70%', cursor: 'pointer' }}>
              행 추가
            </p>
          </div>

          <FinishBtn>
            <button>작성완료</button>
          </FinishBtn>
        </div>
      </div>
    </div>
  );
}

export default WriteCashBook;
const Container = styled.div`
  height: 100vh;
  /* margin: 150px 0px 230px 220px; */
  display: flex;
  border: 1px solid black;
  /* margin-bottom: 230px; */
  /* justify-content: center; */
`;

export const Tab = styled.div`
  margin-bottom: 35px;
  /* width: 60%; */
  span {
    font-size: 20px;
    font-weight: 600;
    border-bottom: 3px solid var(--dark--purple);
    padding: 5px;
  }
`;
const Menu = styled.div<{ size: number }>`
  ${({ size }) => `
      width: ${size}rem;
`}
  font-size: 1.4rem;
  padding: 1.2rem;
`;

const Menus = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  /* gap: 2rem;
  padding: 2rem; */
  /* text-align: center; */
`;

const AccountRows = styled.div`
  min-height: 400px;
  border: 1px solid black;
  overflow: auto;
`;

const FinishBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  button {
    width: 100%;
    background-color: var(--dark--purple);
    color: white;
    padding: 1rem;
    border-radius: 5px;
  }
`;

const AddBtn = styled(Add)`
  cursor: pointer;
  margin-right: 5px;
`;
