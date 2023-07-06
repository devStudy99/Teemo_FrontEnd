import LeftSide1 from '@components/LeftSide1';
import RightSide1 from '@components/RightSide1';
import { ReactComponent as Profile } from '@image/default-profile.svg';
import { ReactComponent as Like } from '@image/like.svg';

const Detail = () => {
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
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderTop: '1px solid #E3DFFD',
                gap: '20px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  marginTop: '30px',
                }}
              >
                <Profile style={{ width: '40px', height: '40px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div>닉네임</div>
                  <div>작성일 2023.07.03 15:38</div>
                </div>
              </div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>제목입니다~~</div>
              <div style={{ fontSize: '16px' }}>
                본문입니다 어쩌고저쩌고 에횽효효호호 본문입니다 어쩌고저쩌고 에횽효효호호
              </div>
            </div>
            <div style={{ margin: '100px 0 20px 0', fontWeight: 'bold', fontSize: '12px' }}>
              1개의 댓글
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                background: '#F6F6F6',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
              }}
            >
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '30px 0',
                }}
              >
                <div
                  style={{
                    width: '95%',
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '20px',
                  }}
                >
                  <Profile style={{ width: '40px', height: '40px' }} />
                  <div
                    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                  >
                    <div>닉네임</div>
                    <div>작성일 2023.07.03 15:38</div>
                  </div>
                </div>
                <div style={{ width: '95%', height: '1px', background: '#E3DFFD' }} />
                <div
                  style={{ width: '95%', marginTop: '15px', minHeight: '100px', fontSize: '12px' }}
                >
                  댓글 내용입니다.
                </div>
                <div
                  style={{
                    width: '95%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '5px',
                  }}
                >
                  <Like />1
                </div>
              </div>
              <div
                style={{
                  margin: '20px 0',
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <Profile style={{ width: '40px', height: '40px' }} />
                <input
                  type="text"
                  style={{
                    padding: '10px',
                    width: '100%',
                    border: 'none',
                    borderRadius: '10px',
                    outline: 'none',
                  }}
                  placeholder="댓글을 입력해주세요."
                />
              </div>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
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
          </div>
        </div>
        <RightSide1 />
      </div>
    </div>
  );
};

export default Detail;
