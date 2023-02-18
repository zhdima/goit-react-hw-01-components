import PropTypes from 'prop-types';
import { Container, Title, StatsList, StatItem, StatLabel, StatValue} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && (<Title>{title}</Title>)}

      <StatsList>
        {stats.map(stat => (
          <StatItem key={stat.id} count={stats.length}>
            <StatLabel>{stat.label}</StatLabel>
            <StatValue>{stat.percentage}%</StatValue>
          </StatItem>
        ))}
      </StatsList>
    </Container>
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
  ).isRequired,
};
