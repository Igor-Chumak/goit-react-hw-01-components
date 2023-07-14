import PropTypes from 'prop-types';
import css from './statistics.module.css';
import getRandomHexColor from '../js/random_hex_color.js';

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && (
        <h2 className="title" style={{ color: getRandomHexColor() }}>
          {title}
        </h2>
      )}
      <ul className="statList">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
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
