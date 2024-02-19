import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Registration } from 'features/Registration';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from 'shared/hooks';

export const HomePage = () => {
  const dispatch = useDispatch();

  const { isDataSent } = useRegistration();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDataSent) {
      navigate('/waitingpage'); // Перенаправление на страницу ожидания
    }
  }, [isDataSent, navigate]);

  return (
    <div>
      {/* {homePageState.homePage?.download && <SectionBase data={homePageState.homePage.download} type='primary' />} */}
      {<Registration />}
    </div>
  );
};
