// import all SVGs from assets/icons dynamically
const iconFiles = import.meta.glob('../assets/icons/*.svg', { eager: true });

type IconsMap = {
  [key: string]: string;
};

const icons: IconsMap = {};

for (const path in iconFiles) {
  // Extract file name without extension
  const name = path.split('/').pop()?.replace('.svg', '');
  if (name) {
    // `iconFiles[path]` has a `default` property with the path
    icons[name] = (iconFiles[path] as { default: string }).default;
  }
}

export default icons;