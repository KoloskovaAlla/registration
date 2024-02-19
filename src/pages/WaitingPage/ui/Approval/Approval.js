import classes from './Approval.module.scss';
import { Link } from 'react-router-dom';

export const Approval = ({ id }) => {
  return (
    <div className={classes.approval}>
      <h2>Запрос обработан. </h2>
      <Link
        className={classes.link}
        to={`/registrationpage/${id}`}
      >
        Продолжить регистрацию
      </Link>
    </div>
  );
};
