// SkillTag.jsx
export default function SkillTag({ name, level = 0 }) {
    return (
      <span className="flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 text-sm rounded-full">
        <span>{name}</span>
        <span className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < level ? 'text-yellow-400' : 'text-gray-300'}
            >
              ★
            </span>
          ))}
        </span>
      </span>
    );
  }
  