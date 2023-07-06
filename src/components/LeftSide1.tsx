import { ReactComponent as Profile } from '@image/profile.svg';
import { ReactComponent as Community } from '@image/community.svg';
import { ReactComponent as Image } from '@image/image.svg';

const LeftSide1 = () => {
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
          <span style={{ fontSize: '14px' }}>안녕하세요!</span>
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
          padding: '20px 0px',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <Community />
          <span style={{ fontSize: '16px', color: '#999' }}>커뮤니티</span>
        </div>
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          <Image />
          <span style={{ fontSize: '16px', color: '#999' }}>티모피드</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide1;
