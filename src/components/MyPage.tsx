import LeftSide2 from '@components/LeftSide2';
import { ReactComponent as Profile } from '@image/dummy-profile.svg';
import { ReactComponent as Pencil } from '@image/pencil.svg';

const MyPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '150px',
        marginBottom: '230px',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '1280px', display: 'flex', gap: '200px' }}>
        <LeftSide2 />
        <div
          style={{
            width: '50%',
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
              내 정보
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '80px 0' }}>
              <Profile style={{ width: '200px', height: '200px' }} />
            </div>
            <div style={{ border: '1px solid  #CCA6F4' }}>
              <div
                style={{ display: 'flex', fontSize: '16px', borderBottom: '1px solid  #CCA6F4' }}
              >
                <div
                  style={{
                    width: '30%',
                    textAlign: 'center',
                    borderRight: '1px solid  #CCA6F4',
                    padding: '30px 20px',
                    background: '#E5D1FA',
                    fontWeight: 'bold',
                  }}
                >
                  이메일
                </div>
                <div style={{ width: '70%', padding: '30px 20px', color: '#B8B8B8' }}>
                  abc@test.com
                </div>
              </div>
              <div
                style={{ display: 'flex', fontSize: '16px', borderBottom: '1px solid  #CCA6F4' }}
              >
                <div
                  style={{
                    width: '30%',
                    textAlign: 'center',
                    borderRight: '1px solid  #CCA6F4',
                    padding: '30px 20px',
                    background: '#E5D1FA',
                    fontWeight: 'bold',
                  }}
                >
                  닉네임
                </div>
                <div
                  style={{
                    width: '70%',
                    padding: '30px 20px',
                    color: '#B8B8B8',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>닉네임</div>
                  <Pencil />
                </div>
              </div>
              <div style={{ display: 'flex', fontSize: '16px' }}>
                <div
                  style={{
                    width: '30%',
                    textAlign: 'center',
                    borderRight: '1px solid  #CCA6F4',
                    padding: '30px 20px',
                    background: '#E5D1FA',
                    fontWeight: 'bold',
                  }}
                >
                  비밀번호
                </div>
                <div
                  style={{
                    width: '70%',
                    padding: '30px 20px',
                    color: '#B8B8B8',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>비밀번호 변경</div>
                  <Pencil />
                </div>
              </div>
            </div>
            <div
              style={{
                padding: '20px 0',
                borderRadius: '10px',
                marginTop: '30px',
                textAlign: 'center',
                width: '100%',
                background: '#ECF2FF',
                fontSize: '16px',
              }}
            >
              탈퇴하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
