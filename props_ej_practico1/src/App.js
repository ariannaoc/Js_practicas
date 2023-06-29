import Profile from './profile.js'

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile datos={{
        img: 'szV5sdG',
        name: 'Maria Skłodowska-Curie',
        profession: 'physicist and chemist',
        awards: '4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)',
        discovered: 'polonium (element)'
      }}
      />

<Profile datos={{
        img: 'YfeOqp2',
        name: 'Katsuko Saruhashi',
        profession: 'geochemist',
        awards: '2 (Miyake Prize for geochemistry, Tanaka Prize)',
        discovered: 'a method for measuring carbon dioxide in seawater'
      }}
      />
      </div>
  )}