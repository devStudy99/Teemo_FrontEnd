import { ReactComponent as Logo } from '@image/logo.svg';
import { ReactComponent as Profile } from '@image/profile.svg';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const onClick = () => {
    setIsDropDown(!isDropDown);
  };
  const dropDownRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
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
        <div style={{ display: 'flex', color: '#CCA6F4', fontSize: '18px', gap: '20px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            서비스소개
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            가계부
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            커뮤니티
          </div>
          <div style={{ position: 'relative' }}>
            <Profile style={{ cursor: 'pointer' }} onClick={onClick} ref={dropDownRef} />
            {isDropDown && (
              <div
                style={{
                  position: 'absolute',
                  background: '#FFFFFF',
                  boxShadow: '1px 1px 2px 0px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #CCA6F4',
                  borderRadius: '10px',
                  right: '-75px',
                  color: '#CCA6F4',
                  width: '200px',
                  height: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <div>내 정보</div>
                <div style={{ width: '80%', height: '1px', background: 'black' }} />
                <div>로그아웃</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
