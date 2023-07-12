import LeftSide1 from '@components/LeftSide1';
import RightSide1 from '@components/RightSide1';

const Write = () => {
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
        <LeftSide1 />
        <div
          style={{
            width: '70%',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              style={{
                border: 'none',
                borderTop: '1px solid #E3DFFD',
                padding: '20px',
                paddingLeft: '0px',
                fontSize: '24px',
              }}
              placeholder="제목을 입력하세요."
            />
            <input
              type="text"
              style={{
                border: 'none',
                borderBottom: '1px solid #E3DFFD',
                padding: '20px',
                paddingLeft: '0px',
                paddingBottom: '250px',
              }}
              placeholder="상세한 내용을 입력해주세요"
            />
          </div>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
            <button
              style={{
                background: '#FFFFFF',
                border: '1px solid #DDD',
                borderRadius: '5px',
                color: '#A8A8A8',
                padding: '5px 10px',
              }}
            >
              취소
            </button>
            <button
              style={{
                background: '#E5D1FA',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
              }}
            >
              등록
            </button>
          </div>
        </div>
        <RightSide1 />
      </div>
    </div>
  );
};

export default Write;
