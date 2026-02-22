import Dexie, { type EntityTable } from 'dexie';

export interface UserProfile {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  email: string;
}

const db = new Dexie('VoluteAppDB') as Dexie & {
  profile: EntityTable<UserProfile, 'id'>;
};

// Schema declaration
db.version(1).stores({
  profile: '++id, name, role, email' // Primary key and indexed props
});

export { db };
