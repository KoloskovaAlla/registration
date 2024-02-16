import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder } from 'shared/hooks';
import { RegistrationForm } from 'features/RegistrationForm';



export const HomePage = () => {
  const dispatch = useDispatch();
  const orderState = useOrder();

  useEffect(() => {
    dispatch(orderState.orderActions.getOrder());
  }, [dispatch, orderState.orderActions.getOrder]);



  const formOptions = {};

  return (
    <div>
      {/* {homePageState.homePage?.download && <SectionBase data={homePageState.homePage.download} type='primary' />} */}
      {<RegistrationForm />}

    </div>
  );
};
