import * as React from 'react';

const Folder = ({ explorer }) => {
  const [expand, setExpand] = React.useState(false);

  if (explorer.isFolder) {
    return (
      <>
        <h2
          style={{
            borderRadius: '10px',
          }}
          onClick={() => setExpand(!expand)}
        >
          {explorer.name}
          <br />
        </h2>

        <div className="prak1" style={{ display: expand ? 'block' : 'none' }}>
          {explorer.items.map((x) => (
            <Folder explorer={x} />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <span>
        {explorer.name}
        <br />
      </span>
    );
  }
};
export default Folder;
