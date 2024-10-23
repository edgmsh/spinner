
const typewriter = () => {
  const sentence = "|/-";
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write('\r' + char + '   ');
    }, 1000);
  }
};

typewriter();
