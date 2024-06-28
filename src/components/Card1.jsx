import "../App.css";

const Card1 = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="img"></div>
        <div className="content">
          <div className="par1">
            <div>HeadLine </div>
            <p>Subhead</p>
          </div>
          <div className="par2">
            Please add your content here. Keep it short and simple. And smile
          </div>
          <div className="par3"></div>
          <div className="par4">Title</div>
          <div className="tags">
            <button className="tag">Tag 1</button>
            <button className="tag">Tag 2</button>
            <button className="tag">Tag 3</button>
            <button className="tag">Tag 4</button>
          </div>
          <button className="btn">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
