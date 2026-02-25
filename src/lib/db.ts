import Dexie, { type EntityTable } from 'dexie';

export interface UserProfile {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  email: string;
}

export interface AppEvent {
  id?: number;
  title: string;
  description?: string;
  date: string;
  time: string;
  type: string;
}
export interface Expense {
  id?: number;
  title: string;
  amount: number;
  date: string;
  category: string;
  description?: string;
}

const db = new Dexie('VoluteAppDB') as Dexie & {
  profile: EntityTable<UserProfile, 'id'>;
  events: EntityTable<AppEvent, 'id'>;
  expenses: EntityTable<Expense, 'id'>;
};

// Schema declaration
db.version(1).stores({
  profile: '++id, name, role, email' // Primary key and indexed props
});

db.version(2).stores({
  profile: '++id, name, role, email',
  events: '++id, date, type'
});

db.version(3).stores({
  profile: '++id, name, role, email',
  events: '++id, date, type',
  expenses: '++id, date, category'
});

export { db };
