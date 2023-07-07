import LeftSide1 from '@components/LeftSide1';
import RightSide1 from '@components/RightSide1';
import { ReactComponent as Search } from '@image/search.svg';
import { ReactComponent as Profile } from '@image/default-profile.svg';
import { ReactComponent as Comment } from '@image/comment.svg';
import { ReactComponent as Like } from '@image/like.svg';
import { ReactComponent as Pencil } from '@image/pencil.svg';
import { ReactComponent as Dot } from '@image/dot.svg';
import { ReactComponent as NoDot } from '@image/noColorDot.svg';

const BoardList = () => {
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
          <div
            style={{
              border: '2px solid #CCA6F4',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <input
              type="text"
              style={{
                border: 'none',
                width: '100%',
                outline: 'none',
              }}
              placeholder="검색어를 입력해주세요!"
            />
            <Search />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div
              style={{
                color: '#252525',
                fontFamily: 'Noto Sans KR',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '30px',
              }}
            >
              최신 게시글
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div
                style={{
                  border: '1px solid #E3DFFD',
                  borderRadius: '4px',
                  minHeight: '120px',
                  width: '50%',
                }}
              ></div>
              <div
                style={{
                  border: '1px solid #E3DFFD',
                  borderRadius: '4px',
                  minHeight: '120px',
                  width: '50%',
                }}
              ></div>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <div
                style={{
                  color: '#CCA6F4',
                  background: '#ECF2FF',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Pencil />
                작성하기
              </div>

              <div style={{ display: 'flex', gap: '5px', fontSize: '12px' }}>
                <div>
                  <Dot /> 최신순
                </div>
                <div>
                  <NoDot /> 댓글순
                </div>
                <div>
                  <NoDot /> 추천순
                </div>
              </div>
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
        <RightSide1 />
      </div>
    </div>
  );
};

export default BoardList;
