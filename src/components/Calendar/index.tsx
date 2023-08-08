import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { ReactComponent as Pencil } from '@image/pencil.svg';
import HistoryModal from '@components/Modal/HistoryModal';

function index() {
  const [curDate, onChangeCurDate] = useState(new Date());
  const [HistoryModalOpen, setHistoryModalOpen] = useState(false);
  // const [markData, setMarkData] = useState<string[]>();

  // const marks = [
  //   '15-07-2023',
  //   '03-07-2023',
  //   '07-07-2023',
  //   '12-07-2023',
  //   '13-07-2023',
  //   '15-07-2023',
  // ];

  const handleDateChange = (date: any) => {
    onChangeCurDate(date);
    setHistoryModalOpen(true);
  };
  const isToday = (date: any) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <>
      <Container>
        {HistoryModalOpen && (
          <HistoryModal date={curDate} setHistoryModalOpen={setHistoryModalOpen} />
        )}
        <Calendar
          onChange={handleDateChange}
          value={curDate}
          formatDay={(locale, date) => dayjs(date).format('DD')}
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          tileContent={({ date }) =>
            isToday(date) ? (
              <TileContent>
                <PencilIcon $show />
              </TileContent>
            ) : (
              <TileContent>
                <PencilIcon
                  className="hidden-pencil"
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation();
                  }}
                />
              </TileContent>
            )
          }
        />
      </Container>
    </>
  );
}

export default index;

export const Container = styled.div`
  .react-calendar {
    width: 682px;
    height: 100%;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
  }
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    border-radius: 20px 20px 0 0;
  }

  .react-calendar__navigation__label {
    font-size: 16px;
  }
  .react-calendar__navigation button {
    text-align: center;
    top: 1rem;
  }

  .react-calendar__navigation button:nth-child(1):enabled:hover,
  .react-calendar__navigation button:nth-child(1):enabled:focus,
  .react-calendar__navigation button:nth-child(2):enabled:hover,
  .react-calendar__navigation button:nth-child(2):enabled:focus,
  .react-calendar__navigation button:nth-child(3):enabled:hover,
  .react-calendar__navigation button:nth-child(3):enabled:focus {
    background: none;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: none;
  }
  .react-calendar__navigation {
    background-color: var(--light--purple);
    padding: 30px 0;
    font-size: 17px;
  }

  .react-calendar__tile {
    display: flex;
    text-align: center;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    font-weight: 600;
    transition: 0.3s ease;
    abbr {
      display: block;
      line-height: 20px;
    }
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: var(--main-2, #e3dffd);
    font-size: 1.5rem;
    color: var(--light--white);
  }

  .react-calendar__tile--now {
    background: none;
    border-radius: 14px;

    abbr {
      display: block;
      width: 100%;
      border-radius: 5px;
      line-height: 20px;
      color: #fff;
      background: var(--dark--purple);
    }

    /*hover, focus 시 */
    &:enabled:hover,
    &:enabled:focus {
      background: var(--dark--blue);
      border-radius: 14px;
    }
  }

  .react-calendar__month-view__days > button {
    gap: 7px;
    height: 100px;
  }
`;

const TileContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover .hidden-pencil {
    display: block;
  }
`;
const PencilIcon = styled(Pencil)`
  position: absolute;
  padding: 1px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${({ $show }) => ($show ? 'block' : 'none')};
  &:hover {
    background-color: var(--light--blue);
    border-radius: 50%;
  }
  &.hidden-pencil {
    display: none;
  }
`;
