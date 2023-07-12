import LeftSide3 from '@components/LeftSide3';
import { ReactComponent as Check } from '@image/check.svg';
import { ReactComponent as Search } from '@image/search.svg';

const Analysis = () => {
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '2px solid #E5D1FA',
              borderRadius: '30px',
              width: 'max-content',
              padding: '10px 20px',
              gap: '10px',
            }}
          >
            <Check />
            <div style={{ color: '#E5D1FA', fontSize: '18px' }}>테스트유저님의 가계부</div>
          </div>
          <div style={{ display: 'flex', gap: '100px' }}>
            <div
              style={{
                background: '#F5F5F5',
                flex: '0.4',
                width: '303px',
                height: '254px',
                borderRadius: '10px',
              }}
            >
              <div
                style={{
                  padding: '20px 10px 10px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Search style={{ transform: 'rotate(100deg)' }} />
                  <div style={{ fontSize: '18px' }}>6월 총 지출</div>
                </div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>3,000원</div>
                <div style={{ fontSize: '12px' }}>등록된 지난 달 지출이 없어요!</div>
              </div>
              <div>차트</div>
            </div>
            <div style={{ flex: '0.6' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '40px',
                      borderRadius: '5px',
                      background: '#000000',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>6월 분석</div>
                    <div style={{ fontSize: '14px', color: '#999' }}>
                      이번 달에는 지난 달 보다 8000원 더 적게 쓰셨어요!
                    </div>
                  </div>
                </div>
                <div>차트</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '100px' }}>
            <div
              style={{
                flex: '0.4',
              }}
            >
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}
              >
                <div
                  style={{
                    width: '5px',
                    height: '40px',
                    borderRadius: '5px',
                    background: '#000000',
                  }}
                ></div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }}>주간별 분석</div>
              </div>
              <div style={{ padding: '10px' }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6월 첫째주</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>6월 1일 ~ 6월 7일</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6,000,000원</div>
                </div>
              </div>
              <div style={{ padding: '10px' }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6월 첫째주</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>6월 1일 ~ 6월 7일</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6,000,000원</div>
                </div>
              </div>
              <div style={{ padding: '10px' }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6월 첫째주</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>6월 1일 ~ 6월 7일</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6,000,000원</div>
                </div>
              </div>
              <div style={{ padding: '10px' }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6월 첫째주</div>
                  <div style={{ fontSize: '12px', color: '#999' }}>6월 1일 ~ 6월 7일</div>
                  <div style={{ fontSize: '16px', fontWeight: 'bold' }}>6,000,000원</div>
                </div>
              </div>
            </div>
            <div style={{ flex: '0.6' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div
                    style={{
                      width: '5px',
                      height: '40px',
                      borderRadius: '5px',
                      background: '#000000',
                    }}
                  ></div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>2023 절약 챌린지</div>
                    <div style={{ fontSize: '14px', color: '#999' }}>
                      올해의 절약 챌린지의 결과를 확인해보세요!
                    </div>
                  </div>
                </div>
                <div>스티커</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
