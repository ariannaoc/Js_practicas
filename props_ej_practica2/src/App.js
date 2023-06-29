import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  const img_size= size <90 ? 's' : 'b';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, img_size )}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <>
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
    <Avatar
        size={150}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      </>
  );
}
