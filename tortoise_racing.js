function race(v1, v2, g) {
  if(v2 <= v1) return null;
  const t = 3600*g/(v2-v1);
  const hours   = Math.floor(t / 3600)
  const minutes = Math.floor(t / 60) % 60
  const seconds = Math.floor(t % 60)
  return [hours, minutes, seconds]
}
