import './teammember.css';
import SkillBadge from '../skill-badge/skillbadge';

function TeamMember({
  name,
  role,
  age,
  isAdmin,
  skills,
  address,
  onFollow,
}) {
  return (
    <div className="team-member">
      <h2>{name}</h2>

      <p><strong>Role:</strong> {role}</p>

      <p><strong>Age:</strong> {age}</p>

      <p>
        <strong>Location:</strong> {address.city}, {address.country}
      </p>

      {isAdmin && <span className="admin-badge">Admin</span>}

      <div className="skills">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      <button onClick={() => onFollow(name)}>
        Follow
      </button>
    </div>
  );
}

export default TeamMember;