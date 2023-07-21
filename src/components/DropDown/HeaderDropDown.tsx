import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { DropDownContentWrapper, DropDownDivider, DropDownWrapper } from './HeaderDropDown.styles';
import { ReactComponent as Profile } from '@image/profile.svg';

const HeaderDropDown = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const onClick = () => {
    setIsDropDown(!isDropDown);
  };
  const dropDownRef = useRef<HTMLElement>(null);
  useEffect(() => {
    function handleClickOutside(event: any) {
      const linkText = event.target.innerText;
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        !(linkText === '내 정보') &&
        !(linkText === '로그아웃')
      ) {
        setIsDropDown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropDownWrapper>
      <Profile style={{ cursor: 'pointer' }} onClick={onClick} ref={dropDownRef} />
      {isDropDown && (
        <DropDownContentWrapper>
          <Link to="/mypage">내 정보</Link>
          <DropDownDivider />
          <Link to="/logout">로그아웃</Link>
        </DropDownContentWrapper>
      )}
    </DropDownWrapper>
  );
};

export default HeaderDropDown;
