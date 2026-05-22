export function getPackageImagePaths(slug: string, count = 6): string[] {
  const paths: string[] = [];
  for (let i = 1; i <= count; i++) {
    paths.push(`/images/packages/${slug}/${i}.jpg`);
  }
  return paths;
}

export default getPackageImagePaths;
