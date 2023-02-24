export default function uuidGenerator() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  return parseInt(`${timestamp}${random}`);
}
