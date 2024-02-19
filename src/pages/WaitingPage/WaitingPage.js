import classes from './WaitingPage.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader } from './ui/Loader';
import { Approval } from './ui/Approval';

export const WaitingPage = () => {

  const [id, setID] = useState(1);

  useEffect(() => {
    // Логика для получения статуса обработки запроса
    // Это нужно заменить на реальную логику запроса к серверу
    const fetchStatus = async () => {
      await setTimeout(() => {
        // const randomStatus = Math.floor(Math.random() * 3) + 1;     
        const status = 2;
        setID(status);
      }, 1500);
    };
    fetchStatus();
  }, [id]);

  let content;
  switch (id) {
    case 1:
      content = (
        <Loader />
      );
      break;
    case 2:
      content = (
        <Approval id={id} />
      );
      break;
    case 3:
      content = 'Запрос отклонен';
      break;
    default:
      content = 'Страница не найдена';
  }

  return (
    <div>
      <p>{content}</p>
    </div>
  );
};
