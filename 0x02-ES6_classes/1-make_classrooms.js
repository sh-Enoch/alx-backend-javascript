import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  const a = new ClassRoom(19);
  const b = new ClassRoom(20);
  const c = new ClassRoom(24);

  rooms.push(a, b, c);
  return rooms;
}
