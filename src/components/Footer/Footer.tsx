import { ReactComponent as Figma } from '@image/figma.svg';
import { ReactComponent as GitHub } from '@image/github.svg';
import { ReactComponent as Logo } from '@image/logo.svg';

const Footer = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        background: '#F6F6F6',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '1280px' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '12px',
            borderBottom: '1px solid #CCC',
            justifyContent: 'space-between',
            padding: '50px 0px 30px 0px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            <Logo />
            <div style={{ display: 'flex', gap: '10px' }}>
              <div
                style={{
                  paddingRight: '10px',
                  borderRight: '1px solid #CCC',
                  marginLeft: '50px',
                }}
              >
                개인정보처리방침
              </div>
              <div style={{ paddingRight: '10px', borderRight: '1px solid #CCC' }}>이용약관</div>
              <div>이용안내</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a
              href="https://www.figma.com/file/RuSC6C98EoSfXTkG2bGR2V/TravelBuddy?type=design&node-id=0-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figma />
            </a>
            <a
              href="https://github.com/devStudy99/TravelBuddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
          </div>
        </div>
        <div
          style={{
            borderBottom: '1px solid #CCC',
            display: 'flex',
            gap: '150px',
            padding: '50px 0px',
          }}
        >
          <div>
            <p style={{ fontSize: '16px' }}>CUSTOMER CENTER</p>
            <p style={{ fontSize: '12px' }}>02-1234-5678</p>
          </div>
          <div>
            <p>OPERATING HOURS</p>
            <p>MON - FRI AM 09:30 - PM 05:30 LUNCH PM 12:00 - 1:00 SAT, SUN, HOLIDAY OFF</p>
          </div>
          <div>
            <p>ACCOUNT INFO</p>
            <p>신한은행 12345678900 예금주 (주) TEEMO(티모)</p>
          </div>
          <div>
            <p>COMPANY INFO</p>
            <p>
              회사 : (주) TEEMO(티모) j팀장 : 정혜린 팀원 : 김승현, 임규진 사업자등록번호 :
              [123-12-12345] 주소 : (01234) ???? 제휴문의 : ?? / contact@??.io
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p>Copyright ⓒ 2023 - 2023 TEEMO Inc. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
