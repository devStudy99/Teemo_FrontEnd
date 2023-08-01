import { ReactComponent as Profile } from '@image/profile.svg';
import { ReactComponent as Community } from '@image/community.svg';
import { ReactComponent as Pencil } from '@image/pencil.svg';
import { ReactComponent as Like } from '@image/like.svg';

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
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>닉네임 님</span>
          <span style={{ fontSize: '14px' }}>마이페이지</span>
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
        <div
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', flex: '0.3' }}>
            <Community />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.7' }}>
            <span style={{ fontSize: '16px', color: '#999' }}>내 정보</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', flex: '0.3' }}>
            <Pencil />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.7' }}>
            <span style={{ fontSize: '16px', color: '#999' }}>내가 쓴 글</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '5px',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80%',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', flex: '0.3' }}>
            <Like />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', flex: '0.7' }}>
            <span style={{ fontSize: '16px', color: '#999' }}>좋아요 한 글</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide2;
