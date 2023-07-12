export const Profile = ({ username, tag, location, avatar, stats }) => {
  console.log(stats);
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
