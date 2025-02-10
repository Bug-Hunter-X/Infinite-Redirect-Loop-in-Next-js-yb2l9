```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Correct approach. Check if you're trying to navigate to a different route
    // or only navigate if some condition is met.
    // Example:
    const newPath = '/some/other/path';
    if (newPath !== router.asPath) {
      router.push(newPath);
    }
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```