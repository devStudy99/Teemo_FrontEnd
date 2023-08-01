import LeftSide2 from '@components/LeftSide2';
import { ReactComponent as Profile } from '@image/default-profile.svg';
import { ReactComponent as Comment } from '@image/comment.svg';
import { ReactComponent as Like } from '@image/like.svg';

const MyWrite = () => {
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
        <LeftSide2 />
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
                fontSize: '24px',
                fontWeight: 'bold',
                borderBottom: '3px solid #CCA6F4',
                width: 'max-content',
              }}
            >
              내가 쓴 글
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div
                style={{
                  border: '1px solid #E3DFFD',
                  borderRadius: '4px',
                  minHeight: '160px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  padding: '20px',
                  marginTop: '30px',
                }}
              >
                <div
                  style={{
                    color: '#D9D9D9',
                    fontSize: '10px',
                    fontStyle: 'normal',
                    fontWeight: '350',
                    lineHeight: '32px',
                  }}
                >
                  2023.07.07 14.56
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  제목입니다. 어쩌구저쩌구
                </div>
                <div>내용입니다. 어쩌구저쩌구</div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Profile style={{ width: '30px', height: '30px' }} />
                    <span>닉네임</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Like />
                      <span>3</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Comment />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #E3DFFD',
                  borderRadius: '4px',
                  minHeight: '160px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  padding: '20px',
                  marginTop: '30px',
                }}
              >
                <div
                  style={{
                    color: '#D9D9D9',
                    fontSize: '10px',
                    fontStyle: 'normal',
                    fontWeight: '350',
                    lineHeight: '32px',
                  }}
                >
                  2023.07.07 14.56
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  제목입니다. 어쩌구저쩌구
                </div>
                <div>내용입니다. 어쩌구저쩌구</div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Profile style={{ width: '30px', height: '30px' }} />
                    <span>닉네임</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Like />
                      <span>3</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Comment />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #E3DFFD',
                  borderRadius: '4px',
                  minHeight: '160px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  padding: '20px',
                  marginTop: '30px',
                }}
              >
                <div
                  style={{
                    color: '#D9D9D9',
                    fontSize: '10px',
                    fontStyle: 'normal',
                    fontWeight: '350',
                    lineHeight: '32px',
                  }}
                >
                  2023.07.07 14.56
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  제목입니다. 어쩌구저쩌구
                </div>
                <div>내용입니다. 어쩌구저쩌구</div>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Profile style={{ width: '30px', height: '30px' }} />
                    <span>닉네임</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Like />
                      <span>3</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Comment />
                      <span>3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWrite;
