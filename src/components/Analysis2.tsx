import LeftSide3 from '@components/LeftSide3';
import { ReactComponent as DownArrow } from '@image/down-arrow.svg';
import Ex from './Category';

const Analysis2 = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '150px',
        marginBottom: '230px',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '1280px', display: 'flex', gap: '100px' }}>
        <LeftSide3 />
        <div
          style={{
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  borderRight: '1px solid #CCA6F4',
                  paddingRight: '20px',
                  alignItems: 'center',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>내역 전체보기</div>
                <DownArrow />
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ fontSize: '20px' }}>카테고리 전체보기</div>
                <DownArrow />
              </div>
            </div>
            <button
              style={{
                borderRadius: '20px',
                background: '#ECF2FF',
                color: '#CCA6F4',
                padding: '10px',
              }}
            >
              가계부 작성
            </button>
          </div>
          <Ex />
        </div>
      </div>
    </div>
  );
};

export default Analysis2;
