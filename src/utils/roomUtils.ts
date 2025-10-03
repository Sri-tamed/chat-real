export const generateRoomId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const isValidRoomId = (roomId: string): boolean => {
  return /^\d+-[a-z0-9]{7}$/.test(roomId);
};

export const shareRoomUrl = (roomId: string): string => {
  return `${window.location.origin}${window.location.pathname}?room=${roomId}`;
};
