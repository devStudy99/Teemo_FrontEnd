import { ReactComponent as Logo } from '@image/logo.svg';

const Header = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        height: '80px',
        background: '#ECF2FF',
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.04)',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '1280px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <Logo />
        </div>
        <div style={{ display: 'flex', color: '#CCA6F4', fontSize: '18px' }}>
          <div
            style={{
              borderRight: '1px solid #CCA6F4',
              paddingRight: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            서비스소개
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <div
              style={{
                borderRadius: '12px',
                background: '#E5D1FA',
                padding: '10px',
                color: '#ffffff',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              로그인
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
