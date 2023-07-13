export default function StoryTray({ stories }) {
 let create= [...stories]
  create.push({
    id: 'create',
    label: 'Create Story'
  });

  return (
    <ul>
      {create.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
