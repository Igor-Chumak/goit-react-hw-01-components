import PropTypes from 'prop-types';
import style from './statistics.module.css';
import getRandomHexColor from '../js/random_hex_color.js';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && (
        <h2 className={style.title} style={{ color: getRandomHexColor() }}>
          {title}
        </h2>
      )}
      <ul className={style.statList}>
        {stats.map(stat => (
          <li
            className={style.item}
            style={{ backgroundColor: getRandomHexColor() }}
            key={stat.id}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
