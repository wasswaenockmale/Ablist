export function ArticleLifeSpan(date: string) {
  const publishedAt = new Date(date);
  const currentDate = new Date();

  const lifespan = (currentDate as any) - (publishedAt as any);

  // Convert to seconds
  const seconds = Math.floor(lifespan / 1000);

  // Convert to minutes
  const minutes = Math.floor(seconds / 60);

  // Convert to hours
  const hours = Math.floor(minutes / 60);

  // Convert to days
  const days = Math.floor(hours / 24);

  if (days != 0 && days != 1) {
    return `${days} days`
  } else if( hours != 0){
    return `${hours} hours`
  } else if (minutes != 0) {
    return `${minutes} minutes`
  } else {
    return `${seconds} seconds`
  }
}
