import { ReactComponent as Profile } from '@image/profile.svg';
import { ReactComponent as Book } from '@image/book.svg';
import { ReactComponent as Arrow } from '@image/arrow.svg';
import { ReactComponent as Pig } from '@image/pig.svg';
import { ReactComponent as Chart } from '@image/chart.svg';

const LeftSide2 = () => {
  return (
    <div style={{ width: '15%' }}>
      <div
        style={{
          padding: '20px 0px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
          background: '#F3F3F3',
        }}
      >
        <Profile />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '10px',
          }}
        >
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>닉네임 님의</span>
          <span style={{ fontSize: '14px' }}>가계부</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '16px' }}>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
            gap: '10px',
          }}
        >
          <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Book />
              <div>가계부</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.9' }}>작성</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '0.1' }}>
                <Arrow />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.9' }}>
                캘린더
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '0.1' }}>
                <Arrow />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.9' }}>내역</div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '0.1' }}>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
            gap: '10px',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Pig />
              <div>예산</div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: '10px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
            gap: '10px',
          }}
        >
          <div style={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <Chart />
              <div>분석</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.9' }}>
                주간별/ 월별 분석
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '0.1' }}>
                <Arrow />
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.9' }}>
                카테고리별 분석
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '0.1' }}>
                <Arrow />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderRadius: '10px',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.1)',
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>마이페이지</div>
            <div>로그아웃</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide2;
