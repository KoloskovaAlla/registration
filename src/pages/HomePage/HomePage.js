import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from 'shared/hooks';
import { Registration } from 'features/Registration';

export const HomePage = () => {
  const { isDataSent } = useRegistration();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDataSent) {
      navigate('/waitingpage');
    }
  }, [isDataSent, navigate]);

  return (
    <div>
      {<Registration />}
    </div>
  );
};
