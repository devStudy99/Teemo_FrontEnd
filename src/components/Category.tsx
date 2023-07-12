import { styled } from 'styled-components';

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  grid-gap: 3rem;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem;
  font-size: 16px;
`;

const Cell = styled.div`
  padding: 0.5rem;
  /* border: 1px solid #ccc; */
  /* text-align: center; */
`;
const HeaderCell = styled.div`
  padding: 0.5rem;
  /* border: 1px solid #ccc; */
  /* text-align: center; */
`;

const Ex = () => {
  const headerData = ['분류', '날짜', '카테고리', '금액', '메모'];
  const actionData = ['수정하기', '삭제하기'];
  const rowData = [
    {
      checkbox: <input type="checkbox" />,
      type: '지출',
      date: '2023-03-01',
      category: '문화생활',
      amount: `15,000원`,
      memo: '죄도시2',
    },
    {
      checkbox: <input type="checkbox" />,
      type: '수입',
      date: '2023-03-02',
      category: '급여',
      amount: '1,200,000원',
      memo: '3월 급여',
    },
    {
      checkbox: <input type="checkbox" />,
      type: '지출',
      date: '2023-03-03',
      category: '식비',
      amount: '12,000원',
      memo: '저녁 식사',
    },
    {
      checkbox: <input type="checkbox" />,
      type: '지출',
      date: '2023-03-04',
      category: '교통비',
      amount: '1,500원',
      memo: '버스 비용',
    },
    {
      checkbox: <input type="checkbox" />,
      type: '수입',
      date: '2023-03-05',
      category: '금융수입',
      amount: '200,000원',
      memo: '투자 수익',
    },
  ];

  return (
    <div className="App">
      <Table>
        {/* 상단 헤더 */}
        <Cell>
          <input type="checkbox" />
        </Cell>
        {headerData.map((header) => (
          <HeaderCell key={header}>{header}</HeaderCell>
        ))}
        <Cell />
        <Cell />

        {/* 데이터 행 */}
        {rowData.map((row, idx) => (
          <>
            <Cell key={`${idx}-checkbox`}>{row.checkbox}</Cell>
            <Cell
              key={`${idx}-type`}
              style={{
                borderRadius: '10px',
                padding: '10px',
                color: '#CCA6F4',
                backgroundColor: `${row.type === '지출' ? '#FFF4D2' : '#E3DFFD'}`,
              }}
            >
              {row.type}
            </Cell>
            <Cell key={`${idx}-date`}>{row.date}</Cell>
            <Cell key={`${idx}-category`}>{row.category}</Cell>
            <Cell key={`${idx}-amount`}>{row.amount}</Cell>
            <Cell key={`${idx}-memo`}>{row.memo}</Cell>
            <Cell key={`${idx}-edit`} style={{ color: '#CCA6F4' }}>
              {actionData[0]}
            </Cell>
            <Cell key={`${idx}-delete`}>{actionData[1]}</Cell>
          </>
        ))}
      </Table>
    </div>
  );
};

export default Ex;
