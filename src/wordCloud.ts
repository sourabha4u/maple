import cloud from 'd3-cloud';

interface Word {
  text: string;
  size: number;
}

export const generateWordCloud = (text: string): Promise<string> => {
  return new Promise((resolve) => {
    // Process text into word frequency
    const words = text.toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);

    const frequency: { [key: string]: number } = {};
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });

    // Convert to array of objects with size based on frequency
    const wordData: Word[] = Object.entries(frequency)
      .map(([text, count]) => ({
        text,
        size: 10 + Math.sqrt(count) * 20
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 100);

    // Generate layout
    const layout = cloud()
      .size([800, 400])
      .words(wordData)
      .padding(5)
      .rotate(() => 0)
      .fontSize(d => d.size)
      .on('end', words => {
        const svg = `
          <svg width="800" height="400" style="max-width: 100%; height: auto;">
            <g transform="translate(400,200)">
              ${words.map(word => `
                <text
                  text-anchor="middle"
                  transform="translate(${word.x},${word.y}) rotate(${word.rotate})"
                  style="font-size: ${word.size}px; font-family: Arial; fill: ${getColor(word.size)}"
                >${word.text}</text>
              `).join('')}
            </g>
          </svg>
        `;
        resolve(svg);
      });

    layout.start();
  });
};

const getColor = (size: number): string => {
  const colors = [
    '#4F46E5', // indigo-600
    '#4338CA', // indigo-700
    '#3730A3', // indigo-800
    '#312E81', // indigo-900
    '#6366F1', // indigo-500
  ];
  const index = Math.floor((size - 10) / 20) % colors.length;
  return colors[index];
}