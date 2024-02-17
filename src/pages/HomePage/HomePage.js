import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Registration } from 'features/Registration';



export const HomePage = () => {
  const dispatch = useDispatch();
  





  const formOptions = {};

  return (
    <div>
      {/* {homePageState.homePage?.download && <SectionBase data={homePageState.homePage.download} type='primary' />} */}
      {<Registration />}

    </div>
  );
};
