import PropTypes from 'prop-types';

//        Styled-components
// import styled from 'styled-components';

import css from './statistics.module.css';
import getRandomHexColor from '../../utils';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
