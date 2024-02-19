import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export const WaitingPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(1);

  useEffect(() => {
    // Ваша логика для получения статуса обработки запроса
    // Это нужно заменить на реальную логику запроса к серверу
    const fetchStatus = async () => {      
      await setTimeout(() => {       
        const randomStatus = Math.floor(Math.random() * 3) + 1;     
        setStatus(randomStatus);
      }, 1000);
    };
    fetchStatus();
  }, [id]);

  let message;
  switch (status) {
    case 1:
      message = `Запрос ${id} обрабатывается`;
      break;
    case 2:
      message = (
        <>
          Запрос обработан. <Link to={`/registrationpage/${id}`}>Продолжить регистрацию</Link>
        </>
      );
      break;
    case 3:
      message = 'Запрос отклонен';
      break;
    default:
      message = 'Страница не найдена';
  }

  return (
    <div>
      <h2>Ожидание ответа</h2>
      <p>{message}</p>
    </div>
  );
};
